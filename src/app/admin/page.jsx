import Menu from '@/components/Menu'
import React from 'react'

const page = () => {
  return (
    <div>
      <Menu />
      This is admin page
      <h1>API KEY : {process.env.NEXT_PUBLIC_API_KEY}</h1>
    </div>
  )
}

export default page
