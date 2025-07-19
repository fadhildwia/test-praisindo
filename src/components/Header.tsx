import React from "react"
import { Button } from "./ui/button"
import { MoonIcon, SunIcon } from "lucide-react"
import { SearchForm } from "./SearchForm"
import { useTheme } from "@/hooks/useTheme"
import type { SearchFilters } from "@/types"

interface HeaderProps {
  onSearch: (filters: SearchFilters) => void
}

export const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="sticky top-0 z-50 w-full bg-white dark:bg-gray-900 shadow-md border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="w-8 h-8 bg-[#e33d26] rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">NYT</span>
            </div>
            <h1 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-gray-100">
              NYT Article Explorer
            </h1>
          </div>

          <div className="flex items-center gap-3 flex-1 lg:flex-initial lg:min-w-0">
            <div className="flex-1 lg:w-80">
              <SearchForm onSearch={onSearch} />
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="flex-shrink-0 w-10 h-10 p-0 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {theme === "light" ? (
                <MoonIcon className="h-4 w-4" />
              ) : (
                <SunIcon className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
