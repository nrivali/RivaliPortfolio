import { Award, TrendingUp } from 'lucide-react'
import { portfolioData } from '../data/portfolio'

export default function SkillsSection() {
  const { skills } = portfolioData

  const levelColors = {
    Expert: 'text-twitch-purple bg-twitch-purple/20',
    Advanced: 'text-twitch-accent-green bg-twitch-accent-green/20',
    Intermediate: 'text-twitch-accent-blue bg-twitch-accent-blue/20',
  }

  const levelBars = {
    Expert: 'w-full',
    Advanced: 'w-3/4',
    Intermediate: 'w-1/2',
  }

  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = []
    }
    acc[skill.category].push(skill)
    return acc
  }, {} as Record<string, typeof skills>)

  return (
    <section className="mb-8">
      {/* Section Header */}
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp className="w-5 h-5 text-twitch-accent-green" />
        <h2 className="text-xl font-bold">Skills & Technologies</h2>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
          <div
            key={category}
            className="bg-twitch-bg-light rounded-lg p-4 animate-fade-in"
          >
            <h3 className="text-sm font-semibold text-twitch-text-muted uppercase tracking-wider mb-3">
              {category}
            </h3>
            <div className="space-y-3">
              {categorySkills.map((skill) => (
                <div key={skill.name} className="group">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-sm">{skill.name}</span>
                      {skill.level === 'Expert' && (
                        <Award size={14} className="text-twitch-purple" />
                      )}
                    </div>
                    <span
                      className={`text-xs px-2 py-0.5 rounded font-medium ${levelColors[skill.level]}`}
                    >
                      {skill.level}
                    </span>
                  </div>
                  {/* Skill Bar */}
                  <div className="h-1.5 bg-twitch-bg-lighter rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-twitch-purple rounded-full transition-all duration-500 group-hover:bg-twitch-purple-light ${levelBars[skill.level]}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Tech Stack Summary */}
      <div className="mt-6 p-4 bg-twitch-bg-light rounded-lg">
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill.name}
              className="px-3 py-1.5 bg-twitch-bg-lighter rounded-full text-sm hover:bg-twitch-purple hover:text-white transition-colors cursor-pointer"
            >
              {skill.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
