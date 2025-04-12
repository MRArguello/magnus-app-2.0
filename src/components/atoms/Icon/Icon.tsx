import Image from 'next/image';
import React from 'react';
import clsx from 'clsx';

export interface SocialNetworkIconProps {
    /** Social network type (e.g., 'Facebook', 'Instagram') */
    value: string;
    /** Optional size (defaults to 40px) */
    size?: number;
}

/** Social Network Icon component */
export const Icon: React.FC<SocialNetworkIconProps> = ({ value, size = 40 }) => {
    const source = `/assets/icons/${value.toLowerCase()}.svg`;
    const alt = `${value} icon`;

    const baseClass = 'text-white hover:text-gray-400 transition-colors duration-300 ease-in-out';

    return (
        <Image
            unoptimized
            src={source}
            alt={alt}
            className={clsx(baseClass, 'max-sm:w-[30px] max-sm:h-[30px]', 'sm:w-[40px] sm:h-[40px]')}
            width={size}
            height={size}
        />
    );
};

