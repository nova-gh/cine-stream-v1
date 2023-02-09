import { User } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: User & {
      id: UserId;
      bookmarkIds: String[];
    };
  }
}
