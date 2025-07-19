import { type ReactNode } from "react"
import { Header } from "../Header"
import { Footer } from "../Footer"
import type { SearchFilters } from "@/types"

type Props = {
  children: ReactNode
  onSearch: (filters: SearchFilters) => void
}

function MainLayout({ children, onSearch }: Props) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      <Header onSearch={onSearch} />
      <main className="flex-1 container mx-auto px-4 py-8">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
