import { PopularArticleGrid } from "@/components/PopularArticleGrid"
import { EmptyState } from "@/components/EmptyState"
import { LoadingState } from "@/components/LoadingState"
import { ErrorMessage } from "@/components/ui/ErrorMessage"
import { useGetArticleSearch } from "@/hooks/useGetArticleSearch"
import { UseGetPopularArticle } from "@/hooks/UseGetPopularArticle"
import type { SearchFilters } from "@/types"
import { ArticleGrid } from "@/components/ArticleGrid"

interface HomePageProps {
  onSearch: (filters: SearchFilters) => void
  searchFilters: SearchFilters
  hasSearched: boolean
}


export const HomePage: React.FC<HomePageProps> = ({ searchFilters, hasSearched }) => {
  const { data: searchData, isLoading: isSearchLoading, error: searchError, refetch: refetchSearch } = useGetArticleSearch(
    searchFilters,
    hasSearched && !!searchFilters.query
  )

  console.log('searchFilters.query', searchFilters.query)

  const { data: popularData, isLoading: isPopularLoading, error: popularError, refetch: refetchPopular } = UseGetPopularArticle()

  const handleRetrySearch = () => {
    refetchSearch()
  }

  const handleRetryPopular = () => {
    refetchPopular()
  }

  if (searchFilters.query) {
    const articles = searchData?.response?.docs || []
    const hasResults = articles.length > 0

    if (isSearchLoading) {
      return <LoadingState />
    }

    if (searchError && !isSearchLoading) {
      return (
        <ErrorMessage 
          message={searchError.message} 
          onRetry={handleRetrySearch}
        />
      )
    }

    if (!isSearchLoading && !searchError && hasResults) {
      return (
        <div>
          <div className="mb-6">
            <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
              Found {searchData?.response?.meta?.hits || articles.length} articles for "{searchFilters.query}"
            </h2>
          </div>
          <ArticleGrid articles={articles || []} />
        </div>
      )
    }

    if (!isSearchLoading && !searchError && !hasResults) {
      return <EmptyState query={searchFilters.query} />
    }
  }

  const popularArticles = popularData?.results || []
  const hasPopularResults = popularArticles.length > 0

  if (isPopularLoading) {
    return <LoadingState />
  }

  if (popularError && !isPopularLoading) {
    return (
      <ErrorMessage 
        message={popularError.message} 
        onRetry={handleRetryPopular}
      />
    )
  }

  if (!searchFilters.query && !isPopularLoading && !popularError && hasPopularResults) {
    return (
      <div>
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            Trending Today
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Most viewed articles from The New York Times this week
          </p>
        </div>
        <PopularArticleGrid
          articles={popularData?.results || []}
        />
      </div>
    )
  }
}

export default HomePage
