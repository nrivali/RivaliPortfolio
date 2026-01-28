import { Grid, List } from 'lucide-react'
import { useState } from 'react'
import { Project } from '../data/portfolio'
import ProjectCard from './ProjectCard'

interface ProjectGridProps {
  projects: Project[]
  title?: string
}

export default function ProjectGrid({ projects, title }: ProjectGridProps) {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [sortBy, setSortBy] = useState<'recent' | 'popular'>('recent')

  const sortedProjects = [...projects].sort((a, b) => {
    if (sortBy === 'recent') {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    }
    return (b.viewers || 0) - (a.viewers || 0)
  })

  return (
    <section>
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
        {title && <h2 className="text-xl font-bold">{title}</h2>}

        <div className="flex items-center gap-4">
          {/* Sort Options */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setSortBy('recent')}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                sortBy === 'recent'
                  ? 'bg-twitch-purple text-white'
                  : 'bg-twitch-bg-lighter text-twitch-text-muted hover:text-twitch-text'
              }`}
            >
              Recent
            </button>
            <button
              onClick={() => setSortBy('popular')}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                sortBy === 'popular'
                  ? 'bg-twitch-purple text-white'
                  : 'bg-twitch-bg-lighter text-twitch-text-muted hover:text-twitch-text'
              }`}
            >
              Popular
            </button>
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center bg-twitch-bg-lighter rounded-md">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-l-md transition-colors ${
                viewMode === 'grid' ? 'bg-twitch-bg-card text-twitch-text' : 'text-twitch-text-muted'
              }`}
            >
              <Grid size={18} />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-r-md transition-colors ${
                viewMode === 'list' ? 'bg-twitch-bg-card text-twitch-text' : 'text-twitch-text-muted'
              }`}
            >
              <List size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {sortedProjects.map((project, index) => (
            <div
              key={project.id}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-3">
          {sortedProjects.map((project, index) => (
            <ProjectListItem
              key={project.id}
              project={project}
              style={{ animationDelay: `${index * 50}ms` }}
            />
          ))}
        </div>
      )}

      {/* Empty State */}
      {projects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-twitch-text-muted">No projects found in this category.</p>
        </div>
      )}
    </section>
  )
}

function ProjectListItem({ project, style }: { project: Project; style?: React.CSSProperties }) {
  const statusColors = {
    live: 'bg-twitch-accent-red',
    'in-development': 'bg-twitch-accent-orange',
    archived: 'bg-twitch-text-dark',
  }

  return (
    <div
      className="flex gap-4 p-3 bg-twitch-bg-light rounded-lg hover:bg-twitch-bg-lighter transition-colors animate-fade-in card-glow"
      style={style}
    >
      <img
        src={project.thumbnail}
        alt={project.title}
        className="w-40 h-24 object-cover rounded-md flex-shrink-0"
      />
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="font-semibold truncate">{project.title}</h3>
          <span className={`${statusColors[project.status]} px-2 py-0.5 rounded text-xs font-bold uppercase`}>
            {project.status === 'live' ? 'LIVE' : project.status === 'in-development' ? 'IN DEV' : 'ARCHIVED'}
          </span>
        </div>
        <p className="text-sm text-twitch-text-muted line-clamp-2 mb-2">
          {project.description}
        </p>
        <div className="flex items-center gap-2">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 bg-twitch-bg-lighter rounded text-xs text-twitch-text-muted"
            >
              {tag}
            </span>
          ))}
          {project.viewers && (
            <span className="text-xs text-twitch-text-dark ml-auto">
              {project.viewers.toLocaleString()} views
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
