import type { NYTArticle } from '@/types'
import React from 'react'
import { ArticleCard } from './ArticleCard'
interface ArticleGridProps {
  articles: NYTArticle[]
}

export const ArticleGrid: React.FC<ArticleGridProps> = ({ articles }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map((article) => (
        <ArticleCard key={article._id} article={article} />
      ))}
    </div>
  )
}