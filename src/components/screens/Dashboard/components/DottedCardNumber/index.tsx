import { FC } from 'react'

const DottedCardNumber: FC<{ lastFourDigits: string[] }> = ({
	lastFourDigits,
}) => {
	return (
		<div className='flex items-center space-x-3'>
			{Array.from({ length: 4 }).map((el, idx) => (
				<div
					key={idx}
					className='flex items-center space-x-0.5'
				>
					{idx === 3
						? lastFourDigits.map((digit, idx) => <p key={idx}>{digit}</p>)
						: Array.from({ length: 4 }).map((x, idx) => (
								<div
									key={idx}
									className='h-2 w-2 bg-white rounded-full'
								/>
						  ))}
				</div>
			))}
		</div>
	)
}

export default DottedCardNumber
