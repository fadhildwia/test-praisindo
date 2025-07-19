export interface SearchFilters {
  query: string;
}

export interface Article {
  id: string
  abstract: string
  media: Array<{ ['media-metadata']: Array<{ url: string }> }>
  published_date: string
  section: string 
  title: string
  nytdsection: string
  uri: string;
  url: string;
}

export interface SearchResponse {
  status: string;
  copyright: string;
  response: {
    docs: Article[];
    meta: {
      hits: number;
      offset: number;
      time: number;
    };
  };
}

export interface ArticlesResponse {
  status: string;
  copyright: string;
  num_results: number;
  results: Article[];
}