import { FC } from 'react'
import { ResponsibleSectionNavigationProps } from './navigation.types'
import useSectionNavigation from './useSectionNavigation'

const ResponsibleSectionNavigation: FC<
	ResponsibleSectionNavigationProps
> = props => {
	const { ref, sectionSettings, setActive, active } = useSectionNavigation(
		props.responsive
	)

	return (
		<div className='relative flex max-w-full overflow-hidden items-center border-b py-4 px-2 lg:px-6 border-slate-600 mb-8'>
			{props.sections.map((section, idx) => (
				<div
					className='w-full hover:text-dark-hover-secondary dark:hover:text-gray-300 text-center capitalize cursor-pointer component-transition'
					key={idx}
					onClick={() => {
						setActive(idx)
						document
							.querySelector(`#${section.scrollId ?? section.title}`)
							?.scrollIntoView({ behavior: 'smooth' })
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
