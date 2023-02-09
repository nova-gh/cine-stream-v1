import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import type { NextAuthOptions } from "next-auth";
import { DynamoDBAdapter } from "@next-auth/dynamodb-adapter";
import { dbClient } from "@/lib/db";
import { QueryCommand } from "@aws-sdk/lib-dynamodb";

export const authOptions: NextAuthOptions = {
  adapter: DynamoDBAdapter(dbClient),
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET!,
  pages: {
    signIn: "/auth/signin",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    session: async ({ token, session }) => {
      const fetchBookmarkIds = await dbClient.send(
        new QueryCommand({
          TableName: "bookmarks",
          IndexName: "UserBookmarks",
          KeyConditionExpression: "userId  = :u_id",
          ExpressionAttributeValues: {
            ":u_id": token.sub,
          },
          ProjectionExpression: "dateCreated, mediaType, tmdbId, image, id",
        })
      );
      const bookmarkIds = fetchBookmarkIds.Items?.map((item) => item.id) ?? [];
      if (token && session.user) {
        session.user.id = token.sub;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.image = token.picture;
        session.user.bookmarkIds = bookmarkIds;
      }
      return session;
    },
  },
};
export default NextAuth(authOptions);
