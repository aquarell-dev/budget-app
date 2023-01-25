import { FC } from 'react'
import { formatMoney } from '../../../utils'
import { categories } from '../../../utils/exmaple.data'
import BarChart from '../../ui/BarChart'
import DonutProgressBar from '../../ui/DonutProgressBar'
import Header from '../../ui/Header'

const labels = [
	'Jan',
	'Feb',
	'Mar',
	'Apr',
	'May',
	'Jun',
	'Jul',
	'Sep',
	'Oct',
	'Nov',
	'Dec',
]

const Analysis: FC = () => {
	return (
		<>
			<Header pageTitle='Analytics' />
			<div className='grid grid-cols-2 gap-x-8'>
				<BarChart
					title='Income'
					labels={labels}
					data={{
						datasets: [
							{
								label: 'Income',
								data: labels.map(() => Math.ceil(Math.random() * 10000)),
							},
						],
					}}
					className='w-full'
				/>
				<BarChart
					title='Outcome'
					labels={labels}
					data={{
						datasets: [
							{
								label: 'Income',
								data: labels.map(() => Math.ceil(Math.random() * 10000)),
							},
						],
					}}
					className='w-full'
				/>
			</div>
			<div className='grid grid-cols-3 place-items-center'>
				{categories.map(category => (
					<div
						className='w-48 h-48'
						key={category.id}
					>
						<DonutProgressBar
							percentage={25}
							size={180}
							borderThickness={20}
						>
							<div className='flex flex-col space-y-1 text-center'>
								<p className='text-lg'>{category.title}</p>
								<p className='text-sm'>
									{formatMoney(2400)} of {formatMoney(5000)}
								</p>
							</div>
						</DonutProgressBar>
					</div>
				))}
			</div>
		</>
	)
}

export default Analysis
