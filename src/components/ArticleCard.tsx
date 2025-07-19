import React from "react"
import { ExternalLink, Calendar, User } from "lucide-react"
import { format } from "date-fns"
import type { NYTArticle } from "@/types"
import { Button } from "./ui/button"
import { Card } from "./ui/card"

interface ArticleCardProps {
  article: NYTArticle
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  const publishDate = new Date(article.pub_date)
  const formattedDate = format(publishDate, "MMM dd, yyyy")

  const byline =
    article.byline?.original ||
    article.byline?.person
      ?.map((p) => `${p.firstname} ${p.lastname}`)
      .join(", ") ||
    "NYT Staff"

  const handleReadOriginal = (e: React.MouseEvent) => {
    e.stopPropagation()
    window.open(article.web_url, "_blank", "noopener,noreferrer")
  }

  return (
    <Card className="overflow-hidden flex flex-col justify-between hover:shadow-lg transition-shadow duration-200 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
      <div>
        {article.multimedia?.[0]?.url && (
          <div className="aspect-video w-full overflow-hidden">
            <img
              src={article.multimedia?.[0]?.url}
              alt={article.headline.main}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
              loading="lazy"
            />
          </div>
        )}

        <div className="p-6">
          <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{formattedDate}</span>
            </div>
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              <span className="truncate">{byline}</span>
            </div>
          </div>

          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3 line-clamp-2 leading-tight">
            {article.headline.main}
          </h3>

          <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 leading-relaxed">
            {article.abstract || article.snippet || article.lead_paragraph}
          </p>
        </div>
      </div>

      <div className='p-6'>
        {article.section_name && (
          <div className="mb-4">
            <span className="inline-block px-2 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full">
              {article.section_name}
            </span>
          </div>
        )}

        <div className="flex gap-2">
          <Button
            onClick={handleReadOriginal}
            variant="outline"
            className="flex-shrink-0"
          >
            <ExternalLink className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </Card>
  )
}
