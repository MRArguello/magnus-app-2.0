import { Button } from "@/components/atoms/Button/Button";


export default function PlaygroundPage() {
    return (
        <div className="flex items-center justify-center h-screen">
            <Button label="Registrarse" size="large" primary={true} className="bg-red-500!" />
        </div>
    );
}