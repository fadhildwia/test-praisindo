import React, { useState } from 'react'
import { SearchIcon } from 'lucide-react'
import { Input } from './ui/input'
import type { SearchFilters } from '../types'

interface SearchFormProps {
  onSearch: (filters: SearchFilters) => void
  isLoading?: boolean
}

export const SearchForm: React.FC<SearchFormProps> = ({ onSearch, isLoading }) => {
  const [query, setQuery] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    console.log('test');
    e.preventDefault()
    if (query.trim()) {
      onSearch({ query: query.trim() })
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2 w-full max-w-2xl">
      <div className="relative flex-1">
        <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full h-[40px] pl-10 border-gray-300"
          placeholder="Search articles..."
          disabled={isLoading}
        />
      </div>
    </form>
  )
}