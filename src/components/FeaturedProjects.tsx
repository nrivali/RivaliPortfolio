import { ChevronLeft, ChevronRight, Zap } from 'lucide-react'
import { useState } from 'react'
import { Project } from '../data/portfolio'
import ProjectCard from './ProjectCard'

interface FeaturedProjectsProps {
  projects: Project[]
}

export default function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  const [scrollPosition, setScrollPosition] = useState(0)

  const scroll = (direction: 'left' | 'right') => {
    const container = document.getElementById('featured-scroll')
    if (container) {
      const scrollAmount = 320
      const newPosition =
        direction === 'left'
          ? Math.max(0, scrollPosition - scrollAmount)
          : scrollPosition + scrollAmount

      container.scrollTo({ left: newPosition, behavior: 'smooth' })
      setScrollPosition(newPosition)
    }
  }

  if (projects.length === 0) return null

  return (
    <section className="mb-8">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Zap className="w-5 h-5 text-twitch-purple" />
          <h2 className="text-xl font-bold">Featured Projects</h2>
          <span className="px-2 py-0.5 bg-twitch-purple/20 text-twitch-purple rounded text-xs font-semibold">
            {projects.length} LIVE
          </span>
        </div>

        {/* Scroll Controls */}
        <div className="hidden md:flex items-center gap-2">
          <button
            onClick={() => scroll('left')}
            className="p-1.5 bg-twitch-bg-lighter hover:bg-twitch-bg-card rounded-md transition-colors"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => scroll('right')}
            className="p-1.5 bg-twitch-bg-lighter hover:bg-twitch-bg-card rounded-md transition-colors"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Scrollable Container */}
      <div className="relative">
        <div
          id="featured-scroll"
          className="flex gap-4 overflow-x-auto scrollbar-hide pb-2 -mx-4 px-4 md:mx-0 md:px-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {projects.map((project) => (
            <div key={project.id} className="flex-shrink-0 w-[300px]">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* Gradient Overlays */}
        <div className="hidden md:block absolute left-0 top-0 bottom-2 w-8 bg-gradient-to-r from-twitch-bg to-transparent pointer-events-none" />
        <div className="hidden md:block absolute right-0 top-0 bottom-2 w-8 bg-gradient-to-l from-twitch-bg to-transparent pointer-events-none" />
      </div>
    </section>
  )
}
