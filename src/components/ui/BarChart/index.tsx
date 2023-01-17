import { ChartData, ChartOptions } from 'chart.js'
import { FC } from 'react'
import { Bar } from 'react-chartjs-2'

import {
	BarElement,
	CategoryScale,
	Chart as ChartJS,
	LinearScale,
	Title,
	Tooltip,
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip)

type _Color = {
	static: string
	hover: string
}

type BarColors = {
	oddBars: _Color
	evenBars: _Color
}

type BarChartProps = {
	labels: string[]
	data: Omit<ChartData<'bar', number[], string>, 'labels'>
	title?: string
	titleClassName?: string
	options?: ChartOptions<'bar'>
	className?: string
	barColors?: BarColors
}

const BarChart: FC<BarChartProps> = ({
	labels,
	data,
	options,
	className,
	barColors = {
		oddBars: {
			static: '#384e42',
			hover: '#384e42',
		},
		evenBars: {
			static: '#edefec',
			hover: '#edefec',
		},
	},
	title,
	titleClassName = 'px-4 py-2 text-2xl font-medium',
}) => {
	return (
		<div className={className}>
			<h3 className={titleClassName}>{title}</h3>
			<Bar
				options={{
					responsive: true,
					maintainAspectRatio: true,
					scales: {
						y: {
							// i am generally gonna use it plot charts with money,
							// so might aswell do it for all of the charts(replaces last 3 zeros with k, if even found)
							ticks: {
								callback: (value, index, ticks) => {
									return String(value).replace(/(0{3})\s*$/, 'k')
								},
							},
						},
					},
					...options,
				}}
				data={{
					labels,
					datasets: data.datasets.map(dataset => ({
						...dataset,
						backgroundColor: labels.map((_, idx) =>
							idx % 2 === 0
								? barColors.evenBars.static
								: barColors.oddBars.static
						),
						hoverBackgroundColor: labels.map((_, idx) =>
							idx % 2 === 0 ? barColors.evenBars.hover : barColors.oddBars.hover
						),
						borderRadius: 5,
					})),
				}}
			/>
		</div>
	)
}

export default BarChart
