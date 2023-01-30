import { FC } from 'react'
import { LoadingComponentProps } from '../../../types/mutual.component.types'
import { formatDateTime, formatMoney } from '../../../utils'
import { DefaultSkeleton } from '../Skeleton'

const Balance: FC<
	{ title?: string; amount: number } & LoadingComponentProps
> = ({ title, amount, loading }) => {
	return (
		<div className='flex flex-col space-y-2 w-full'>
			<h3 className='font-medium text-2xl'>{title ?? 'Balance'}</h3>
			{loading ? (
				<DefaultSkeleton />
			) : (
				<div className='w-full px-4 py-6 shadow-2xl border dark:border-transparent rounded-sm bg-[#f0f2ef] dark:bg-dark-secondary'>
					<p className='text-xl'>{formatMoney(amount)}</p>
					<p className='font-light text-lg'>{formatDateTime(new Date())}</p>
				</div>
			)}
		</div>
	)
}

export default Balance
