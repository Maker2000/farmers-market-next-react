import React, { ReactElement } from "react"
import { routes } from "./navData"
import BottomNavBarItem from "./bottomNavBarItem"

function BottomNavBar() {
  return (
    <div className="panel h-24 fixed bottom-0 origin-bottom py-4 w-screen sm:hidden flex flex-row justify-around">
      {routes.map((x) => (
        <BottomNavBarItem key={x.route} item={x} />
      ))}
    </div>
  )
}

export default BottomNavBar
