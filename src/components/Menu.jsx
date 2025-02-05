"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Menu = () => {
  const pathname = usePathname()
  console.log(pathname);
  
  return (
    <div className='flex gap-4 justify-center'>
      <Link className={`${pathname === '/' ? 'active-link' : 'pending-link'}`} href={`/`}>Home</Link>
      <Link className={`${pathname === '/admin' ? 'active-link' : 'pending-link'}`} href={`/admin`}>Admin</Link>
      <Link className={`${pathname === '/contact' ? 'active-link' : 'pending-link'}`} href={`/contact`}>Contact</Link>
      <Link className={`${pathname === '/about' ? 'active-link' : 'pending-link'}`} href={`/about`}>About</Link>
      <Link className={`${pathname === '/brand/apple/iphone' ? 'active-link' : 'pending-link'}`} href={`/brand/apple/iphone`}>Brand</Link>
    </div>
  )
}

export default Menu
