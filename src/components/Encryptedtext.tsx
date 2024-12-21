"use client"
import { useState, useEffect } from "react";

interface EncryptedTextProps {
    text: string;
    interval?: number;
    delay?: number;
}

const chars = "-_~`!@#$%^&*()+=[]{}|;:,.<>?";

export const EncryptedText: React.FC<EncryptedTextProps> = ({
    text,
    interval = 50,
    delay = 1000,
}) => {
    const [outputText, setOutputText] = useState("");
    const [isStarted, setIsStarted] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        const delayTimer = setTimeout(() => {
            setIsStarted(true)
        }, delay);

        return () => clearTimeout(delayTimer);
    }, [delay])

    useEffect(() => {
        if (!isStarted) return;

        let timer: NodeJS.Timeout;

        if (outputText !== text) {
            timer = setInterval(() => {
                setOutputText((prev) => {
                    if (prev.length < text.length) {
                        return prev + text[prev.length];
                    } else {
                        clearInterval(timer);
                        return prev;
                    }
                });
                return () => clearInterval(timer);
            }, interval);

        }

        return () => {
            clearInterval(timer);
        };
    }, [text, interval, isStarted, outputText]);

    const remainder =
        outputText.length < text.length
            ? text
                .slice(outputText.length)
                .split("")
                .map(() => chars[Math.floor(Math.random() * chars.length)])
                .join("")
            : "";

    if (!isMounted) {
        return <span> </span>;
    }

    return (
        <span className="text-black afacad-regular dark:text-white md:text-3xl text-xl tracking-tight">
            {isStarted ? (
                <>
                    {outputText}
                    {remainder}
                </>
            ) : (
                ""
            )}
        </span>
    );
};
