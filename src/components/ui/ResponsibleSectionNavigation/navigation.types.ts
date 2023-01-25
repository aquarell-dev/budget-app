export type Responsive = {
	/**
	 * @media screen and min-width(...) but for the section width
	 */
	sectionWidth: number
	fontSize: string
	short?: boolean
}

export type Section = {
	title: string
	short?: string
	scrollId?: string
}

export type ResponsibleSectionNavigationProps = {
	sections: Section[]
	responsive?: Responsive[]
}
