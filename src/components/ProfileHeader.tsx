import { MapPin, Users, UserPlus, Github, Linkedin, Twitter, Mail, CheckCircle } from 'lucide-react'
import { portfolioData } from '../data/portfolio'

export default function ProfileHeader() {
  const { profile } = portfolioData

  return (
    <div className="relative">
      {/* Banner */}
      <div className="h-[200px] md:h-[280px] overflow-hidden">
        <img
          src={profile.banner}
          alt="Profile banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-twitch-bg via-transparent to-transparent" />
      </div>

      {/* Profile Info */}
      <div className="relative px-4 md:px-8 -mt-16 md:-mt-20">
        <div className="flex flex-col md:flex-row md:items-end gap-4 max-w-7xl mx-auto">
          {/* Avatar */}
          <div className="relative">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-twitch-bg overflow-hidden bg-twitch-bg-light">
              <img
                src={profile.avatar}
                alt={profile.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Online Status */}
            <div className="absolute bottom-2 right-2 w-5 h-5 bg-twitch-accent-green rounded-full border-3 border-twitch-bg" />
          </div>

          {/* Info */}
          <div className="flex-1 pb-4">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <h1 className="text-2xl md:text-3xl font-bold">{profile.name}</h1>
              <CheckCircle className="w-5 h-5 text-twitch-purple fill-twitch-purple" />
            </div>
            <p className="text-twitch-purple font-medium mb-2">{profile.title}</p>
            <p className="text-twitch-text-muted text-sm max-w-xl mb-3">
              {profile.bio}
            </p>

            {/* Stats & Location */}
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <div className="flex items-center gap-1 text-twitch-text-muted">
                <Users size={16} />
                <span>
                  <strong className="text-twitch-text">{profile.followers.toLocaleString()}</strong> followers
                </span>
              </div>
              <div className="flex items-center gap-1 text-twitch-text-muted">
                <UserPlus size={16} />
                <span>
                  <strong className="text-twitch-text">{profile.following}</strong> following
                </span>
              </div>
              <div className="flex items-center gap-1 text-twitch-text-muted">
                <MapPin size={16} />
                <span>{profile.location}</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 pb-4">
            <div className="hidden md:flex items-center gap-2">
              {profile.socials.github && (
                <a
                  href={profile.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-twitch-bg-lighter hover:bg-twitch-bg-card rounded-md transition-colors"
                >
                  <Github size={20} />
                </a>
              )}
              {profile.socials.linkedin && (
                <a
                  href={profile.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-twitch-bg-lighter hover:bg-twitch-bg-card rounded-md transition-colors"
                >
                  <Linkedin size={20} />
                </a>
              )}
              {profile.socials.twitter && (
                <a
                  href={profile.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-twitch-bg-lighter hover:bg-twitch-bg-card rounded-md transition-colors"
                >
                  <Twitter size={20} />
                </a>
              )}
            </div>
            <a
              href={`mailto:${profile.socials.email}`}
              className="flex items-center gap-2 btn-primary"
            >
              <Mail size={18} />
              <span>Contact</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
