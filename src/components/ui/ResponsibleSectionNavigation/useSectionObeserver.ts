import { useEffect } from 'react'
import { Section } from './navigation.types'

const useSectionObeserver = (
	sections: Section[],
	cb: (activeIndex: number) => void
) => {
	const ioCallback = (entries: IntersectionObserverEntry[]) => {
		const intersectingEntries = entries
			.map(entry => ({
				entryId: entry.target.id,
				intersects: entry.isIntersecting,
			}))
			.filter(e => e.intersects)

		const lastIntersectingElementId = intersectingEntries
			.map(e => e.entryId)
			.at(-1)

		const activeIndex = sections.findIndex(
			section => section.scrollId === lastIntersectingElementId
		)

		cb(activeIndex)
	}

	const io = new IntersectionObserver(ioCallback, {
		threshold: 0.5,
	})

	useEffect(() => {
		const elements = sections.map(section =>
			document.querySelector(`#${section.scrollId}`)
		)

		elements.forEach(element => element && io.observe(element))

		return () => io.disconnect()
	}, [])

	return {}
}

export default useSectionObeserver
