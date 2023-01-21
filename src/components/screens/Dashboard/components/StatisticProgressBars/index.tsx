import { formatMoney } from '../../../../../utils'
import ProgressBar from '../../../../ui/ProgressBar'

const StatisticProgressBars = () => {
	return (
		<>
			<div className='px-4 py-6 rounded-md shadow-xl border dark:border-transparent dark:bg-dark-secondary'>
				<ProgressBar
					progress={Math.ceil((2450 / 5635) * 100)}
					title='Income/Outcome Ratio'
					titleStyles={{ fontSize: '24px', fontWeight: 500 }}
					actualValue={`${formatMoney(2450)} spent of ${formatMoney(5635)}`}
				>
					<div className='flex flex-col space-y-0.5 text-gray-500 text-sm'>
						<p>Monthly Income: {formatMoney(5000)}</p>
						<p>Monthly Outcome: {formatMoney(2432)}</p>
					</div>
				</ProgressBar>
			</div>
			<div className='px-4 py-6 rounded-md shadow-xl border dark:border-transparent dark:bg-dark-secondary'>
				<ProgressBar
					progress={25}
					title='Spent in this month'
					titleStyles={{ fontSize: '24px', fontWeight: 500 }}
					actualValue={`${formatMoney(4000)} spent of ${formatMoney(24500)}`}
				/>
			</div>
		</>
	)
}

export default StatisticProgressBars
