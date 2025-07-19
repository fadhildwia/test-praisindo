import React from 'react'
import { FileText } from 'lucide-react'

interface EmptyStateProps {
  query?: string
}

export const EmptyState: React.FC<EmptyStateProps> = ({ query }) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <div className="w-24 h-24 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-6">
        <FileText className="w-12 h-12 text-gray-400 dark:text-gray-500" />
      </div>
      
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
        {query ? 'No articles found' : 'Start your search'}
      </h2>
      
      <p className="text-gray-600 dark:text-gray-400 max-w-md leading-relaxed">
        {query 
          ? `We couldn't find any articles matching "${query}". Try searching for a different topic or check your spelling.`
          : 'Enter a search term above to discover articles from The New York Times.'
        }
      </p>
    </div>
  )
}