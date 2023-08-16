import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <nav>
      <li>
        <Link href="/about">About</Link>
      </li>
       <li>
        <Link href="/">Home</Link>
      </li>
      <style jsx>{`
    ul{
        list-style-type: none;
        padding: 0;
      }
    li{
    display:inline;
  }
  li:not(:first-child){
    margin-left: 0.75rem;
  }
      `}</style>
    </nav>
  )
}

export default Navbar
