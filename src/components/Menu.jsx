"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Menu = () => {
  const pathname = usePathname()
  
  return (
    <div className='flex gap-4 justify-center'>
      <Link className={`${pathname === '/' ? 'active-link' : 'pending-link'}`} href={`/`} replace>Home</Link>
      <Link className={`${pathname === '/admin' ? 'active-link' : 'pending-link'}`} href={`/admin`}
      replace>Admin</Link>
      <Link className={`${pathname === '/contact' ? 'active-link' : 'pending-link'}`} href={`/contact`} replace>Contact</Link>
      <Link className={`${pathname === '/about' ? 'active-link' : 'pending-link'}`} href={{
        pathname: '/about',
        query: { name: 'laptop',price:'200' }
      }}>About</Link>
      <Link className={`${pathname === '/brand/apple/iphone' ? 'active-link' : 'pending-link'}`} href={`/brand/apple/iphone`} replace >Brand</Link>
      <Link className={`${pathname === '/apiClientSide' ? 'active-link' : 'pending-link'}`} href={`/apiClientSide`} replace prefetch={false}>apiClientSide</Link>
    </div>
  )
}

export default Menu
