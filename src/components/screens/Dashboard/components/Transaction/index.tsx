import { FC } from 'react'
import { Transaction as TTransaction } from '../../../../../types/transaction.types'
import { formatMoney } from '../../../../../utils'

export const TransactionHeaders = () => (
	<div className='grid grid-cols-4 text-left text-lg mb-2'>
		<p>Reciever</p>
		<p>Category</p>
		<p>Date</p>
		<p>Amount</p>
	</div>
)

const Transaction: FC<TTransaction> = props => {
	const { reciever, category, date, amount } = props

	return (
		<div className='grid grid-cols-4 text-left text-lg pb-1 border-b'>
			<p>{reciever}</p>
			<p className='text-gray-500'>{category}</p>
			<p className='text-gray-500'>{date}</p>
			<p className='font-medium'>{formatMoney(amount)}</p>
		</div>
	)
}

export default Transaction
