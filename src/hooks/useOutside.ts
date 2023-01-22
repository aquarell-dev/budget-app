import { useEffect } from 'react'

export const useOutside = <T extends HTMLElement = HTMLElement, U = void>(
	ref: React.RefObject<T>,
	callback: () => U
) => {
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent | TouchEvent) => {
			if (ref.current && !ref.current.contains(event.target as Node))
				return callback()
		}

		document.addEventListener('mousedown', handleClickOutside)
		document.addEventListener('touchstart', handleClickOutside)

		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
			document.removeEventListener('touchstart', handleClickOutside)
		}
	}, [ref, callback])
}
