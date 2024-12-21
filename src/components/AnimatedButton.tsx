"use client"
import React from 'react';
import { motion } from 'motion/react';

interface AnimatedButtonProps {
    href: string;
    target: string;
    children: string;
    className?: string;
    spanClassName?: string;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({ href, children, target, className = '', spanClassName = '' }) => {
    return (
        <motion.a
            href={href}
            target={target}
            className={`relative inline-block overflow-hidden cursor-pointer ${className}`}
            whileHover="hover"
        >
            <motion.span
                className={`block ${spanClassName}`}
                variants={{
                    hover: {
                        y: '-100%',
                        transition: {
                            duration: 0.2,
                            ease: 'easeInOut',
                        },
                    },
                }}
            >
                {children}
            </motion.span>
            <motion.span
                className={`absolute top-full block ${spanClassName}`}
                variants={{
                    hover: {
                        y: '-100%',
                        transition: {
                            duration: 0.2,
                            ease: 'easeInOut',
                        },
                    },
                }}
            >
                {children}
            </motion.span>
        </motion.a>
    );
};

export default AnimatedButton;
