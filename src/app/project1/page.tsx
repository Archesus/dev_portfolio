"use client";
import React from 'react'
import Image from 'next/image';
import AnimatedButton from '@/components/AnimatedButton';
import { ArrowUpRight } from 'lucide-react';
import Footer from '@/components/Footer';
import { motion } from 'motion/react';
import Link from 'next/link';

const page = () => {
    return (
        <div className='project-template'>
            <div className='max-container bg-white mx-auto'>
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 25,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        ease: "easeInOut",
                        duration: 0.4,
                        delay: 0.3,
                    }}
                    className='hero-text mt-20 mb-20 px-5 md:px-10'>
                    <div className='flex items-center gap-4 mb-10'>
                        <p className='font-inter font-normal text-lg text-black'>01</p>
                        <p className='font-inter font-normal text-lg text-black'>Stellar</p>
                    </div>

                    <h1 className='font-afacad font-bold text-3xl md:text-[55px] lg:text-[85px] tracking-tight md:leading-[5rem]'>Unlock your <span className='italic capitalize font-normal'>Creativity</span> <br /> one <span className='italic capitalize font-normal'> design</span> at a time </h1>
                </motion.div>
            </div>

            <motion.div
                initial={{
                    opacity: 0,
                    y: 25,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    ease: "easeInOut",
                    duration: 0.4,
                    delay: 0.55,
                }}
                className='w-full h-[50vh] md:h-screen mt-28 flex items-center justify-center bg-gradient-to-b from-[#954FFF] to-[#491AEB] pointer-events-none'>
                <Image src="/project1-hero.png" width={1000} height={710} alt="hero image" />
            </motion.div>

            <motion.div
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
                className='max-container mx-auto h-fit w-full my-16 md:my-36 px-10'>
                <div className='flex flex-col md:flex-row items-start justify-evenly gap-4 md:gap-0'>
                    <h3 className='font-inter font-medium text-lg text-black'>
                        The Challenge
                    </h3>
                    <div className='w-full md:w-1/2 flex flex-col items-start'>
                        <p className='font-inter font-normal text-black text-lg mb-10 md:mb-20'>Designers often face creative blocks, especially when working under tight deadlines or managing multiple projects. These moments of stagnation can significantly impact productivity and <span className='italic font-medium'> creativity</span>. The challenge was to create a resource that could inspire designers and provide practical, ready-to-use design elements without compromising on modern aesthetics.</p>

                        <div className='font-inter text-lg text-black flex items-center gap-2'>
                            <AnimatedButton href='https://vivacious-writers-462392.framer.app/' target='_blank'>
                                Website
                            </AnimatedButton>
                            <ArrowUpRight />
                        </div>
                    </div>
                </div>
            </motion.div>

            <motion.div className='px-5 lg:px-0'>
                <motion.div
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
                    className='max-container mx-auto h-[45vh] md:h-[600px] rounded-3xl mb-16 md:mb-36 bg-gradient-to-b from-black to-[#0C2947] flex items-center justify-center pointer-events-none'>
                    <Image src="/img2.png" width={580} height={580} alt="mobile mockup" />
                </motion.div>
            </motion.div>

            <motion.div
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
                className='max-container mx-auto h-fit w-full my-16 md:my-36 px-10'>
                <div className='flex flex-col md:flex-row items-start justify-evenly gap-4 md:gap-0'>
                    <h3 className='font-inter font-medium text-lg text-black'>
                        Goals & Objectives
                    </h3>
                    <div className='w-full md:w-1/2 flex flex-col items-start'>
                        <p className='font-inter font-normal text-black text-lg mb-10 md:mb-20'>The goal was to create a UI Kit that serves as a lifesaver for designers, blending modern aesthetics with practical <span className='italic font-medium'>usability</span> . It aimed to inspire creativity, accelerate workflows, and provide versatile, ready-to-use components that help designers overcome challenges and deliver exceptional designs effortlessly.</p>
                    </div>
                </div>
            </motion.div>

            <motion.div
                className='max-container mx-auto px-5 lg:px-0 w-full
                 flex flex-col md:flex-row gap-8 md:gap-16 justify-center pointer-events-none'>
                <div className='flex flex-col items-center gap-8'>
                    <motion.div
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
                        className='w-full h-auto lg:w-[570px] lg:h-[560px] rounded-3xl bg-gradient-to-b from-black to-[#050041] flex items-center justify-center'>
                        <Image src="/project1-logo.svg" width={318} height={435} alt="project logo" className="py-5 w-[200px] h-[345px] lg:w-[318px] lg:h-[435px]" />
                    </motion.div>
                    <motion.div
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
                        className='w-full h-auto lg:w-[570px] lg:h-[560px] rounded-3xl flex items-center justify-center overflow-hidden'>
                        <Image src="/project1-image.png" width={900} height={700} alt="project mockup" className='object-cover object-center rounded-3xl' />
                    </motion.div>
                </div>
                <div className='mt-0 md:mt-32 flex flex-col gap-8 items-center'>
                    <motion.div
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
                        className='w-full h-auto lg:w-[570px] lg:h-[560px] rounded-3xl bg-gradient-to-b from-[#6C17FF] to-[#4D1BEA] flex items-center justify-center'>
                        <Image src="/project1-image3.png" width={400} height={560} alt="project mockup" />
                    </motion.div>
                    <motion.div
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
                        className='w-full h-auto lg:w-[570px] lg:h-[560px] rounded-3xl flex items-center justify-center overflow-hidden'>
                        <Image src="/project1-image2.png" width={900} height={700} alt="project mockup" className='max-w-[100%] h-auto rounded-3xl' />
                    </motion.div>
                </div>
            </motion.div>

            <motion.div
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
                className='max-container mx-auto h-fit w-full my-16 md:my-36 px-10'>
                <div className='flex flex-col md:flex-row items-start justify-evenly'>
                    <h3 className='font-inter font-medium text-lg text-black'>
                        The Solution
                    </h3>
                    <div className='w-full md:w-1/2 flex flex-col items-start'>
                        <p className='font-inter font-normal text-black text-lg mb-10 md:mb-20'>We developed a versatile UI Kit combining modern design trends with practical usability. Featuring customizable components like buttons, forms, and layouts, it’s designed for <span className='italic font-medium'>seamless</span> use across web and mobile projects. Built using Figma, the kit ensures accessibility for all skill levels, empowering designers to overcome creative blocks and create exceptional designs quickly.</p>
                    </div>
                </div>
            </motion.div>

            <motion.div
                initial={{
                    width: "25%"
                }}
                whileInView={{
                    width: "100%"
                }}
                transition={{
                    ease: "easeInOut",
                    duration: 0.75,
                }}
                viewport={{ once: true }}
            >
                <div className='w-full h-[1.2px] bg-gradient-to-r from-transparent to-zinc-900 mb-20' />
            </motion.div>

            <div className='mt-10 md:mt-24 flex flex-col items-center justify-center gap-0 md:gap-20 pointer-events-none'>
                <motion.div
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
                    className='w-full h-[50vh] md:h-fit my-0 md:my-10'>
                    <Image src="/project1-last.png" width={1800} height={600} alt="project mockup large" className='w-full h-fit md:w-full md:h-screen object-cover object-center' />
                </motion.div>

                <motion.div
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
                    className='w-full h-[50vh] md:h-fit my-0 md:my-10'>
                    <Image src="/project1-last2.png" width={1800} height={600} alt="project mockup large" className='w-full h-fit md:w-full md:h-screen object-cover object-center' />
                </motion.div>
            </div>

            <motion.div
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
                className='max-container mx-auto h-fit w-full my-16 md:my-36 px-10'>
                <div className='flex flex-col md:flex-row gap-3 md:gap-0
                 items-start justify-evenly'>
                    <h3 className='font-inter font-medium text-lg text-black'>
                        Technological Approach
                    </h3>
                    <div className='w-full md:w-1/2 flex flex-col items-start'>
                        <p className='font-inter font-normal text-black text-lg mb-10 md:mb-20'>The Website was built using   <span className='italic font-semibold underline underline-offset-2'> <Link href="https://www.framer.com/" target='_blank'>Framer</Link></span>, leveraging its powerful features to enhance functionality and user experience. Microinteractions were carefully crafted within Framer to add a layer of interactivity, ensuring a seamless and engaging design process. The platform&apos;s intuitive interface and robust prototyping tools allowed for precise adjustments and rapid iteration, making the UI Kit not only visually appealing but also highly functional for modern design needs.</p>
                    </div>
                </div>
            </motion.div>

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
                    <h1 className='font-afacad text-4xl md:text-[85px] text-center text-white font-bold md:leading-[5rem]'>Have any other <br /> <span className='italic'>ideas</span>?</h1>
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
        </div>
    )
}

export default page
