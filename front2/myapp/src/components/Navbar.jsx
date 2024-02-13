'use client'
import React from 'react'
import Link from 'next/link'
export default function navbar() {
  return (
    <nav>
      <ul style={{"display":"flex","jus":"" }}>
        <li>
          <Link href="/">home
          </Link>
        </li>
        <li>
          <Link href="/signup">signup
          </Link>
        </li>
        <li>
          <Link href="/signin">signin
          </Link>
        </li>
      </ul>
    </nav>
  )
}
