import { useState } from 'react'
import TopNav from './components/TopNav'
import Sidebar from './components/Sidebar'
import MainContent from './components/MainContent'
import { portfolioData } from './data/portfolio'

function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-twitch-bg">
      <TopNav />
      <div className="flex pt-[50px]">
        <Sidebar
          collapsed={sidebarCollapsed}
          onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
          categories={portfolioData.categories}
          activeCategory={activeCategory}
          onCategorySelect={setActiveCategory}
        />
        <MainContent
          sidebarCollapsed={sidebarCollapsed}
          activeCategory={activeCategory}
          onCategorySelect={setActiveCategory}
        />
      </div>
    </div>
  )
}

export default App
