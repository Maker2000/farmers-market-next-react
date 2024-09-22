import Link from "next/link"
import React from "react"
import Login from "./login/page"

const ProfileLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return <>{children}</>
}

export default ProfileLayout
