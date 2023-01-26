import { FC } from 'react'
import { useInView } from 'react-intersection-observer'
import PageHeader from '../PageHeader'
import ResponsibleSectionNavigation from '../ResponsibleSectionNavigation'
import { ResponsibleSectionNavigationProps } from '../ResponsibleSectionNavigation/navigation.types'

type HeaderProps = {
	pageTitle: string
	navigation?: ResponsibleSectionNavigationProps
}

const Header: FC<HeaderProps> = ({ pageTitle, navigation }) => {
	const { inView, ref } = useInView({
		threshold: 0,
	})

	return (
		<div className='relative'>
			<PageHeader ref={ref}>{pageTitle}</PageHeader>
			{navigation ? (
				<div className='2xl:hidden'>
					<ResponsibleSectionNavigation
						shouldBeFixed={!inView}
						{...navigation}
					/>
				</div>
			) : (
				<div className='mb-6' />
			)}
		</div>
	)
}

export default Header
