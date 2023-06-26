import NavigationView from './navigation-view'

export default function DesktopNavigation() {
  return (
    <div className="hidden pt-14 lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-[11.5625rem] lg:flex-col">
      <div className="flex grow flex-col gap-y-4 overflow-y-auto border-r  border-themeSeperator bg-white px-5 pb-7 pt-6">
        <NavigationView />
      </div>
    </div>
  )
}
