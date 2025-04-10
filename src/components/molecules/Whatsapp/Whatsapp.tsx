"use client";
import { Button } from '@/components/atoms/Button/Button';
import { Icon } from '@/components/atoms/Icon/Icon';
import { Title } from '@/components/atoms/Title/Title';
import React from 'react';


/** Social Networks */
export const Whatsapp = () => {

    const mainStyle = 'w-full min-h-[30vh] overflow-hidden flex flex-col items-center justify-evenly bg-[url(/assets/whatsapp.jpg)]   bg-no-repeat bg-center bg-cover ';

    return (
        <div id="wpp" className={mainStyle}>
            <Icon value='Whatsapp' size={30} />
            <Title value='¿Tenés alguna consulta?' as='h2' />
            <Title value='Escribinos por whatsapp y lo resolvemos' className='font-normal' as='h3' />

            <Button
                label='Enviar mensaje'
                onClick={() => window.open('https://api.whatsapp.com/send?l=es&phone=5492974000358', '_blank')}
            />
        </div>
    );
};
