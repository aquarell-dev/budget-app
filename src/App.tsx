import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Layout from './components/layouts/Layout'

import Analysis from './components/screens/Analysis'
import Dashboard from './components/screens/Dashboard'
import Settings from './components/screens/Settings'

const App = () => {
	return (
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
						path='/analysis'
						element={<Analysis />}
					/>
					<Route
						path='/settings'
						element={<Settings />}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
