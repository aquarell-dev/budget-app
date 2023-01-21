import { FC, ReactNode } from 'react'

const PageHeader: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<h1 className='text-slate-800 dark:text-white text-3xl mb-8 font-semibold'>
			{children}
		</h1>
	)
}

export default PageHeader
