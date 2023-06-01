"use server"

import { getCurrentUser } from "@/lib/utils"

export async function createPost() {
  const user = getCurrentUser()
  if(!user) return
}