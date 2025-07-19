import axios from 'axios'

const NYT_BASE_URL = 'https://api.nytimes.com/svc/search/v2'
const NYT_POPULAR_BASE_URL = 'https://api.nytimes.com/svc/mostpopular/v2'
const API_KEY = import.meta.env.VITE_NYT_API_KEY

export const nytClient = axios.create({
  baseURL: NYT_BASE_URL,
  timeout: 10000,
})

export const nytPopularClient = axios.create({
  baseURL: NYT_POPULAR_BASE_URL,
  timeout: 10000,
})

export { API_KEY }