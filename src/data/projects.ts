export type ProjectCategory =
  | 'Frontend'
  | 'CMS / Corporate'
  | 'E-commerce'
  | 'CMS / Portfolio'

export type ProjectType = 'Cliente' | 'Aprendizaje' | 'Trabajo'

export type ProjectSeo = {
  metaTitle: string | null
  metaDescription: string | null
  canonicalUrl: string | null
}

export type Projectdata = {
  id: string
  type: string
  title: string
  stack: string[]
  category: ProjectCategory
  featuredImage: string
  gallery: string[]
  description: string
  funFact: string
  liveUrl: string
  githubUrl?: string
  seo?: ProjectSeo
}
