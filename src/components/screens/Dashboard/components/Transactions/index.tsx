import { FC } from 'react'
import { Transaction as TTransaction } from '../../../../../types/transaction.types'
import { BlackBorderedButton } from '../../../../ui/Button'
import Transaction, { TransactionHeaders } from '../Transaction'

const Transactions: FC<{
	title: string
	transactions: TTransaction[]
}> = ({ title, transactions }) => {
	return (
		<div className='flex flex-col space-y-2'>
			<div className='flex space-x-4 items-center'>
				<h1 className='font-medium text-xl'>{title}</h1>
				<BlackBorderedButton>New Transaction</BlackBorderedButton>
			</div>
			<div className='grid grid-cols-1 min-w-[750px] w-full gap-y-4 rounded-md shadow-xl p-4 border'>
				<TransactionHeaders />
				{transactions.map(transaction => (
					<Transaction
						key={transaction.id}
						{...transaction}
					/>
				))}
			</div>
		</div>
	)
}

export default Transactions
