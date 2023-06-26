import classNames from '@/utils/classnames'
import Image from 'next/image'
import Link from 'next/link'
import styles from './navigation-view.module.css'
import profilePhoto from '/public/assets/images/profile-photo.png'

import {
  BellIcon,
  CalendarIcon,
  ChatBubbleBottomCenterIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  PlusIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'

const navigation = [
  {
    name: 'Dashboard',
    href: '#',
    icon: HomeIcon,
    current: true,
  },
  { name: 'Feedback', href: '#', icon: UsersIcon, current: false },
  { name: 'Task', href: '#', icon: FolderIcon, current: false },
  { name: 'Roadmap', href: '#', icon: CalendarIcon, current: false },
  { name: 'Changelog', href: '#', icon: DocumentDuplicateIcon, current: false },
]
const bottomNavigation = [
  { id: 1, name: 'Invite people', href: '#', icon: PlusIcon, current: false },
  {
    id: 2,
    name: 'Help & Community',
    href: '#',
    icon: ChatBubbleBottomCenterIcon,
    current: false,
  },
  { id: 3, name: 'Notifications', href: '#', icon: BellIcon, current: false },
]
export default function NavigationView() {
  return (
    <nav className="flex flex-1 flex-col">
      <ul role="list" className="flex flex-1 flex-col gap-y-4">
        <li>
          <ul role="list" className="-mx-2 space-y-1">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-themeBlue text-white'
                      : 'text-themeDusk hover:bg-blue-100 hover:text-themeBlue',
                    `${styles.navigationItemLink} group`
                  )}
                >
                  <item.icon
                    className={classNames(
                      item.current
                        ? 'text-white'
                        : 'text-themeDusk group-hover:text-themeBlue',
                      'h-4 w-4 shrink-0'
                    )}
                    aria-hidden="true"
                  />
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </li>
        <li className="mt-auto">
          <ul role="list" className="-mx-2 mt-2 space-y-1">
            {bottomNavigation.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-themeBlue text-white'
                      : 'text-themeDusk hover:bg-blue-100 hover:text-themeBlue',
                    `${styles.navigationItemLink} group`
                  )}
                >
                  <item.icon
                    className={classNames(
                      item.current
                        ? 'text-white'
                        : 'text-themeDusk group-hover:text-themeBlue',
                      'h-4 w-4 shrink-0'
                    )}
                    aria-hidden="true"
                  />
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </li>
        <div className="h-px w-full bg-themeSeperator" aria-hidden="true" />
        <li>
          <Link href="#" className="-mx-1 flex items-center gap-x-2">
            <Image
              className={styles.activeProfilePhoto}
              width={32}
              height={32}
              src={profilePhoto}
              alt="Profile photo"
            />
            <span className={styles.activeProfileName}>Neil Larkins</span>
          </Link>
        </li>
        <div className="h-px w-full bg-themeSeperator" aria-hidden="true" />
        <li>
          <Link href="#" className="-mx-3 flex gap-x-2 p-2 text-sm leading-6">
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-themeYellow-400">
              <span className="text-[0.875rem] font-medium leading-4 tracking-[0.0175rem] text-white">
                E
              </span>
            </div>
            <span className={styles.activeProfileName}>Epodpay Inc.</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
