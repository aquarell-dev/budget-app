import { FC } from 'react'
import ContentLoader, { IContentLoaderProps } from 'react-content-loader'
import { useTypedSelector } from '../../../../../hooks/useTypedSelector'

const DefaultSkeleton: FC<IContentLoaderProps> = props => {
	const theme = useTypedSelector(state => state.preferences.theme)

	return (
		<ContentLoader
			speed={2}
			viewBox='0 0 340 84'
			backgroundColor='#18181b'
			foregroundColor='#27272a'
			{...props}
			height={props.height ?? '100%'}
			width={props.width ?? '100%'}
		>
			<rect
				x='1'
				y='2'
				rx='0'
				ry='0'
				width='100%'
				height='100%'
			/>
		</ContentLoader>
	)
}

export default DefaultSkeleton
