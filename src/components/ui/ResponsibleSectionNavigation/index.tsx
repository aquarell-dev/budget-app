import { FC } from 'react'
import { cn } from '../../../utils'
import { ResponsibleSectionNavigationProps } from './navigation.types'
import useSectionNavigation from './useSectionNavigation'
import useSectionObeserver from './useSectionObeserver'

const ResponsibleSectionNavigation: FC<
	ResponsibleSectionNavigationProps & { shouldBeFixed?: boolean }
> = ({ shouldBeFixed, ...props }) => {
	const { ref, sectionSettings, setActive, active } = useSectionNavigation(
		props.responsive,
		shouldBeFixed
	)

	useSectionObeserver(
		props.sections,
		activeIndex => activeIndex !== -1 && setActive(activeIndex)
	)

	return (
		<div
			className={cn(
				'flex max-w-full overflow-hidden items-center border-b py-4 px-2 lg:px-6 border-slate-600 mb-8 component-transition',
				shouldBeFixed
					? 'fixed top-0 bg-white shadow-xl dark:bg-dark-primary z-50 left-0 md:left-[350px] right-0'
					: 'relative'
			)}
		>
			{props.sections.map((section, idx) => (
				<div
					className='w-full hover:text-dark-hover-secondary dark:hover:text-gray-300 text-center capitalize cursor-pointer component-transition'
					key={idx}
					onClick={() => {
						setActive(idx)

						const element = document.querySelector(`#${section.scrollId}`)

						if (element)
							window.scrollTo({
								top:
									element?.getBoundingClientRect().top + window.scrollY - 150,
								behavior: 'smooth',
							})
					}}
					style={{
						fontSize: sectionSettings.fontSize,
					}}
					ref={ref}
				>
					<p>
						{sectionSettings.short
							? section.short ?? section.title
							: section.title}
					</p>
				</div>
			))}
			<div
				className='absolute left-0 bottom-0 rounded-t-md mx-2 lg:mx-6 h-1 bg-dark-secondary dark:bg-white component-transition'
				style={{
					width: `${sectionSettings.sectionWidth}px`,
					transform: `translateX(${active * sectionSettings.sectionWidth}px)`,
				}}
			/>
		</div>
	)
}

export default ResponsibleSectionNavigation
