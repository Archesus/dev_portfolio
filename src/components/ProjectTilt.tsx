import React, { useRef, useState } from 'react';

interface ProjectCardTiltProps {
    className?: string;
    children?: React.ReactNode;
    bgGradientFrom?: string;
    bgGradientTo?: string;
    href?: string;
}

const ProjectCardTilt: React.FC<ProjectCardTiltProps> = ({
    href,
    children,
    className = '',
    bgGradientFrom = 'from-[#0C1BA9]',
    bgGradientTo = 'to-[#93A5E5]'
}) => {
    const [transformStyle, setTransformStyle] = useState("");
    const cardRef = useRef<HTMLAnchorElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (!cardRef.current) return;

        const { left, top, width, height } = cardRef.current.getBoundingClientRect();

        const relativeX = (e.clientX - left) / width;
        const relativeY = (e.clientY - top) / height;

        const tiltX = (relativeY - 0.5) * 5;
        const tiltY = (relativeX - 0.5) * -5;

        const newTransform = `perspective(1200px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.98, 0.98, 0.98)`;

        setTransformStyle(newTransform);
    };

    const handleMouseLeave = () => {
        setTransformStyle("");
    };

    return (
        <a
            href={href}
            ref={cardRef}
            className={`
        ${className} 
        bg-gradient-to-b ${bgGradientFrom} ${bgGradientTo} 
        rounded-3xl p-2 relative
        transition-transform duration-300 ease-out
      `}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transform: transformStyle,
                transformStyle: 'preserve-3d',
                willChange: 'transform'
            }}
        >
            {children}
        </a>
    );
};

export default ProjectCardTilt;