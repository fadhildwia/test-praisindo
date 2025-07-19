import { API_KEY, nytPopularClient } from '@/services/api'
import type { ArticlesResponse } from '@/types'
import { useQuery } from '@tanstack/react-query'

const getPopularArticles = async (period: 1 | 7 | 30 = 7): Promise<ArticlesResponse> => {
  try {
    const response = await nytPopularClient.get<ArticlesResponse>(
      `/viewed/${period}.json?api-key=${API_KEY}`
    )
    return response.data
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (_err) {
    throw new Error('Failed to fetch popular articles. Please try again.')
  }
}

export const UseGetPopularArticle = () => {
  return useQuery({
    queryKey: ['popular-articles'],
    queryFn: () => getPopularArticles(7),
    retry: (failureCount, error) => {
      if (error.message.includes('Invalid API key') || error.message.includes('Rate limit')) {
        return false
      }
      return failureCount < 2
    },
  })
}