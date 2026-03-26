import Image from "next/image";
import Link from "next/link";

const pillars = [
  {
    image: "/images/pillars/safe.png",
    title: "Safe",
    description:
      "Best-in-class safety & hygiene protocols. CCTV monitoring, child-friendly infrastructure designed by international architects.",
  },
  {
    image: "/images/pillars/playful.png",
    title: "Playful",
    description:
      "Research-based curriculum that balances education with fun. Children learn through play, discovery, and exploration.",
  },
  {
    image: "/images/pillars/innovate.png",
    title: "Innovative",
    description:
      "Specially designed learning centres — audiovisual theatre, art studio, fitness zone, organic farm, and roleplay arena.",
  },
  {
    image: "/images/pillars/trust.png",
    title: "Trusted",
    description:
      "Backed by 100+ national & international awards. Ranked #1 Franchise Model Preschool for 8 years by Times Survey.",
  },
];

const programs = [
  {
    name: "Toddlers",
    ages: "2 years",
    color: "bg-purple/5 text-purple border-purple/20",
    description: "Gentle introduction to social play and sensory exploration in a safe, nurturing environment.",
  },
  {
    name: "Nursery",
    ages: "3 years",
    color: "bg-blue/5 text-blue border-blue/20",
    description: "Building foundational skills through structured play, storytelling, and creative activities.",
  },
  {
    name: "Junior KG",
    ages: "4 years",
    color: "bg-purple-muted/10 text-purple-muted border-purple-muted/20",
    description: "Pre-reading, pre-writing, and early math concepts through the Iris 7 Petals curriculum.",
  },
  {
    name: "Senior KG",
    ages: "5 years",
    color: "bg-orange/10 text-orange border-orange/20",
    description: "School-readiness program developing independence, critical thinking, and leadership skills.",
  },
  {
    name: "Daycare",
    ages: "2 – 8 years",
    color: "bg-sage/15 text-purple-dark border-sage/30",
    description: "Full-day care with meals, nap time, activities, and learning — flexible options available.",
  },
];

