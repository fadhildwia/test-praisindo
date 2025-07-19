import { PopularArticleGrid } from "@/components/ArticleGrid"
import { UseGetPopularArticle } from "@/hooks/UseGetPopularArticle"

const Homepage: React.FC = () => {
  const { data: popularData } = UseGetPopularArticle()

  console.log('popularData', popularData)
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

export default Homepage
