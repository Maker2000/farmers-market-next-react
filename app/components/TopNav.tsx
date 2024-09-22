import React from "react"
import SearchBar from "./searchBar/SearchBar"
import { ArrowDropDown, Notifications } from "@mui/icons-material"
import { User1 } from "../models/user"

function TopNav() {
  return (
    <aside className="fixed w-full p-6 mb-2 flex items-center justify-between bg-panel z-10">
      <div className="flex items-center flex-grow">
        <div className="w-20 xl:w-64">
          <div className="hidden xl:block">
            Farmers' Works <br />
            <span className="text-xs">The fruits of their Labor</span>
          </div>
          <div className="xl:hidden">FW</div>
        </div>
        <SearchBar />
      </div>
      <div className="flex items-center">
        <Notifications className="mr-6" />
        <div>
          Hello {User1.firstName}
          <span>
            <ArrowDropDown />
          </span>
        </div>
      </div>
    </aside>
  )
}

export default TopNav
