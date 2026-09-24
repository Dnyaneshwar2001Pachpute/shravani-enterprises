import Link from "next/link";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* Hero */}
      <section className="bg-[#12304a] px-6 py-24 text-white">
        <div className="mx-auto max-w-6xl text-center">

          <p className="mb-4 text-sm font-bold uppercase tracking-widest text-orange-400">
            What We Do
          </p>

          <h1 className="text-4xl font-extrabold md:text-6xl">
            Our Services
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-200">
            Professional waterproofing, civil repair and maintenance
            solutions for residential, commercial and industrial projects.
          </p>

        </div>
      </section>

      {/* Services */}
      <section className="bg-[#f7fafc] px-6 py-20">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

            {/* Service 1 */}
            <div className="rounded-2xl bg-white p-8 shadow-md">
              <div className="mb-5 text-4xl">💧</div>

              <h2 className="mb-4 text-2xl font-bold text-[#12304a]">
                Waterproofing
              </h2>

              <p className="leading-7 text-gray-600">
                Complete waterproofing solutions for homes, buildings,
                terraces, bathrooms and other structures.
              </p>
            </div>

            {/* Service 2 */}
            <div className="rounded-2xl bg-white p-8 shadow-md">
              <div className="mb-5 text-4xl">🏗️</div>

              <h2 className="mb-4 text-2xl font-bold text-[#12304a]">
                Civil Repair
              </h2>

              <p className="leading-7 text-gray-600">
                Professional civil repair and maintenance solutions for
                residential and commercial properties.
              </p>
            </div>

            {/* Service 3 */}
            <div className="rounded-2xl bg-white p-8 shadow-md">
              <div className="mb-5 text-4xl">🏢</div>

              <h2 className="mb-4 text-2xl font-bold text-[#12304a]">
                Building Maintenance
              </h2>

              <p className="leading-7 text-gray-600">
                Reliable building repair and maintenance services designed
                for long-lasting results.
              </p>
            </div>

            {/* Service 4 */}
            <div className="rounded-2xl bg-white p-8 shadow-md">
              <div className="mb-5 text-4xl">🏠</div>

              <h2 className="mb-4 text-2xl font-bold text-[#12304a]">
                Basement Waterproofing
              </h2>

              <p className="leading-7 text-gray-600">
                Durable waterproofing systems designed to protect
                below-ground structures from water ingress.
              </p>
            </div>

            {/* Service 5 */}
            <div className="rounded-2xl bg-white p-8 shadow-md">
              <div className="mb-5 text-4xl">🏠</div>

              <h2 className="mb-4 text-2xl font-bold text-[#12304a]">
                Terrace Waterproofing
              </h2>

              <p className="leading-7 text-gray-600">
                Practical solutions to reduce leakage and improve
                long-term terrace protection.
              </p>
            </div>

            {/* Service 6 */}
            <div className="rounded-2xl bg-white p-8 shadow-md">
              <div className="mb-5 text-4xl">🏗️</div>

              <h2 className="mb-4 text-2xl font-bold text-[#12304a]">
                Lift Pit Waterproofing
              </h2>

              <p className="leading-7 text-gray-600">
                Waterproofing solutions for lift pits and critical
                below-ground areas.
              </p>
            </div>

            {/* Service 7 */}
            <div className="rounded-2xl bg-white p-8 shadow-md">
              <div className="mb-5 text-4xl">🚿</div>

              <h2 className="mb-4 text-2xl font-bold text-[#12304a]">
                Toilet & Bathroom Waterproofing
              </h2>

              <p className="leading-7 text-gray-600">
                Protection for wet areas with attention to joints,
                corners and leakage-prone zones.
              </p>
            </div>

            {/* Service 8 */}
            <div className="rounded-2xl bg-white p-8 shadow-md">
              <div className="mb-5 text-4xl">🧱</div>

              <h2 className="mb-4 text-2xl font-bold text-[#12304a]">
                HDPE Membrane Installation
              </h2>

              <p className="leading-7 text-gray-600">
                Membrane-based waterproofing applications for demanding
                construction environments.
              </p>
            </div>

            {/* Service 9 */}
            <div className="rounded-2xl bg-white p-8 shadow-md">
              <div className="mb-5 text-4xl">💉</div>

              <h2 className="mb-4 text-2xl font-bold text-[#12304a]">
                Injection Grouting
              </h2>

              <p className="leading-7 text-gray-600">
                Targeted repair solutions for cracks, joints and water
                leakage paths.
              </p>
            </div>

            {/* Service 10 */}
            <div className="rounded-2xl bg-white p-8 shadow-md">
              <div className="mb-5 text-4xl">🔧</div>

              <h2 className="mb-4 text-2xl font-bold text-[#12304a]">
                Crack & Civil Repair
              </h2>

              <p className="leading-7 text-gray-600">
                Repair and maintenance solutions for common concrete
                and civil defects.
              </p>
            </div>

            {/* Service 11 */}
            <div className="rounded-2xl bg-white p-8 shadow-md">
              <div className="mb-5 text-4xl">🏗️</div>

              <h2 className="mb-4 text-2xl font-bold text-[#12304a]">
                Structural Repair & Rehabilitation
              </h2>

              <p className="leading-7 text-gray-600">
                Repair-focused solutions to help restore and protect
                existing structures.
              </p>
            </div>

            {/* Service 12 */}
            <div className="rounded-2xl bg-white p-8 shadow-md">
              <div className="mb-5 text-4xl">🛡️</div>

              <h2 className="mb-4 text-2xl font-bold text-[#12304a]">
                Protective Coatings
              </h2>

              <p className="leading-7 text-gray-600">
                Protective coating applications for improved durability
                and surface performance.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20">

        <div className="mx-auto max-w-5xl rounded-3xl bg-[#12304a] px-6 py-14 text-center text-white">

          <h2 className="text-3xl font-bold md:text-4xl">
            Need Professional Waterproofing?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-200">
            Get in touch with Shravani Enterprises for reliable
            waterproofing and civil repair solutions.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">

          

            <a
              href="tel:+919970187373"
              className="rounded-md border-2 border-white px-8 py-4 font-bold text-white hover:bg-white hover:text-[#12304a]"
            >
              Call +919970187373
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}