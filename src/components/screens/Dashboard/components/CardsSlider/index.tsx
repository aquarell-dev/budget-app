import { FC, useRef } from 'react'

import Slider, { Settings } from 'react-slick'

import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import { BankCard as TBankCard } from '../../../../../types/banking.types'
import { cn } from '../../../../../utils'
import BankCard from '../BankCard'
import { LeftArrow, RightArrow } from '../SliderArrows'
import './black-theme-dots.css'

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
				<div
					className={cn(
						'flex items-center justify-center [&>li]:flex [&>li]:items-center [&>li]:justify-center',
						'[&>li.slick-active>.dot]:bg-black [&>li>.dot]:bg-zinc-400',
						'dark:[&>li.slick-active>.dot]:bg-white dark:[&>li>.dot]:bg-gray-500'
					)}
				>
					{dots}
				</div>
			</div>
		),
		customPaging: () => (
			<div className='dot w-2 h-2 rounded-full component-transition hover:bg-red-600' />
		),
		infinite: true,
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
