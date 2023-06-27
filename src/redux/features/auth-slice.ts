import { createSlice } from '@reduxjs/toolkit'
import profilePhoto from '/public/assets/images/profile-photo.png'

import { StaticImageData } from 'next/image'

export type AuthState = {
  isAuthenticated: boolean
  user: string
  photo: StaticImageData
  company: string
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: 'Neil Larkins',
  photo: profilePhoto,
  company: 'Epodpay Inc.',
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state) => {
      state.isAuthenticated = true
    },
  },
})

export const { login } = authSlice.actions
export default authSlice.reducer
