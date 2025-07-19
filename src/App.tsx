import { BrowserRouter, Route, Routes } from "react-router-dom"
import Homepage from "./pages/Homepage"
import MainLayout from "./components/layouts/MainLayout"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { useState } from "react"
import type { SearchFilters } from "./types"
import { ArticleDetailPage } from "./pages/ArticleDetailPage"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
})

function App() {
  const [searchFilters, setSearchFilters] = useState<SearchFilters>({
    query: "",
  })
  const [hasSearched, setHasSearched] = useState(false)

  const handleSearch = (filters: SearchFilters) => {
    setSearchFilters(filters)
    setHasSearched(true)
    const params = new URLSearchParams(window.location.search)
    params.set("q", filters.query)
    window.history.replaceState({}, "", `${window.location.pathname}?${params.toString()}`)
  }

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <MainLayout onSearch={handleSearch}>
          <Routes>
            <Route
              path="/"
              element={
                <Homepage
                  onSearch={handleSearch}
                  searchFilters={searchFilters}
                  hasSearched={hasSearched}
                />
              }
            />
            <Route path="/article/:id" element={<ArticleDetailPage />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
