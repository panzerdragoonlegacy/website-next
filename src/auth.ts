import NextAuth from 'next-auth'
import Discord from 'next-auth/providers/discord'

const scopes = ['identify'].join(' ')

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Discord({
      clientId: process.env.AUTH_DISCORD_ID,
      clientSecret: process.env.AUTH_DISCORD_SECRET,
      authorization: { params: { scope: scopes } }
    })
  ]
})