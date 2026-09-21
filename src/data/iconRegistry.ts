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
  SiWoocommerce,
} from 'react-icons/si'
import type { IconType } from 'react-icons'

import DiviIcon from '@/assets/divi-divi-logo.svg'

export const iconRegistry: Record<
  string,
  IconType | React.FC<React.SVGProps<SVGSVGElement>>
> = {
  html5: SiHtml5,
  css3: SiCss,
  javascript: SiJavascript,
  react: SiReact,
  nodedotjs: SiNodedotjs,
  wordpress: SiWordpress,
  elementor: SiElementor,
  divi: DiviIcon,
  tailwindcss: SiTailwindcss,
  woocommerce: SiWoocommerce,
}
