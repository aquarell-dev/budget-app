import { FC, useEffect, useState } from 'react'
import useScrolled from '../../../hooks/useScrolled'
import { cn } from '../../../utils'

const ScrollToTop: FC = () => {
	const [show, setShow] = useState(false)

	const body = document.body
	const html = document.documentElement

	const scrollableHeight = Math.max(
		body.scrollHeight,
		body.offsetHeight,
		html.clientHeight,
		html.scrollHeight,
		html.offsetHeight
	)

	const { scrolled } = useScrolled()

	useEffect(() => {
		if (!scrolled) return

		const show = scrollableHeight / 4 < document.documentElement.scrollTop

		show ? setShow(true) : setShow(false)
	}, [scrolled])

	return (
		<div
			className={cn(
				'w-8 h-8 md:w-10 md:h-10 bg-dark-secondary hover:bg-dark-hover-secondary component-transition cursor-pointer rounded-full shadow-md flex items-center justify-center fixed bottom-4 right-4 tra',
				show ? 'translate-x-0' : 'translate-x-20'
			)}
			onClick={() =>
				window.scrollTo({
					top: 0,
					behavior: 'smooth',
				})
			}
		>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				fill='none'
				viewBox='0 0 24 24'
				strokeWidth={1.5}
				stroke='currentColor'
				className='w-6 h-6 md:w-6 md:h-6 text-white'
			>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					d='M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18'
				/>
			</svg>
		</div>
	)
}

export default ScrollToTop
