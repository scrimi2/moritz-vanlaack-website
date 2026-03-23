import Link from "next/link";

export default function Impressum() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <Link
          href="/"
          className="text-primary hover:text-primary-dark mb-8 inline-block"
        >
          &larr; Back to Home
        </Link>
        <h1 className="text-4xl font-bold mb-8">Impressum</h1>

        <div className="space-y-6 text-neutral-700">
          <section>
            <h2 className="text-xl font-semibold mb-2">
              Angaben gem&auml;&szlig; &sect; 5 TMG
            </h2>
            <p>
              Moritz van Laack
              <br />
              Boisser&eacute;estr. 4<br />
              50674 K&ouml;ln
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Kontakt</h2>
            <p>
              E-Mail: Moritz.vanlaack@sourcera.ai
              <br />
              Telefon: +49 157 544 956 16
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              Verantwortlich f&uuml;r den Inhalt nach &sect; 55 Abs. 2 RStV
            </h2>
            <p>
              Moritz van Laack
              <br />
              Boisser&eacute;estr. 4<br />
              50674 K&ouml;ln
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Haftungsausschluss</h2>
            <p className="text-sm text-neutral-500">
              [Placeholder for full legal disclaimer text]
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
