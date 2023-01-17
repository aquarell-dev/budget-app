const phrases = [
	{
		hour: 22,
		phrase: '👍💯💸The most productive time, sir',
	},
	{
		hour: 18,
		phrase: '🌑Good evening',
	},
	{
		hour: 12,
		phrase: '💫🌆🍂 Good afternoon',
	},
	{
		hour: 8,
		phrase: '☀️ Good morning',
	},
	{
		hour: 5,
		phrase: '🐓 Whoa, hey, early bird',
	},
	{
		hour: 0,
		phrase: '🛏️ You should really go get sleep',
	},
]

export const getGreetingPhrase = () => {
	const currentHour = new Date().getHours()

	let suitablePhrase = ''

	phrases.some(phrase => {
		suitablePhrase = phrase.phrase
		return currentHour >= phrase.hour
	})

	return suitablePhrase
}

export const formatMoney = (moneyAmount: number) =>
	new Intl.NumberFormat('ru-RU', {
		style: 'currency',
		currency: 'RUB',
	}).format(moneyAmount)

export const formatDateTime = (
	date: Date,
	options?: Intl.DateTimeFormatOptions
) =>
	new Intl.DateTimeFormat('en-GB', {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		hour: 'numeric',
		minute: 'numeric',
		hour12: false,
		...options,
	}).format(date)

export const cn = (...classes: (string | undefined)[]) =>
	classes.filter(Boolean).join(' ')

export const nth = function (day: number) {
	if (day > 3 && day < 21) return 'th'
	switch (day % 10) {
		case 1:
			return 'st'
		case 2:
			return 'nd'
		case 3:
			return 'rd'
		default:
			return 'th'
	}
}
