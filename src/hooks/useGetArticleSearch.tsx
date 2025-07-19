import { API_KEY, nytClient } from '@/services/api'
import type { SearchFilters, SearchResponse } from '@/types'
import { useQuery } from '@tanstack/react-query'

const searchArticles = async (filters: SearchFilters): Promise<SearchResponse> => {
  try {
    const params = new URLSearchParams({
      'api-key': API_KEY,
      q: filters.query,
    })

    const response = await nytClient.get<SearchResponse>(`/articlesearch.json?${params}`)
    return response.data
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (_err) {
    throw new Error('Failed to fetch articles. Please try again.')
  }
}

export const useArticleSearch = (filters: SearchFilters, enabled: boolean = false) => {
  return useQuery({
    queryKey: ['articles', filters],
    queryFn: () => searchArticles(filters),
    enabled: enabled && !!filters.query.trim(),
    retry: (failureCount, error) => {
      if (error.message.includes('Invalid API key') || error.message.includes('Rate limit')) {
        return false
      }
      return failureCount < 2
    },
  })
}