"use client"

import { signIn, signOut } from "next-auth/react";
import { useTransition } from "react";
import { createPost } from "./actions";


export function ServerActionButton() {
  const [isPending, startTransition] = useTransition()

  return (
    <button onClick={() => startTransition(() => createPost())} disabled={isPending} className="btn">
      Server Action -- This throws an error
    </button>
  )
}

export const LoginButton = () => <button onClick={() => signIn()} className="btn">Sign in</button>
export const LogoutButton = () => <button onClick={() => signOut()} className="btn">Sign Out</button>