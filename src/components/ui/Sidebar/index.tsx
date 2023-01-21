import { FC } from 'react'
import { useActions } from '../../../hooks/useActions'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import { cn } from '../../../utils'
import SidebarContainer from './components/SidebarContainer'
import SidebarContent from './components/SidebarContent'

const Sidebar: FC = () => {
	const expanded = useTypedSelector(state => state.sidebar.expanded)

	const { toggleExpanded } = useActions()

	return (
		<div
			className={cn(
				'fixed w-screen z-50 sm:w-[350px] component-transition top-0 min-h-screen shadow-xl',
				!expanded ? '-translate-x-full md:translate-x-0' : ''
			)}
			style={{ backgroundColor: '#0e1511' }}
		>
			<SidebarContainer>
				<div className='block md:hidden'>
					<div
						className='absolute top-0 right-0 m-4 cursor-pointer'
						onClick={() => toggleExpanded()}
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className='w-6 h-6 text-white hover:text-gray-100'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M6 18L18 6M6 6l12 12'
							/>
						</svg>
					</div>
					<SidebarContent />
				</div>
				<div className='hidden md:block'>
					<SidebarContent />
				</div>
			</SidebarContainer>
		</div>
	)
}

export default Sidebar
