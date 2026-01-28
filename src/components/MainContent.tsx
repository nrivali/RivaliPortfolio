import ProfileHeader from './ProfileHeader'
import FeaturedProjects from './FeaturedProjects'
import ProjectGrid from './ProjectGrid'
import SkillsSection from './SkillsSection'
import { portfolioData } from '../data/portfolio'

interface MainContentProps {
  sidebarCollapsed: boolean
  activeCategory: string | null
  onCategorySelect: (id: string | null) => void
}

export default function MainContent({
  sidebarCollapsed,
  activeCategory,
  onCategorySelect,
}: MainContentProps) {
  const { projects, categories } = portfolioData

  const filteredProjects = activeCategory
    ? projects.filter((p) => p.category === activeCategory)
    : projects

  const featuredProjects = projects.filter((p) => p.featured)

  const activeCategoryData = activeCategory
    ? categories.find((c) => c.id === activeCategory)
    : null

  return (
    <main
      className={`flex-1 transition-all duration-300 ${
        sidebarCollapsed ? 'lg:ml-[50px]' : 'lg:ml-[240px]'
      }`}
    >
      {/* Profile Header */}
      <ProfileHeader />

      {/* Main Content Area */}
      <div className="px-4 md:px-8 py-6 max-w-7xl mx-auto">
        {/* Featured Section - Only show when no category filter */}
        {!activeCategory && (
          <>
            <FeaturedProjects projects={featuredProjects} />
            <SkillsSection />
          </>
        )}

        {/* Category Header */}
        {activeCategory && activeCategoryData && (
          <div className="mb-6 animate-fade-in">
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-2xl font-bold">{activeCategoryData.name}</h2>
              <span
                className="px-2 py-1 rounded text-xs font-semibold"
                style={{ backgroundColor: activeCategoryData.color + '20', color: activeCategoryData.color }}
              >
                {activeCategoryData.projectCount} projects
              </span>
            </div>
            <button
              onClick={() => onCategorySelect(null)}
              className="text-sm text-twitch-purple hover:underline"
            >
              ← Back to all projects
            </button>
          </div>
        )}

        {/* Projects Grid */}
        <ProjectGrid
          projects={filteredProjects}
          title={activeCategory ? undefined : 'All Projects'}
        />
      </div>
    </main>
  )
}
