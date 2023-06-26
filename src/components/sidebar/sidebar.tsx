import DesktopNavigation from './desktop-navigation'
import MobileNavigation from './mobile-navigation'

export default function Sidebar() {
  return (
    <>
      <MobileNavigation />
      <DesktopNavigation />
    </>
  )
}
