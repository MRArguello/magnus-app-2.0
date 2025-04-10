"use client";
import { Input } from "@/components/atoms/Input/Input";
import { Select } from "@/components/atoms/Select/Select";


export default function PlaygroundInput() {


    return (
        <div className="flex flex-col items-center justify-center h-screen bg-zinc-800  ">
            <form action="" className="flex flex-col items-center justify-center w-full max-w-md p-4 rounded-lg shadow-md gap-4 border">
                <Input placeholder="Email" type='email' onChange={() => { }} />
                <Input placeholder="Nombre" type='text' onChange={() => { }} />
                <Input placeholder="Type here..." value="Tu Mensaje" onChange={() => { }} />
                <Input placeholder="Tu Mensaje..." type="textarea" onChange={() => { }} />
                <Select onChange={() => { }} options={[
                    { value: '*', label: 'Todas las categorías' },
                    { value: 'am', label: 'Artes Marciales' },
                    { value: 'f', label: 'Fitness' },
                    { value: 'i', label: 'Indoor' },
                    { value: 'inf', label: 'Infantil' },
                ]} />
            </form>
        </div>

    )

}