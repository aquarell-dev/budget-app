import { FC, ReactNode } from 'react'

const Container: FC<{ children: ReactNode }> = ({ children }) => (
	<div className='relative pt-4 py-8 pr-6 ml-[400px]'>{children}</div>
)

export default Container
