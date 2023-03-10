import { FC } from 'react'
import { Goal as TGoal } from '../../../../../types/goal.types'
import { formatMoney } from '../../../../../utils'
import Icon from '../../../../ui/Icon'

const Goal: FC<TGoal> = goal => {
	return (
		<div
			className='w-48 h-48 bg-[#f8faf7] dark:bg-dark-secondary basis-full shadow-md p-4 flex flex-col justify-between'
			style={{ flex: '0 0 auto' }}
		>
			<div className='flex flex-col space-y-0.5'>
				<Icon
					title={goal.goal}
					titleStyles={{
						fontSize: '1.25rem',
						fontWeight: 500,
						textOverflow: 'ellipsis',
						overflow: 'hidden',
						whiteSpace: 'nowrap',
					}}
				/>
				<p className='text-sm font-light'>Until {goal.date}</p>
			</div>

			<div>
				<p className='text-sm'>Budget</p>
				<p className='text-lg font-medium'>{formatMoney(goal.budget)}</p>
			</div>
		</div>
	)
}

export default Goal
