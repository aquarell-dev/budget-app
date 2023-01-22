import { FC } from 'react'

const Header: FC = () => {
	return (
		<div className='h-20 flex flex-col items-center justify-center'>
			<div className='flex items-center space-x-1'>
				{/* <img
					className='w-16 h-16'
					src={Logo}
				/> */}
				<h1
					className='text-white text-5xl uppercase'
					style={{
						fontFamily: 'Montserrat-Alt1',
					}}
				>
					revity
				</h1>
			</div>
		</div>
	)
}

export default Header
