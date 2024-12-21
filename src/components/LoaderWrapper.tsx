"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Loader from "./Loader";

const LoaderWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        const loaderShown = sessionStorage.getItem("loaderShown");
        if (loaderShown) {
            setIsLoading(false);
        } else {
            sessionStorage.setItem("loaderShown", "true");
            setTimeout(() => setIsLoading(false), 3500);
        }
    }, []);

    return (
        <AnimatePresence>
            {isLoading ? (
                <Loader /> // Show loader only for the homepage or reload
            ) : (
                <>{children}</> // Render children when loading is complete
            )}
        </AnimatePresence>
    );
};

export default LoaderWrapper;
