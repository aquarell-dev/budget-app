import { FC } from 'react'
import ContentLoader from 'react-content-loader'

const StatisticSkeleton: FC = () => {
	return (
		<ContentLoader
			speed={2}
			width={340}
			height={84}
			viewBox='0 0 340 84'
			backgroundColor='#f3f1f5'
			foregroundColor='#ecebeb'
			{...props}
		>
			<rect
				x='549'
				y='139'
				rx='0'
				ry='0'
				width='59'
				height='39'
			/>
			<circle
				cx='21'
				cy='19'
				r='16'
			/>
			<rect
				x='41'
				y='11'
				rx='0'
				ry='0'
				width='88'
				height='16'
			/>
			<rect
				x='10'
				y='39'
				rx='0'
				ry='0'
				width='325'
				height='19'
			/>
			<rect
				x='8'
				y='69'
				rx='0'
				ry='0'
				width='90'
				height='20'
			/>
			<rect
				x='252'
				y='64'
				rx='0'
				ry='0'
				width='84'
				height='20'
			/>
			<rect
				x='67'
				y='74'
				rx='0'
				ry='0'
				width='2'
				height='1'
			/>
		</ContentLoader>
	)
}

export default StatisticSkeleton
