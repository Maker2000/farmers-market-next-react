import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import NavBar from "./components/navBar/navBar"
import BottomNavBar from "./components/navBar/bottomNavBar"
import SearchBar from "./components/searchBar/SearchBar"
import TopNav from "./components/TopNav"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
})
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
})

export const metadata: Metadata = {
  title: "Farmers' Market",
  description: "An online farmers' market concept written with Next.js and React",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col`}>
        <TopNav />

        <NavBar className="mt-20" />
        <div className="flex flex-col sm:ml-20 xl:ml-64 sm:mb-0 mb-24">
          <div className="pt-24">{children}</div>
          <BottomNavBar />
        </div>
      </body>
    </html>
  )
}
