import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ session, user }) {
      return {
        ...session,
        logged: true,
      };
    },
    async signIn({ profile, user }) {
      const { email } = user;

      try {
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },
});
