import { FC, useRef } from 'react'

import Slider, { Settings } from 'react-slick'

import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import { BankCard as TBankCard } from '../../../../../types/banking.types'
import { cn } from '../../../../../utils'
import BankCard from '../BankCard'
import { LeftArrow, RightArrow } from '../SliderArrows'

const CardsSlider: FC<{ cards: TBankCard[] }> = ({ cards }) => {
	const sliderRef = useRef<Slider>(null)

	const sliderSettings: Settings = {
		slidesToShow: 3,
		dots: true,
		draggable: true,
		pauseOnHover: true,
		pauseOnDotsHover: true,
		appendDots: dots => (
			<div className='dots'>
				<div className='flex items-center justify-center [&>li]:flex [&>li]:items-center [&>li]:justify-center'>
					{dots}
				</div>
			</div>
		),
		customPaging: () => (
			<div
				className={cn(
					'w-2 h-2 rounded-full bg-black hover:bg-zinc-600 dark:bg-white dark:hover:bg-gray-400 component-transition'
				)}
			/>
		),
		infinite: false,
		swipe: true,
		arrows: true,
		prevArrow: <LeftArrow onClick={() => sliderRef.current?.slickPrev()} />,
		nextArrow: <RightArrow onClick={() => sliderRef.current?.slickNext()} />,
		responsive: [
			{
				breakpoint: 1700,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 1280,
				settings: {
					slidesToShow: 1,
					arrows: false,
				},
			},
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 1,
					arrows: false,
				},
			},
		],
	}

	return (
		<div className='mb-8 mt-4'>
			<h3 className='my-2 font-medium text-2xl'>My Cards</h3>
			<div className='w-11/12 mx-auto'>
				<Slider
					{...sliderSettings}
					ref={sliderRef}
				>
					{cards.map(card => (
						<BankCard
							key={card.id}
							{...card}
						/>
					))}
				</Slider>
			</div>
		</div>
	)
}

export default CardsSlider
