import { v4 as uuidv4 } from "uuid";
import { dbClient } from "@/lib/db";
import { PutItemCommand } from "@aws-sdk/client-dynamodb";
import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";

type Data = {
  message: string;
  data: object;
  status: number;
};
type ErrorData = {
  error: string;
  status: number;
};
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | ErrorData>
) {
  if (req.method !== "POST") {
    res.status(405).json({ error: `${req.method} Not Allowed.`, status: 405 });
  }
  const session = await getServerSession(req, res, authOptions);
  const { id } = session?.user!;
  const uuid = uuidv4();
  const date = new Date().toISOString();
  const bookmarkItem = {
    pk: { S: uuid },
    sk: { S: id },
    tmdbId: { S: req.body.tmdbId },
    image: { S: req.body.image },
    userId: { S: id },
    dateCreated: { S: date },
  };
  try {
    const item = await dbClient.send(
      new PutItemCommand({
        TableName: process.env.NEXT_AWS_TABLE_NAME,
        Item: bookmarkItem,
        ReturnValues: "ALL_OLD",
      })
    );
    res
      .status(200)
      .json({ message: "Bookmark Created", data: item, status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({
        error: error.message,
        status: 404,
      });
    } else {
      res
        .status(404)
        .json({ error: "Unexpected Error Creating a bookmark", status: 404 });
    }
  }
}
