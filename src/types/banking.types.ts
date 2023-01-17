export type Bank = 'tinkoff' | 'sberbank' | 'qiwi'

export type PaymentSystem = 'mir' | 'visa' | 'mastercard'

export type BankCard = {
	id: number
	cardHolder: string
	expirationDate: string
	balance: number
	paymentSystem: PaymentSystem
	bank: Bank
	lastFourDigigts: number
}
