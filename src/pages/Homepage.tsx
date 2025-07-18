import { PopularArticleGrid } from "@/components/ArticleGrid"

const Homepage = () => {
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
      articles={[
        {
          title: "AI Revolutionizes Healthcare",
          summary: "How artificial intelligence is changing the medical field.",
          imageUrl: "https://picsum.photos/200",
          author: "Jane Doe",
          publishedAt: "2024-06-01",
          type: "Business"
        },
        {
          title: "Climate Change: What’s Next?",
          summary: "Experts discuss the future of climate policy.",
          imageUrl: "https://picsum.photos/200",
          author: "John Smith",
          publishedAt: "2024-06-02",
          type: "Business"
        },
        {
          title: "Tech Giants Face New Regulations",
          summary: "Governments worldwide introduce stricter rules.",
          imageUrl: "https://picsum.photos/200",
          author: "Alex Lee",
          publishedAt: "2024-06-03",
          type: "Business"
        },
      ]}
      />
    </div>
  )
}

export default Homepage
