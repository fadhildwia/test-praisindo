import React from 'react'
import { ExternalLink, Calendar, User, ArrowRight } from 'lucide-react'
import { Card } from './ui/card'
import { Button } from './ui/button'
import type { Article } from '@/types'
import { format } from 'date-fns'
interface ArticleCardProps {
  article: Article
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  const formattedDate = format(article.published_date, 'MMM dd, yyyy')
  
  const handleViewDetails = () => {}

  const handleReadOriginal = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  return (
    <Card className="overflow-hidden flex flex-col justify-between hover:shadow-lg transition-shadow duration-200 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 cursor-pointer">
      <div>
        {article.media?.[0]?.['media-metadata']?.[0]?.url && (
          <div className="aspect-video w-full overflow-hidden">
            <img
              src={article.media?.[0]?.['media-metadata']?.[0].url}
              alt={article.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
              loading="lazy"
            />
          </div>
        )}
        
        <div className="p-6">
          <div>
            <div className="flex flex-1 items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3 w-full">
              <div className="flex w-1/2 flex-nowrap items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span className="truncate">{formattedDate}</span>
              </div>
              <div className="flex w-1/2 flex-nowrap items-center gap-1">
                <User className="w-4 h-4" />
                <span className="truncate w-fit">{article.title} </span>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3 line-clamp-2 leading-tight">
              {article.title}
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 leading-relaxed">
              {article.abstract}
            </p>
          </div>
          
        </div>
      </div>
      
      <div className='p-6'>
        {article.nytdsection && (
          <div className="mb-4">
            <span className="px-2 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full">
              {article.nytdsection}
            </span>
          </div>
        )}
        
        <div className="flex gap-2 mt-4">
          <Button
            onClick={handleViewDetails}
            className="flex-1 bg-[#e33d26] hover:bg-[#c93522] text-white"
          >
            <ArrowRight className="w-4 h-4 mr-2" />
            View Details
          </Button>
          <Button
            onClick={handleReadOriginal}
            variant="outline"
          >
            <ExternalLink className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </Card>
  )
}