import { FC } from 'react'
import { formatMoney } from '../../../../../utils'
import DottedCardNumber from '../DottedCardNumber'

import { BankCard as TBankCard } from '../../../../../types/banking.types'

const BankCard: FC<TBankCard> = ({
	cardHolder,
	expirationDate,
	balance,
	paymentSystem,
	bank,
	lastFourDigigts,
}) => {
	return (
		<div className='h-48 w-full sm:w-96 md:w-72 slider-mobile:w-96 mx-auto rounded-xl shadow-xl bg-[#0e1511] dark:bg-dark-secondary text-white p-4'>
			<p className='font-medium text-xl'>{cardHolder}</p>
			<div className='flex flex-col space-y-1 my-4'>
				<DottedCardNumber lastFourDigits={String(lastFourDigigts).split('')} />
				<p className='text-sm text-gray-300'>{expirationDate}</p>
			</div>
			<div className='mt-3 border-t px-4 py-2 flex justify-between items-center'>
				<div className='flex flex-col'>
					<p className='text-sm'>Total Balance</p>
					<p className='font-medium text-lg'>{formatMoney(balance)}</p>
				</div>
				{/* <div className='flex items-center space-x-2'>
					<BankLogo bank={bank} />
					<PaymentSystemLogo paymentSystem={paymentSystem} />
				</div> */}
			</div>
		</div>
	)
}

export default BankCard
