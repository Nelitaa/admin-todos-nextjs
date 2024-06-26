'use client'

import { useSession } from "next-auth/react";
import { useEffect } from "react"


export default function ProfilePage() {
  const { data: session } = useSession();
  
  useEffect(() => {
    console.log('client side')
  }, [])
  
  return (
    <div>
      <h1>Profile Page</h1>
      <hr />
      <div className="flex flex-col">
        <span>{ session?.user?.name ?? 'No name'}</span>
        <span>{session?.user?.email ?? 'No email'}</span>
        <span>{session?.user?.image ?? 'No image'}</span>
      </div>
    </div>
  )
}
