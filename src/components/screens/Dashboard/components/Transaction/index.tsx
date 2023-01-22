import moment from 'moment'
import { FC } from 'react'
import { Transaction as TTransaction } from '../../../../../types/transaction.types'
import { formatDateTime, formatMoney } from '../../../../../utils'

export const TransactionHeaders = () => (
	<div className='grid grid-cols-4 text-left text-xs xl:text-lg mb-2'>
		<p>Reciever</p>
		<p>Category</p>
		<p>Date</p>
		<p>Amount</p>
	</div>
)

const Transaction: FC<TTransaction> = props => {
	const { reciever, category, date, amount } = props

	const formattedDate = moment(date, 'DD/MM/YYYY').toDate()

	return (
		<div className='grid grid-cols-4 text-left text-xs xl:text-lg pb-1 border-b'>
			<p>{reciever}</p>
			<p className='text-gray-500 text-ellipsis whitespace-nowrap overflow-x-hidden'>
				{category}
			</p>
			<p className='text-gray-500 block usm:hidden sm:hidden md:block lg:hidden'>
				{formatDateTime(formattedDate, {
					day: 'numeric',
					month: 'short',
				})}
			</p>
			<p className='text-gray-500 hidden usm:block sm:block md:hidden lg:block'>
				{formatDateTime(formattedDate, {
					day: 'numeric',
					month: 'short',
					year: 'numeric',
				})}
			</p>
			<p className='font-medium'>{formatMoney(amount)}</p>
		</div>
	)
}

export default Transaction
