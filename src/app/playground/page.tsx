import { Title } from "@/components/atoms/Title/Title";
import { SocialNetworks } from "@/components/molecules/SocialNetworks/SocialNetworks";



export default function Playground() {

    // SECTION TO TEST COMPONENTS


    return (
        <div className="flex flex-col items-center justify-center h-screen ">
            <div className="flex flex-col items-start gap-8 justify-center h-screen ">
                <Title value="Playground" />

                <div className="h-24"></div>



                <SocialNetworks />
                <SocialNetworks withTitle={true} />
            </div>
        </div>
    )


}