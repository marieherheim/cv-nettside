/**
 * Denne komponenten renderer i prosjekt-siden (app/prosjekter/page.jsx)
 * Den tar inn argumenter som tittel, beskrivelse og bilde.
 */
import Image from "next/image";

export function ProjectHero({ title, description, image }) {
  return (
    <div className="flex h-screen items-end">
      <div className="flex flex-col mb-10 gap-3 max-w-md">
        <h1 className="text-6xl text-secondary-700 text-co-working">{title}</h1>
        <p>{description}</p>
      </div>
      <Image className="absolute top-20 right-10 -z-10" src={image} alt={title} width="50px" />
    </div>
  );
}
