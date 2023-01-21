import { FC } from 'react'
import { Subscription } from '../../../../../types/subscription.types'
import { formatMoney, nth } from '../../../../../utils'

const MonthlySubscription: FC<Subscription> = subscription => {
	return (
		<div
			className='rounded-xl shadow-md dark:bg-dark-secondary dark:border-transparent border h-48 w-48 p-2 flex items-center flex-col justify-center'
			style={{ flex: '0 0 auto' }}
		>
			<img
				src={subscription.icon}
				style={{ height: '64px', margin: '10px 0' }}
			/>
			<p className='font-medium text-xl'>{subscription.subscription}</p>
			<p className='font-light text-gray-500 text-center'>
				{subscription.payDay}
				{nth(subscription.payDay)} of each month
			</p>
			<p className='font-medium'>{formatMoney(subscription.amount)}</p>
		</div>
	)
}

export default MonthlySubscription
