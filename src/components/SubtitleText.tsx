"use client"
import { motion } from "motion/react"

const SubtitleText = () => {
    return (
        <motion.div className="subtitle w-fit flex flex-col items-center md:items-end justify-center gap-5 pt-1 pb-5">
            <motion.h1
                initial={{
                    opacity: 0, y: "100%"
                }}
                animate={{ opacity: 1, y: "0" }}
                transition={{ ease: "easeInOut", delay: 0.5, duration: 0.5 }}
                className="afacad-regular text-xl md:text-[32px] tracking-tight">
                Hey 👋, Anurag here!
            </motion.h1>
            <motion.h1
                initial={{
                    opacity: 0, y: "100%"
                }}
                animate={{ opacity: 1, y: "0" }}
                transition={{ ease: "easeInOut", delay: 0.65, duration: 0.5 }}
                className="inter-regular text-xs md:text-base text-center md:text-right">
                I create beautiful, user-friendly websites <br />
                and applications that enhance user experience.
            </motion.h1>
        </motion.div>
    )
}

export default SubtitleText;