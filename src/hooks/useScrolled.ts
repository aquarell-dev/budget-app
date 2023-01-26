import { useEffect, useState } from 'react'

const useScrolled = () => {
	const [scrolled, setScrolled] = useState(false)

	const handleScroll = () => setScrolled(true)

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)

		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	useEffect(() => {
		const interval = setInterval(() => setScrolled(false), 250)

		return () => clearInterval(interval)
	}, [])

	return { scrolled }
}

export default useScrolled
