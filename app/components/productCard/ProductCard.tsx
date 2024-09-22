import { Product } from "@/app/models/product"
import Image from "next/image"
import React from "react"
import styles from "./productCard.module.css"
import Link from "next/link"
import AddToCart from "./AddToCart"
interface ProductProps {
  item: Product
}
const ProductCard = (item: ProductProps) => {
  return (
    <div className="rounded-2xl p-1 bg-panel">
      <div
        className={`panel flex flex-col rounded-2xl overflow-hidden relative`}
        style={{
          backgroundImage: `linear-gradient(to bottom, color-mix(in srgb, var(--panel-background), #0000 80%) 20%, var(--panel-background) 90%), url(${item.item.imageUrl})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}>
        <div className="flex flex-col">
          <div className="pt-24" />
          <div className="text-3xl p-2 font-semibold">{item.item.name}</div>
          <div className="px-2">{item.item.description}</div>
        </div>
        <div className="p-6 flex flex-col">
          <div className="flex place-content-start pb-3">
            <Link href={"/userProfile"} className={`${styles.userChip} px-2 rounded-md`}>
              {item.item.userName}
            </Link>
          </div>
          <div className="flex flex-row justify-between">
            <AddToCart id={item.item.id} amount={2} />
          </div>
        </div>
        <div className="text-2xl absolute right-2 top-2 bg-panel p-2 rounded-xl">${item.item.pricePerUnit}</div>
      </div>
    </div>
  )
}

export default ProductCard
