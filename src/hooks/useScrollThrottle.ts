import { useEffect, useState } from 'react'

const useScrollThrottle = () => {
	const [scrollPool, setScrollPool] = useState(500)

	const resetScrollPool = () => setScrollPool(500)

	const scrollThrottle = (event: WheelEvent) => {
		window.requestAnimationFrame(resetScrollPool)
		if (scrollPool < 0) {
			return false
		}
		const scrollDistance = event.deltaY * 10

		setScrollPool(prev => prev - Math.abs(scrollDistance))

		const container = document.querySelector('#root')

		if (container) container.scrollTop += scrollDistance
	}

	useEffect(() => {
		window.addEventListener('wheel', scrollThrottle)

		return () => window.removeEventListener('wheel', scrollThrottle)
	}, [])

	return {}
}

export default useScrollThrottle