const testimonials = [
  {
    quote:
      "My daughter absolutely loves going to Iris Florets. The teachers are warm, caring, and truly nurture each child's curiosity. We've seen amazing growth in her confidence.",
    parent: "Priya R.",
    child: "Parent of a Nursery student",
  },
  {
    quote:
      "The facilities are top-notch and the curriculum strikes the perfect balance between learning and play. The live parent app gives us such peace of mind.",
    parent: "Vikram S.",
    child: "Parent of a Junior KG student",
  },
  {
    quote:
      "We chose Iris Florets for the safety standards and stayed for the incredible learning experience. Our son's creativity and independence have blossomed.",
    parent: "Anitha M.",
    child: "Parent of a Senior KG student",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple to-purple-dark">
        {/* Decorative background shapes */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-orange" />
          <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-white" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <div className="mb-4 inline-block rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur-sm">
                Admissions Open 2026–27
              </div>
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                Revel in the
                <br />
                <span className="text-orange">Joy of Childhood</span>
              </h1>
              <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/85">
                Iris Florets Marredpally — where every child enters with a smile
                and walks out with giggles. Award-winning preschool &amp; daycare
                for ages 2 to 8 years.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/admissions"
                  className="inline-flex items-center justify-center rounded-full bg-orange px-7 py-3.5 text-base font-bold text-purple-dark shadow-lg transition-all hover:bg-orange-light hover:shadow-xl"
                >
                  Enquire Now
                </Link>
                <Link
                  href="/programs"
                  className="inline-flex items-center justify-center rounded-full border-2 border-white/30 px-7 py-3.5 text-base font-bold text-white backdrop-blur-sm transition-all hover:border-white/60 hover:bg-white/10"
                >
                  Explore Programs
                </Link>
              </div>
            </div>
            {/* Iro mascot */}
            <div className="hidden justify-center lg:flex">
              <Image
                src="/images/hero-joy-of-childhood.jpg"
                alt="Revel in the joy of childhood — Iro the Happy Panda flying in a plane"
                width={480}
                height={480}
                priority
                className="rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Iris Florets — 4 Pillars */}
      <section className="bg-cream py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-purple-dark sm:text-4xl">
              Why Iris Florets?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-text-light">
              Four pillars that make us the #1 ranked preschool in Hyderabad
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-2xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  width={64}
                  height={64}
                  className="h-16 w-16"
                />
                <h3 className="mt-4 text-xl font-bold text-purple-dark">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-purple-dark sm:text-4xl">
              Our Programs
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-text-light">
              Tailored programs for every stage of early childhood, powered by
              the Iris 7 Petals curriculum
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {programs.map((program) => (
              <div
                key={program.name}
                className={`rounded-2xl border p-6 transition-shadow hover:shadow-md ${program.color}`}
              >
                <span className="text-xs font-bold uppercase tracking-wider opacity-75">
                  {program.ages}
                </span>
                <h3 className="mt-1 text-xl font-bold">{program.name}</h3>
                <p className="mt-2 text-sm leading-relaxed opacity-80">
                  {program.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/programs"
              className="inline-flex items-center gap-1 text-sm font-bold text-purple hover:text-purple-dark"
            >
              View all programs &amp; curriculum
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Awards Banner */}
      <section className="bg-purple py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-6 text-center text-white sm:flex-row sm:justify-around sm:text-left">
            <div>
              <div className="text-4xl font-extrabold">100+</div>
              <div className="mt-1 text-sm text-white/80">
                National &amp; International Awards
              </div>
            </div>
            <div className="hidden h-12 w-px bg-white/20 sm:block" />
            <div>
              <div className="text-4xl font-extrabold">#1</div>
              <div className="mt-1 text-sm text-white/80">
                Franchise Model Preschool
                <br />8 years by Times Survey
              </div>
            </div>
            <div className="hidden h-12 w-px bg-white/20 sm:block" />
            <div>
              <div className="text-4xl font-extrabold">145+</div>
              <div className="mt-1 text-sm text-white/80">
                Schools across India,
                <br />
                Nepal &amp; Uganda
              </div>
            </div>
            <div className="hidden h-12 w-px bg-white/20 sm:block" />
            <div>
              <div className="text-4xl font-extrabold">Since 2017</div>
              <div className="mt-1 text-sm text-white/80">
                Serving Marredpally families
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mascot Section */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="flex justify-center gap-4">
              <Image
                src="/images/iro/iro-graduate.png"
                alt="Iro the Happy Panda in graduation cap"
                width={200}
                height={280}
                className="h-56 w-auto drop-shadow-lg sm:h-72"
              />
              <Image
                src="/images/iro/iro-football.png"
                alt="Iro the Happy Panda playing football"
                width={200}
                height={240}
                className="h-48 w-auto self-end drop-shadow-lg sm:h-60"
              />
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-purple-dark sm:text-4xl">
                Meet Iro — The Happy Panda
              </h2>
              <p className="mt-4 text-text-light leading-relaxed">
                Iro is the heart and soul of Iris Florets. Cute, gentle,
                friendly, and always happy — Iro represents everything we stand
                for: peace, positivity, and a heart of gold. Children love Iro,
                and Iro loves every single one of them!
              </p>
              <p className="mt-3 text-text-light leading-relaxed">
                At our Marredpally centre, Iro is always around — on the walls,
                in the classrooms, and in every child&apos;s heart.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-cream py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-purple-dark sm:text-4xl">
              What Parents Say
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-text-light">
              Hear from families who are part of the Iris Florets community
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.parent}
                className="rounded-2xl bg-white p-6 shadow-sm"
              >
                <svg
                  className="h-8 w-8 text-purple/20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z" />
                </svg>
                <p className="mt-3 text-sm leading-relaxed text-text-light">
                  {testimonial.quote}
                </p>
                <div className="mt-4 border-t border-gray-100 pt-3">
                  <p className="font-bold text-purple-dark">{testimonial.parent}</p>
                  <p className="text-xs text-text-light">
                    {testimonial.child}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="bg-gradient-to-r from-orange to-orange-light py-12">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-purple-dark sm:text-3xl">
            Admissions Open for 2026–27
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-purple-dark/80">
            Give your child the gift of joyful learning. Schedule a visit to our
            Marredpally centre today.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/admissions"
              className="inline-flex items-center justify-center rounded-full bg-purple px-7 py-3 text-base font-bold text-white shadow-lg transition-all hover:bg-purple-dark hover:shadow-xl"
            >
              Apply Now
            </Link>
            <a
              href="tel:+918886707373"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-purple-dark/30 px-7 py-3 text-base font-bold text-purple-dark transition-all hover:border-purple-dark hover:bg-purple-dark/5"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call +91 88867 07373
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
