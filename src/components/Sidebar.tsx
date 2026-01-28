import {
  ChevronLeft,
  ChevronRight,
  Globe,
  Smartphone,
  Brain,
  Gamepad2,
  Wrench,
  GitFork,
  Folder,
  Heart,
} from 'lucide-react'
import { Category } from '../data/portfolio'

interface SidebarProps {
  collapsed: boolean
  onToggle: () => void
  categories: Category[]
  activeCategory: string | null
  onCategorySelect: (id: string | null) => void
}

const iconMap: Record<string, React.ElementType> = {
  Globe,
  Smartphone,
  Brain,
  Gamepad2,
  Wrench,
  GitFork,
}

export default function Sidebar({
  collapsed,
  onToggle,
  categories,
  activeCategory,
  onCategorySelect,
}: SidebarProps) {
  return (
    <aside
      className={`fixed left-0 top-[50px] h-[calc(100vh-50px)] bg-twitch-bg-light transition-all duration-300 z-40 hidden lg:block ${
        collapsed ? 'w-[50px]' : 'w-[240px]'
      }`}
    >
      {/* Toggle Button */}
      <button
        onClick={onToggle}
        className="absolute -right-3 top-4 w-6 h-6 bg-twitch-bg-lighter hover:bg-twitch-purple rounded-full flex items-center justify-center transition-colors z-10"
      >
        {collapsed ? (
          <ChevronRight size={14} />
        ) : (
          <ChevronLeft size={14} />
        )}
      </button>

      <div className="p-3 h-full overflow-y-auto">
        {/* Categories Section */}
        <div className="mb-6">
          {!collapsed && (
            <h3 className="text-xs font-semibold text-twitch-text-muted uppercase tracking-wider mb-3 px-2">
              Categories
            </h3>
          )}

          {/* All Projects */}
          <button
            onClick={() => onCategorySelect(null)}
            className={`w-full flex items-center gap-3 p-2 rounded-md transition-colors mb-1 ${
              activeCategory === null
                ? 'bg-twitch-bg-lighter text-twitch-text'
                : 'hover:bg-twitch-bg-lighter text-twitch-text-muted hover:text-twitch-text'
            }`}
          >
            <Folder size={20} className="flex-shrink-0" />
            {!collapsed && (
              <span className="text-sm font-medium truncate">All Projects</span>
            )}
          </button>

          {categories.map((category) => {
            const Icon = iconMap[category.icon] || Folder
            const isActive = activeCategory === category.id

            return (
              <button
                key={category.id}
                onClick={() => onCategorySelect(category.id)}
                className={`w-full flex items-center gap-3 p-2 rounded-md transition-colors mb-1 group ${
                  isActive
                    ? 'bg-twitch-bg-lighter text-twitch-text'
                    : 'hover:bg-twitch-bg-lighter text-twitch-text-muted hover:text-twitch-text'
                }`}
              >
                <Icon
                  size={20}
                  className="flex-shrink-0"
                  style={{ color: isActive ? category.color : undefined }}
                />
                {!collapsed && (
                  <>
                    <span className="text-sm font-medium truncate flex-1 text-left">
                      {category.name}
                    </span>
                    <span className="text-xs text-twitch-text-dark group-hover:text-twitch-text-muted">
                      {category.projectCount}
                    </span>
                  </>
                )}
              </button>
            )
          })}
        </div>

        {/* Recommended Section */}
        {!collapsed && (
          <div className="mb-6">
            <h3 className="text-xs font-semibold text-twitch-text-muted uppercase tracking-wider mb-3 px-2">
              Featured Tech
            </h3>
            <div className="space-y-1">
              {['React', 'TypeScript', 'Node.js', 'Python'].map((tech) => (
                <div
                  key={tech}
                  className="flex items-center gap-3 p-2 rounded-md text-twitch-text-muted"
                >
                  <div className="w-5 h-5 rounded bg-twitch-bg-lighter flex items-center justify-center">
                    <span className="text-xs font-bold">{tech[0]}</span>
                  </div>
                  <span className="text-sm">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Footer */}
        {!collapsed && (
          <div className="absolute bottom-4 left-3 right-3">
            <div className="flex items-center gap-2 text-xs text-twitch-text-dark">
              <span>Made with</span>
              <Heart size={12} className="text-twitch-accent-red fill-current" />
              <span>by Rivali</span>
            </div>
          </div>
        )}
      </div>
    </aside>
  )
}
