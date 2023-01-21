import { Middleware, PayloadAction } from '@reduxjs/toolkit'
import { preferencesLocalStorageKey } from '../localStorageKeys'
import { RootState } from '../store'

const preferencesMiddleware: Middleware =
	store => next => (action: PayloadAction) => {
		const result = next(action) // so store changes, and we can get the new state and sync it

		if (action.type.startsWith('preferences')) {
			const preferencesState = (store.getState() as RootState).preferences

			localStorage.setItem(
				preferencesLocalStorageKey,
				JSON.stringify(preferencesState)
			)
		}

		return result
	}

export default preferencesMiddleware
