import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    })
  ],
  jwt: {
      encryption: true,
  },
  secret: process.env.secret,
  callbacks: {
      async jwt(token, account){
          if(account?.accessToken){
              token.accessToken = account.accessToken;
          }
          return token;
      },
      redirect: async(url, _baseUrl) => {
          if(url ==='/profile') {
              return Promise.resolve('/');
          }
          return Promise.resolve('/');
      }
  }
})