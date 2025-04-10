import Image from 'next/image';
import React from 'react';

export interface SocialNetworkIconProps {
    /** Social network type (e.g., 'Facebook', 'Instagram') */
    value: string;
    /** Size - Optional */
    size?: number;
}

/** Social Network Icon component */
export const Icon: React.FC<SocialNetworkIconProps> = ({ value, size }) => {

    const style = 'text-white hover:text-gray-400 transition-colors duration-300 ease-in-out  ';

    const source = `/assets/icons/${value.toLowerCase()}.svg`;
    const alt = `${value} icon`;

    return (
        <Image unoptimized src={source} alt={alt} className={style} width={size || 40} height={size || 40} />
    );
};
