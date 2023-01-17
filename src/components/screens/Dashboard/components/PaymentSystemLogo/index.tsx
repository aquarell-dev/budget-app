import { FC } from 'react'
import MasterCardLogo from '../../../../../assets/images/mastercard.png'
import MirLogo from '../../../../../assets/images/mir.png'
import VisaLogo from '../../../../../assets/images/visa.png'
import { PaymentSystem as TPaymentSystem } from '../../../../../types/banking.types'

const PaymentSystemLogo: FC<{ paymentSystem: TPaymentSystem }> = ({
	paymentSystem,
}) => {
	return (
		<>
			{paymentSystem === 'mir' ? (
				<img
					src={MirLogo}
					className='w-16'
				/>
			) : paymentSystem === 'visa' ? (
				<img
					src={VisaLogo}
					className='w-12'
				/>
			) : (
				<img
					src={MasterCardLogo}
					className='w-16'
				/>
			)}
		</>
	)
}

export default PaymentSystemLogo
