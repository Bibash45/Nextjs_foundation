import Link from 'next/link'
import React from 'react'

const Menu = () => {
  return (
    <div className='flex gap-4 justify-center'>
      <Link href={`/`}>Home</Link>
      <Link href={`/admin`}>Admin</Link>
      <Link href={`/contact`}>Contact</Link>
      <Link href={`/about`}>About</Link>
      <Link href={`/brand/apple/iphone`}>Brand</Link>
    </div>
  )
}

export default Menu
