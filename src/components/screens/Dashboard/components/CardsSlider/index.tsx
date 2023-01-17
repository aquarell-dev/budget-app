import { FC, useRef } from 'react'

import Slider, { Settings } from 'react-slick'

import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import { BankCard as TBankCard } from '../../../../../types/banking.types'
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
		infinite: false,
		swipe: true,
		arrows: true,
		prevArrow: <LeftArrow onClick={() => sliderRef.current?.slickPrev()} />,
		nextArrow: <RightArrow onClick={() => sliderRef.current?.slickNext()} />,
	}

	return (
		<div className='mb-8 mt-4'>
			<h3 className='my-2 text-black font-medium text-2xl'>My Cards</h3>
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
