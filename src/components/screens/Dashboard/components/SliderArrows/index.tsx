import { FC, ReactNode } from 'react'
import { cn } from '../../../../../utils'

type ArrowProps = { onClick: () => void }

const Arrow: FC<
	ArrowProps & { arrowDirection: 'left' | 'right'; children: ReactNode }
> = ({ children, onClick, arrowDirection }) => {
	return (
		<div
			className={cn(
				'absolute top-1/2 -mx-12 -translate-y-1/2 w-8 h-8 rounded-full shadow-lg bg-white dark:bg-dark-secondary flex items-center justify-center hover:bg-gray-100 dark:hover:bg-dark-hover-secondary component-transition cursor-pointer',
				arrowDirection === 'left' ? 'right-0' : 'left-0'
			)}
		>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				fill='none'
				viewBox='0 0 24 24'
				strokeWidth={1.5}
				stroke='currentColor'
				className='w-6 h-6'
				onClick={onClick}
			>
				{children}
			</svg>
		</div>
	)
}

export const LeftArrow: FC<ArrowProps> = ({ onClick }) => (
	<Arrow
		onClick={onClick}
		arrowDirection={'right'}
	>
		<path
			strokeLinecap='round'
			strokeLinejoin='round'
			d='M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75'
		/>
	</Arrow>
)

export const RightArrow: FC<ArrowProps> = ({ onClick }) => (
	<Arrow
		onClick={onClick}
		arrowDirection={'left'}
	>
		<path
			strokeLinecap='round'
			strokeLinejoin='round'
			d='M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75'
		/>
	</Arrow>
)
