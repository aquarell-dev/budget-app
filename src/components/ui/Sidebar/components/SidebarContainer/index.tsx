import { FC, ReactNode } from 'react'

const SidebarContainer: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className='mx-8'>{children}</div>
}

export default SidebarContainer
