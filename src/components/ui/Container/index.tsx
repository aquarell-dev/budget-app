import { FC, ReactNode } from 'react'

const Container: FC<{ children: ReactNode }> = ({ children }) => (
	<div className='relative py-8 px-4 md:px-0 md:pr-6 md:ml-[400px]'>
		{children}
	</div>
)

export default Container
