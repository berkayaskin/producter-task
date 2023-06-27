import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useSelector } from 'react-redux'
import authReducer from './features/auth-slice'
import sidebarReducer from './features/sidebar-slice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    sidebar: sidebarReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
