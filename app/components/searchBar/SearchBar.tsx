"use client"
import { Search } from "@mui/icons-material"
import React, { useState } from "react"
const SearchBar = () => {
  const [focus, setFocus] = useState(false)
  const [hasText, setHasText] = useState(false)
  return (
    <div
      className={`flex flex-row px-2 w-max md:w-1/3 lg:w-1/4 items-center border-[1.8px] rounded-full transition[color] duration-200
     ${focus ? "border-primary" : "border-foreground"}`}>
      <Search className={`${focus ? "text-primary" : ""}`} />
      <input
        className="bg-transparent h-10 text-md ml-1 outline-none caret-primary flex-grow"
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onChange={(e) => setHasText(e.target.value !== "")}
        type="text"
        name="searchBar"
        id="searchBar"
        placeholder="Search..."
      />
      <button className={`${hasText || (hasText && focus) ? "w-10" : "w-0"} transition[width] overflow-clip duration-200 origin-right`}>GO</button>
    </div>
  )
}

export default SearchBar
