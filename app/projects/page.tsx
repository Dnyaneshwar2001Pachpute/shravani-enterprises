
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    image: "/projects/project-1.jpg",
    title: "Terrace Waterproofing",
    category: "Terrace & Roof",
    description:
      "Professional waterproofing treatment designed to protect terrace surfaces from rainwater and seepage.",
  },
  {
    image: "/projects/project-2.jpg",
    title: "Basement Waterproofing",
    category: "Basement",
    description:
      "Waterproofing solutions for basement walls and floors to help prevent moisture penetration.",
  },
  {
    image: "/projects/project-3.jpg",
    title: "Roof Waterproofing",
    category: "Roof",
    description:
      "Durable roof waterproofing application for long-term protection against water leakage.",
  },
  {
    image: "/projects/project-4.jpg",
    title: "HDPE Membrane Installation",
    category: "HDPE Membrane",
    description:
      "HDPE membrane installation for below-ground and structural waterproofing applications.",
  },
  {
    image: "/projects/project-5.jpg",
    title: "Injection Grouting",
    category: "Repair & Grouting",
    description:
      "Targeted injection grouting treatment for cracks, joints and active water leakage points.",
  },
  {
    image: "/projects/project-6.jpg",
    title: "Lift Pit Waterproofing",
    category: "Lift Pit",
    description:
      "Specialized waterproofing treatment for lift pits exposed to moisture and groundwater.",
  },
  {
    image: "/projects/project-7.jpg",
    title: "Bathroom Waterproofing",
    category: "Wet Area",
    description:
      "Complete wet-area waterproofing to reduce seepage and moisture-related problems.",
  },
  {
    image: "/projects/project-8.jpg",
    title: "Civil Repair Work",
    category: "Civil Repair",
    description:
      "Concrete and civil repair work focused on restoring damaged building surfaces.",
  },
  {
    image: "/projects/project-9.jpg",
    title: "Structural Rehabilitation",
    category: "Structural Repair",
    description:
      "Repair and rehabilitation solutions for damaged concrete and structural elements.",
  },
  {
    image: "/projects/project-10.jpg",
    title: "Protective Coating",
    category: "Protective Coating",
    description:
      "Protective coating systems applied to help improve the durability of concrete surfaces.",
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

