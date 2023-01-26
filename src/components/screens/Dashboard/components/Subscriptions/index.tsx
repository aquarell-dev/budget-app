import { FC } from 'react'
import { subscriptions } from '../../../../../utils/exmaple.data'
import MonthlySubscription from '../MonthlySubscription'

const Subscriptions: FC = () => {
	return (
		<div
			className='my-6 w-full'
			id='subscriptions'
		>
			<h3 className='font-medium text-2xl'>Monthly Outcomes</h3>
			<div className='grid grid-cols-2 usm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 place-items-center my-2 gap-y-8 gap-x-4'>
				{subscriptions.map(subscription => (
					<MonthlySubscription
						key={subscription.id}
						{...subscription}
					/>
				))}
			</div>
		</div>
	)
}

export default Subscriptions
