import React, { ReactNode } from 'react'

export default function layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <h4 className='text-2l'>Dashbord Header for all</h4>
      {children}
    </div>
  )
}
