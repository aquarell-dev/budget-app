import { useLayoutEffect, useState } from 'react'

const useWindowSize = () => {
	const [windowSize, setWindowSize] = useState<{
		width: number | null
		height: number | null
	}>({
		width: null,
		height: null,
	})

	const handleResize = () =>
		setWindowSize({ height: window.innerHeight, width: window.innerWidth })

	useLayoutEffect(() => {
		window.addEventListener('resize', handleResize)

		handleResize()

		return () => window.removeEventListener('resize', handleResize)
	}, [])

	return { windowSize }
}

export default useWindowSize
