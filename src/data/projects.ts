export type ProjectCategory =
  | 'Frontend'
  | 'CMS / Corporate'
  | 'E-commerce'
  | 'CMS / Portfolio'

export type ProjectType = 'Cliente' | 'Aprendizaje' | 'Trabajo'
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
}

export const projectsdata: Projectdata[] = [
  {
    id: 'mrs-inmobiliaria-cordoba',
    title: 'MRS Inmobiliaria Córdoba',
    type: 'Cliente',
    stack: ['WordPress', 'Elementor', 'HTML', 'CSS', 'JavaScript'],
    category: 'Frontend',
    featuredImage: '/mrs-invincor-featured.webp',
    gallery: [],
    description:
      'Este proyecto consistió en el desarrollo de la web corporativa de MRS Inmobiliaria Córdoba, una empresa especializada en el sector inmobiliario, con un enfoque en la presentación de propiedades y servicios.',
    funFact:
      'Se trabajó el posicionamiento de forma totalmente orgánica, con un enfoque en SEO local para destacar en el mercado inmobiliario de Córdoba.',
    liveUrl: 'www.mrsinvincor.es',
  },
  {
    id: 'gaming-library-json',
    title: 'Gaming Library JSON',
    type: 'Cliente',
    stack: ['CSS', 'HTML', 'JavaScript'],
    category: 'Frontend',
    featuredImage: '/gaming-library-featuredimg.webp',
    gallery: [],
    githubUrl: 'https://github.com/ManuAlba/gaming-library-json',
    description:
      'Este proyecto consiste en una librería de videojuegos desarrollada como ejercicio práctico, donde los datos se gestionan desde un archivo JSON local.',
    funFact:
      '¡Este proyecto nació de la necesidad real de tener un inventario épico para organizar horas de vicio!',
    liveUrl: '#',
  },
  {
    id: 'portfolio-react',
    title: 'Portfolio con React',
    type: 'Cliente',
    stack: ['CSS', 'HTML', 'JavaScript', 'React'],
    category: 'Frontend',
    featuredImage: '/react-portfolio-featuredimg.webp',
    gallery: [],
    githubUrl: 'https://github.com/ManuAlba/portfolio-react',
    description:
      'Este proyecto representa mi primera toma de contacto con React, desarrollado con el objetivo de comprender los fundamentos del framework y la gestión de estados.',
    funFact:
      '¡El renderizado de componentes me explotó la cabeza al principio, pero ahora no hay vuelta atrás!',
    liveUrl: '#',
  },
  {
    id: 'portfolio-basic',
    title: 'Portfolio',
    type: 'Cliente',
    stack: ['CSS grid', 'HTML', 'JavaScript'],
    category: 'Frontend',
    featuredImage: '/portfolio-featuredimg.webp',
    gallery: [],
    githubUrl: 'https://github.com/ManuAlba/portfolio-basic',
    description:
      'Este proyecto consistió en el desarrollo de un portfolio básico como ejercicio de aprendizaje, estructurado en subpáginas y con una maquetación limpia.',
    funFact:
      'Fue el primer gran lienzo donde metí mano a CSS Grid para dominar los layouts complejos.',
    liveUrl: '#',
  },
  {
    id: '30-days-js-landing-pages',
    title: '30 Days of JS Landing Pages',
    type: 'Cliente',
    stack: ['CSS grid', 'HTML', 'JavaScript'],
    category: 'Frontend',
    featuredImage: '/30djs-featuredimg.webp',
    gallery: [],
    githubUrl: 'https://github.com/ManuAlba/30-days-js-landings',
    description:
      'Este proyecto es una adaptación personal del reto "30 Days of JavaScript", en el que desarrollé 15 landing pages independientes enfocadas en maquetación interactiva.',
    funFact:
      '¡15 landings completas que me sirvieron para mecanizar CSS Grid y Vanilla JS a velocidad de vértigo!',
    liveUrl: '#',
  },
  {
    id: 'awesome-calculator',
    title: 'Awesome Calculator',
    type: 'Cliente',
    stack: ['CSS', 'CSS grid', 'HTML', 'JavaScript'],
    category: 'Frontend',
    featuredImage: '/awesome-calculator-featuredimg.webp',
    gallery: [],
    githubUrl: 'https://github.com/ManuAlba/awesome-calculator',
    description:
      'Este proyecto consiste en una calculadora desarrollada como ejercicio de aprendizaje utilizando HTML, CSS y JavaScript, inspirada visualmente en las interfaces modernas.',
    funFact:
      'Controlar las operaciones lógicas y evitar que el usuario pulse dos puntos seguidos fue un buen rompecabezas.',
    liveUrl: '#',
  },
  {
    id: 'awesome-to-do-list',
    title: 'Awesome To Do List',
    type: 'Cliente',
    stack: ['CSS', 'HTML', 'JavaScript'],
    category: 'Frontend',
    featuredImage: '/awesome-todolist-featuredimg.webp',
    gallery: [],
    githubUrl: 'https://github.com/ManuAlba/awesome-todo-list',
    description:
      'Este proyecto es una aplicación To-Do List desarrollada como ejercicio de aprendizaje, utilizando HTML, CSS y JavaScript vanilla, con el fin de dominar el DOM.',
    funFact:
      '¡Irónicamente, programar esta lista de tareas pendientes estuvo al principio de mi propia lista de tareas!',
    liveUrl: '#',
  },
  {
    id: 'molo-expo',
    title: 'Mölo Expo',
    type: 'Cliente',
    stack: ['WordPress', 'Elementor', 'JavaScript'],
    category: 'CMS / Corporate',
    featuredImage: '/moloexpo-img1.webp',
    gallery: [],
    githubUrl: '',
    description:
      'Este proyecto consistió en la maquetación de la web corporativa de Molo Expo, desarrollada con Elementor y enfocada en ofrecer una experiencia de usuario fluida y visual.',
    funFact:
      'Optimizar los assets visuales fue clave para que una web tan gráfica cargara en menos de un segundo.',
    liveUrl: 'https://moloexpo.com',
  },
  {
    id: 'plugtown-bcn',
    title: 'PlugtownBcn',
    type: 'Cliente',
    stack: ['WordPress', 'Woocommerce', 'Divi', 'CSS grid'],
    category: 'E-commerce',
    featuredImage: '/plugtown-bcn-featuredimg.webp',
    gallery: [],
    githubUrl: '',
    description:
      'El proyecto consistió en desarrollar la tienda online de Plugtown BCN – Tienda ecommerce de moda y sneakers en Barcelona, con pasarela de pago optimizada.',
    funFact:
      '¡Integrar el catálogo de zapatillas exclusivas con variaciones de stock fue todo un reto de arquitectura en WooCommerce!',
    liveUrl: 'https://plugtownbcn.com',
  },
  {
    id: '3dgeospace',
    title: '3DGeospace',
    type: 'Cliente',
    stack: ['WordPress', 'Divi', 'CSS', 'CSS grid'],
    category: 'CMS / Corporate',
    featuredImage: '/3dgeospace-featuredimg.webp',
    gallery: [],
    githubUrl: '',
    description:
      'Trabajé en el desarrollo de la web corporativa de 3D Geospace, una empresa especializada en ingeniería geomática y soluciones tecnológicas globales.',
    funFact:
      'Traducir conceptos tan técnicos como la geomática a un diseño web limpio y comprensible fue muy gratificante.',
    liveUrl: 'https://3dgeospace.com',
  },
  {
    id: 'duende-callejero',
    title: 'Duende Callejero',
    type: 'Cliente',
    stack: ['WordPress', 'Divi', 'CSS'],
    category: 'CMS / Corporate',
    featuredImage: '/Duende-callejero-featured-img.webp',
    gallery: [],
    githubUrl: '',
    description:
      'Una web con «musho» duende. El desarrollo de la plataforma web oficial para el conocido grupo de música de Córdoba, enfocada en sus eventos y novedades.',
    funFact:
      '¡Maquetar con arte andaluz de fondo hace que el CSS fluya con un ritmo totalmente diferente!',
    liveUrl: 'https://elduendecallejero.es',
  },
  {
    id: 'palogoca',
    title: 'Palogoca',
    type: 'Cliente',
    stack: ['WordPress', 'Divi', 'CSS'],
    category: 'CMS / Portfolio',
    featuredImage: '/palogoca-img1.webp',
    gallery: [],
    githubUrl: '',
    description:
      'Maquetación web realizada con Divi para un estudio de fotografía dirigido por un profesional independiente. El proyecto se centró en un portfolio minimalista.',
    funFact:
      'El diseño se pensó al milímetro para que las fotografías fueran las verdaderas protagonistas sin distracciones visuales.',
    liveUrl: 'https://palogoca.com',
  },
]
