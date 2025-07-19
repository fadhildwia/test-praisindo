import React from 'react'
import type { Article } from '@/types'
import { PopularArticleCard } from './PopularArticleCard'

interface ArticleGridProps {
  articles: Article[]
}

export const PopularArticleGrid: React.FC<ArticleGridProps> = ({ articles }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map((item, index) => (
        <PopularArticleCard key={index} article={item} />
      ))}
    </div>
  )
}