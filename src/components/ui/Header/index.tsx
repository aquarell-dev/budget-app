import { FC } from 'react'
import PageHeader from '../PageHeader'
import ResponsibleSectionNavigation from '../ResponsibleSectionNavigation'
import { ResponsibleSectionNavigationProps } from '../ResponsibleSectionNavigation/navigation.types'

type HeaderProps = {
	pageTitle: string
	navigation?: ResponsibleSectionNavigationProps
}

const Header: FC<HeaderProps> = ({ pageTitle, navigation }) => {
	return (
		<>
			<PageHeader>{pageTitle}</PageHeader>
			{navigation ? (
				<ResponsibleSectionNavigation {...navigation} />
			) : (
				<div className='mb-6' />
			)}
		</>
	)
}

export default Header
