import { FC, ReactNode, useEffect, useRef, useState } from 'react'
import { cn } from '../../../utils'

type DonuChartProps = {
	percentage: number
	children?: ReactNode
	size?: number | string
	className?: string
	borderThickness?: number
}

const DonutProgressBar: FC<DonuChartProps> = ({
	percentage,
	children,
	size,
	className,
	borderThickness = 30,
}) => {
	const ref = useRef<HTMLDivElement>(null)

	const [activeDegrees, setActiveDegrees] = useState(0)

	useEffect(() => {
		setActiveDegrees(Math.ceil((360 * percentage) / 100))
	}, [percentage])

	const borderSize = ref.current?.offsetWidth
		? ref.current.offsetWidth - borderThickness
		: '20%'

	return (
		<>
			<div
				className={cn('rounded-full', className)}
				style={{
					width: size ?? '100%',
					height: size ?? '100%',
					background: `conic-gradient(#384e42 0deg ${activeDegrees}deg, #edefec ${activeDegrees}deg 360deg)`,
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}
				ref={ref}
			>
				<div
					style={{
						width: borderSize,
						height: borderSize,
						borderRadius: '50%',
						background: '#fff',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					{children}
				</div>
			</div>
		</>
	)
}

export default DonutProgressBar
