import { FC } from 'react'

import { RiSearch2Fill } from 'react-icons/ri'

const SidebarSearch: FC = () => {
  return (
    <div
      className='flex items-center justify-center space-x-2 mt-6 mb-2 p-4 shadow-sm rounded-sm'
      style={{ backgroundColor: '#252728' }}
    >
      <RiSearch2Fill
        color='#b3b6b6'
        size={24}
      />
      <input
        type='text'
        className='outline-none w-full text-white'
        style={{ backgroundColor: '#252728' }}
        placeholder='Search'
      />
    </div>
  )
}

export default SidebarSearch
