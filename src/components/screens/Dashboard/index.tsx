import { FC } from 'react'
import { formatMoney } from '../../../utils'
import {
	cards,
	earnings,
	spendings,
	transactions,
} from '../../../utils/exmaple.data'
import Balance from '../../ui/Balance'
import { BlackBorderedButton } from '../../ui/Button'
import PageHeader from '../../ui/PageHeader'
import ProgressBar from '../../ui/ProgressBar'
import CardsSlider from './components/CardsSlider'
import Goals from './components/Goals'
import Greeting from './components/Greeting'
import Subscriptions from './components/Subscriptions'
import Transactions from './components/Transactions'
import TransactionStatistics from './components/TransactionStatistics'

const Dashboard: FC = () => {
	return (
		<>
			<PageHeader>Dashboard</PageHeader>
			<Greeting />
			<CardsSlider cards={cards} />
			<div
				style={{
					display: 'grid',
					margin: '50px 0',
					gridTemplateColumns: '1fr 2fr',
					width: '100%',
				}}
			>
				<div className='w-96 flex flex-col space-y-8'>
					<Balance amount={24500} />
					<div className='flex items-center space-x-2'>
						<BlackBorderedButton additionalStyles='w-full'>
							New Income
						</BlackBorderedButton>
						<BlackBorderedButton additionalStyles='w-full'>
							New Outcome
						</BlackBorderedButton>
					</div>
					<div className='px-4 py-6 rounded-md shadow-xl border'>
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
					<div className='px-4 py-6 rounded-md shadow-xl border'>
						<ProgressBar
							progress={25}
							title='Spent in this month'
							titleStyles={{ fontSize: '24px', fontWeight: 500 }}
							actualValue={`${formatMoney(4000)} spent of ${formatMoney(
								24500
							)}`}
						/>
					</div>
					<TransactionStatistics
						title='Income Statistic'
						statistics={earnings}
					/>
					<TransactionStatistics
						title='Outcome Statistic'
						statistics={spendings}
					/>
				</div>
				<div className='w-full flex flex-col space-y-8'>
					<Goals />
					<Subscriptions />
					<Transactions
						title='Transaction History'
						transactions={transactions}
					/>
				</div>
			</div>
		</>
	)
}

export default Dashboard
