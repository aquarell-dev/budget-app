import { FC } from 'react'
import {
	cards,
	earnings,
	spendings,
	transactions,
} from '../../../utils/exmaple.data'
import Balance from '../../ui/Balance'
import { BlackBorderedButton } from '../../ui/Button'
import Header from '../../ui/Header'
import { ResponsibleSectionNavigationProps } from '../../ui/ResponsibleSectionNavigation/navigation.types'
import CardsSlider from './components/CardsSlider'
import Goals from './components/Goals'
import Greeting from './components/Greeting'
import StatisticProgressBars from './components/StatisticProgressBars'

import Subscriptions from './components/Subscriptions'
import Transactions from './components/Transactions'
import TransactionStatistics from './components/TransactionStatistics'

const navigation: ResponsibleSectionNavigationProps = {
	sections: [
		{ title: 'cards', scrollId: 'cards' },
		{ title: 'statistics', short: 'stats', scrollId: 'statistics' },
		{ title: 'transactions', short: 'deals', scrollId: 'transactions' },
	],
	responsive: [
		{
			sectionWidth: 350,
			fontSize: '18px',
		},
		{
			sectionWidth: 250,
			fontSize: '16px',
		},
		{
			sectionWidth: 200,
			fontSize: '14px',
		},
		{
			sectionWidth: 100,
			fontSize: '12px',
			short: true,
		},
	],
}

const Dashboard: FC = () => {
	return (
		<>
			<Header
				pageTitle='Dashboard'
				navigation={navigation}
			/>
			<Greeting />
			<CardsSlider cards={cards} />
			<div className='grid my-12 grid-cols-1 2xl:grid-cols-[1fr_2fr] gap-8'>
				<div
					className='flex flex-col space-y-8'
					id='statistics'
				>
					<Balance amount={24500} />
					<div className='flex items-center space-x-2'>
						<BlackBorderedButton additionalStyles='w-full'>
							New Income
						</BlackBorderedButton>
						<BlackBorderedButton additionalStyles='w-full'>
							New Outcome
						</BlackBorderedButton>
					</div>
					<StatisticProgressBars />
					<TransactionStatistics
						title='Income Statistic'
						statistics={earnings}
					/>
					<TransactionStatistics
						title='Outcome Statistic'
						statistics={spendings}
					/>
				</div>
				<div className='flex flex-col space-y-8'>
					<Goals />
					<div
						className='flex flex-col space-y-8'
						id='transactions'
					>
						<Transactions
							title='Transaction History'
							transactions={transactions}
						/>
						<Subscriptions />
					</div>
				</div>
			</div>
		</>
	)
}

export default Dashboard
