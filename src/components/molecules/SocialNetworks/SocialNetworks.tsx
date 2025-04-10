import { SocialNetworkIcon } from '@/components/atoms/SocialNetworkIcon/SocialNetworkIcon';
import { Title } from '@/components/atoms/Title/Title';
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
                <SocialNetworkIcon value='Facebook' />
                <SocialNetworkIcon value='Instagram' />
            </div>
        </div>
    );
};
