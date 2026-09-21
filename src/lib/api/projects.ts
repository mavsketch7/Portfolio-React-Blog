import { apiFetch } from './client'
import type { Projectdata } from '@/data/projects'

export async function getProjects(): Promise<Projectdata[]> {
  return apiFetch<Projectdata[]>('/projects', { tag: 'projects' })
}

export async function getProject(id: string): Promise<Projectdata | null> {
  try {
    return await apiFetch<Projectdata>(`/projects/${id}`, { tag: 'projects' })
  } catch {
    return null
  }
}
