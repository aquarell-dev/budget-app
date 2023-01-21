import { FC } from 'react'

import { Goal as TGoal } from '../../../../../types/goal.types'
import Icon from '../../../../ui/Icon'
import Goal from '../Goal'

const goals: TGoal[] = [
	{
		id: 1,
		budget: 80000,
		goal: 'Машина',
		date: '24 Mar 2023',
	},
	{
		id: 2,
		budget: 12000,
		goal: 'Окна',
		date: '24 Jan 2023',
	},
	{
		id: 3,
		budget: 65000,
		goal: 'Сочи',
		date: '1 Jun 2023',
	},
]

const Goals: FC = () => {
	return (
		<div className='w-full flex flex-col space-y-2'>
			<div className='w-fit'>
				<Icon
					title='Goals'
					reveresed
					titleStyles={{
						fontSize: '1.5rem',
						fontWeight: 500,
						marginRight: '10px',
					}}
					iconAdditionalClassName='cursor-pointer dark:bg-dark-secondary hover:bg-gray-100 dark:hover:bg-dark-hover-secondary component-transition'
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						className='w-6 h-6'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M12 6v12m6-6H6'
						/>
					</svg>
				</Icon>
			</div>
			<div className='flex space-x-4 overflow-x-auto'>
				{goals.map(goal => (
					<Goal
						key={goal.id}
						{...goal}
					/>
				))}
			</div>
		</div>
	)
}

export default Goals
