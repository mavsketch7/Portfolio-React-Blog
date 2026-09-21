import type React from 'react'
import type { IconType } from 'react-icons'

export type StackItem = {
  name: string
  icon: (IconType | React.FC<React.SVGProps<SVGSVGElement>>) | null
  category: 'stack' | 'cms'
  color: string
}

export const ICON_SIZE = 'w-8 h-8'
