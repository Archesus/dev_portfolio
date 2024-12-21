"use client"
import { motion } from "framer-motion";
import { EncryptedText } from "./Encryptedtext";


const Loader: React.FC = () => {
    return (
        <motion.div
            initial={{
                y: "0%",
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
                pointerEvents: "none",
                position: "fixed",
                overscrollBehavior: "none",
                overflow: "hidden",
            }}
            animate={{
                y: "-100%",
                borderBottomLeftRadius: "100%",
                borderBottomRightRadius: "100%",
            }}
            transition={{
                duration: 0.5,
                ease: "circInOut",
                delay: 3,
            }}
            exit={{
                scale: 0,
            }}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                overscrollBehavior: "none",
            }}
            className="w-full h-screen absolute top-0 left-0 bg-black text-white flex items-center justify-center z-50"
        >
            <EncryptedText text="Welcome to my Portfolio 💫" />
        </motion.div>
    );
};

export default Loader;