import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiOutlineDiscord } from 'react-icons/ai'
import { CiInstagram, CiLinkedin } from 'react-icons/ci'
import { FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
    return (
        <div className='flex flex-row items-center justify-between w-full h-fit px-2 md:px-5 py-2'>
            <Link href="/" className="block md:hidden w-10 h-10">
                <Image src="/logo.svg" width={40} height={40} alt='logo' />
            </Link>
            <div>
                <p className='hidden md:block text-neutral-300 text-sm font-inter font-normal tracking-wide'>All Rights Reserved</p>
            </div>
            <div className='flex items-center gap-8'>
                <Link href="https://www.linkedin.com/in/anurag-kumar-301243269/" target='_blank'><CiLinkedin className='size-[24px] md:size-6 text-neutral-300 hover:text-white transition-colors duration-300' /></Link>
                <Link href="https://x.com/AnuragK33948563" target='_blank'><FaXTwitter className='size-[24px] md:size-6 text-neutral-300 hover:text-white transition-colors duration-300' /></Link>
                <Link href="https://www.instagram.com/anuragkumar6873/" target='_blank'><CiInstagram className='size-[24px] md:size-6 text-neutral-300 hover:text-white transition-colors duration-300' /></Link>
                <Link href="#"><AiOutlineDiscord className='size-[24px] md:size-6 text-neutral-300 hover:text-white transition-colors duration-300' /></Link>
            </div>
            <div>
                <p className='hidden md:block text-neutral-300 text-sm font-inter font-normal tracking-wide'>Anurag Kumar 2024</p>
            </div>
        </div>
    )
}

export default Footer