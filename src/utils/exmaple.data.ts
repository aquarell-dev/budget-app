import { BankCard } from '../types/banking.types'
import { Category } from '../types/mutual.types'
import { Subscription } from '../types/subscription.types'
import { Income, Outcome, Transaction } from '../types/transaction.types'

export const cards: BankCard[] = [
	{
		id: 1,
		cardHolder: 'Ivan Ivanov',
		expirationDate: '01/28',
		balance: 146000,
		paymentSystem: 'mastercard',
		bank: 'tinkoff',
		lastFourDigigts: 2365,
	},
	{
		id: 2,
		cardHolder: 'Ivan Ivanov',
		expirationDate: '09/23',
		balance: 12000,
		paymentSystem: 'visa',
		bank: 'qiwi',
		lastFourDigigts: 4598,
	},
	{
		id: 3,
		cardHolder: 'Ivan Ivanov',
		expirationDate: '10/29',
		balance: 62500,
		paymentSystem: 'mir',
		bank: 'sberbank',
		lastFourDigigts: 7867,
	},
	{
		id: 4,
		cardHolder: 'Ivan Ivanov',
		expirationDate: '03/24',
		balance: 89000,
		paymentSystem: 'mir',
		bank: 'qiwi',
		lastFourDigigts: 1523,
	},
]

export const transactions: Transaction[] = [
	{
		id: 1,
		amount: 456,
		category: 'Food',
		reciever: 'KFC',
		date: '25/12/2022',
	},
	{
		id: 2,
		amount: 1200,
		category: 'Club',
		reciever: 'Doski',
		date: '24/12/2022',
	},
	{
		id: 3,
		amount: 5200,
		category: 'Computers',
		reciever: 'DNS',
		date: '22/12/2022',
	},
	{
		id: 4,
		amount: 400,
		category: 'Cinema',
		reciever: 'Arena',
		date: '20/12/2022',
	},
	{
		id: 5,
		amount: 1200,
		category: 'Club',
		reciever: 'Doski',
		date: '16/12/2022',
	},
]

export const spendings: Outcome[] = [
	{
		id: 1,
		category: {
			title: 'Food',
			id: 1,
			icon: '123',
		},
		amount: 312,
	},
	{
		id: 2,
		category: {
			title: 'Club',
			id: 1,
			icon: '123',
		},
		amount: 1378,
	},
]

export const earnings: Income[] = [
	{
		id: 1,
		category: {
			title: 'Cars',
			id: 1,
			icon: '123',
		},
		amount: 2000,
	},
	{
		id: 2,
		category: {
			title: 'Bus',
			id: 1,
			icon: '123',
		},
		amount: 24,
	},
]

export const subscriptions: Subscription[] = [
	{
		id: 1,
		subscription: 'Internet',
		amount: 600,
		payDay: 12,
		icon: 'https://www.freepnglogos.com/uploads/logo-internet-png/logo-internet-clipart-internet-logo-clipground-33.jpg',
	},
	{
		id: 2,
		subscription: 'Tele 2',
		amount: 330,
		payDay: 10,
		icon: 'https://logos-download.com/wp-content/uploads/2016/06/Tele2_logo-700x263.png',
	},
	{
		id: 3,
		subscription: 'Yandex.PLUS',
		amount: 300,
		payDay: 24,
		icon: 'https://assets.stickpng.com/images/623b00a027d4946aceae2fdb.png',
	},
	{
		id: 4,
		subscription: 'Discord Nitro',
		amount: 450,
		payDay: 24,
		icon: 'https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png',
	},
	{
		id: 5,
		subscription: 'Spotify Premium',
		amount: 900,
		payDay: 16,
		icon: 'https://www.freepnglogos.com/uploads/spotify-logo-png/file-spotify-logo-png-4.png',
	},
	{
		id: 6,
		subscription: 'FL.ru',
		amount: 2450,
		payDay: 31,
		icon: 'https://play-lh.googleusercontent.com/QMHiJq47AHBcyz6GSeE5dqUwTWwB55rJmQul3cLEH1m--zxtdoE8JQyU4ZzjzuWyFlQ',
	},
]

export const categories: Category[] = [
	{
		id: 1,
		title: 'Food',
		icon: '123',
	},
	{
		id: 2,
		title: 'Cars',
		icon: '123',
	},
	{
		id: 3,
		title: 'Clubs',
		icon: '123',
	},
	{
		id: 4,
		title: 'Transport',
		icon: '123',
	},
	{
		id: 5,
		title: 'Cinema',
		icon: '123',
	},
]
