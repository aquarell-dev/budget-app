import { FC } from 'react'
import { Bank } from '../../../../../types/banking.types'

import QiwiLogo from '../../../../../assets/images/qiwi.png'
import SberbankLogo from '../../../../../assets/images/sberbank.png'
import TinkoffLogo from '../../../../../assets/images/tinkoff.png'

const BankLogo: FC<{ bank: Bank }> = ({ bank }) => {
	return (
		<>
			{bank === 'sberbank' ? (
				<img
					src={SberbankLogo}
					className='w-8'
				/>
			) : bank === 'tinkoff' ? (
				<img
					src={TinkoffLogo}
					className='w-16'
				/>
			) : (
				<img
					src={QiwiLogo}
					className='w-16'
				/>
			)}
		</>
	)
}

export default BankLogo
