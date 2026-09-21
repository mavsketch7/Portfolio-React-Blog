import { apiFetch } from './client'
import { iconRegistry } from '@/data/iconRegistry'
import type { StackItem } from '@/data/stacks'

type ApiStack = {
  name: string
  slug: string
  icon: string
  category: 'stack' | 'cms'
  color: string
}

export async function getStacks(): Promise<StackItem[]> {
  const stacks = await apiFetch<ApiStack[]>('/stacks', { tag: 'stacks' })

  return stacks.map((stack) => ({
    name: stack.name,
    icon: iconRegistry[stack.icon] ?? null,
    category: stack.category,
    color: stack.color,
  }))
}
