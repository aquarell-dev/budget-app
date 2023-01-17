import { FC } from 'react'
import Header from './components/Header'
import Pages from './components/Pages'
import SidebarContainer from './components/SidebarContainer'
import SidebarSearch from './components/SidebarSearch'
import User from './components/User'

const Sidebar: FC = () => {
	return (
		<div
			className='fixed w-[350px] top-0 min-h-screen'
			style={{ backgroundColor: '#0e1511' }}
		>
			<SidebarContainer>
				<Header />
				<SidebarSearch />
				<Pages />
				<User />
			</SidebarContainer>
		</div>
	)
}

export default Sidebar
