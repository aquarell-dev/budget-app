import { FC } from 'react'
import { Subscription } from '../../../../../types/subscription.types'
import { formatMoney, nth } from '../../../../../utils'

const MonthlySubscription: FC<Subscription> = subscription => {
	return (
		<div
			className='rounded-xl shadow-md dark:bg-dark-secondary dark:border-transparent border h-36 w-36 xl:w-48 xl:h-48 p-2 flex items-center flex-col justify-center text-center'
			style={{ flex: '0 0 auto' }}
		>
			<img
				src={subscription.icon}
				className='h-8 xl:h-16 my-3'
			/>
			<p className='font-medium text-sm xl:text-xl'>
				{subscription.subscription}
			</p>
			<p className='text-sm font-light text-gray-500 text-center'>
				{subscription.payDay}
				{nth(subscription.payDay)} of each month
			</p>
			<p className='text-sm xl:text-lg font-medium'>
				{formatMoney(subscription.amount)}
			</p>
		</div>
	)
}

export default MonthlySubscription
