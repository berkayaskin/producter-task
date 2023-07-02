import { createSlice } from '@reduxjs/toolkit'

export type SidebarState = {
  isOpen: boolean
  fullScreen: boolean
}

const initialState: SidebarState = {
  isOpen: false,
  fullScreen: false,
}

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isOpen = !state.isOpen
    },
    showFullScreen: (state) => {
      state.fullScreen = !state.fullScreen
    },
  },
})

export const { toggleSidebar, showFullScreen } = sidebarSlice.actions
export default sidebarSlice.reducer
