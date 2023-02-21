import { dbClient } from "@/lib/db";
import { DeleteCommand } from "@aws-sdk/lib-dynamodb";
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
  if (req.method !== "DELETE") {
    res.status(405).json({ error: `${req.method} Not Allowed.`, status: 405 });
  }
  const session = await getServerSession(req, res, authOptions);
  const { bookmarkId, mediaTitle } = JSON.parse(req.body);
  const { id } = session?.user!;
  const bookmarkItem = {
    id: bookmarkId,
    userId: id,
  };

  try {
    const item = await dbClient.send(
      new DeleteCommand({
        TableName: process.env.NEXT_AWS_TABLE_NAME,
        Key: bookmarkItem,
      })
    );
    res.status(200).json({
      message: "Bookmark Deleted",
      data: { mediaTitle },
      status: 200,
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({
        error: error.message,
        status: 404,
      });
    } else {
      res
        .status(404)
        .json({ error: "Unexpected Error Deleting a bookmark", status: 404 });
    }
  }
}
