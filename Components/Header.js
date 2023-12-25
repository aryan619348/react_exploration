import React from 'react'
import Link from 'next/link'
const Header = () => {
  return (
    <div className='head'>
        <h2>Hello Everyone</h2>
        <Link href="/">Main Page</Link>
        <Link href="/About">About</Link>
        <Link href="/Contact">Contact</Link>
        <Link href="/Home">Home</Link>

    </div>
  )
}

export default Header