import { ShoppingCart } from "@mui/icons-material"
import React from "react"
import CartCounter from "./CartCounter"

function CartIcon() {
  return (
    <div className="relative">
      <ShoppingCart />
      <div className="flex absolute xl:hidden -top-3 -right-3">
        <CartCounter />
      </div>
    </div>
  )
}

export default CartIcon
