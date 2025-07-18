import { type ReactNode } from "react"
import { Header } from "../Header"
import { Footer } from "../Footer"

type Props = {
  children: ReactNode
}

function MainLayout({ children }: Props) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">{children}</main>
      <Footer />
    </div>
  )
}

export default MainLayout
