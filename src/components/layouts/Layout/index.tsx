import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import Container from '../../ui/Container'
import ScrollToTop from '../../ui/ScrollToTop'
import Sidebar from '../../ui/Sidebar'

const Layout: FC = () => {
	return (
		<div className='min-h-screen dark:bg-dark-primary dark:text-gray-200'>
			<Sidebar />
			<Container>
				<Outlet />
			</Container>
			<ScrollToTop />
		</div>
	)
}

export default Layout
