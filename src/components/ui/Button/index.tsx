import { FC, HTMLProps, ReactNode } from 'react'
import { cn } from '../../../utils'

type ButtonProps = HTMLProps<HTMLButtonElement> & {
	children: ReactNode
	additionalStyles?: string
	type?: 'reset' | 'submit' | 'button'
}

export const BlackBorderedButton: FC<ButtonProps> = ({
	children,
	additionalStyles,
	...buttonProps
}) => {
	return (
		<button
			className={cn(
				'px-4 py-2 font-medium border border-black hover:bg-gray-100 cursor-pointer transition duration-300 ease-in-out flex items-center justify-center',
				additionalStyles
			)}
			{...buttonProps}
		>
			{children}
		</button>
	)
}
