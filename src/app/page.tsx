"use client"
import ProjectCardTilt from "@/components/ProjectTilt";
import SubtitleText from "@/components/SubtitleText";
import Tags from "@/components/Tags";
import TitleText from "@/components/TitleText";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import LastPart from "@/components/LastPart";
import { useRef } from "react";
import Link from "next/link";


export default function Home() {

  const projectRef = useRef(null);
  const { scrollYProgress: firstScrollAnimation } = useScroll({
    target: projectRef,
    offset: ["start end", "center center"],
  });

  const slideUp = useTransform(firstScrollAnimation, [0, 1], ["10%", "0%"]);

  const serviceRef = useRef(null);
  const { scrollYProgress: secondScrollAnimation } = useScroll({
    target: serviceRef,
    offset: ["start end", "center center"],
  });

  const yTranslate = useTransform(secondScrollAnimation, [0, 1], ["10%", "0%"]);

  const boundingRef = useRef(null);


  return <>
    <div className="relative w-dvw h-fit max-container mx-auto">
      <motion.div id="hero" className="w-full h-fit relative px-5 md:px-10 flex flex-col items-center mb-5 md:mb-10">
        <motion.div
          initial={{
            opacity: 0,
            scale: 0,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            delay: 0.5,
            duration: 0.5,
            ease: "easeOut"
          }}
          className="dot-bg absolute top-0 left-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#E8E8E8_1.15px,transparent_1.5px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"
        ></motion.div>
        <motion.div
          initial={{
            opacity: 0,
            y: "45%"
          }}
          animate={{
            opacity: 1,
            y: "0%"
          }}
          transition={{
            delay: 0.75,
            duration: 0.5,
            ease: "easeOut"
          }}
          className="blob hidden lg:block absolute top-[350px] -z-[9] lg:h-[843px] lg:w-[1097px] max-h-[843px] max-w-[1097px]"
        >
          <Image src="/Blob.svg" alt="blob" width={1000} height={840} />
        </motion.div>

        <motion.div className="hero-text w-full flex flex-col md:flex-row items-center md:items-end gap-2 md:gap-5 md:justify-between mt-5 md:mt-20 mb-5 md:mb-10 ">
          <TitleText />
          <SubtitleText />

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              ease: "easeInOut",
              duration: 0.5,
              delay: 0.65
            }}

            className="md:hidden flex flex-col gap-4 items-center">
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
              className="px-6 py-2 rounded-md relative radial-gradient">
              <a className="text-neutral-100 tracking-wide font-normal h-full w-[100px] md:w-[200px] block relative linear-mask" href="https://www.linkedin.com/in/anurag-kumar-301243269/" target='_blank'>
                Let&apos;s Connect
              </a>
              <span className="block absolute inset-0 rounded-md p-px linear-overlay" />
            </motion.button>
          </motion.div>

        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            y: "100%",
          }}
          animate={{
            opacity: 1,
            y: "0",
          }}
          transition={{
            ease: "easeInOut",
            duration: 0.5,
            delay: 0.75,
          }}
          className="small-text w-full mt-10 mb-5 flex items-center justify-between">
          <p className="font-inter font-normal md:text-base text-xs">Design</p>
          <p className="font-inter font-normal md:text-base text-xs">Development</p>
          <p className="font-inter font-normal md:text-base text-xs">No Code</p>
          <p className="font-inter font-normal md:text-base text-xs">Graphic</p>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            y: "20%",
          }}
          animate={{
            opacity: 1,
            y: "0",
          }}
          transition={{
            ease: "easeInOut",
            duration: 0.5,
            delay: 0.75,
          }}
          className="hero-image w-full h-fit rounded-2xl md:rounded-[30px] overflow-hidden">
          <Image src="/hero.webp" height={640} width={1360} alt="hero image" className="object-cover max-h-[340px] lg:max-h-[640px] min-w-full h-auto w-auto md:hover:scale-105 transition-images" />
        </motion.div>

        <div className="flex items-center justify-between w-full mt-3 md:mt-5 h-fit">
          <Image src="/cross.svg" alt="cross-design" width={80} height={35} className="max-w-10 max-h-10 md:max-w-[80px] md:max-h-[35px]" />
          <Image src="/cross-2.svg" alt="cross-design" width={80} height={35} className="max-w-10 max-h-10 md:max-w-[80px] md:max-h-[35px]" />
        </div>
      </motion.div>

      <motion.div
        className="w-full h-fit mt-5 mb-5 md:mb-10 md:mt-10 px-5 md:px-10 py-5 md:py-10"
        id="project"
      >
        <div><h2 className="text-5xl font-afacad font-bold md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-black to-[#250041]">Projects.</h2></div>

        <motion.div
          ref={projectRef}
          style={{ y: slideUp }}
          className="w-full grid md:grid-cols-2 auto-rows-[300px] md:auto-rows-[400px] lg:auto-rows-[500px] gap-4
         mt-4">
          <ProjectCardTilt
            bgGradientFrom="from-[#0c1ba9]"
            bgGradientTo="to-[#93A5E5]"
            href="../project1"
          >
            <Image src="/project-1.png" width={400} height={400} alt="project 1" className="absolute top-5 left-1/2 -translate-x-1/2 w-[250px] h-auto md:w-[400px] md:h-auto" />
            <div className="absolute bottom-5 left-5 md:left-5 flex items-center justify-center gap-2 md:gap-5">
              <Tags tag="Design" className=" text-white text-xs p-2 lg:text-lg md:px-4 md:py-2" />
              <Tags tag="Development" className=" text-white text-xs p-2 lg:text-lg md:px-4 md:py-2" />
              <Tags tag="No-Code" className=" text-white text-xs p-2 lg:text-lg md:px-4 md:py-2" />
            </div>
          </ProjectCardTilt>
          <ProjectCardTilt
            bgGradientFrom="from-[#0c1ba9]"
            bgGradientTo="to-[#93A5E5]"
            href="../project2"
          >
            <Image src="/project-2.png" width={400} height={400} alt="project 2" className="absolute top-5 left-1/2 -translate-x-1/2 w-[250px] h-auto md:w-[500px] md:h-auto" />
            <div className="absolute bottom-5 left-5 md:left-5 flex items-center justify-center gap-2 md:gap-5">
              <Tags tag="Design" className="text-white text-xs p-2 lg:text-lg md:px-4 md:py-2" />
              <Tags tag="Development" className="text-white text-xs p-2 lg:text-lg md:px-4 md:py-2" />
              <Tags tag="NextJs" className="text-white text-xs p-2 lg:text-lg md:px-4 md:py-2" />
            </div>
          </ProjectCardTilt>
          <ProjectCardTilt
            bgGradientFrom="from-[#7C18FE]"
            bgGradientTo="to-[#0863CB]"
            href="../project3"
          >
            <Image src="/project-3.png" width={400} height={400} alt="project 3" className="absolute top-5 left-1/2 -translate-x-1/2 w-[400px] h-auto md:w-[650px] md:h-auto" />
            <div className="absolute bottom-5 left-5 md:left-5 flex items-center justify-center gap-2 md:gap-5">
              <Tags tag="Development" className="text-white text-xs p-2 lg:text-lg md:px-4 md:py-2" />
              <Tags tag="ReactJs" className="text-white text-xs p-2 lg:text-lg md:px-4 md:py-2" />
              <Tags tag="GSAP" className="text-white text-xs p-2 lg:text-lg md:px-4 md:py-2" />
            </div>
          </ProjectCardTilt>
          <ProjectCardTilt
            bgGradientFrom="from-[#1C62A7]"
            bgGradientTo="to-[#D07BFC]"
            href="../project4"
          >
            <Image src="/project-4.png" width={400} height={400} alt="project 4" className="absolute top-5 left-1/2 -translate-x-1/2 w-[250px] h-auto md:w-[350px] md:h-auto" />
            <div className="absolute bottom-5 left-5 md:left-5 flex items-center justify-center gap-2 md:gap-5">
              <Tags tag="Design" className="text-white text-xs p-2 lg:text-lg md:px-4 md:py-2" />
              <Tags tag="App Dev" className="text-white text-xs p-2 lg:text-lg md:px-4 md:py-2" />
              <Tags tag="React-Native" className="text-white text-xs p-2 lg:text-lg md:px-4 md:py-2" />
            </div>
          </ProjectCardTilt>
        </motion.div>
      </motion.div>

      <motion.div id="services"
        className="h-fit w-full mt-5 mb-5 md:mb-10 md:mt-10 px-5 md:px-10 py-5 md:py-10">
        <div><h2 className="text-5xl font-afacad font-bold md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-black to-[#250041]">Services.</h2></div>
        <motion.div ref={serviceRef} style={{ y: yTranslate }} className="w-full h-full">

          <motion.div className="relative group w-full px-5 h-[280px] md:h-[300px] lg:h-[350px] mt-5 md:mt-10 bg-gradient-to-br from-black to-[#250041] rounded-3xl py-5 overflow-hidden">
            <h2 className="font-afacad font-semibold uppercase text-4xl md:text-6xl text-white absolute top-5 left-5 md:top-10 md:left-10 z-10">web & mobile <br /> design</h2>

            <div className="absolute -right-5 -bottom-20 mix-blend-overlay opacity-60 group-hover:opacity-95 transition-opacity duration-500">
              <Image src="/pixels.svg" width={315} height={315} alt="pixel bg" />
            </div>

            <div
              className="hidden lg:block absolute translate-y-[310px] left-24 group-hover:translate-y-[110px] transition-transform duration-[750ms]">
              <Image src="/service-1.png" alt="service 1" width={350} height={350} />
            </div>

            <p className="font-inter font-normal text-sm md:text-lg text-white absolute bottom-5 right-5 md:bottom-10 md:right-10 text-right">Crafting engaging, user-centric <br />
              designs that deliver seamless experiences</p>
          </motion.div>

          <motion.div className="relative group w-full px-5 h-[280px] md:h-[300px] lg:h-[350px] mt-5 md:mt-10 bg-gradient-to-br from-black to-[#250041] rounded-3xl py-5 overflow-hidden">
            <h2 className="font-afacad font-semibold uppercase text-4xl md:text-6xl text-white absolute top-5 left-5 md:top-10 md:left-10 z-10">NO CODE<br />DEVELOPMENT</h2>

            <div className="absolute -right-5 -bottom-20 mix-blend-overlay opacity-60 group-hover:opacity-95 transition-opacity duration-500">
              <Image src="/pixels.svg" width={315} height={315} alt="pixel bg" />
            </div>

            <div
              className="hidden lg:block absolute translate-y-[310px] left-24 group-hover:translate-y-[110px] transition-transform duration-[750ms]">
              <Image src="/service-2.png" alt="service 2" width={350} height={350} />
            </div>

            <p className="font-inter font-normal text-sm md:text-lg text-white absolute bottom-5 right-5 md:bottom-10 md:right-10 text-right">Empowering ideas to take <br />
              shape without writing a single line of code</p>
          </motion.div>

          <motion.div className="relative group w-full px-5 h-[280px] md:h-[300px] lg:h-[350px] mt-5 md:mt-10 bg-gradient-to-br from-black to-[#250041] rounded-3xl py-5 overflow-hidden">
            <h2 className="font-afacad font-semibold uppercase text-4xl md:text-6xl text-white absolute top-5 left-5 md:top-10 md:left-10 z-10">3D ASSETS &<br />& DEVELOPMENT</h2>

            <div className="absolute -right-5 -bottom-20 mix-blend-overlay opacity-60 group-hover:opacity-95 transition-opacity duration-500">
              <Image src="/pixels.svg" width={315} height={315} alt="pixel bg" />
            </div>

            <div
              className="hidden lg:block absolute translate-y-[310px] left-24 group-hover:translate-y-[110px] transition-transform duration-[750ms]">
              <Image src="/service-3.png" alt="service 3" width={350} height={350} />
            </div>

            <p className="font-inter font-normal text-sm md:text-lg text-white absolute bottom-5 right-5 md:bottom-10 md:right-10 text-right">Bringing imagination to life <br />
              through interactive 3D experiences</p>
          </motion.div>
        </motion.div>

      </motion.div>

      <div id="about" ref={boundingRef} className="h-fit w-full px-5 md:px-10 md:py-10 my-5 md:my-10 py-5 overflow-hidden" >

        <div><h2 className="text-5xl font-afacad font-bold md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-black to-[#250041]">About.</h2></div>

        <motion.div
          className="grid md:grid-cols-3 auto-rows-[200px] lg:auto-rows-[308px] gap-2 md:gap-4 my-5 md:my-10">
          <motion.div
            initial={{ opacity: 0.7, y: "10%" }}
            whileInView={{ opacity: 1, y: "0%" }}
            transition={{
              ease: "linear",
              duration: 0.65,
            }}
            viewport={{ once: true }}
            className="border border-zinc-600 rounded-2xl row-span-2 md:row-span-2 bg-gradient-to-br from-black to-[#250041] relative px-5 py-5 lg:px-7 lg:pt-10 overflow-hidden">
            <div className="flex flex-col justify-center gap-3">
              <div>
                <h2 className="font-afacad font-normal text-2xl lg:text-[35px] leading-[2.25rem] text-white">A creative trying to not go
                  insane</h2>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex flex-col justify-center items-center">
                  <h1 className="font-afacad font-semibold text-5xl lg:text-8xl text-zinc-500">22</h1>
                  <p className="font-afacad font-medium text-zinc-600 text-base md:text-xl">years old</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h1 className="font-afacad font-semibold text-5xl lg:text-8xl text-zinc-500">10+</h1>
                  <p className="font-afacad font-medium text-zinc-600 text-base md:text-xl">projects</p>
                </div>
              </div>
              <div className="absolute -bottom-10 lg:-bottom-4 lg:-right-4">
                <Image src="/box-1.png" width={381} height={456} alt="a boy drawing on a tablet" className="pointer-events-none" />
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0.7, y: "10%" }}
            whileInView={{ opacity: 1, y: "0%" }}
            transition={{
              ease: "linear",
              duration: 0.65,
            }}
            viewport={{ once: true }}
            className="group rounded-2xl relative px-7 py-8 md:px-3 md:py-4 lg:px-7 lg:py-8 flex flex-col justify-between items-center overflow-hidden border border-zinc-600
            "
            style={{
              backgroundImage: 'radial-gradient(125% 125% at 50% 0%, #0f0f0f 50%, #250041)',
            }}
          >
            <div className="flex flex-col items-center w-full">
              <h2 className="font-afacad font-normal text-2xl text-center lg:text-[35px] leading-[2.25rem] text-white">Let’s Work Together</h2>
              <p className="font-afacad font-medium text-zinc-500 text-base lg:text-xl">Let’s make magic happen</p>
            </div>
            <div className="flex flex-col gap-4 items-center scale-75 lg:scale-100">
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
                className="px-6 py-2 rounded-md relative radial-gradient">
                <Link className="text-neutral-100 tracking-wide font-normal h-full w-[100px] md:w-[200px] block relative linear-mask" href="https://www.linkedin.com/in/anurag-kumar-301243269/" target="_blank">
                  Let&apos;s Connect
                </Link>
                <span className="block absolute inset-0 rounded-md p-px linear-overlay pointer-events-none" />
              </motion.button>

            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0.7, y: "10%" }}
            whileInView={{ opacity: 1, y: "0%" }}
            transition={{
              ease: "linear",
              duration: 0.65,
            }}
            viewport={{ once: true }}
            className="rounded-2xl relative overflow-hidden px-7 py-8 border border-zinc-600"
            style={{
              backgroundImage: 'radial-gradient(120% 120% at 50% 100%, #0f0f0f 50%, #250041)'
            }}
          >
            <h1 className="font-afacad font-normal text-2xl lg:text-[35px] leading-[2.25rem] text-white absolute top-6 left-16 md:left-10 lg:top-10 lg:left-24">My Toolkit</h1>
            <div className="pointer-events-none">
              <Image src="/circles-1.png" alt="tech stack logos" width={240} height={240} className="absolute top-12 -left-20 lg:top-20 lg:-left-24 w-[150px] h-auto lg:w-[240px]" />
              <Image src="/circles-2.png" alt="tech stack logos" width={280} height={280} className="absolute top-5 lg:top-7 -right-24 lg:-right-32 w-[180px] h-auto lg:w-[280px]" />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0.7, y: "10%" }}
            whileInView={{ opacity: 1, y: "0%" }}
            transition={{
              ease: "linear",
              duration: 0.65,
            }}
            viewport={{ once: true }}
            className="border border-zinc-600 rounded-2xl overflow-hidden">
            <Image src="/box-4.png" width={400} height={400} alt="image of a phone" className="pointer-events-none w-full h-full object-cover object-center" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0.7, y: "10%" }}
            whileInView={{ opacity: 1, y: "0%" }}
            transition={{
              ease: "linear",
              duration: 0.65,
            }}
            viewport={{ once: true }}
            className="bg-zinc-400 rounded-2xl px-7 py-8 flex items-center justify-center z-[4] overflow-hidden"
            style={{
              backgroundImage: 'radial-gradient(125% 125% at 100% 0%, #250041, #0f0f0f 50%)'
            }}
          >
            <div className="flex flex-col items-center justify-center gap-0 relative">
              <Image src="/box-5.svg" width={430} height={260} alt="box" className="pointer-events-none" />
              <Image src="/pixels.svg" width={200} height={200} alt="box" className="pointer-events-none absolute -z-0 -bottom-8 -left-20 mask-pixels opacity-55" />
              <Image src="/pixels.svg" width={200} height={200} alt="box" className="pointer-events-none absolute -z-0 -top-40 -right-20 mask-pixels opacity-55" />
              <div className="flex items-baseline gap-0 w-fit h-fit absolute">
                <h1 className="font-afacad font-bold text-[200px] text-white h-fit">A</h1>
                <p className="font-inter font-bold text-9xl text-white">a</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0.7, y: "10%" }}
            whileInView={{ opacity: 1, y: "0%" }}
            transition={{
              ease: "linear",
              duration: 0.65,
            }}
            viewport={{ once: true }}
            className="border border-zinc-600 flex flex-col items-start px-7 py-8 rounded-2xl bg-gradient-to-tl from-[#250041] to-black overflow-hidden relative gap-2 md:gap-0">
            <h1 className="font-afacad font-semibold text-2xl lg:text-4xl text-neutral-200">Visually stunning</h1>
            <p className="font-inter font-normal text-base lg:text-lg text-neutral-400 z-[2] mix-blend-difference">Creating beautiful 3D assets <br /> in Spline & Blender.</p>
            <Image src="/service-2.png" width={400} height={400} alt="3d asset" className="pointer-events-none absolute -bottom-32 -right-28 lg:-bottom-40 lg:-right-36" />
            <Image src="/noise.svg" width={500} height={500} alt="noise" className="absolute min-h-full min-w-full top-0 bottom-0 left-0 right-0 mix-blend-multiply opacity-80 pointer-events-none" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0.7, y: "10%" }}
            whileInView={{ opacity: 1, y: "0%" }}
            transition={{
              ease: "linear",
              duration: 0.65,
            }}
            viewport={{ once: true }}
            className="rounded-2xl md:col-span-2 flex items-center justify-center relative overflow-hidden px-7 py-8"
            style={{
              backgroundImage: 'radial-gradient(55% 125% at 100% 0%, #854d0e, #0f0f0f 95%)'
            }}
          >
            <div className="bg-neutral-100 rounded-r-lg px-5 py-2 absolute left-0 top-3 md:top-6 z-[3] flex gap-1 items-center">
              <h3 className="hidden md:block font-inter italic font-medium text-sm">Typeface</h3>
              <h3 className="font-afacad font-bold text-sm md:text-xl">Afacad</h3>
            </div>

            <div className="bg-neutral-100 rounded-l-lg px-5 py-2 absolute right-0 bottom-3 md:bottom-6 z-[3] flex flex-col gap-1 items-start">
              <div className="hidden md:block font-inter italic font-medium text-sm">Color Palette</div>
              <div className="w-fit h-5 rounded-xl flex gap-0 items-center">
                <div className="bg-black w-5 md:w-9 h-full"></div>
                <div className="bg-[#250041] w-5 md:w-9 h-full"></div>
                <div className="bg-zinc-600 w-5 md:w-9 h-full"></div>
                <div className="bg-[#1423AC] w-5 md:w-9 h-full"></div>
              </div>
            </div>

            <div className="absolute -top-2 right-0 h-20 w-20 bg-yellow-800 blur-xl"></div>
            <div className="absolute -bottom-10 -left-10 h-40 w-40 bg-[#250041] blur-3xl"></div>
            <Image src="/box-7.png" alt="image slider" width={1000} height={500} className="pointer-events-none w-full md:max-w-[800px] h-auto z-[2]" />
            <Image src="noise.svg" width={400} height={400} alt="noise" className="absolute left-0 top-0 object-cover object-center min-w-full min-h-full opacity-25 pointer-events-none" />
          </motion.div>
        </motion.div>
      </div>
    </div >

    <LastPart />
  </>
}
