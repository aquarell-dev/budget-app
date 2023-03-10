import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { preferencesSlice } from './features/preferences.slice'
import { sidebarSlice } from './features/sidebar.slice'
import preferencesMiddleware from './middlewares/preferences.middleware'

export const store = configureStore({
	reducer: {
		preferences: preferencesSlice.reducer,
		sidebar: sidebarSlice.reducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(preferencesMiddleware),
	devTools: true,
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
