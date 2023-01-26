import { useEffect, useRef, useState } from 'react'
import { Responsive } from './navigation.types'

const useSectionNavigation = (
	responsive?: Responsive[],
	shouldBeFixed?: boolean
) => {
	const [active, setActive] = useState(0)

	const [sectionSettings, setSectionSettings] = useState<Responsive>({
		sectionWidth: 0,
		fontSize: '18px',
		short: false,
	})

	const ref = useRef<HTMLDivElement>(null)

	const getResponsiveSettings = (
		sectionWidth: number,
		responsive: Responsive[] | undefined
	): Responsive | null => {
		const bestMatch = responsive
			?.map(breakpoint => ({
				...breakpoint,
				difference: Math.abs(sectionWidth - breakpoint.sectionWidth),
			}))
			.reduce((prev, curr) => (prev.difference < curr.difference ? prev : curr))

		return bestMatch ?? null
	}

	useEffect(() => {
		if (ref.current?.clientWidth) {
			const responsiveSettings = getResponsiveSettings(
				ref.current?.clientWidth,
				responsive
			)

			if (!responsiveSettings)
				return setSectionSettings({
					...sectionSettings,
					sectionWidth: ref.current.clientWidth,
				})

			setSectionSettings({
				...responsiveSettings,
				sectionWidth: ref.current.clientWidth,
			})
		}
	}, [ref.current?.clientWidth, shouldBeFixed])

	return { ref, active, setActive, sectionSettings }
}

export default useSectionNavigation
