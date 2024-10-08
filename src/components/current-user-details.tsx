import type { ReactElement } from 'react'
import { auth } from '@/auth'
import UserAvatar from './user-avatar'
import SignIn from './sign-in'
import SignOut from './sign-out'

export default async function CurrentUserDetails(): Promise<ReactElement> {
  const session = await auth()

  return session?.user ? (
    <>
      <UserAvatar user={session.user} />
      <SignOut />
    </>
  ) : (
    <SignIn />
  )
}
