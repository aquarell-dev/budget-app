import { useDispatch } from 'react-redux'

import { bindActionCreators } from '@reduxjs/toolkit'
import { preferencesActions } from '../store/features/preferences.slice'

const actions = {
	...preferencesActions,
}

export const useActions = () => {
	const dispatch = useDispatch()

	return bindActionCreators(actions, dispatch)
}
