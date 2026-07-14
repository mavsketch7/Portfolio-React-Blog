import type React from 'react'
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiWordpress,
  SiElementor,
  SiTailwindcss,
} from 'react-icons/si'

import DiviIcon from '@/assets/divi-divi-logo.svg'
import type { IconType } from 'react-icons'

export type StackItem = {
  name: string
  icon: IconType | React.FC<React.SVGProps<SVGSVGElement>>
  category: 'stack' | 'cms'
  color: string
}
export const ICON_SIZE = 'w-8 h-8'
export const stacks: StackItem[] = [
  {
    name: 'HTML',
    icon: SiHtml5,
    category: 'stack',
    color: '#E34F26',
  },
  {
    name: 'CSS',
    icon: SiCss,
    category: 'stack',
    color: '#1572B6',
  },
  {
    name: 'JavaScript',
    icon: SiJavascript,
    category: 'stack',
    color: '#F7DF1E',
  },
  {
    name: 'React',
    icon: SiReact,
    category: 'stack',
    color: '#61DAFB',
  },
  {
    name: 'Node.js',
    icon: SiNodedotjs,
    category: 'stack',
    color: '#5FA04E',
  },
  {
    name: 'WordPress',
    icon: SiWordpress,
    category: 'cms',
    color: '#21759B',
  },
  {
    name: 'Elementor',
    icon: SiElementor,
    category: 'cms',
    color: '#92003B',
  },
  {
    name: 'Divi',
    icon: DiviIcon,
    category: 'cms',
    color: '#292929',
  },
  {
    name: 'Tailwind CSS',
    icon: SiTailwindcss,
    category: 'stack',
    color: '#06B6D4',
  },
]
