import { FC } from 'react'
import { formatDateTime, formatMoney } from '../../../utils'

const Balance: FC<{ title?: string; amount: number }> = ({ title, amount }) => {
	return (
		<div className='flex flex-col space-y-2 w-96'>
			<h3 className='font-medium text-2xl'>{title ?? 'Balance'}</h3>
			<div className='w-full px-4 py-6 shadow-2xl border dark:border-transparent rounded-sm bg-[#f0f2ef] dark:bg-dark-secondary'>
				<p className='text-xl'>{formatMoney(amount)}</p>
				<p className='font-light text-lg'>{formatDateTime(new Date())}</p>
			</div>
		</div>
	)
}

export default Balance
