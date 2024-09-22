import React from "react"

function CartCounter(data: React.HTMLAttributes<HTMLElement>) {
  let amount = 2
  return (
    <div
      className={`${amount <= 0 ? "hidden" : ""} ${
        data.className
      } flex bg-accent text-white rounded-full text-sm aspect-square w-[1.3rem] h-[1.3rem] justify-center items-center text-center font-semibold overflow-clip`}>
      {amount}
    </div>
  )
}

export default CartCounter
