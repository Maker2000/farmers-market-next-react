"use client"
import Link from "next/link"
import styles from "./navBar.module.css"
import React from "react"
import { usePathname } from "next/navigation"
import { routes } from "./navData"
import CartCounter from "./CartCounter"

const NavBar = (data: React.HTMLAttributes<HTMLElement>) => {
  const pathName = usePathname()
  return (
    <aside className={`panel hidden sm:block fixed h-screen w-20 xl:w-64 overflow-scroll ${data.className}`} aria-label="SideBar">
      <ul className="pt-4">
        {routes.map((x) => (
          <li className="py-0" key={x.route}>
            <Link
              className={`justify-center xl:justify-between flex m-2 p-3 rounded-lg hover:bg-primary-hover hover:text-white 
                transition[background] transition[color] duration-[200ms] ${pathName.includes(x.route) ? `bg-primary text-white` : ""}`}
              href={x.route}>
              <div className="flex flex-col xl:flex-row items-center justify-center">
                {x.icon}
                <div className="hidden xl:inline">
                  <span className="pl-6"></span>
                  {x.title}
                </div>
                <div className="xl:hidden text-sm">{x.title}</div>
              </div>
              {x.title == "Cart" ? <CartCounter className="hidden xl:block" /> : null}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default NavBar
