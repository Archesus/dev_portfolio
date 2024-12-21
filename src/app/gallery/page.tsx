"use client";
import React, { useState } from 'react'
import Image from 'next/image';
import { motion } from 'motion/react';
import Link from 'next/link';
import Footer from '@/components/Footer';

const Page = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const openFullscreen = (imageSrc: string) => {
        setSelectedImage(imageSrc);
    };

    const closeFullscreen = () => {
        setSelectedImage(null);
    };

    const images = [
        { src: "/cap.jpg", alt: "cap", className: 'row-span-2' },
        { src: "/dragon.jpg", alt: "dragon" },
        { src: "/monster.jpg", alt: "monster" },
        { src: "/girl.jpg", alt: "girl" },
        { src: "/granny.jpg", alt: "granny", className: 'row-span-2' },
        { src: "/eyes-2.jpg", alt: "eyes" },
        { src: "/hijab.jpg", alt: "hijab" },
        { src: "/teeth.jpg", alt: "teeth" },
        { src: "/eyes.jpg", alt: "eyes" },
        { src: "/side-eye.jpg", alt: "sideeye" },
        { src: "/skull-1.jpg", alt: "skull" },
        { src: "/skull-3.jpg", alt: "skull", className: 'row-span-2' },
        { src: "/skull-2.jpg", alt: "skull" },
        { src: "/dragon-2.jpg", alt: "dragon" },
        { src: "/guy.jpg", alt: "guy" },
        { src: "/johnny.jpg", alt: "character", className: 'row-span-2' },
        { src: "/god-of-war.jpg", alt: "game character" },
        { src: "/greek-god.jpg", alt: "greek god" },
        { src: "/potrait-2.jpg", alt: "potrait", className: 'row-span-2' },
        { src: "/potrait-1.jpg", alt: "potrait" },
        { src: "/potrait-3.jpg", alt: "potrait" },
        { src: "/spiderman.jpg", alt: "spiderman" },
        { src: "/shape.png", alt: "abstract shape" },
        { src: "/poster1.png", alt: "poster", className: 'row-span-2' },
        { src: "/poster2.png", alt: "poster", },
        { src: "/poster3.png", alt: "poster", className: 'row-span-2' },
        { src: "/poster4.png", alt: "poster", },
        { src: "/poster5.png", alt: "poster", },
        { src: "/poster6.png", alt: "poster", },
        { src: "/poster7.png", alt: "poster", className: 'row-span-2 md:row-span-3 md:col-span-2' },
        { src: "/poster8.png", alt: "poster", },
        { src: "/poster9.png", alt: "poster", },
        { src: "/poster10.png", alt: "poster", },
    ];

    return <>
        <div className='max-container mx-auto my-10 md:my-20 md:mb-40 h-fit w-full px-5 md:px-10'>
            <motion.div
                initial={{
                    opacity: 0,
                    y: 35,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    delay: 0.5,
                    duration: 0.5,
                    ease: "easeInOut"
                }}
                className='mb-10 md:mb-20'
            >
                <h1 className='text-purple-gradient font-afacad font-bold text-[75px]'>Gallery</h1>
                <p className="font-inter font-normal text-lg tracking-wide">A collection of my <span className='italic font-medium uppercase'>sketches</span> and <span className='italic font-medium uppercase'>graphic design</span> works</p>
            </motion.div>

            <motion.div
                initial={{
                    opacity: 0,
                    y: 35,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    delay: 1,
                    duration: 0.5,
                    ease: "easeInOut"
                }}
                className='grid grid-cols-1 md:grid-cols-3 auto-rows-[200px] md:auto-rows-[300px] gap-5 md:gap-2 my-10'>
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`bg-gray-200 shadow-md rounded-xl relative overflow-hidden ${image.className || ''}`}
                        onClick={() => openFullscreen(image.src)}
                    >
                        <Image
                            src={image.src}
                            alt={image.alt}
                            // quality={100}
                            fill
                            className='w-full h-full object-cover hover:scale-105 transition-all duration-300 cursor-pointer'
                        />
                    </div>
                ))}
            </motion.div>

            {/* Fullscreen Overlay */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
                    onClick={closeFullscreen}
                >
                    <div
                        className="max-w-[100vw] max-h-fit relative bg-white rounded-2xl p-4 shadow-2xl flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image container
                    >
                        <div className="relative w-full h-full max-h-[70vh]">
                            <Image
                                src={selectedImage}
                                alt="Fullscreen image"
                                width={800}
                                height={800}
                                className="w-full h-full max-w-full max-h-[70vh] object-contain rounded-xl"
                            />
                        </div>
                        <button
                            onClick={closeFullscreen}
                            className="absolute top-4 right-4 text-gray-600 bg-gray-100/85 hover:bg-gray-200 rounded-xl px-4 py-2 transition-colors z-10"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

        </div>
        <div className='h-[75vh] md:h-screen w-full bg-gradient-to-r from-black to-[#250041] flex items-center justify-center relative tracking-wider'>
            <p className='absolute w-full text-center top-12 left-1/2 -translate-x-1/2 text-gray-400 text-sm md:text-lg font-inter font-normal'>Let&apos;s make magic together</p>
            <motion.a
                initial={{
                    opacity: 0,
                    y: 25,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    ease: "easeInOut",
                    duration: 0.4,
                }}
                viewport={{ once: true }}
                href="#">
                <h1 className='font-afacad text-4xl md:text-[85px] text-center text-white font-bold md:leading-[5rem]'>Liked my <span className='italic'>work</span>?</h1>
            </motion.a>

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
                    <Link className="text-neutral-100 tracking-wide font-normal h-full w-[100px] md:w-[200px] block relative linear-mask" href="https://www.linkedin.com/in/anurag-kumar-301243269/" target='_blank'>
                        Let&apos;s Connect
                    </Link>
                    <span className="block absolute inset-0 rounded-md p-px linear-overlay pointer-events-none" />
                </motion.button>
            </div>

            <div className='absolute bottom-0 left-0 w-full border border-t-neutral-400 border-l-transparent border-r-transparent border-b-transparent'><Footer /></div>
        </div>
    </>
}

export default Page