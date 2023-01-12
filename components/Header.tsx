import React from 'react'
import Link from 'next/link'
import Image from "next/image"
import Logo from "../assets/Logo.webp"

type Props = {}

const Header = (props: Props) => {
  return (
    <header className='flex items-center justify-between px-3 sm:px-10 py-5 font-bold'>
      <div className='flex gap-1 items-center'>
        <Link href={"/"}>
          <Image src={Logo} alt="blog-logo" height={50} width={50} className="rounded-lg" />
        </Link>
        <h1 className='text-sm sm:text-xl font-semibold'>
        Blog App
          </h1>
      </div>
      <div className=' cursor-pointer px-5 py-3 text-xs md:text-base flex font-semibold items-center rounded-full text-center bg-gray-900 text-[#F7AB0A]'> 
        Sign Up To Create Blog
      </div>
    </header>
  )
}

export default Header