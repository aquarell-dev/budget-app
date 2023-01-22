import { createSlice } from '@reduxjs/toolkit'

export const sidebarSlice = createSlice({
	name: 'sidebar',
	initialState: { expanded: false },
	reducers: {
		toggleExpanded: state => {
			state.expanded = !state.expanded
		},
		closeSidebar: state => {
			state.expanded = false
		},
	},
})

export const sidebarActions = sidebarSlice.actions

export const sidebarReducer = sidebarSlice.reducer
