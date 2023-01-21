import { useDispatch } from 'react-redux'

import { bindActionCreators } from '@reduxjs/toolkit'
import { preferencesActions } from '../store/features/preferences.slice'
import { sidebarActions } from '../store/features/sidebar.slice'

const actions = {
	...preferencesActions,
	...sidebarActions,
}

export const useActions = () => {
	const dispatch = useDispatch()

	return bindActionCreators(actions, dispatch)
}
