'use client'
import { toggleSidebar } from '@/redux/features/sidebar-slice'
import { AppDispatch } from '@/redux/store'
import {
  AdjustmentsVerticalIcon,
  Bars3Icon,
  FunnelIcon,
  MagnifyingGlassIcon,
  PlusIcon,
} from '@heroicons/react/24/outline'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import styles from './navbar.module.css'
import logo from '/public/assets/images/logo.png'

export default function Navbar() {
  const dispatch = useDispatch<AppDispatch>()

  return (
    <nav className="sticky top-0 z-50">
      <div className={styles.wrapper}>
        <button
          type="button"
          className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
          onClick={() => dispatch(toggleSidebar())}
        >
          <span className="sr-only">Open sidebar</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
        <Image
          className="hidden h-8 w-[9.5625rem] lg:block"
          width={153}
          height={32}
          src={logo}
          alt="Producter logo"
        />

        <div
          className="ml-[-6px] hidden h-8 w-px bg-themeSeperator lg:block"
          aria-hidden="true"
        />

        <div className="flex h-8 flex-1 gap-x-2">
          <form className="relative w-[12.5rem]" action="#" method="GET">
            <label htmlFor="search-field" className="sr-only">
              Search
            </label>
            <MagnifyingGlassIcon
              className="pointer-events-none absolute inset-y-0 ml-2 h-full w-4 text-themeGray"
              aria-hidden="true"
            />
            <input
              id="search-field"
              className="block h-full w-full rounded-[4px] border-0 bg-themeLightGray py-0 pl-8 pr-2 text-xs tracking-[0.015rem] text-themeDusk placeholder:text-themeGray focus:ring-0"
              placeholder="Search"
              type="search"
              name="search"
            />
          </form>

          <button type="button" className={styles.controlButton}>
            <span className="sr-only">View controls</span>
            <AdjustmentsVerticalIcon className="h-6 w-6" aria-hidden="true" />
          </button>
          <button type="button" className={styles.controlButton}>
            <span className="sr-only">View filters</span>
            <FunnelIcon className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <button type="button" className={styles.taskItemButton}>
          <span className="sr-only">Add task items</span>
          <PlusIcon className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </nav>
  )
}
