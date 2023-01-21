import { FC } from 'react'
import Header from '../Header'
import Pages from '../Pages'
import SidebarSearch from '../SidebarSearch'
import User from '../User'

const SidebarContent: FC = () => (
	<>
		<Header />
		<SidebarSearch />
		<Pages />
		<User />
	</>
)

export default SidebarContent
