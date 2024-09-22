import { Home, Inventory, Person, ShoppingCart, SvgIconComponent } from "@mui/icons-material"
import React, { ReactElement } from "react"
import CartIcon from "./CartIcon"

export const routes: NavItemProps[] = [
  { title: "Home", route: "/home", icon: <Home /> },
  { title: "Products", route: "/products", icon: <Inventory /> },
  { title: "Profile", route: "/profile", icon: <Person /> },
  { title: "Cart", route: "/cart", icon: <CartIcon /> },
]
export interface NavItemProps {
  title: string
  route: string
  icon: ReactElement
}
