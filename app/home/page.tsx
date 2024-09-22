import Image from "next/image"
import ProductCard from "../components/productCard/ProductCard"
import { Products } from "../models/product"

export default function Home() {
  return (
    <main className="items-center p-4">
      <h1 className="text-3xl">Welcome To The Farmers Market</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2 lg:gap-6">
        {Products.map((x) => (
          <ProductCard key={x.id} item={x} />
        ))}
      </div>
    </main>
  )
}
