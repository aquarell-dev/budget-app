import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Layout from './components/layouts/Layout'

import Analysis from './components/screens/Analysis'
import Dashboard from './components/screens/Dashboard'
import Settings from './components/screens/Settings'
import { useTypedSelector } from './hooks/useTypedSelector'

const App = () => {
	const theme = useTypedSelector(state => state.preferences.theme)

	return (
		<main className={theme}>
			<BrowserRouter>
				<Routes>
					<Route
						path='/'
						element={<Layout />}
					>
						<Route
							index
							element={<Dashboard />}
						/>
						<Route
							path='/analytics'
							element={<Analysis />}
						/>
						<Route
							path='/settings'
							element={<Settings />}
						/>
					</Route>
				</Routes>
			</BrowserRouter>
		</main>
	)
}

export default App
