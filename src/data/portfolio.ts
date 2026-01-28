export interface Project {
  id: string
  title: string
  description: string
  thumbnail: string
  category: string
  tags: string[]
  liveUrl?: string
  githubUrl?: string
  featured: boolean
  status: 'live' | 'in-development' | 'archived'
  viewers?: number // Mock "viewers" like Twitch (stars/forks/etc)
  createdAt: string
}

export interface Category {
  id: string
  name: string
  icon: string
  color: string
  projectCount: number
}

export interface Skill {
  name: string
  icon: string
  level: 'Expert' | 'Advanced' | 'Intermediate'
  category: string
}

export interface PortfolioData {
  profile: {
    name: string
    username: string
    title: string
    bio: string
    avatar: string
    banner: string
    followers: number
    following: number
    location: string
    socials: {
      github?: string
      linkedin?: string
      twitter?: string
      email?: string
    }
  }
  categories: Category[]
  projects: Project[]
  skills: Skill[]
}

export const portfolioData: PortfolioData = {
  profile: {
    name: "Rivali",
    username: "rivali",
    title: "Full Stack Developer & Creator",
    bio: "Building cool things on the internet. Passionate about clean code, great UX, and pushing the boundaries of what's possible on the web.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=rivali&backgroundColor=9146FF",
    banner: "https://images.unsplash.com/photo-1614851099175-e5b30eb6f696?w=1200&h=300&fit=crop",
    followers: 1247,
    following: 89,
    location: "San Francisco, CA",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "hello@example.com"
    }
  },
  categories: [
    { id: 'web', name: 'Web Apps', icon: 'Globe', color: '#9146FF', projectCount: 5 },
    { id: 'mobile', name: 'Mobile', icon: 'Smartphone', color: '#00F593', projectCount: 2 },
    { id: 'ai', name: 'AI/ML', icon: 'Brain', color: '#FF8C00', projectCount: 3 },
    { id: 'games', name: 'Games', icon: 'Gamepad2', color: '#FF4D4D', projectCount: 2 },
    { id: 'tools', name: 'Dev Tools', icon: 'Wrench', color: '#00C8FF', projectCount: 4 },
    { id: 'oss', name: 'Open Source', icon: 'GitFork', color: '#A970FF', projectCount: 6 },
  ],
  projects: [
    {
      id: '1',
      title: 'StreamFlow Analytics',
      description: 'Real-time analytics dashboard for content creators with live viewer tracking, engagement metrics, and AI-powered insights.',
      thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=225&fit=crop',
      category: 'web',
      tags: ['React', 'TypeScript', 'D3.js', 'WebSocket'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: true,
      status: 'live',
      viewers: 2341,
      createdAt: '2024-01-15'
    },
    {
      id: '2',
      title: 'Neural Canvas',
      description: 'AI-powered image generation tool using stable diffusion. Create stunning artwork from text descriptions.',
      thumbnail: 'https://images.unsplash.com/photo-1547954575-855750c57bd3?w=400&h=225&fit=crop',
      category: 'ai',
      tags: ['Python', 'PyTorch', 'FastAPI', 'React'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: true,
      status: 'live',
      viewers: 1856,
      createdAt: '2024-02-20'
    },
    {
      id: '3',
      title: 'Pixel Quest',
      description: 'Retro-style roguelike game built with modern web technologies. Features procedural generation and pixel-perfect graphics.',
      thumbnail: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=225&fit=crop',
      category: 'games',
      tags: ['TypeScript', 'Phaser', 'WebGL'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: true,
      status: 'live',
      viewers: 982,
      createdAt: '2024-03-10'
    },
    {
      id: '4',
      title: 'DevSync CLI',
      description: 'Command-line tool for syncing development environments across machines. Manages dotfiles, packages, and configurations.',
      thumbnail: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=400&h=225&fit=crop',
      category: 'tools',
      tags: ['Rust', 'CLI', 'DevOps'],
      githubUrl: 'https://github.com',
      featured: false,
      status: 'live',
      viewers: 654,
      createdAt: '2024-01-05'
    },
    {
      id: '5',
      title: 'Pocket Planner',
      description: 'Cross-platform mobile app for personal finance tracking with beautiful charts and smart categorization.',
      thumbnail: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=225&fit=crop',
      category: 'mobile',
      tags: ['React Native', 'TypeScript', 'Firebase'],
      liveUrl: 'https://example.com',
      featured: false,
      status: 'live',
      viewers: 1123,
      createdAt: '2023-11-20'
    },
    {
      id: '6',
      title: 'CodeReview Bot',
      description: 'GitHub bot that uses AI to provide intelligent code review suggestions and catch potential bugs.',
      thumbnail: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=400&h=225&fit=crop',
      category: 'oss',
      tags: ['Node.js', 'OpenAI', 'GitHub API'],
      githubUrl: 'https://github.com',
      featured: false,
      status: 'live',
      viewers: 2156,
      createdAt: '2024-02-01'
    },
    {
      id: '7',
      title: 'Sentiment Analyzer',
      description: 'Real-time sentiment analysis API for social media posts using transformer models.',
      thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=225&fit=crop',
      category: 'ai',
      tags: ['Python', 'Transformers', 'FastAPI'],
      githubUrl: 'https://github.com',
      featured: false,
      status: 'live',
      viewers: 743,
      createdAt: '2024-03-25'
    },
    {
      id: '8',
      title: 'Component Library',
      description: 'Beautiful, accessible React component library with Twitch-inspired design system.',
      thumbnail: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=400&h=225&fit=crop',
      category: 'oss',
      tags: ['React', 'Storybook', 'Tailwind'],
      githubUrl: 'https://github.com',
      featured: false,
      status: 'in-development',
      viewers: 456,
      createdAt: '2024-04-01'
    },
    {
      id: '9',
      title: 'API Gateway',
      description: 'High-performance API gateway with rate limiting, caching, and analytics built-in.',
      thumbnail: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=225&fit=crop',
      category: 'tools',
      tags: ['Go', 'Redis', 'Docker'],
      githubUrl: 'https://github.com',
      featured: false,
      status: 'live',
      viewers: 891,
      createdAt: '2023-12-15'
    },
    {
      id: '10',
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard.',
      thumbnail: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=225&fit=crop',
      category: 'web',
      tags: ['Next.js', 'Prisma', 'Stripe'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: false,
      status: 'live',
      viewers: 1567,
      createdAt: '2024-01-28'
    },
  ],
  skills: [
    { name: 'React', icon: 'Code', level: 'Expert', category: 'Frontend' },
    { name: 'TypeScript', icon: 'FileCode', level: 'Expert', category: 'Languages' },
    { name: 'Node.js', icon: 'Server', level: 'Expert', category: 'Backend' },
    { name: 'Python', icon: 'Terminal', level: 'Advanced', category: 'Languages' },
    { name: 'PostgreSQL', icon: 'Database', level: 'Advanced', category: 'Database' },
    { name: 'AWS', icon: 'Cloud', level: 'Advanced', category: 'Cloud' },
    { name: 'Docker', icon: 'Container', level: 'Advanced', category: 'DevOps' },
    { name: 'GraphQL', icon: 'Share2', level: 'Advanced', category: 'API' },
    { name: 'Rust', icon: 'Cog', level: 'Intermediate', category: 'Languages' },
    { name: 'Machine Learning', icon: 'Brain', level: 'Intermediate', category: 'AI' },
  ]
}
