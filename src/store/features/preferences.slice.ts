import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Preferences } from '../../types/preferences.types'
import { getStateFromLocalStorage } from '../../utils'
import { preferencesLocalStorageKey } from '../localStorageKeys'

const initialState: Preferences = getStateFromLocalStorage<Preferences>(
	preferencesLocalStorageKey
) ?? {
	theme: 'dark',
	currency: 'RUB',
	language: 'english',
}

export const preferencesSlice = createSlice({
	name: 'preferences',
	initialState,
	reducers: {
		patchPreferences: (state, action: PayloadAction<Partial<Preferences>>) => {
			const { theme } = action.payload

			state = { ...state }
		},
		toggleTheme: state => {
			state.theme = state.theme === 'dark' ? 'light' : 'dark'
		},
	},
})

export const preferencesActions = preferencesSlice.actions

export const { patchPreferences, toggleTheme } = preferencesSlice.actions
