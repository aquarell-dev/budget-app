import { LoadingComponentProps } from '../../../../../types/mutual.component.types'
import { Category } from '../../../../../types/mutual.types'
import { formatMoney } from '../../../../../utils'
import Icon from '../../../../ui/Icon'
import ProgressBar from '../../../../ui/ProgressBar'

type StatisticItem = {
	id: number
	category: Category
	amount: number
}

const TransactionStatistics = <T extends StatisticItem = StatisticItem>(
	props: {
		title: string
		statistics: T[]
	} & LoadingComponentProps
): JSX.Element => {
	const { title, statistics, loading } = props

	const totalSpent: number = 4000

	return (
		<div className='flex flex-col space-y-4 p-4 dark:bg-dark-secondary border dark:border-transparent shadow-xl rounded-md'>
			<h3 className='font-medium text-2xl'>
				<p>{title}</p>
			</h3>
			<div className='flex flex-col space-y-2'>
				{statistics.map(statisticItem => (
					<div key={statisticItem.id}>
						<ProgressBar
							progress={Math.ceil(
								Number((statisticItem.amount / totalSpent) * 100)
							)}
							title={<Icon {...statisticItem.category} />}
							titleStyles={{ fontSize: '16px', fontWeight: 400 }}
							actualValue={formatMoney(statisticItem.amount)}
						/>
					</div>
				))}
			</div>
		</div>
	)
}

export default TransactionStatistics
