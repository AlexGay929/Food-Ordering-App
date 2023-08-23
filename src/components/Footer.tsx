import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='h-12 md:h-24 p-4 lg:px-20 xl:px-40 text-red-500 flex items-center justify-between'>
      <Link href="/" className='font-bold text-xl'>PIZZERIA D ALESSANDRA</Link>
      <p>© Alex Gay | All Rights Reserved</p>
    </div>
  )
}

export const dynamic = 'force-dynamic';
export default Footer