"use client"
import { motion } from "motion/react"

const TitleText = () => {
    return (
        <motion.div className="hero w-fit text-center md:text-left"
        >
            <motion.h1
                initial={{
                    opacity: 0, y: "100%"
                }}
                animate={{
                    opacity: 1, y: "0"
                }}
                transition={{
                    opacity: { ease: "easeInOut", delay: 0.5, duration: 0.5 },
                    y: { ease: "easeInOut", delay: 0.5, duration: 0.5 },
                }}
                className="font-afacad font-bold text-[56px] md:text-[75px] lg:text-[96px] leading-[3rem] md:leading-[5.5rem]">
                Visualize.
            </motion.h1>

            <motion.h1
                initial={{
                    opacity: 0, y: "100%"
                }}
                animate={{ opacity: 1, y: "0" }}
                transition={{ ease: "easeInOut", delay: 0.55, duration: 0.5 }}
                className="font-afacad font-bold text-[56px] md:text-[75px] lg:text-[96px] leading-[3rem] md:leading-[5.5rem]">
                Create.
            </motion.h1>
            <motion.h1
                initial={{
                    opacity: 0, y: "100%"
                }}
                animate={{ opacity: 1, y: "0" }}
                transition={{ ease: "easeInOut", delay: 0.60, duration: 0.5 }}
                className="font-afacad font-bold text-[56px] md:text-[75px] lg:text-[96px] leading-[3rem] md:leading-[5.5rem] text-purple-gradient">
                Innovate.
            </motion.h1>
        </motion.div>
    )
}

export default TitleText