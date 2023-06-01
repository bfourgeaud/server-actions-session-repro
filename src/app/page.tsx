import { LoginButton, LogoutButton, ServerActionButton } from './buttons'
import { getCurrentUser } from '@/lib/utils'

export default async function Home() {
  const user = await getCurrentUser()

  return (
    <main className="flex min-h-screen flex-col items-center justify-center space-y-4 p-24">
      {user && <ServerActionButton />}
      {user ? <LogoutButton /> : <LoginButton />}
    </main>
  )
}
