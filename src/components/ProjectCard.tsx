import { ExternalLink, Github, Eye, Clock, Zap } from 'lucide-react'
import { Project } from '../data/portfolio'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const statusColors = {
    live: 'bg-twitch-accent-red',
    'in-development': 'bg-twitch-accent-orange',
    archived: 'bg-twitch-text-dark',
  }

  const statusLabels = {
    live: 'LIVE',
    'in-development': 'IN DEV',
    archived: 'ARCHIVED',
  }

  return (
    <div className="group relative bg-twitch-bg-light rounded-lg overflow-hidden card-glow animate-fade-in">
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-twitch-purple hover:bg-twitch-purple-dark rounded-full transition-colors"
            >
              <ExternalLink size={20} />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-twitch-bg-lighter hover:bg-twitch-bg-card rounded-full transition-colors"
            >
              <Github size={20} />
            </a>
          )}
        </div>

        {/* Status Badge */}
        <div className="absolute top-2 left-2 flex items-center gap-1">
          <span
            className={`${statusColors[project.status]} px-2 py-0.5 rounded text-xs font-bold uppercase flex items-center gap-1`}
          >
            {project.status === 'live' && (
              <span className="w-2 h-2 bg-white rounded-full animate-pulse-live" />
            )}
            {project.status === 'in-development' && <Clock size={10} />}
            {statusLabels[project.status]}
          </span>
        </div>

        {/* Viewers/Stars Badge */}
        {project.viewers && (
          <div className="absolute bottom-2 left-2 flex items-center gap-1 bg-black/70 px-2 py-1 rounded text-xs">
            <Eye size={12} className="text-twitch-accent-red" />
            <span>{project.viewers.toLocaleString()}</span>
          </div>
        )}

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-2 right-2 flex items-center gap-1 bg-twitch-purple px-2 py-0.5 rounded text-xs font-bold">
            <Zap size={10} />
            FEATURED
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-3">
        {/* Title Row */}
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-twitch-purple flex items-center justify-center flex-shrink-0">
            <span className="font-bold text-sm">
              {project.title.substring(0, 2).toUpperCase()}
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-sm truncate group-hover:text-twitch-purple transition-colors">
              {project.title}
            </h3>
            <p className="text-xs text-twitch-text-muted truncate">
              {project.description}
            </p>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mt-3">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 bg-twitch-bg-lighter rounded text-xs text-twitch-text-muted hover:bg-twitch-bg-card hover:text-twitch-text cursor-pointer transition-colors"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="px-2 py-0.5 text-xs text-twitch-text-dark">
              +{project.tags.length - 3}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
