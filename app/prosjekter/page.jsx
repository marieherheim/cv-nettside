import { ProjectHero } from "@/components/ProjectHero";
import rectangle from "../../public/co-working-project-overview.jpg";
import { TextBlock } from "@/components/TextBlock";
import { Photostrip } from "@/components/Photostrip";

const images = [
    "/cowork-homepage.png",
    "/cowork-registration.png",
    "/cowork-confirmation.png",
    "/cowork-confirmation_2.png",
];

export default async function Project() {
    return (
        <div className="ml-8 sm:ml-10 flex flex-col gap-16 mb-32">
            <ProjectHero
                title="Co-Working"
                description="Mitt første Figma prosjekt. Jeg designet en enkel mobilapp for ett co-working kontor."
                image={rectangle}
            />
            <div className="mr-10">
                <Photostrip images={images} width="320" />
            </div>
            <TextBlock
                title="Overskrift"
                description="Kort forklaring av hva prosjektet omhandlet, eventuelt hvem det var for."
            />
            <TextBlock
                title="Overskrift"
                description="Kort forklaring av hva prosjektet omhandlet, eventuelt hvem det var for."
            />
        </div>
    );
}
