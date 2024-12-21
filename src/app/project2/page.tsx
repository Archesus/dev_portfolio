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
                        <p className='font-inter font-normal text-lg text-black'>02</p>
                        <p className='font-inter font-normal text-lg text-black'>WorkBoost</p>
                    </div>

                    <h1 className='font-afacad font-bold text-3xl md:text-[85px] tracking-tight md:leading-[5rem]'>Empower your <span className='italic capitalize font-normal'>team</span> <br /> <span className='italic capitalize font-normal'> streamline</span> your goals </h1>
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
                className='w-full h-[50vh] md:h-screen mt-28 flex items-center justify-center bg-gradient-to-b from-[#954FFF] to-[#4463CE] pointer-events-none'>
                <Image src="/project2-hero.png" width={1000} height={710} alt="hero image" />
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
                        <p className='font-inter font-normal text-black text-lg mb-10 md:mb-20'>Building a SaaS platform requires a compelling website that not only demonstrates the product’s core features but also highlights its value in streamlining team <span className='italic font-medium'>collaboration</span> and enhancing productivity. The challenge was to create a frontend design that effectively communicates the platform&apos;s ability to simplify team management and boost efficiency in a way that resonates with its target audience.</p>

                        <div className='flex items-center justify-center gap-12'>
                            <div className='font-inter text-lg text-black flex items-center gap-2'>
                                <AnimatedButton href='https://frontend-saas-design-rouge.vercel.app/' target='_blank'>
                                    Website
                                </AnimatedButton>
                                <ArrowUpRight />
                            </div>

                            <div className='font-inter text-lg text-black flex items-center gap-2'>
                                <AnimatedButton href='https://github.com/Archesus/Frontend_Saas_Design' target='_blank'>
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
                    className='max-container mx-auto h-[45vh] md:h-[600px] rounded-3xl mb-16 md:mb-36 bg-gradient-to-b from-[#3C55A8] to-[#0B1686] flex items-center justify-center pointer-events-none'>
                    <Image src="/project2-image4.png" width={580} height={580} alt="project mockup" />
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
                        <p className='font-inter font-normal text-black text-lg mb-10 md:mb-20'>The primary goal was to develop a frontend website that showcases the SaaS platform as the ultimate tool for organizing teams and tracking goals effectively. The objectives were to create an intuitive and responsive user interface, visually highlight the platform’s features like task tracking, project <span className='italic font-medium'>management</span>, and seamless communication, and provide potential users with a clear understanding of how it can revolutionize team productivity.</p>
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
                        className='w-full h-auto md:w-[570px] md:h-[560px] rounded-3xl bg-[#4128b8] flex items-center justify-center'>
                        <Image src="/project2-image3.png" width={435} height={435} alt="project mockup" className="py-5 w-[345px] h-[345px] md:w-[435px] md:h-[435px] pointer-events-none" />
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
                        <Image src="/project2-image2.png" width={700} height={700} alt="project mockup" className='object-cover object-center rounded-3xl pointer-events-none' />
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
                        className='w-full h-auto md:w-[570px] md:h-[560px] rounded-3xl bg-gradient-to-b from-[#6C17FF] to-[#4D1BEA] flex items-end justify-end'>
                        <Image src="/project2-image6.png" width={560} height={560} alt="project mockup" />
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
                        className='w-full h-auto md:w-[570px] md:h-[560px] rounded-3xl flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#6F049C] to-[#050A43]'>
                        <Image src="/project2-image5.png" width={900} height={700} alt="project mockup" className='max-w-[100%] h-auto rounded-3xl object-cover object-center' />
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
                <div className='flex flex-col md:flex-row items-start justify-evenly gap-4 md:gap-0'>
                    <h3 className='font-inter font-medium text-lg text-black'>
                        The Solution
                    </h3>
                    <div className='w-full md:w-1/2 flex flex-col items-start'>
                        <p className='font-inter font-normal text-black text-lg mb-10 md:mb-20'>The solution was a sleek, user-focused website built using <span className='italic font-semibold underline underline-offset-2'><Link href="https://nextjs.org/" target='_blank'>NextJS</Link></span>, combined with <span className='italic font-semibold underline underline-offset-2'><Link href="https://motion.dev/" target='_blank'>Motion <span className='font-normal'>(formerly Framer Motion)</span></Link></span> for smooth transitions and interactive elements. The design process, carried out in <span className='italic font-semibold underline underline-offset-2'><Link href="https://figma.com/" target='_blank'>Figma</Link></span>, prioritized clarity and <span className='italic font-medium'>accessibility</span>, showcasing the SaaS’s functionalities like streamlined team management, task prioritization, and tracking progress. The final website effectively communicates the platform’s value through engaging visuals, concise messaging, and dynamic animations that captivate the audience.</p>
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

            <div className='mt-10 md:mt-24 flex flex-col items-center justify-center gap-0 md:gap-20'>
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
                    className='w-full h-[50vh] md:h-fit my-0 md:my-10 pointer-events-none'>
                    <Image src="/project2-image7.png" width={1800} height={600} alt="project mockup large" className='w-full h-fit md:w-full md:h-screen object-cover object-center' />
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
                    <Image src="/project2-image9.png" width={1800} height={600} alt="project mockup" className='w-full h-fit md:w-full md:h-screen object-cover object-center' />
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
                    className='w-full h-[50vh] md:h-fit my-3 md:my-10'>
                    <Image src="/project2-image8.png" width={1600} height={600} quality={100} alt="project mockup large" className='w-full h-fit md:w-full md:h-screen object-cover object-center' />
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
                        <p className='font-inter font-normal text-black text-lg mb-10 md:mb-20'>The project utilized <span className='italic font-semibold underline underline-offset-2'> <Link href="https://nextjs.org/" target='_blank'>NextJS</Link></span> to build a modular and maintainable frontend architecture, allowing for future scalability.<span className='italic font-semibold underline underline-offset-2'><Link href="https://motion.dev/" target='_blank'> Motion </Link></span>was integrated to implement fluid <span className='italic font-medium'>micro-interactions</span>, adding a modern and interactive feel to the design. Prototyping and wireframing were completed in <span className='italic font-semibold underline underline-offset-2'><Link href="https://figma.com/" target='_blank'> Figma </Link></span>, ensuring a cohesive user experience. The website was deployed on Vercel, providing fast performance and reliability for a seamless browsing experience.</p>
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
                        <a className="text-neutral-100 tracking-wide font-normal h-full w-[100px] md:w-[200px] block relative linear-mask" href="https://www.linkedin.com/in/anurag-kumar-301243269/" target='_blank'>
                            Let&apos;s Connect
                        </a>
                        <span className="block absolute inset-0 rounded-md p-px linear-overlay pointer-events-none" />
                    </motion.button>
                </div>

                <div className='absolute bottom-0 left-0 w-full border border-t-neutral-400 border-l-transparent border-r-transparent border-b-transparent'><Footer /></div>
            </div>
        </div>
    )
}

export default page