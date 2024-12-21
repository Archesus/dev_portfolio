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
                        <p className='font-inter font-normal text-lg text-black'>03</p>
                        <p className='font-inter font-normal text-lg text-black'>Zentry</p>
                    </div>

                    <h1 className='font-afacad font-bold text-3xl md:text-[85px] tracking-tight md:leading-[5rem]'>Unite Realms, <br /> Unlock <span className='italic capitalize font-normal'> Possibilities</span>.</h1>
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
                <Image src="/project3-hero.png" width={1000} height={710} alt="hero image" />
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
                        <p className='font-inter font-normal text-black text-lg mb-10 md:mb-20'>Zentry addresses the challenge of uniting diverse digital realms under a cohesive, immersive platform that fosters creativity, collaboration, and exploration. In a fragmented digital landscape, the need for a unified <span className='italic font-medium'>ecosystem</span> that blends storytelling, NFTs, and social interactions is paramount. Zentry tackles this by offering a metagame universe with interconnected realms, driven by user participation and shared goals. The challenge in recreating this platform was to capture its vision, aesthetic, and functionality while paying homage to its innovation and design complexity.</p>

                        <div className='flex items-center justify-center gap-12'>
                            <div className='font-inter text-lg text-black flex items-center gap-2'>
                                <AnimatedButton href='https://zen-woad.vercel.app/' target='_blank'>
                                    Website
                                </AnimatedButton>
                                <ArrowUpRight />
                            </div>

                            <div className='font-inter text-lg text-black flex items-center gap-2'>
                                <AnimatedButton href='https://github.com/Archesus/zen' target='_blank'>
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
                    className='max-container mx-auto h-[45vh] md:h-[600px] rounded-3xl mb-16 md:mb-36 bg-[#EDFF66] flex items-center justify-center pointer-events-noner'>
                    <Image src="/project3-image2.png" width={700} height={700} alt="project mockup" />
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
                        <p className='font-inter font-normal text-black text-lg mb-10 md:mb-20'>The primary goal of Zentry is to create a seamless and <span className='italic font-medium'>interconnected</span> digital universe where users can explore, interact, and shape their own destinies. It aims to provide tools and environments that encourage creativity, foster collaboration, and enable users to unlock opportunities in a multi-realm ecosystem. For the recreation project, the objective was to honor the original website&apos;s design and vision while showcasing personal frontend development skills. Additionally, this project served as a testament to the influence of <span className='italic font-semibold underline underline-offset-2'><Link href="https://zentry.com/" target='_blank'>Zentry</Link></span> and <span className='italic font-semibold underline underline-offset-2'><Link href="https://youtu.be/zA9r5zTllx4" target='_blank'>JavaScript Mastery</Link></span>, whose content played a crucial role in the learning and development process.</p>
                    </div>
                </div>
            </motion.div>

            <motion.div
                className='max-container mx-auto px-5 md:px-0
                 flex flex-col md:flex-row gap-8 md:gap-16 justify-center'>
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
                        className='w-full h-auto md:w-[570px] md:h-[560px] rounded-3xl bg-gradient-to-b from-[#8A57BF] to-[#190067] flex items-center justify-center'>
                        <Image src="/project-3.png" width={570} height={427.5} alt="project mockup" className="py-5 w-[200px] h-auto md:w-[570px] md:h-[427.5px] pointer-events-none" />
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
                        <Image src="/project3-image3.png" width={900} height={700} alt="project mockup" className='object-cover object-center rounded-3xl pointer-events-none' />
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
                        <Image src="/project3-image4.png" width={570} height={427.5} alt="project mockup" />
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
                        <Image src="/project3-image5.png" width={900} height={700} alt="project mockup" className='max-w-[100%] h-auto rounded-3xl pointer-events-none' />
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
                        <p className='font-inter font-normal text-black text-lg mb-10 md:mb-20'>Zentry offers a unified digital platform that combines immersive storytelling, advanced technologies like AI and NFTs, and user-driven economies. It enables users to engage in social hubs, shape a futuristic <span className='italic font-medium'>metagame</span> universe, and collaborate on shared goals. For the clone, the design and functionality of the original website were meticulously analyzed and recreated using modern web technologies. This involved replicating the visual hierarchy, interactive animations, and responsive design. Special care was taken to reflect Zentry’s innovative spirit and maintain fidelity to its original purpose while leveraging insights gained from JavaScript Mastery’s tutorials.</p>
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
                    <Image src="/project3-image6.png" width={1800} height={600} alt="project mockup" className='w-full h-fit md:w-full md:h-screen object-cover object-center' />
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
                    <Image src="/project3-image7.png" width={1800} height={600} alt="project mockup" className='w-full h-fit md:w-full md:h-screen object-cover object-center pointer-events-none' />
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
                        <p className='font-inter font-normal text-black text-lg mb-10 md:mb-20'>The Zentry clone was built using <span className='italic font-semibold underline underline-offset-2'> <Link href="https://react.dev/" target='_blank'>ReactJS</Link></span> for its dynamic, component-based architecture, and <span className='italic font-semibold underline underline-offset-2'><Link href="https://tailwindcss.com/" target='_blank'>TailwindCSS</Link></span> to craft a clean, responsive, and utility-driven design. <span className='italic font-semibold underline underline-offset-2'><Link href="https://gsap.com/" target='_blank'>GSAP <span className='font-normal'> (Greensock Animation Platform)</span></Link></span> brought life to the interface with smooth, professional-grade animations and transitions. Finally, the project was deployed on <span className='italic font-semibold underline underline-offset-2'><Link href="https://vercel.com/" target='_blank'>Vercel</Link></span>, ensuring fast load times and optimized performance, resulting in a highly functional and visually accurate recreation of Zentry&apos;s innovative platform.</p>
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
