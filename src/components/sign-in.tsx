import type { ReactElement } from 'react'
import { signIn } from '@/auth'

export default function SignIn(): ReactElement {
  return (
    <form
      action={async () => {
        'use server'
        await signIn('discord')
      }}
    >
      <button type="submit">Sign In with Discord</button>
    </form>
  )
}
