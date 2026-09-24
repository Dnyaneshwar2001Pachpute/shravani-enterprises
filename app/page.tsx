import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">

      {/* Hero section */}
      <section className="relative overflow-hidden bg-[#eefaff]">

      {/* Hero content */}
      <div className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 lg:px-8">

        {/* small heading */}
        <p className="mb-3 text-xs font-bold tracking-wider text-orange-500 sm:text-sm">
        WATERPROOFING & CIVIL REPAIR SPECIALISTS
        </p>

        {/* main heading */}
        <h1 className="max-w-3xl text-3xl font-extrabold leading-tight text-[#12304a] sm:text-4xl md:text-5xl" >
        Protecting Structures.
        <br/>
        Delivering Lasting Performance.
        </h1>

        {/* Description */}
        <p className="mt-5 max-w-4xl text-sm leading-6 text-gray-600 sm:text-base sm:leading-7 md:text-lg">
        Professional waterproofing, civil repair and maintenance 
        solution for residential, commercial and industrial projects.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">

          {/* Consultation Button */}
          <a 
          href="#contact"
          className="inline-flex items-center justify-center rounded-mf bg-orange-500
          px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-orange-600"
          >
            Get a Free Consultation
          </a>

          {/* Call button */}
          <a 
          href="tel:+919881565282"
          className="inline-flex items-center justify-center rounded-md border-2 border-sky-500
          bg-white px-5 py-3 text-sm font-bold text-[#12304a] transition hover:bg-sky-50"
          >
            Call +919881565282
          </a>
        </div>
      </div>


      {/* Hero Image */}
      <div className="mx-auto mt-1 max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="relative mx-auto h-[560px] w-full sm:h-[650px] md:h-[720px] lg:h-[760px]">

            <Image
              src="/waterproofing-hero.png"
              alt="Shravani Enterprises Waterproofing and Civil Repair Specialists"
              fill
              priority
              className="object-contain object-top"
            />
</div>
      </div>
      </section>


      {/* About Section */}
      
      <section id="about" className="bg-white px-6 py-20">
      <div className="mx-auto max-w-6xl text-center">

        <h2 className="mb-6 text-3xl font-bold text-[#12304a] md:text-4xl">
        About Sharavani Enterprises
        </h2>

        <p className="mx-auto max-w-3xl text-lg leading-8 text-gray-600">
          Sharavani Enterpriese provides reliable Waterproofing and civil 
          repair Services with a focus on quality, durabiltiy, and 
          customer satisfaction.
        </p>
      </div>
      </section>

      {/* Services Section */}
      <section id="services" 
      className="bg-[#f7fafc] px-6 py-20"
      >

      <div className="mx-auto max-w-6xl">

      {/* Section Heading*/}
        <div className="mb-12 text-center">

        <p className="mb-2 text-sm font-bold uppercase tracking-wider text-orange-500">
        what we Do
        </p>

        <h2 className="mb-12 text-center text-3xl font-bold text-orange-500">
        Our Services
        </h2>
        </div>

        <div className="grid gap-8 md-grid-cols-3">
          
          {/* service 1 */}
          <div className="rounded-2xl border-t-4 border-sky-500 bg-[#eaf8ff] p-8 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">
         <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-sky-500 text-2xl text-white">
          💧
         </div>
          <h3 className="mb-4 text-xl font-bold text-[#12304a]">
          Waterproofing
          </h3>

          <p className="leading-7 text-gray-600">
          Complete Waterproofing solution for homes,
          buildings, terraces, bathrooms and other Structures.
          </p>
          </div>

          {/*civil repair service 2 */}
          <div className="rounded-2xl border-t-4 border-orange-500 bg-[#fff5e9] p-8 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">
          
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-orange-500 text-2xl text-white">
          🏗️
          </div>

          <h3 className="mb-4 text-2xl font-bold text-[#12304a]">
            Civil Repair
          </h3>

          <p className="text-gray-600">
          Professional civil repair and maintenance
          solution for residential and commercial properties.
          </p>
          </div>
          
          {/* building maintenance service 3 */}
          <div className="rounded-2xl border-t-4 border-[#12304a] bg-[#eef3f7] p-8 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">
          
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#12304a] text-2xl text-white">
          🏢
          </div>

          <h3 className="mb-4 text-xl font-bold text-[#12304a]">
            Building Maintenance
          </h3>

          <p className="leading text-gray-600">
          Reliable building repair and maintance services 
          designed for long-lasting results.
          </p>
          </div>

          {/* Basement waterproffing */}
          <div className="rounded-2xl border-t-4 border-sky-500 bg-[#eaf8ff] p-8 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">

            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-sky-500 text-2xl">
              🏠
            </div>

            <h3 className="mb-4 text-2xl font-bold text-[#12304a]">
              Basement waterproffing
            </h3>

            <p className="leading-7 text-gray-700">
            Durable waterproffing systems designed to protect below-ground
            Structures from water ingress.
            </p>
          </div>

          {/* Terrace Waterproofing */}
          <div className="rounded-2xl border-t-4 border-orange-500 bg-[#fff5e9] p-8 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-orange-500 text-2xl">
            🏠
          </div>

          <h3 className="mb-4 text-2xl font-bold text-[#12304a]">
          Terrace waterproofing
          </h3>

          <p className="leading-7 text-gray-700">
          Practical solution to reduce leakage and improve long-term 
          terrace protection
          </p>
          </div>

          {/* lift pit waterprofing */}
          <div className="rounded-2xl border-t-4 border-[#12304a] bg-[#eef3f7] p-8 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">

          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#12304a] text-2xl">
          🏗️
          </div>
          <h3 className="mb-4 text-2xl font-bold text-[#12304a]">
            Lift Pit Waterproofing
          </h3>
          <p className="leading-7 text-gray-700">
          Waterproofing solution for lift pits and critical 
          below-ground areas.
          </p>
          </div>

          {/* 7. Toilet & Bathroom Waterproofing */}
          <div className="rounded-2xl border-t-4 border-sky-500 bg-[#eaf8ff] p-8 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-sky-500 text-2xl">
             🚿
          </div>
          <h3 className="mb-4 text-2xl font-bold text-[#12304a]">
          Toilet & Bathroom Waterproofing 
          </h3>
          <p className="leading-7 text-gray-700">
            Protection for wet aress with attention to joints, corners
            and leakage-prone zones. 
          </p>
          </div>

          {/* 8. HDPE Membrane Installation */}
          <div className="rounded-2xl border-t-4 border-orange-500 bg-[#fff5e9] p-8 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-orange-500 text-2xl">
             🧱
          </div>
          <h3 className="mb-4 text-2xl font-bold text-[#12304a]">
            HDPE Membrane Installation 
          </h3>
          <p className="leading-7 text-gray-700">
          Membrane-based waterproofing application for demanding 
          construction environments.
          </p>
          </div>

            {/* 9. Injection Grouting */}
          <div className="rounded-2xl border-t-4 border-[#12304a] bg-[#eef3f7] p-8 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#12304a] text-2xl">
            💉
          </div>
          <h3 className="mb-4 text-2xl font-bold text-[#12304a]">
            Injection Grouting
          </h3>
          <p className="leading-7 text-gray-700">
            Targeted repair solutions for cracks, joints and water
            leakage paths. 
          </p>
          </div>

          {/* crack & civil repair  */}
          <div className="rounded-2xl border-t-4 border-sky-500 bg-[#eaf8ff] p-8 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-sky-500 text-2xl">
            🔧
          </div>
          <h3 className="mb-4 text-2xl font-bold text-[#12304a]">
          Crack & Civil Repair 
          </h3>
          <p className="leading-7 text-gray-700">
          Repair and maintenance solution for common concrete
          and civil defects.
          </p>
          </div>

          { /* structural repair & rehabilitation */}
          <div className="rounded-2xl border-t-4 border-orange-500 bg-[#fff5e9] p-8 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-orange-500 text-2xl">
            🏗️
            </div>
            <h3 className="mb-4 text-2xl font-bold text-[#12304a]">
            Structural Repair & Rehabilitation
            </h3>
            <p className="leading-7 text-gray-700 ">
            Repair-focused solution to help restore and protect 
            existing structures.
            </p>
          </div>
 {/* 12. Protective Coatings */}
      <div className="rounded-2xl border-t-4 border-[#12304a] bg-[#eef3f7] p-8 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">

        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#12304a] text-2xl">
          🛡️
        </div>

        <h3 className="mb-4 text-2xl font-bold text-[#12304a]">
          Protective Coatings
        </h3>

        <p className="leading-7 text-gray-700">
          Protective coating applications for improved durability
          and surface performance.
        </p>

      </div>

        </div>
      </div>
      </section>

{/* Contact Section */}
<section
 id="contact" className=" bg-white px-6 py-20">
<div className="mx-auto max-w-4xl text-center">

<p className="mx-2 text-sm font-bold uppercase tracking-wider text-orange-500">
Contact Us
</p>

<h2 className="mb-6 text-3xl font-bold text-[#12304a] md:text-4xl">
Get in Touch With Us
</h2>


<p className="mb-8 text-lg text-gray-600">
Get in touch with Sharavani Enterprises for Professional
Waterproofing and civil repair services.
</p>


<div className="flex flex-col justify-center gap-4 sm:flex-row">

<a 
href="tel:+919970187373"
className="rounded-md bg-orange-500 px-8 py-3 font-bold text-white transition hover:bg-orange-600"
>
  Call +919970187373
</a>

<a
href="mailto:contect@example.com"
className="rounded-md border-2 border-sky-500 px-8 py-3 font-bold text-[#12304a] transition hover:bg-sky-50"
>
Email Us
</a>
</div>
</div>
</section>

{/* Footer */}
<footer className="bg-[#12304a] text-white rounded-b-xl">


<div className="px-8 py-12 md:px-10">

{/* company  */}
<div>
  <h3 className="mb-2 text-xl font-bold">
    SHARAVANI ENTERPRISES
  </h3>
</div>

{/* Address */}
<div className="mb-6">
  <h4 className="mb-1 text-lg font-bold text-sky-400">
    Address
  </h4>
  
  <p className="leading-7 text-gray-200">
    Sr. No. 28/1/1C/1/1B, Sai Miracle 
    <br/>
    Rahatani, Pune - 411017 Maharashtra.
  </p>
</div>

{/* Contact */}
<div className="mb-6">
  <h4 className="mb-1 text-lg font-bold text-sky-400">
    Mobile 
  </h4>


  <a 
  href="tel:+919970187373"
  className="text-gray-200 transition hover:text-sky-400"
  >
    +919970187373
  </a>

{/* Email */}
<div className="mb-6">
  <h4 className="mb-1 text-lg font-bold text-sky-400">
    Email 
  </h4>

  <a 
  href="mailto:shravanienterprises2222@gmail.com"
  className="break-all text-gray-200 transition hover:text-sky-400"
  >
    sharavanienterprises2222@gmail.com
  </a>
  </div>
</div>

{/* Business hours */}
<div>
  <h4 className="mb-3 text-lg font-bold text-sky-400">
    Business Hours 
  </h4>
  <p className="leading-7 text-gray-200">
    Monday- Saturday
    <br/>
    9:00 AM - 6:00 PM 
  </p>
</div>
</div>
</footer>
</main>
    
  );
}
