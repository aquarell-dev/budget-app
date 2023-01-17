import classNames from 'classnames'

import { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { links } from './links'

const Pages: FC = () => {
	const [activePage, setActivePage] = useState<number | null>(null)
	const navigate = useNavigate()

	return (
		<div className='mt-8'>
			<p className='px-2 my-2 uppercase text-xs text-slate-700 select-none'>
				Overview
			</p>
			<div className='flex flex-col space-y-2'>
				{links.map(link => (
					<div
						className={classNames(
							'px-3 py-4 cursor-pointer flex items-center space-x-6',
							{
								'text-[#fefefe] bg-[#3e554c] font-medium':
									activePage === link.id,
								'text-gray-400 hover:bg-[#36453f] transition duration-300 ease-in-out':
									activePage !== link.id,
							}
						)}
						key={link.id}
						onClick={() => {
							setActivePage(link.id)
							navigate(link.path)
						}}
					>
						<div className='w-6 h-6'>{link?.icon}</div>
						<p>{link.title}</p>
						{link.unreadNotification && (
							<div className='w-2 h-2 rounded-full bg-rose-500' />
						)}
					</div>
				))}
			</div>
		</div>
	)
}

export default Pages
