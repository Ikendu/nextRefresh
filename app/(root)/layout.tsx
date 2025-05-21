import Link from 'next/link'
import React, { ReactNode } from 'react'

export default function layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <ul className='text-2xl flex gap-2'>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/about'>About</Link>
        </li>
        <li>
          <Link href={'/contact'}>Contact</Link>
        </li>
      </ul>
      {children}
    </div>
  )
}
