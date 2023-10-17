/**
 * Denne komponenten rendrer et profilbilde og en tekst på hovedsiden.
 * Eksempel:
 * - Du kan endre profilbilde. Husk å legge det nye bilde ditt i public mappen.
 * - Endre "Velkommen" teksten
 * - Oppdater navnet og eposten til din egen.
 */

import Image from "next/image";

export function Introduction() {
  return (
    <div className="flex gap-5 flex-col sm:flex-row">
      <Image
        alt="Bilde av meg"
        src="/profilBilde.jpg"
        className="rounded-full"
        width={278}
        height={278}
      />
      <div className="flex flex-col gap-5 my-auto text-center sm:text-left">
        <h1 className="text-secondary-700 text-4xl sm:text-6xl text-violet-900">Velkommen,</h1>
        <p>
          Hei! Jeg heter Marie Herheim, du kan sende meg en epost på:{" "}
          <a
            className="font-bold hover:underline"
            href="mailto:marie.herheim@icloud.com"
          >
            marie.herheim@icloud.com
          </a>
        </p>
      </div>
    </div>
  );
}
