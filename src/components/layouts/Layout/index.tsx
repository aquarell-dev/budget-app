import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import Container from '../../ui/Container'
import Sidebar from '../../ui/Sidebar'

const Layout: FC = () => {
	return (
		<div className='min-h-screen'>
			<Sidebar />
			<Container>
				<Outlet />
			</Container>
		</div>
	)
}

export default Layout
