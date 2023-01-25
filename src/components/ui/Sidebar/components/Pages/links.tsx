import { ReactNode } from 'react'

import { AiOutlineStock } from 'react-icons/ai'
import { RiSettings3Fill } from 'react-icons/ri'
import { TiChartArea } from 'react-icons/ti'

export type Page = {
	id: number
	title: string
	path: string
	icon: ReactNode
	unreadNotification?: boolean
}

export const links: Page[] = [
	{
		id: 1,
		title: 'Dashboard',
		path: '/',
		icon: (
			<AiOutlineStock
				color='inherit'
				size='inherit'
			/>
		),
	},
	{
		id: 2,
		title: 'Analytics',
		path: '/analytics',
		icon: (
			<TiChartArea
				color='inherit'
				size='inherit'
			/>
		),
	},
	{
		id: 3,
		title: 'Settings',
		path: '/settings',
		icon: (
			<RiSettings3Fill
				color='inherit'
				size='inherit'
			/>
		),
		unreadNotification: true,
	},
]
