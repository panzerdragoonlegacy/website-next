import Image from 'next/image'
import type { User } from 'next-auth'

type Props = {
  user: User
}

export default function UserAvatar({ user }: Props) {
  return (
    <div>
      <Image
        src={user.image ?? ''}
        alt={`Avatar of ${user.name}`}
        width={38}
        height={38}
        style={{ borderRadius: '50%' }}
      />
      Welcome, {user.name} ({user.email})
    </div>
  )
}
