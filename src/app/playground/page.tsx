import { Title } from "@/components/atoms/Title/Title";
import { SocialNetworks } from "@/components/molecules/SocialNetworks/SocialNetworks";
import { Whatsapp } from "@/components/molecules/Whatsapp/Whatsapp"; 


export default function Playground() {

    // SECTION TO TEST COMPONENTS


    return (
        <div className="flex flex-col items-center justify-center h-screen w-screen">
            <div className="flex flex-col items-start gap-8 justify-center h-screen w-full  ">
                <Title value="Playground" />

                <Whatsapp />
                <div className="h-24"></div>

                <SocialNetworks />
                <SocialNetworks withTitle={true} />
            </div>
        </div>
    )
 }