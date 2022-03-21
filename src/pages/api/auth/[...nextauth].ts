import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: "53c79c5633b5c9494cf1",
      clientSecret: "bf30b4958fa816423f094cb3a730b15cf5b22cfb",
    }),
  ],
});
