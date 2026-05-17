export interface ProjectLink {
  text: string
  url: string
}

export interface Project {
  id: string
  title: string
  summary: string
  technologies: string[]
  links: ProjectLink[]
  image?: string
}

export const featuredProjects: Project[] = [
  {
    id: 'email-platform',
    title: 'Serverless Email Platform',
    summary: 'Multi-region email system built on AWS with event-driven processing, search, workflow automation, and a subscription billing layer. Handles receiving, parsing, storing, and serving email across custom domains.',
    technologies: ['TypeScript', 'Python', 'AWS CDK', 'Lambda', 'SES', 'S3', 'DynamoDB'],
    links: [
      { text: 'Product', url: 'https://mail.akera.tech' },
    ],
    image: '/placeholder-email.svg',
  },
  {
    id: 'asset-distribution',
    title: 'Software Distribution System',
    summary: 'Cross-platform auto-update system with a Go launcher/installer, API key authentication, quota enforcement, and a serverless backend for versioned asset delivery to distributed client machines.',
    technologies: ['Go', 'Python', 'TypeScript', 'AWS CDK', 'Lambda', 'DynamoDB'],
    links: [],
    image: '/placeholder-assets.svg',
  },
  {
    id: 'FabFlix',
    title: 'FabFlix',
    summary: 'Full-stack e-commerce movie platform with scaled microservices architecture, connection pooling, load balancing, and full-text search across a large dataset.',
    technologies: ['Java', 'JavaScript', 'SQL', 'AWS'],
    links: [
      { text: 'GitHub', url: 'https://github.com/danielzelfo/FabFlix' },
    ],
    image: 'https://danielzelfo.github.io/img/min/portfolio/FabFlix/search.jpg',
  },
  {
    id: 'spidey',
    title: 'Spidey Search',
    summary: 'Search engine capable of indexing and querying hundreds of thousands of documents with ranked retrieval, web crawling, and an inverted index built from scratch.',
    technologies: ['Python', 'JavaScript'],
    links: [
      { text: 'Live', url: 'https://spideyweb.netlify.app' },
    ],
    image: 'https://danielzelfo.github.io/img/min/portfolio/spidey/home.jpg',
  },
  {
    id: 'astra',
    title: 'AstraMonitor',
    summary: 'Concurrent product monitoring system using thread pool management for parallel execution across multiple e-commerce platforms with real-time Discord notifications.',
    technologies: ['Python', 'Concurrency', 'APIs'],
    links: [
      { text: 'Website', url: 'https://astraworld.netlify.app' },
    ],
    image: 'https://danielzelfo.github.io/img/min/portfolio/astra/bb1650.jpg',
  },
  {
    id: 'auctionServer',
    title: 'Auction Server',
    summary: 'Multi-threaded auction server in pure C using POSIX sockets, producer-consumer pattern, and synchronization primitives for concurrent client sessions.',
    technologies: ['C', 'POSIX', 'Sockets', 'Threads'],
    links: [],
    image: 'https://danielzelfo.github.io/img/min/portfolio/auctionServer/buy.jpg',
  },
  {
    id: 'cppPrograms',
    title: 'Algorithms & Data Structures',
    summary: 'Collection of graph algorithms, sorting implementations, data structures, and computational geometry focused on correctness and performance analysis.',
    technologies: ['C++', 'Algorithms'],
    links: [
      { text: 'Graphs', url: 'https://github.com/danielzelfo/GraphAlgorithmsCpp' },
      { text: 'Algorithms', url: 'https://github.com/danielzelfo/AlgorithmsCpp' },
      { text: 'Data Structures', url: 'https://github.com/danielzelfo/DataStructuresCpp' },
    ],
    image: 'https://danielzelfo.github.io/img/min/portfolio/cppCode.jpg',
  },
]

export const archiveProjects: Project[] = [
  {
    id: 'mipsSudoku',
    title: 'MIPS Assembly Sudoku',
    summary: 'Sudoku game in MIPS assembly with custom display tool, move validation, and save/load state.',
    technologies: ['Assembly'],
    links: [],
  },
  {
    id: 'sortingAnimations',
    title: 'Sorting Animations',
    summary: 'JavaFX visualization of sorting algorithms with configurable data generation.',
    technologies: ['Java', 'JavaFX'],
    links: [
      { text: 'GitHub', url: 'https://github.com/danielzelfo/SortingAnimations' },
    ],
  },
  {
    id: 'dynamite',
    title: 'Dynamite',
    summary: 'Tool for creating interactive web-based educational materials with live preview.',
    technologies: ['Python', 'JavaScript', 'Flask'],
    links: [
      { text: 'GitHub', url: 'https://github.com/danielzelfo/dynamite' },
    ],
  },
  {
    id: 'wearableWeather',
    title: 'Wearable Weather',
    summary: 'IoT project with Arduino sensor data transmitted to a Flask API and live web frontend.',
    technologies: ['C++', 'Python', 'Flask'],
    links: [
      { text: 'GitHub', url: 'https://github.com/danielzelfo/WearableWeather' },
    ],
  },
  {
    id: 'shopSupreme',
    title: 'ShopSupreme',
    summary: 'Chrome extension checkout automation bot.',
    technologies: ['JavaScript', 'Chrome APIs'],
    links: [
      { text: 'GitHub', url: 'https://github.com/danielzelfo/ShopSupreme' },
    ],
  },
  {
    id: 'mountieBot',
    title: 'MountieBot',
    summary: 'Discord bot with MySQL persistence for server configuration and role management.',
    technologies: ['Python', 'MySQL'],
    links: [
      { text: 'GitHub', url: 'https://github.com/mtsac-cs/MountieBot' },
    ],
  },
  {
    id: 'scheduler',
    title: 'Employee Scheduler',
    summary: 'Web-based scheduling tool that generates optimal work schedules from employee availability.',
    technologies: ['Python', 'Flask', 'JavaScript'],
    links: [
      { text: 'GitHub', url: 'https://github.com/hyc121110/CitrusHack2019' },
    ],
  },
  {
    id: 'neighborBank',
    title: 'Friendly Neighborhood Bank',
    summary: 'Banking application with account management and transactions via JavaFX GUI.',
    technologies: ['Java', 'JavaFX'],
    links: [
      { text: 'GitHub', url: 'https://github.com/danielzelfo/NeighborBank' },
    ],
  },
  {
    id: 'opbot',
    title: 'oPBoT',
    summary: 'Discord moderation and voice channel bot.',
    technologies: ['Java'],
    links: [
      { text: 'GitHub', url: 'https://github.com/danielzelfo/OPBoT' },
    ],
  },
  {
    id: 'todoList',
    title: 'To-do List',
    summary: 'Interactive task manager with jQuery.',
    technologies: ['JavaScript', 'CSS'],
    links: [
      { text: 'GitHub', url: 'https://github.com/danielzelfo/ToDo-List' },
    ],
  },
  {
    id: 'encrytion',
    title: 'Encryption Using Matrices',
    summary: 'Message encryption using random 2x2 matrix transformations.',
    technologies: ['JavaScript', 'HTML'],
    links: [],
  },
  {
    id: 'paint',
    title: 'Paint',
    summary: 'Canvas and pixel-based paint programs in the browser.',
    technologies: ['JavaScript', 'HTML Canvas'],
    links: [
      { text: 'GitHub', url: 'https://github.com/danielzelfo/PixelatedPaint' },
    ],
  },
]
