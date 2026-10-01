
import Image from "next/image";
import Link from "next/link";


const projects = [
  {
    image: "/projects/project-1.jpg",
    title: "Terrace Waterproofing",
    category: "Terrace Waterproofing",
    description:
      "Professional terrace waterproofing work designed to protect the surface from rainwater, seepage and leakage.",
  },
  {
    image: "/projects/project-2.jpg",
    title: "Toilet Waterproofing",
    category: "Toilet & Bathroom",
    description:
      "Specialized toilet waterproofing work to prevent water seepage and protect surrounding walls and floors.",
  },
  {
    image: "/projects/project-3.jpg",
    title: "HDPE Waterproofing",
    category: "HDPE Membrane",
    description:
      "HDPE waterproofing membrane installation providing durable protection against water penetration.",
  },
  {
    image: "/projects/project-4.jpg",
    title: "Garden Break Bat Waterproofing",
    category: "Garden Waterproofing",
    description:
      "Waterproofing treatment for garden areas using suitable membrane and protective systems to prevent seepage.",
  },
  {
    image: "/projects/project-5.jpg",
    title: "IPS Terrace Waterproofing",
    category: "IPS Terrace",
    description:
      "IPS terrace waterproofing work designed to improve water resistance and protect the terrace surface.",
  },
  {
    image: "/projects/project-6.jpg",
    title: "HDPE Waterproofing",
    category: "HDPE Membrane",
    description:
      "Professional HDPE waterproofing membrane installation for reliable and long-lasting water protection.",
  },
  {
    image: "/projects/project-7.jpg",
    title: "Injection Grouting & Crack Filling",
    category: "Injection Grouting",
    description:
      "Injection grouting and crack filling work carried out to treat cracks and reduce active water leakage.",
  },
  {
    image: "/projects/project-8.jpg",
    title: "Break Bat Work",
    category: "Civil & Waterproofing Work",
    description:
      "Break bat work carried out as part of surface preparation and waterproofing treatment.",
  },
  {
    image: "/projects/project-9.jpg",
    title: "Kemperol 1K Waterproofing",
    category: "Kemperol 1K",
    description:
      "Kemperol 1K waterproofing application providing a protective waterproof layer for the treated surface.",
  },
  {
    image: "/projects/project-10.jpg",
    title: "HDPE Waterproofing",
    category: "HDPE Membrane",
    description:
      "HDPE waterproofing work completed for durable protection against moisture and water penetration.",
  },
];


export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* ================= HERO ================= */}
      <section className="bg-[#12334b] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl text-center">

          <p className="mb-4 text-sm font-bold uppercase tracking-[3px] text-[#f58220]">
            Our Work
          </p>

          <h1 className="text-4xl font-bold text-white md:text-6xl">
            Our Projects
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-200 md:text-lg">
            Explore our waterproofing and civil repair projects.
          </p>

        </div>
      </section>

      {/* ================= PROJECT GALLERY ================= */}
      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">

          {/* Section Heading */}
          <div className="mb-12 text-center">

            <p className="text-sm font-bold uppercase tracking-[2px] text-[#f58220]">
              Project Gallery
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#12334b] md:text-4xl">
              Waterproofing & Civil Projects
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              A selection of waterproofing and civil repair work showcasing
              our approach to building protection and lasting performance.
            </p>

          </div>

          {/* ================= PROJECT GRID ================= */}
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">

            {projects.map((project, index) => (
              <article
                key={project.title}
                className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >

                {/* Image */}
                <div className="relative h-64 overflow-hidden">

                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Project Number */}
                  <div className="absolute left-4 top-4 rounded-full bg-[#f58220] px-3 py-1 text-xs font-bold text-white">
                    Project {String(index + 1).padStart(2, "0")}
                  </div>

                </div>

                {/* Content */}
                <div className="p-6">

                  <p className="text-xs font-bold uppercase tracking-wider text-[#f58220]">
                    {project.category}
                  </p>

                  <h3 className="mt-2 text-xl font-bold text-[#12334b]">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    {project.description}
                  </p>

                </div>

              </article>
            ))}

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-gray-50 px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">

          <h2 className="text-3xl font-bold text-[#12334b] md:text-4xl">
            Have a Waterproofing Project?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Talk to our team about your waterproofing or civil repair
            requirement.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-md bg-[#f58220] px-7 py-3 font-bold text-white transition hover:bg-[#df6d10] hover:shadow-lg"
          >
            Get a Free Consultation
          </Link>

        </div>
      </section>

    </main>
  );
}

