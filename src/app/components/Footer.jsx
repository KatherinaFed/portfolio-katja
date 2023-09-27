import Image from 'next/image'
import React from 'react'
import Logo from '../../../public/logo.png'

const Footer = () => {
  return (
    <footer className='footer z-10 border border-t-[#8ecae6] border-b-transparent border-l-transparent border-r-transparent text-white'>
      <div className='container p-7 flex justify-between items-center text-end'>
        <Image src={Logo} width={100} height={100} alt='logo' />
        <p className='text-slate-500'>Created by Ekaterina Fedoseeva 2023</p>
      </div>
    </footer>
  )
}

export default Footer