'use client'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import NavigationView from './navigation-view'

import { toggleSidebar } from '@/redux/features/sidebar-slice'
import { useAppSelector, type AppDispatch } from '@/redux/store'
import { XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import logo from '/public/assets/images/logo.png'

export default function MobileNavigation() {
  const isOpen = useAppSelector((state) => state.sidebar.isOpen)
  const dispatch = useDispatch<AppDispatch>()

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50 lg:hidden"
        onClose={() => dispatch(toggleSidebar())}
      >
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-900/80" />
        </Transition.Child>

        <div className="fixed inset-0 flex">
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <Dialog.Panel className="relative mr-16 flex w-full max-w-[14rem] flex-1">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                  <button
                    type="button"
                    className="-m-2.5 p-2.5"
                    onClick={() => dispatch(toggleSidebar())}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XMarkIcon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </Transition.Child>

              <div className="flex grow flex-col gap-y-4 overflow-y-auto bg-white px-5 pb-4">
                <div className="flex h-14 shrink-0 items-center">
                  <Image
                    className="h-8 w-[9.5625rem]"
                    width={153}
                    height={32}
                    src={logo}
                    alt="Producter logo"
                  />
                </div>
                <div
                  className="-mt-4 h-px w-full bg-themeSeperator"
                  aria-hidden="true"
                />
                <NavigationView />
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
