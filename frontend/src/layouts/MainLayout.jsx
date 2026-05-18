import AiAssistantWidget from '../components/AiAssistantWidget'
import FooterSection from '../sections/FooterSection'
import Navbar from '../sections/Navbar'

function MainLayout({ children, theme, onToggleTheme, branding }) {
  return (
    <div className="relative">
      <Navbar branding={branding} theme={theme} onToggleTheme={onToggleTheme} />
      <main>{children}</main>
      <FooterSection branding={branding} />
      <AiAssistantWidget />
    </div>
  )
}

export default MainLayout
