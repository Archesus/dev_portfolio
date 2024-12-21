"use client"
import Link from "next/link"
import AnimatedButton from "./AnimatedButton"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const NavLinks = [
    { href: '/', title: "Home", target: "_self" },
    { href: '#project', title: "Work", target: "_self" },
    { href: '#about', title: "About", target: "_self" },
    { href: '#services', title: "Services", target: "_self" },
    { href: '../gallery', title: "Gallery", target: "_self" }
]

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen((prevIsOpen) => !prevIsOpen)
    }

    return (
        <div className="w-full md:h-[80px] h-[72px] flex items-center justify-center bg-white/90 sticky top-0 left-0 z-[99] backdrop-blur-xl">
            <div className="flex items-center justify-between py-5 w-full px-5 md:px-10 container-max">
                {/* Logo */}
                <Link href="/">
                    <Image src="/logo.svg" width={56} height={56} alt="logo" />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:block">
                    <ul className="flex items-center gap-[45px] lg:gap-[70px]">
                        {NavLinks.map((item) => (
                            <li key={item.href}>
                                <AnimatedButton
                                    target={item.target}
                                    href={item.href}
                                    className="text-base capitalize font-inter font-normal"
                                >
                                    {item.title}
                                </AnimatedButton>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Mobile Hamburger Button */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden z-50"
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                >
                    {isOpen ? (
                        <X className="h-8 w-8 text-black" />
                    ) : (
                        <Menu className="h-8 w-8 text-black" />
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`
                    fixed top-[72px] right-5 w-fit
                    bg-gradient-to-b from-black to-[#250041] backdrop-blur-2xl
                    rounded-md overflow-hidden
                    transition-all duration-300 ease-in-out
                    md:hidden
                    ${isOpen ? 'max-h-fit' : 'h-0'}
                `}
            >
                <ul className={`
                    flex flex-col items-end p-4 space-y-2
                    transition-opacity duration-200
                    ${isOpen ? 'opacity-100 delay-200' : 'opacity-0'}
                `}>
                    {NavLinks.map((item) => (
                        <li key={item.href}>
                            <Link
                                href={item.href}
                                onClick={toggleMenu}
                                className="
                                    font-inter
                                    block py-2 pl-10 pr-5 
                                    text-xl uppercase text-white 
                                    hover:scale-105
                                    rounded-md cursor-pointer
                                "
                            >
                                {item.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Navbar
