import { Search, Bell, User, Menu, Github, Linkedin, Twitter, Mail } from 'lucide-react'
import { useState } from 'react'
import { portfolioData } from '../data/portfolio'

export default function TopNav() {
  const [searchFocused, setSearchFocused] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const { profile } = portfolioData

  return (
    <nav className="fixed top-0 left-0 right-0 h-[50px] bg-twitch-bg-light z-50 flex items-center justify-between px-4 border-b border-twitch-bg-lighter">
      {/* Left section - Logo */}
      <div className="flex items-center gap-4">
        <button className="lg:hidden p-2 hover:bg-twitch-bg-lighter rounded-md transition-colors">
          <Menu size={20} />
        </button>
        <a href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-twitch-purple rounded-lg flex items-center justify-center">
            <span className="font-bold text-white text-lg">R</span>
          </div>
          <span className="hidden sm:block font-bold text-xl group-hover:text-twitch-purple transition-colors">
            Rivali
          </span>
        </a>
      </div>

      {/* Center section - Search */}
      <div className="flex-1 max-w-md mx-4">
        <div className={`relative flex items-center transition-all duration-200 ${searchFocused ? 'ring-2 ring-twitch-purple' : ''}`}>
          <input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
            className="w-full bg-twitch-bg py-1.5 px-4 rounded-l-md text-sm placeholder-twitch-text-muted focus:outline-none"
          />
          <button className="bg-twitch-bg-lighter hover:bg-twitch-bg-card px-3 py-1.5 rounded-r-md transition-colors">
            <Search size={18} className="text-twitch-text-muted" />
          </button>
        </div>
      </div>

      {/* Right section - Actions & Profile */}
      <div className="flex items-center gap-2">
        {/* Social Links */}
        <div className="hidden md:flex items-center gap-1">
          {profile.socials.github && (
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-twitch-bg-lighter rounded-md transition-colors text-twitch-text-muted hover:text-twitch-text"
            >
              <Github size={18} />
            </a>
          )}
          {profile.socials.linkedin && (
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-twitch-bg-lighter rounded-md transition-colors text-twitch-text-muted hover:text-twitch-text"
            >
              <Linkedin size={18} />
            </a>
          )}
          {profile.socials.twitter && (
            <a
              href={profile.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-twitch-bg-lighter rounded-md transition-colors text-twitch-text-muted hover:text-twitch-text"
            >
              <Twitter size={18} />
            </a>
          )}
          {profile.socials.email && (
            <a
              href={`mailto:${profile.socials.email}`}
              className="p-2 hover:bg-twitch-bg-lighter rounded-md transition-colors text-twitch-text-muted hover:text-twitch-text"
            >
              <Mail size={18} />
            </a>
          )}
        </div>

        <div className="w-px h-6 bg-twitch-bg-lighter mx-2 hidden md:block" />

        {/* Notifications */}
        <button className="relative p-2 hover:bg-twitch-bg-lighter rounded-md transition-colors">
          <Bell size={18} className="text-twitch-text-muted" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-twitch-accent-red rounded-full" />
        </button>

        {/* Profile */}
        <button className="flex items-center gap-2 p-1 hover:bg-twitch-bg-lighter rounded-md transition-colors">
          <div className="w-7 h-7 rounded-full bg-twitch-purple flex items-center justify-center overflow-hidden">
            <img
              src={profile.avatar}
              alt={profile.name}
              className="w-full h-full object-cover"
            />
          </div>
          <User size={16} className="text-twitch-text-muted hidden sm:block" />
        </button>

        {/* Contact Button */}
        <a
          href={`mailto:${profile.socials.email}`}
          className="hidden sm:flex btn-primary text-sm"
        >
          Contact Me
        </a>
      </div>
    </nav>
  )
}
