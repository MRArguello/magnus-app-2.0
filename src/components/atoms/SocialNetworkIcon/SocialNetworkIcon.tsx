import Link from 'next/link';
import React from 'react';
import { IoLogoFacebook, IoLogoInstagram } from "react-icons/io";

export interface SocialNetworkIconProps {
    /** Social network type (e.g., 'Facebook', 'Instagram') */
    value: string;
}

const socialNetworkIcons = [
    {
        type: 'Facebook',
        icon: <IoLogoFacebook aria-hidden="true" className='h-9 w-9' />,
        url: 'https://www.facebook.com/MagnusFightFitness/',
    },
    {
        type: 'Instagram',
        icon: <IoLogoInstagram aria-hidden="true" className='h-9 w-9' />,
        url: 'https://instagram.com/magnusfightfitness/',
    },
];

/** Social Network Icon component */
export const SocialNetworkIcon: React.FC<SocialNetworkIconProps> = ({ value }) => {
    const match = socialNetworkIcons.find((item) => item.type.toLowerCase() === value.toLowerCase());

    if (!match) return null;

    const style = 'text-white hover:text-gray-400 transition-colors duration-300 ease-in-out  ';

    return (
        <Link
            href={match.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visita nuestra página de ${match.type}`}
            className={style}
        >
            {match.icon}
        </Link>
    );
};
