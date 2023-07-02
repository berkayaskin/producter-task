'use client'

import { useAppSelector } from '@/redux/store'
import classNames from '@/utils/classnames'

export default function Template({ children }: { children: React.ReactNode }) {
  const fullScreen = useAppSelector((state) => state.sidebar.fullScreen)
  return (
    <main
      className={classNames(
        fullScreen ? 'lg:pl-0' : 'lg:pl-[11.5625rem]',
        'relative h-[calc(100vh-3.5rem)] bg-themeBackground transition-all duration-300'
      )}
    >
      {children}
    </main>
  )
}
