
import Link from "next/link";

import {
  Target,
  Eye,
  ShieldCheck,
  Users,
  Award,
  Handshake,
  ArrowRight,
  Phone,
  Section,

} from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-[#12334b]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#12334b]">
        
        {/* Background Decoration */}
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#f58220]/20" />

        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-blue-500/10" />

        {/* Content */}
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-3xl">

            {/* Label */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold tracking-widest text-[#f58220]">
              ABOUT US
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Reliable Waterproofing
              <span className="block text-[#12a8df]">
                & Civil Repair Solutions
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
              Shravani Enterprises is a proprietorship firm based in Pune,
              Maharashtra, specializing in waterproofing, civil repair and
              structural maintenance services.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">

              {/* Consultation Button */}
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-[#f58220] px-6 py-3.5 font-semibold text-white transition hover:bg-[#d96f16]"
              >
                Get a Free Consultation
                <ArrowRight size={18} />
              </Link>

              {/* Call Button */}
              <a
                href="tel:+919970187373"
                className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-6 py-3.5 font-semibold text-white transition hover:bg-white hover:text-[#12334b]"
              >
                <Phone size={18} />
                Call Now
              </a>

            </div>
          </div>

        {/* Right visual card */}
        <div className="relative">
            <div className="rounded-3xl bg-[#0b1424] p-8 shadow-2xl md:p-10">
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#f58220]">
                <ShieldCheck
                size={34}
                className="text-white"
                />
                </div>

                <h3 className="text-2xl font-bold text-white md:text-3xl">
                Build on Trust
                </h3>

                <p className="mt-4 leading-7 text-gray-300">
                  We believe successful work is not only about completing
                  a project. It is about earning the trust of every customer
                  through quality, communication and commitment.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-4">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <Award className="text-[#f58220]" size={26}/>
                    <h4 className="mt-3 font-bold text-white">
                    Quality
                    </h4>
                    <p className="mt-1 text-sm text-gray-400">
                    High standards
                    </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <Handshake className="text-[#f58220]" size={26}/>
                    <h4 className="mt-3 font-bold text-white"> 
                    Trust
                    </h4>
                    <p className="mt-1 text-sm text-gray-400">
                    Honest approach
                    </p>
                    </div>

                </div>

            </div>


            {/* Decorative box*/}
            <div className="absolute -bottom-5 -right-5 -z-10 h-32 rounded-3xl bg-[#f58220]/20"/>
        </div>

        </div>
      </section>


    { /* Mission & Vision */}
    <section className="bg-gray-50 py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">

            <div className="mx-auto mb-14 max-w-2xl text-center">
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#f58220]">
                    Our Direction
                </p>

                <h2 className="text-3xl font-extrabold text-[#0b1424] md:text-4xl">
                Mission & Vision 
                </h2>
                
                <p className="mt-4 leading-7 text-gray-600">
                The principle that guide our work and our relationship with
                every customer.
                </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">

                {/* Mission */}
                <div className="group rounded-3xl bg-white p-8 shadow-sm transition duration-300 hover:translate-y-2 hover:shadow-xl md:p-10">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100">
                <Target 
                size={28}
                className="text-[#f58220]"
                />
               </div>
                <h3 className="mt-7 text-2xl font-bold text-[#0b1424]">
                    Our Mission
                </h3>

                <p className="mt-4 leading-8 text-gray-600">
                Our mission is to deliver dependable, quality-focused work
                while maintaining professionalism, transparency and
                customer satisfaction throughout every project.
                </p>
                </div>

                {/*Vision  */}
                <div className="group rounded-3xl bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl md:p-10">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100">
                    <Eye
                    size={28}
                    className="text-[#f85220]"
                    />
                    </div>

                    <h3 className="mt-7 text-2xl font-bold text-[#0b1424]"> 
                    Our Vision 
                    </h3>
                    <p className="mt-4 leading-8 text-gray-600">
                    Our vision is to establish Shravani Enterprises as a trusted
                    name known for quality work, responsible service and
                    long-lasting customer relationships.
                    </p>
                </div>
            </div>
        </div>
    </section>

{/* values */}
<section className="py-20 md:py-28">
    <div className="mx-auto mb-14 max-w-2xl text-center">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#f58220]">
        What We Believe 
        </p>

        <h2 className="text-3xl font-extrabold text-[#0b1424] md:text-4xl"> 
        Our Core Values 
        </h2>
    </div>

    <div className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
    <ShieldCheck
    size={30}
    className="text-[#f58220]"
    />

    <h3 className="mt-5 text-xl font-bold text-[#0b1424]">
    Quality
    </h3>

    <p className="mt-3 leading-7 text-gray-600">
    We believe quality should be a part of every stage of our work. 
    </p>
    </div>

    {/* Value */}
    <div className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
    <Handshake
    size={30}
    className="text-[#f58220]"
    />
    <h3 className="mt-5 text-xl font-bold text-[#0b1424]">
    Trust 
    </h3>
    
    <p className="mt-3 leading-7 text-gray-600">
    We value honest communication and long-term customer
    relationships. 
    </p>
    </div>

    {/* Value 3 */}
    <div className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
    <Users
    size={30}
    className="text-[#f58220]"
    />

    <h3 className="mt-5 text-xl font-bold text-[#0b1424]">
    Commitment 
    </h3>

    <p className="mt-3 leading-7 text-gray-600">
    We take responsibility for our work and remain committed 
    to our customers.
    </p>
    </div>

</section>

{/* CTA */}
<section className="px-6 pb-20">
    <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#0b1424] px-6 py-16 text-center md:px-12">

    <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f58220]">
    Let s work Together 
    </p>

    <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-extrabold text-white md:text-4xl"> 
    Have a project in mind?
    </h2>

    <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-300">
    Talk to our team and let us understand your requirements. 
    </p>

    <Link
    href="/contact"
    className="mt-8 inline-flex items-center rounded-lg bg-[#f58220] px-8 py-4 font-bold text-white transition duration-300 hover:bg-[#df6d10]"
    >
    Contact Us 
    </Link>

    </div>

</section>



    </main>
  );
}
