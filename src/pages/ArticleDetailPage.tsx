import React from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { ArrowLeft, ExternalLink, Calendar, User, Globe } from "lucide-react"
import { format } from "date-fns"
import { Button } from "../components/ui/button"
import { Card } from "../components/ui/card"
import type { Article } from "@/types"

export const ArticleDetailPage: React.FC = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const article: Article = location.state?.article
  const formattedDate = format(article.published_date, "MMM dd, yyyy")

  const handleReadOriginal = () => {
    window.open(article.url, "_blank", "noopener,noreferrer")
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="sticky top-0 z-50 w-full bg-white dark:bg-gray-900 shadow-md border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button
              onClick={() => navigate("/")}
              variant="ghost"
              size="sm"
              className="flex-shrink-0"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#e33d26] rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">NYT</span>
              </div>
              <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                Article Details
              </h1>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <article className="max-w-4xl mx-auto">
          {article.media?.[0]?.["media-metadata"]?.[0]?.url && (
            <div className="aspect-video w-full overflow-hidden rounded-lg mb-8">
              <img
                src={article.media?.[0]?.["media-metadata"]?.[0]?.url}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <header className="mb-8">
            {article.nytdsection && (
              <div className="mb-4">
                <span className="px-2 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full">
                  {article.nytdsection}
                </span>
              </div>
            )}

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6 leading-tight">
              {article.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-gray-600 dark:text-gray-400 mb-6">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span className="font-medium">{article.byline}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{formattedDate}</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5" />
                <span>The New York Times</span>
              </div>
            </div>
          </header>

          <div className="prose prose-lg max-w-none dark:prose-invert mb-8">
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              {article.abstract}
            </p>
          </div>

          <Card className="p-6 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Read the Full Article
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Continue reading this story on The New York Times website.
                </p>
              </div>
              <Button
                onClick={handleReadOriginal}
                className="bg-[#e33d26] hover:bg-[#c93522] text-white flex-shrink-0"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Read Original Article
              </Button>
            </div>
          </Card>
        </article>
      </main>
    </div>
  )
}
