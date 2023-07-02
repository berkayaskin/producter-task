'use client'
import { showFullScreen } from '@/redux/features/sidebar-slice'
import { AppDispatch, useAppSelector } from '@/redux/store'
import { useDispatch } from 'react-redux'

import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowsUpDownIcon,
  CalendarIcon,
  ListBulletIcon,
  RectangleGroupIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'

export default function PageHeader() {
  const dispatch = useDispatch<AppDispatch>()
  const fullScreen = useAppSelector((state) => state.sidebar.fullScreen)

  return (
    <>
      <div className="flex w-full flex-wrap items-center p-2 sm:px-6 sm:py-5 md:h-16">
        <button
          className="mr-2 hidden lg:block"
          onClick={() => dispatch(showFullScreen())}
        >
          {fullScreen ? (
            <ArrowRightIcon className="h-6 w-6 text-themeDusk" />
          ) : (
            <ArrowLeftIcon className="h-6 w-6 text-themeDusk" />
          )}
        </button>
        <div className="mx-2 hidden h-6 w-px bg-themeSecondarySeperator lg:block" />
        <ul className="flex flex-1 flex-wrap items-center space-x-1 text-[0.8125rem] font-light leading-6 sm:space-x-2">
          <li className="inline-flex shrink-0 items-center space-x-1 text-themeDusk">
            <div className="h-4 w-4 items-center justify-center rounded bg-themeDusk">
              <ArrowsUpDownIcon className="p-[3px] text-white" />
            </div>
            <span>SPR-06</span>
          </li>
          <div className="h-6 w-px bg-themeSecondarySeperator" />
          <li className="inline-flex shrink-0 items-center space-x-1 text-themeDusk">
            <div className="h-4 w-4 items-center justify-center rounded bg-themeBlue">
              <UsersIcon className="p-[3px] text-white" />
            </div>
            <span>TEAM-10</span>
          </li>
          <div className="h-6 w-px bg-themeSecondarySeperator" />
          <li className="inline-flex flex-wrap items-center text-themeDusk">
            <span className="mr-3 font-medium">New Sprint Name</span>
            <CalendarIcon className="mr-4 h-4 w-4 text-themeRed" />
            <UsersIcon className="mr-6 h-4 w-4 text-themeDusk" />
            <button className="rounded bg-themeBlue/[0.07] px-3 py-2 font-medium leading-normal tracking-[0.01625rem] text-themeBlue">
              Complete Sprint
            </button>
          </li>
        </ul>
        <div className="mr-2 h-6 w-px bg-themeSecondarySeperator" />
        <div className="flex items-center">
          <button className="mr-3 flex h-6 w-6 shrink-0 items-center justify-center rounded bg-themeGray/10">
            <ListBulletIcon className="h-4 w-4 rounded border border-themeGray p-[0.05rem] text-themeGray" />
          </button>
          <button className="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-themeBlue">
            <RectangleGroupIcon className="h-4 w-4 p-[0.05rem] text-white" />
          </button>
        </div>
      </div>
      <div className="h-px w-full bg-themeSecondarySeperator" />
    </>
  )
}
