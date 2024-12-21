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
                        <p className='font-inter font-normal text-lg text-black'>04</p>
                        <p className='font-inter font-normal text-lg text-black'>Ryde</p>
                    </div>

                    <h1 className='font-afacad font-bold text-3xl md:text-[85px] tracking-tight md:leading-[5rem]'>Effortless Rides,<br /><span className='italic capitalize font-normal'>Seamless</span> Experience</h1>
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
                className='w-full h-[50vh] md:h-screen mt-28 flex items-center justify-center bg-[#DDA6FD] pointer-events-none'>
                <Image src="/project4-hero.png" width={450} height={450} alt="hero image" className='w-[150px] h-auto md:w-[450px] md:h-auto' />
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
                        <p className='font-inter font-normal text-black text-lg mb-10 md:mb-20'>The task was to build a feature-rich cab-booking mobile application with modern capabilities, seamless navigation, and an intuitive interface. The primary challenge lay in incorporating advanced functionalities like <span className='italic font-medium'>real-time</span> location services, payment integration, and smooth user interactions while ensuring efficient app performance.</p>

                        <div className='flex items-center justify-center gap-12'>
                            <div className='font-inter text-lg text-black flex items-center gap-2'>
                                <AnimatedButton href='https://github.com/Archesus/ak-uber' target='_blank'>
                                    Github
                                </AnimatedButton>
                                <ArrowUpRight />
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            <motion.div className='px-5 md:px-0'>
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
                    className='max-container mx-auto h-[45vh] md:h-[600px] rounded-3xl mb-16 md:mb-36 bg-[#2BACB8] flex items-end justify-center pointer-events-none'>
                    <Image src="/project4-image2.png" width={580} height={580} alt="project mockup" />
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
                        <p className='font-inter font-normal text-black text-lg mb-10 md:mb-20'>The goal was to create an app that replicates the ride-booking experience of established platforms while introducing a visually modern and <span className='italic font-medium'>user-friendly</span> UI. This required integrating features like map-based navigation, route suggestions, and a secure payment system, ensuring both functionality and a pleasant user experience.</p>
                    </div>
                </div>
            </motion.div>

            <motion.div
                className='max-container mx-auto px-5 md:px-0
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
                        className='w-full h-auto md:w-[570px] md:h-[560px] rounded-3xl bg-gradient-to-b from-black to-[#050041] flex items-center justify-center'>
                        <Image src="/project4-image3.png" width={348} height={465} alt="project mockup" className="py-5 w-[200px] h-auto md:w-[348px] md:h-auto pointer-events-none" />
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
                        className='w-full h-auto md:w-[570px] md:h-[560px] rounded-3xl flex items-center justify-center overflow-hidden'>
                        <Image src="/project4-image4.png" width={900} height={700} alt="project mockup" className='object-cover object-center rounded-3xl pointer-events-none' />
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
                        className='w-full h-auto md:w-[570px] md:h-[560px] rounded-3xl bg-gradient-to-b from-[#6C17FF] to-[#4D1BEA] flex items-center justify-center pointer-events-none'>
                        <Image src="/project4-image5.png" width={520} height={520} alt="project mockup" />
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
                        className='w-full h-auto md:w-[570px] md:h-[560px] rounded-3xl flex items-center justify-center overflow-hidden'>
                        <Image src="/project4-image6.png" width={900} height={700} alt="project mockup" className='max-w-[100%] h-auto rounded-3xl pointer-events-none' />
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
                        <p className='font-inter font-normal text-black text-lg mb-10 md:mb-20'>The final app is a robust cab-booking platform that provides real-time ride-booking with a sleek and responsive UI. <span className='italic font-semibold underline underline-offset-2'><Link href="https://reactnative.dev/" target='_blank'>React Native</Link></span> ensures cross-platform compatibility, while expo-router enables effortless navigation. Integration of libraries like react-native-maps, react-native-google-places-autocomplete, and <span className='italic font-semibold underline underline-offset-2'><Link href="https://stripe.com/in" target='_blank'>Stripe</Link></span> allows for dynamic maps, location-based services, and secure payment functionality. The app offers users a seamless experience with responsive interfaces and smooth interactions.</p>
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
                    <Image src="/project4-image7.png" width={1800} height={600} alt="project mockup" className='w-full h-fit md:w-full md:h-screen object-cover object-center pointer-events-none' />
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
                    <Image src="/project4-image8.png" width={1800} height={600} alt="project mockup" className='w-full h-fit md:w-full md:h-screen object-cover object-center pointer-events-none' />
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
                        <p className='font-inter font-normal text-black text-lg mb-10 md:mb-20'>This app incorporates a sophisticated tech stack to deliver a high-performing solution. React Native enables cross-platform functionality, while expo-router manages tab navigation efficiently. <span className='italic font-semibold underline underline-offset-2'> <Link href="https://github.com/react-native-maps/react-native-maps" target='_blank'>react-native-maps</Link></span> and <span className='italic font-semibold underline underline-offset-2'> <Link href="https://github.com/FaridSafi/react-native-google-places-autocomplete" target='_blank'>react-native-google-places-autocomplete</Link></span> handle map rendering and address searches. Stripe React Native SDK integrates payment functionality, ensuring secure transactions. State management is handled using <span className='italic font-semibold underline underline-offset-2'> <Link href="https://github.com/pmndrs/zustand" target='_blank'>zustand</Link></span>, and <span className='italic font-semibold underline underline-offset-2'> <Link href="https://github.com/software-mansion/react-native-reanimated" target='_blank'>react-native-reanimated</Link></span> powers smooth animations. These technologies, combined with utility-based styling from <span className='italic font-semibold underline underline-offset-2'> <Link href="https://www.nativewind.dev/" target='_blank'>nativewind</Link></span>, create a dynamic, responsive, and intuitive cab-booking app.</p>
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
