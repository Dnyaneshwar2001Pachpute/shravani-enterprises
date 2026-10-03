import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  MessageCircle,
} from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-white text-[#12334b]">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-[#0b1424] py-24 md:py-32">

        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#f58220]/20 blur-3xl" />

        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-[#f58220]/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 text-center">

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#f58220]">
            Contact Us
          </p>

          <h1 className="text-4xl font-bold text-white md:text-6xl">
            Let&apos;s Protect Your Building
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-300 md:text-lg">
            Have a waterproofing or civil repair requirement?
            Get in touch with Shravani Enterprises for professional
            consultation and reliable solutions.
          </p>

        </div>
      </section>


      {/* ================= CONTACT SECTION ================= */}
      <section className="w-full overflow-hidden py-20 md:py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="grid w-full min-w-0 grid-cols-1 gap-10 lg:grid-cols-2">

            {/* ================= LEFT SIDE ================= */}
            <div className="min-w-0">

              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#f58220]">
                Get In Touch
              </p>

              <h2 className="text-3xl font-bold text-[#12334b] md:text-4xl">
                We&apos;re Here To Help
              </h2>

              <p className="mt-5 max-w-xl leading-7 text-gray-600">
                Whether you need waterproofing, structural repair,
                crack repair, injection grouting, or protective
                coatings, our team is ready to discuss your project.
              </p>


              {/* ================= CONTACT CARDS ================= */}
              <div className="mt-8 space-y-4">


                {/* ================= CALL CARD ================= */}
                <div className="flex items-start gap-4 rounded-2xl border border-gray-200 p-5 shadow-sm">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#f58220]/10">
                    <Phone
                      className="text-[#f58220]"
                      size={24}
                    />
                  </div>

                  <div>

                    <h3 className="font-semibold text-[#12334b]">
                      Call Us
                    </h3>

                    <p className="mt-1 text-gray-600">
                      Speak directly with our team
                    </p>

                    <p className="mt-2 font-semibold text-[#f58220]">
                      +91 99701 87373
                    </p>

                    {/* CALL NOW BUTTON */}
                    <a
                      href="tel:+919970187373"
                      className="mt-4 inline-flex items-center gap-2 rounded-xl bg-[#f58220] px-5 py-3 font-semibold text-white transition hover:bg-[#d9680d]"
                    >
                      <Phone size={18} />
                      Call Now
                    </a>

                  </div>

                </div>


                {/* ================= EMAIL CARD ================= */}
                <div className="flex items-start gap-4 rounded-2xl border border-gray-200 p-5 shadow-sm">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#f58220]/10">
                    <Mail
                      className="text-[#f58220]"
                      size={24}
                    />
                  </div>

                  <div>

                    <h3 className="font-semibold text-[#12334b]">
                      Email Us
                    </h3>

                    <p className="mt-1 text-gray-600">
                      Send us your project requirements
                    </p>

                    <a
                      href="mailto:sharavanienterprises2222@gmail.com"
                      className="mt-2 inline-block max-w-full break-all font-semibold text-[#f58220]"
                    >
                      sharavanienterprises2222@gmail.com
                    </a>

                  </div>

                </div>


                {/* ================= LOCATION CARD ================= */}
                <div className="flex items-start gap-4 rounded-2xl border border-gray-200 p-5 shadow-sm">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#f58220]/10">
                    <MapPin
                      className="text-[#f58220]"
                      size={24}
                    />
                  </div>

                  <div>

                    <h3 className="font-semibold text-[#12334b]">
                      Our Location
                    </h3>

                    <p className="mt-1 leading-6 text-gray-600">
                      Pune, Maharashtra, India
                    </p>

                  </div>

                </div>

              </div>

            </div>


            {/* ================= RIGHT SIDE FORM ================= */}
            <div className="w-full min-w-0 rounded-3xl bg-[#f8fafc] p-6 shadow-lg md:p-8">

              <h2 className="text-2xl font-bold text-[#12334b]">
                Request a Free Consultation
              </h2>

              <p className="mt-2 text-gray-600">
                Fill out the form and our team will contact you.
              </p>


              <form className="mt-8 space-y-5">

                {/* NAME */}
                <div>

                  <label className="mb-2 block text-sm font-medium">
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-[#f58220]"
                  />

                </div>


                {/* PHONE */}
                <div>

                  <label className="mb-2 block text-sm font-medium">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-[#f58220]"
                  />

                </div>


                {/* EMAIL */}
                <div>

                  <label className="mb-2 block text-sm font-medium">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-[#f58220]"
                  />

                </div>


                {/* MESSAGE */}
                <div>

                  <label className="mb-2 block text-sm font-medium">
                    Message
                  </label>

                  <textarea
                    rows={5}
                    placeholder="Tell us about your project..."
                    className="w-full resize-none rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-[#f58220]"
                  />

                </div>


                {/* SUBMIT BUTTON */}
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#f58220] px-6 py-3.5 font-semibold text-white transition hover:bg-[#d9680d]"
                >
                  Send Enquiry

                  <ArrowRight size={20} />

                </button>

              </form>

            </div>

          </div>

        </div>

      </section>


      {/* ================= WHATSAPP CTA ================= */}
      <section className= "w-full overflow-hidden bg-[#12334b] py-16">

        <div className="mx-auto max-w-5xl px-6 text-center">

          <MessageCircle
            className="mx-auto mb-5 text-[#f58220]"
            size={42}
          />

          <h2 className="text-3xl font-bold text-white">
            Need Quick Assistance?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-gray-300">
            Contact our team directly for project discussion and
            waterproofing consultation.
          </p>


          {/* WHATSAPP BUTTON */}
          <a
            href="https://wa.me/919970187373"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#f58220] px-7 py-3.5 font-semibold text-white transition hover:bg-[#d9680d]"
          >
            Chat on WhatsApp

            <ArrowRight size={20} />

          </a>

        </div>

      </section>

    </main>
  );
}