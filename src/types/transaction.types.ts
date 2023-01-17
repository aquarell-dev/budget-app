import { Category } from './mutual.types'

export type Transaction = {
	id: number
	reciever: string
	category: string
	date: string
	amount: number
}

export type TransactionType = {
	id: number
	category: Category
	amount: number
}

export type Outcome = TransactionType

export type Income = TransactionType
