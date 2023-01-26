import { forwardRef, ReactNode } from 'react'
import { useActions } from '../../../hooks/useActions'
import { useTypedSelector } from '../../../hooks/useTypedSelector'

const PageHeader = forwardRef<HTMLDivElement, { children: ReactNode }>(
	(props, ref) => {
		const { children } = props

		const expanded = useTypedSelector(state => state.sidebar.expanded)

		const { toggleExpanded } = useActions()

		return (
			<div
				className='flex items-center w-full justify-between'
				ref={ref}
			>
				<h1 className='text-slate-800 dark:text-white text-3xl font-semibold'>
					{children}
				</h1>
				{!expanded && (
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						className='w-8 h-8 text-black hover:text-dark-secondary dark:text-white dark:hover:text-gray-100 cursor-pointer block md:hidden'
						onClick={() => toggleExpanded()}
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
						/>
					</svg>
				)}
			</div>
		)
	}
)

export default PageHeader
