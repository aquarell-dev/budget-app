import { FC } from 'react'

const User: FC = () => {
	return (
		<div className='absolute bottom-0 m-4'>
			<div className='flex space-x-4 items-center'>
				<div className='w-12 h-12 bg-gray-100 rounded-full' />
				<div className='flex flex-col'>
					<p className='text-white font-medium px-2'>Me</p>
					<div className='flex space-x-1 items-center'>
						<div className='h-1 w-1 bg-green-500 rounded-full' />
						<p className='text-gray-500 text-xs'>Active Now</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default User
