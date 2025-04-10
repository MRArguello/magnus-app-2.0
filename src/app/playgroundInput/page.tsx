"use client";
import { Input } from "@/components/atoms/Input/Input";


export default function PlaygroundInput() {


    return (
        <div className="flex flex-col items-center justify-center h-screen bg-zinc-800  ">
            <form action="" className="flex flex-col items-center justify-center w-full max-w-md p-4 rounded-lg shadow-md gap-4 border">
                <Input placeholder="Email" type='email' onChange={() => { }} />
                <Input placeholder="Nombre" type='text' onChange={() => { }} />
                <Input placeholder="Type here..." onChange={() => { }} />
                <Input placeholder="Tu Mensaje..." type="textarea" onChange={() => { }} />
            </form>
        </div>

    )

}