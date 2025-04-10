import { Icon } from '@/components/atoms/Icon/Icon';
import { Title } from '@/components/atoms/Title/Title';
import Link from 'next/link';
import React from 'react';
export interface SocialNetworkProps {
    /** Show Title? */
    withTitle?: boolean;
}

/** Social Networks */
export const SocialNetworks: React.FC<SocialNetworkProps> = ({ withTitle }) => {

    return (
        <div className='flex flex-col items-start gap-2'>
            {withTitle && <Title value='Nuestras Redes' />}
            <div className='flex flex-row gap-2 '>
                <Link
                    href='https://www.facebook.com/MagnusFightFitness/'
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visita nuestra página de Facebook`}
                >
                    <Icon value='Facebook' />
                </Link>
                <Link
                    href='https://www.instagram.com/magnusfightfitness/'
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visita nuestra página de Instagram`}
                >
                    <Icon value='Instagram' />
                </Link>
            </div>
        </div>
    );
};
