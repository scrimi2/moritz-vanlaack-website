import Link from "next/link";

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <Link
          href="/"
          className="text-primary hover:text-primary-dark mb-8 inline-block"
        >
          &larr; Back to Home
        </Link>
        <h1 className="text-4xl font-bold mb-8">Datenschutzerkl&auml;rung</h1>

        <div className="space-y-6 text-neutral-700">
          <section>
            <h2 className="text-xl font-semibold mb-2">
              1. Datenschutz auf einen Blick
            </h2>
            <p>
              [Placeholder: Privacy policy content will be added here. This
              should cover data collection, cookies, analytics, contact form
              data handling, and GDPR compliance information.]
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              2. Verantwortliche Stelle
            </h2>
            <p>
              Moritz van Laack
              <br />
              Boisser&eacute;estr. 4<br />
              50674 K&ouml;ln
              <br />
              E-Mail: Moritz.vanlaack@sourcera.ai
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              3. Erhebung und Speicherung personenbezogener Daten
            </h2>
            <p className="text-sm text-neutral-500">
              [Placeholder for data collection details]
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">4. Cookies</h2>
            <p className="text-sm text-neutral-500">
              [Placeholder for cookie policy]
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              5. Ihre Rechte als Betroffener
            </h2>
            <p className="text-sm text-neutral-500">
              [Placeholder for GDPR rights information]
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
