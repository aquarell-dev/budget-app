import { CSSProperties, FC, ReactNode } from 'react'

const ProgressBar: FC<{
	progress: number
	title: ReactNode
	actualValue?: ReactNode
	titleStyles?: CSSProperties
	progressBarStyle?: CSSProperties
	activeColor?: string
	notActiveColor?: string
	children?: ReactNode
}> = ({
	progressBarStyle,
	titleStyles,
	title,
	progress,
	activeColor,
	notActiveColor,
	actualValue,
	children,
}) => {
	return (
		<div className='flex flex-col space-y-2'>
			<h3
				style={{
					...titleStyles,
					fontSize: titleStyles?.fontSize ?? '18px',
				}}
			>
				{title}
			</h3>
			{children}
			<div
				style={{
					...progressBarStyle,
					width: progressBarStyle?.width ?? '100%',
					height: '18px',
					display: 'flex',
				}}
			>
				<div
					style={{
						width: `${progress}%`,
						backgroundColor: activeColor ?? '#384e42',
					}}
				/>
				<div
					style={{
						width: `${100 - progress}%`,
						backgroundColor: notActiveColor ?? '#edefec',
					}}
				/>
			</div>
			<div className='flex flex-row-reverse text-sm items-center justify-between'>
				<p>{progress}%</p>
				<p>{actualValue}</p>
			</div>
		</div>
	)
}

export default ProgressBar
