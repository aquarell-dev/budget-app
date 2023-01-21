import { CSSProperties, FC, HTMLProps, ReactNode } from 'react'
import { cn } from '../../../utils'

export type IconProps = {
	title: string
	children?: ReactNode
	titleStyles?: CSSProperties
	reveresed?: boolean
	iconProps?: HTMLProps<HTMLDivElement>
	iconAdditionalClassName?: string
}

const Icon: FC<IconProps> = props => {
	return (
		<div
			className={cn(
				'flex items-center space-x-1',
				props.reveresed ? 'flex-row-reverse' : 'flex-row'
			)}
		>
			<div
				className={cn(
					'h-6 w-6 bg-[#f7fbfa] border dark:border-transparent rounded-full flex items-center justify-center',
					props?.iconAdditionalClassName
				)}
				style={{
					...props.iconProps?.style,
					flex: '0 0 auto',
				}}
				{...props.iconProps}
			>
				{props.children}
			</div>
			<p style={props.titleStyles}>{props.title}</p>
		</div>
	)
}

export default Icon
