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
    liveUrl: 'https://www.mrsinvincor.es',
  },
  {
    id: 'gaming-library-json',
    title: 'Gaming Library JSON',
    type: 'Cliente',
    stack: ['CSS', 'HTML', 'JavaScript'],
    category: 'Frontend',
    featuredImage: '/gaming-library-featuredimg.webp',
    gallery: [
      '/gaming-libraryimg1.webp',
      '/gaming-library-img2.webp',
      '/gaming-library-img3.webp',
    ],
    githubUrl: 'https://github.com/ManuAlba/gaming-library-json',
    description:
      'Este proyecto consiste en una **librería de videojuegos desarrollada como ejercicio práctico**, donde los datos se gestionan desde un archivo **JSON** que alimenta dinámicamente la aplicación. La página principal se genera a partir de esos datos, mostrando los juegos disponibles junto con sus categorías y etiquetas.\n\nEl foco técnico estuvo en la **lectura y renderizado dinámico de datos**, construyendo la interfaz mediante manipulación del DOM y generación automática de contenido. Implementé un sistema de **filtros por categorías y tags**, permitiendo al usuario refinar los resultados sin recargar la página.\n\nAdemás, cada juego cuenta con su **subpágina generada dinámicamente a partir del JSON**, reforzando conceptos como estructuras de datos, renderizado condicional y reutilización de lógica, consolidando una base sólida para futuros desarrollos con APIs y frameworks.',
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
    gallery: [
      '/react-portfolio-img1.webp',
      '/react-portfolio-img2.webp',
      '/react-portfolio-img4.webp',
    ],
    githubUrl: 'https://github.com/ManuAlba/portfolio-react',
    description:
      'Este proyecto representa mi primera toma de contacto con React, desarrollado con el objetivo de comprender los fundamentos del framework y su lógica de trabajo basada en componentes. Me centré en aprender la estructura de un proyecto React, la importación y exportación de módulos, la creación de componentes en JSX y la organización del código en una arquitectura más modular.\n\nA diferencia de los proyectos tradicionales con HTML, CSS y JavaScript, React me obligó a replantear la organización y estructura del desarrollo frontend, entendiendo el sistema de componentes como piezas reutilizables que permiten construir interfaces de forma escalable. La comprensión del flujo de renderizado y la actualización eficiente de la interfaz supuso un punto de inflexión en mi forma de desarrollar.\n\nAdemás, trabajé con el entorno de desarrollo mediante Node y la terminal para la creación, gestión y despliegue del proyecto, consolidando una base sólida para futuros desarrollos con frameworks modernos y aplicaciones más complejas.',
    funFact: 'Primer proyecto con React y node.js',
    liveUrl: '#',
  },
  {
    id: 'portfolio-basic',
    title: 'Portfolio',
    type: 'Cliente',
    stack: ['CSS grid', 'HTML', 'JavaScript'],
    category: 'Frontend',
    featuredImage: '/portfolio-featuredimg.webp',
    gallery: [
      '/portfolio-im1.webp',
      '/portfolio-img2.webp',
      '/portfolio-img3.webp',
    ],
    githubUrl: 'https://github.com/ManuAlba/portfolio-basic',
    description:
      'Este proyecto consistió en el desarrollo de un portfolio básico como ejercicio de aprendizaje, estructurado en subpáginas y con una sección de proyectos organizada mediante CSS Grid. El objetivo fue simular un portfolio profesional completo, cuidando la navegación y la jerarquía del contenido.\n\nA nivel técnico, el proyecto se centró en la interacción y experiencia de usuario, incorporando elementos como cursor personalizado en forma de círculo, acordeones desplegables y transiciones visuales, trabajando la manipulación del DOM y la gestión de eventos con JavaScript.\n\nCon este ejercicio reforcé conocimientos de maquetación responsiva, diseño de interfaces y JavaScript vanilla, entendiendo mejor cómo combinar estructura, interacción y presentación visual en un proyecto frontend coherente y escalable.',
    funFact:
      'El ratón se sustitye por un circulo para dar un estilo diferenciado, tambien se practica el uso del grid y otros elementos de interacción como el acordeon con JS.',
    liveUrl: '#',
  },
  {
    id: '30-days-js-landing-pages',
    title: '30 Days of JS Landing Pages',
    type: 'Cliente',
    stack: ['CSS grid', 'HTML', 'JavaScript'],
    category: 'Frontend',
    featuredImage: '/30djs-featuredimg.webp',
    gallery: ['/30djs-img1.webp', '/30djs-img2.webp', '/30djs-img3.webp'],
    githubUrl: 'https://github.com/ManuAlba/30-days-js-landings',
    description:
      'Este proyecto es una adaptación personal del reto “30 Days of JavaScript”, en el que desarrollé 15 landing pages independientes, cada una con un diseño y estilo propio. En cada página apliqué de forma práctica la teoría correspondiente a ese día, transformando ejercicios aislados en pequeñas experiencias web completas.\n\nEl objetivo fue consolidar los fundamentos de JavaScript mediante casos prácticos reales, trabajando conceptos como variables, funciones, condicionales, bucles, eventos, manipulación del DOM y lógica básica, siempre integrados en una interfaz visual diseñada específicamente para cada ejercicio.\n\nGracias a este enfoque, reforcé no solo mis habilidades en JavaScript vanilla, sino también en diseño y maquetación, entendiendo mejor la relación entre lógica, interacción y presentación visual, y ganando soltura en la construcción de proyectos frontend desde cero.',
    funFact:
      'Cada landing tiene un estilo diferente, fue una excusa para practicar flex & Grid aparte de las funciones en JS, es interesante ver la evolución en el diseño de cada proyecto.',
    liveUrl: '#',
  },
  {
    id: 'awesome-calculator',
    title: 'Awesome Calculator',
    type: 'Cliente',
    stack: ['CSS', 'CSS grid', 'HTML', 'JavaScript'],
    category: 'Frontend',
    featuredImage: '/awesome-calculator-featuredimg.webp',
    gallery: ['/awesome-calculator-img1.webp', '/awesome-calculator-img2.webp'],
    githubUrl: 'https://github.com/ManuAlba/awesome-calculator',
    description:
      'Este proyecto consiste en una calculadora desarrollada como ejercicio de aprendizaje utilizando HTML, CSS y JavaScript, inspirada visualmente en las calculadoras CASIO clásicas. El objetivo fue construir una interfaz funcional y reconocible, cuidando tanto la estética como la experiencia de uso.\n\nA nivel técnico, el proyecto se centró en la lógica de cálculo y la manipulación del DOM, gestionando la entrada de datos, las operaciones aritméticas y la actualización dinámica de la pantalla. Como valor añadido, implementé una funcionalidad que muestra la hora en tiempo real, integrándola en la interfaz sin interferir con el uso principal de la calculadora.\n\nCon este ejercicio reforcé conocimientos de JavaScript vanilla, manejo de eventos, control de estados y sincronización de elementos de la interfaz, además de mejorar mis habilidades de maquetación CSS orientada a añadir estilos con fidelidad visual.',
    funFact:
      'A nivel de diseño, me inspiré en las calculadoras CASIO que hemos usado la mayoría en época de estudiante, así como la función de mostrar la hora.',
    liveUrl: '#',
  },
  {
    id: 'awesome-to-do-list',
    title: 'Awesome To Do List',
    type: 'Cliente',
    stack: ['CSS', 'HTML', 'JavaScript'],
    category: 'Frontend',
    featuredImage: '/awesome-todolist-featuredimg.webp',
    gallery: ['/awesome-todolist-img1.webp', '/awesome-todolist-img2.webp'],
    githubUrl: 'https://github.com/ManuAlba/awesome-todo-list',
    description:
      'Este proyecto es una aplicación To-Do List desarrollada como ejercicio de aprendizaje, utilizando HTML, CSS y JavaScript vanilla, con el objetivo de afianzar las bases del desarrollo frontend sin dependencias externas. La aplicación permite añadir, completar y eliminar tareas de forma dinámica.\n\nEl foco principal del proyecto fue la manipulación del DOM, trabajando con eventos, creación y eliminación de nodos, actualización del estado de la interfaz y gestión de interacciones del usuario en tiempo real. Esto me permitió comprender mejor cómo JavaScript conecta la lógica con la interfaz visual.\n\nGracias a este ejercicio reforcé conceptos clave como event listeners, estructuras condicionales, gestión del estado en el navegador y separación entre estructura, estilo y lógica, sentando una base sólida para proyectos frontend más complejos.',
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
    gallery: ['/moloexpo-img2.webp', '/moloexpo-img4.webp'],
    githubUrl: '',
    description:
      'Este proyecto consistió en la maquetación de la web corporativa de Molo Expo, desarrollada con Elementor y enfocada en ofrecer una experiencia visual diferencial y moderna. El principal reto fue implementar un scroll horizontal controlado, rompiendo con la estructura vertical tradicional y cuidando la fluidez de navegación.\n\nA nivel técnico, desarrollé un menú personalizado mediante JavaScript, adaptándolo a la lógica del desplazamiento horizontal y asegurando una navegación coherente en toda la interfaz. Esto implicó trabajar la sincronización entre secciones, comportamiento dinámico del menú y control de eventos.\n\nEl proyecto se desarrolló bajo un enfoque 100% responsive, optimizando la experiencia tanto en escritorio como en dispositivos móviles, y reforzando mis competencias en maquetación avanzada con Elementor combinada con personalización mediante código.',
    funFact: 'Web con scroll horizontal inmersiva',
    liveUrl: 'https://moloexpo.com',
  },
  {
    id: 'plugtown-bcn',
    title: 'PlugtownBcn',
    type: 'Cliente',
    stack: ['WordPress', 'Woocommerce', 'Divi', 'CSS grid'],
    category: 'E-commerce',
    featuredImage: '/plugtown-bcn-featuredimg.webp',
    gallery: [
      '/plugtown-bcm-img2.webp',
      '/pgtbcn-login.webp',
      '/pgtbcn-product-page.webp',
      '/ptbcn-chart.webp',
      '/ptbcn-img3.webp',
      '/btbcn-endshp.webp',
    ],
    githubUrl: '',
    description:
      'El proyecto consistió en desarrollar la tienda online de Plugtown BCN – Tienda ecommerce de moda y sneakers en Barcelona, una plataforma de comercio electrónico enfocada en la venta de zapatillas, streetwear y accesorios exclusivos con una fuerte identidad urbana y cultural. La web integra un catálogo de productos organizado por categorías claras y una navegación intuitiva dirigida a usuarios apasionados por las tendencias de moda actuales.\n\nEste ecommerce me brindó la oportunidad de profundizar en diseño de interfaces orientado a conversión y maquetación responsiva para asegurar que la experiencia de compra fuese fluida en móvil y escritorio, cuidando la presentación visual de los productos y la coherencia con la estética de la marca. A nivel técnico, optimicé layouts, fichas de producto y flujos de navegación, equilibrando usabilidad y rendimiento.\n\nEl desarrollo reforzó mis habilidades en HTML, CSS y organización de contenido dinámico, así como en la implementación de estructuras que facilitan futuras expansiones del catálogo y mejoras de UX, lo que supuso un aprendizaje significativo en proyectos de comercio electrónico con enfoque en diseño y funcionalidad.',
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
    gallery: [
      '/3dgeospace-img2.webp',
      '/3dgeospace-img2-1.webp',
      '/3dgeospace-img3.webp',
    ],
    githubUrl: '',
    description:
      'Trabajé en el desarrollo de la web corporativa de 3D Geospace, una empresa especializada en ingeniería geomática y soluciones tecnológicas avanzadas para topografía, cartografía 3D y BIM, caracterizada por su enfoque en precisión, innovación y calidad.\n\nEste proyecto me permitió profundizar en diseño de interfaces y maquetación responsiva, adaptando la identidad visual de la marca a una estructura web clara y funcional que comunica eficazmente los valores y servicios técnicos de la empresa. Integré elementos visuales y tipográficos que reforzaran la percepción profesional del cliente, cuidando la usabilidad en diferentes dispositivos.\n\nDurante el proceso fortalecí mis habilidades de HTML, CSS y diseño adaptativo, así como la estructuración de contenido corporativo complejo de forma accesible y estética, lo que supuso un aprendizaje significativo en diseño web aplicado a un perfil profesional técnico.',
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
    gallery: ['/duende-callejero-img1.webp', '/duende-callejero-img2.webp'],
    githubUrl: '',
    description:
      'Una web con «musho» duende\nSin duda una web con un toque especial..\n\nEl grupo de música de Córdoba lo esta petando actualmente con su arte, y nos pidieron en Appsur que reflejaramos esa personalidad suya desenfadada pero que mantuviera un estilo serio.\n\nSin duda fue un reto por la «presión» que suponía el proyecto ya que tendría mucha repercusión.',
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
    featuredImage: '/palogoca-featuredimg.webp',
    gallery: ['/palogoca-img1.webp', '/palogoca-img2.webp'],
    githubUrl: '',
    description:
      'Maquetación web realizada con Divi para un estudio de fotografía dirigido por un profesional independiente. El proyecto se centró en destacar las imágenes como elemento principal, optimizando la calidad visual sin comprometer la eficiencia de carga. La composición y el diseño adoptan un estilo elegante y minimalista, que transmite la profesionalidad del estudio y permite que cada fotografía cuente su propia historia.',
    funFact:
      'El diseño se pensó al milímetro para que las fotografías fueran las verdaderas protagonistas sin distracciones visuales.',
    liveUrl: 'https://palogoca.com',
  },
]
