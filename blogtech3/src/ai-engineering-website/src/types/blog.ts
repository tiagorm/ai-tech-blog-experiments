export interface BlogPostMeta {
    title: string
    date: string
    excerpt: string
    tags: string[]
    coverImage?: string
    published: boolean
  }
  
  export interface BlogPost extends BlogPostMeta {
    slug: string
    content: string
  }