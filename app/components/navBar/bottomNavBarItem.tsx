"use client"
import React, { ReactElement } from "react"
import Link from "next/link"
import { NavItemProps } from "./navData"
import styles from "./navBar.module.css"
import { usePathname } from "next/navigation"
const BottomNavBarItem = ({ item }: { item: NavItemProps }) => {
  const pathName = usePathname()
  return (
    <Link
      href={item.route}
      className={`flex relative w-20 h-18 p-2 flex-col items-center justify-center rounded-xl hover:text-primary-hover ${styles.navItem} ${
        pathName.includes(item.route) ? `text-primary` : ""
      }`}>
      {item.icon}
      <div className="text-sm font-semibold">{item.title}</div>
      <div
        className={`absolute h-1 w-5 rounded-full bg-primary -bottom-0
		 ${pathName.includes(item.route) ? "" : "hidden"}`}></div>
    </Link>
  )
}

export default BottomNavBarItem
