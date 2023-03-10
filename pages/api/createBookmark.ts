import { v4 as uuidv4 } from "uuid";
import { dbClient } from "@/lib/db";
import { PutCommand } from "@aws-sdk/lib-dynamodb";
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
  const { mediaPayload } = JSON.parse(req.body);
  const bookmarkItem = {
    id: uuid,
    userId: id,
    dateCreated: date,
    ...mediaPayload,
  };

  try {
    const item = await dbClient.send(
      new PutCommand({
        TableName: process.env.NEXT_AWS_TABLE_NAME,
        Item: bookmarkItem,
      })
    );
    res
      .status(200)
      .json({ message: "Bookmark Created", data: bookmarkItem, status: 200 });
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
