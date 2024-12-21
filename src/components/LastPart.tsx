"use client"
import React from 'react'
import Ticker from 'framer-motion-ticker';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { motion } from 'motion/react';
import Link from 'next/link';

const colors = [
    {
        id: 1,
        color: "#000",
        text: "Book a call"
    },
    {
        id: 2,
        color: "#000",
        text: "Book a call"
    },
    {
        id: 3,
        color: "#000",
        text: "Book a call"
    },
    {
        id: 4,
        color: "#000",
        text: "Book a call"
    },
];


const LastPart = () => {

    return <>
        <div
            className="relative w-full h-[75vh] md:h-screen bg-black flex items-center justify-between overflow-hidden"
            style={{
                backgroundImage: 'radial-gradient(125% 125% at 50% 0%, #000000 50%, #250041 75%)'
            }}
        >
            <div>
                <Image src="/pixels.svg" fill alt="box" className="pointer-events-none mix-blend-overlay absolute mask-pixels opacity-85" />
            </div>

            <p className='absolute  w-full text-center top-12 left-1/2 -translate-x-1/2 text-gray-400 text-sm md:text-lg font-inter font-normal'>Let&apos;s make magic together</p>


            <div className='absolute bottom-20 md:bottom-24 left-1/2 -translate-x-1/2'>
                <motion.button
                    initial={{
                        "--x": "100%",
                        scale: 1,
                    }}
                    animate={{
                        "--x": '-100%'
                    }}
                    whileTap={{
                        scale: 0.97
                    }}
                    transition={{
                        repeat: Infinity,
                        repeatType: "loop",
                        repeatDelay: 1,
                        type: "spring",
                        stiffness: 20,
                        damping: 15,
                        mass: 2,
                        scale: {
                            type: "spring",
                            stiffness: 10,
                            damping: 5,
                            mass: 0.1,
                        }
                    }}
                    className="px-6 py-2 rounded-xl relative radial-gradient">
                    <Link className="text-neutral-100 tracking-wide font-normal h-full w-[100px] md:w-[200px] block relative linear-mask" href="https://www.linkedin.com/in/anurag-kumar-301243269/">
                        Let&apos;s Connect
                    </Link>
                    <span className="block absolute inset-0 rounded-md p-px linear-overlay pointer-events-none" />
                </motion.button>
            </div>

            <div className="pointer-events-none scale-85 md:scale-100"
            >
                <Ticker duration={20}>
                    {colors.map((item) => (
                        <div key={item.text}>
                            <h1 className="font-afacad font-bold text-[250px] text-white uppercase mx-8 flex items-center gap-4
              ">{item.text}
                                <span className="w-10 h-10 bg-white rounded-full" />
                            </h1>
                        </div>
                    ))}
                </Ticker>
            </div>

            <div className="absolute bottom-0 left-0 right-0 w-full border border-t-neutral-700 border-b-transparent border-r-transparent border-l-transparent"
            >
                <Footer />
            </div>
        </div>

    </>
};



export default LastPart