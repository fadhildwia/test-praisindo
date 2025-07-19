export interface SearchFilters {
  query: string
}

export interface Article {
  id: string
  abstract: string
  media: Array<{ ['media-metadata']: Array<{ url: string }> }>
  published_date: string
  section: string 
  title: string
  nytdsection: string
  uri: string
  url: string
  byline: string
}

export interface SearchResponse {
  status: string
  copyright: string
  response: {
    docs: []
    meta: {
      hits: number
      offset: number
      time: number
    }
  }
}

export interface ArticlesResponse {
  status: string
  copyright: string
  num_results: number
  results: Article[]
}

export interface NYTArticle {
  _id: string;
  web_url: string;
  snippet: string;
  lead_paragraph: string;
  abstract: string;
  print_page?: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  blog: any[];
  source: string;
  multimedia: Multimedia[];
  headline: {
    main: string;
    kicker?: string;
    content_kicker?: string;
    print_headline?: string;
    name?: string;
    seo?: string;
    sub?: string;
  };
  keywords: Keyword[];
  pub_date: string;
  document_type: string;
  news_desk?: string;
  section_name?: string;
  subsection_name?: string;
  byline: {
    original?: string;
    person?: Person[];
    organization?: string;
  };
  type_of_material?: string;
  word_count?: number;
  uri: string;
}

export interface Multimedia {
  rank: number;
  subtype: string;
  caption: string;
  credit: string;
  type: string;
  url: string;
  height: number;
  width: number;
  legacy?: {
    xlarge?: string;
    xlargewidth?: number;
    xlargeheight?: number;
  };
  subType: string;
  crop_name: string;
}

export interface Keyword {
  name: string;
  value: string;
  rank: number;
  major: string;
}

export interface Person {
  firstname: string;
  middlename?: string;
  lastname: string;
  qualifier?: string;
  title?: string;
  role: string;
  organization: string;
  rank: number;
}

