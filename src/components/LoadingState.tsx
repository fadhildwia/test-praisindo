import React from 'react'
import { LoadingSpinner } from './ui/LoadingSpinning'

export const LoadingState: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      <LoadingSpinner size="lg" className="mb-4" />
      <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
        Searching articles...
      </h3>
      <p className="text-gray-600 dark:text-gray-400 text-center">
        Please wait while we fetch the latest articles from The New York Times.
      </p>
    </div>
  )
}