import React from 'react'
import { AlertCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ErrorMessageProps {
  message: string
  className?: string
  onRetry?: () => void
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ 
  message, 
  className,
  onRetry 
}) => {
  return (
    <div className={cn(
      'flex flex-col items-center justify-center p-8 text-center',
      className
    )}>
      <div className="w-16 h-16 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center mb-4">
        <AlertCircle className="w-8 h-8 text-red-600 dark:text-red-400" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
        Something went wrong
      </h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4 max-w-md">
        {message}
      </p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
        >
          Try Again
        </button>
      )}
    </div>
  )
}