import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Iris Florets Marredpally — a BITS Pilani & IIM Alumni Initiative. Our vision, mission, leadership, and 100+ award-winning legacy.",
};

const awards = [
  "#1 Franchise Model Preschool — Times Survey (2017–2024)",
  "Global Green School Award 2025 — NYC Green School Conference",
  "Best Safety & Hygiene Standards — National Education Awards",
  "Most Promising Preschool — Education Excellence Awards",
  "Innovative Teaching & Learning — Times Education Icons",
  "Best Experiential Learning Preschool — EduTech Awards",
  "Asia's Greatest Education Brand — Asia One",
  "Top 10 Preschool Chains in India — Education World",
];

const values = [
  {
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Love & Care",
    description: "Every child is treated with warmth, respect, and individual attention.",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Safety First",
    description: "Best-in-class safety protocols, CCTV monitoring, and child-friendly infrastructure.",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: "Joyful Learning",
    description: "Research-based curriculum that makes learning an exciting adventure.",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Parent Partnership",
    description: "Parents are active partners in their child's developmental journey.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-teal to-teal-dark py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            About Iris Florets
          </h1>
          <p className="mt-4 max-w-xl text-lg text-white/85">
            A BITS Pilani &amp; IIM Alumni Initiative — building the foundation
            for a generation of happy, confident, and creative thinkers.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-extrabold text-text sm:text-3xl">
              Our Story
            </h2>
            <div className="mt-6 space-y-4 text-text-light leading-relaxed">
              <p>
                Iris Florets was born from a simple observation: while children
                in India excel academically, their creativity, critical thinking,
                independence, and leadership qualities often go underdeveloped in
                the crucial early years.
              </p>
              <p>
                Founded by alumni from BITS Pilani and IIM, Iris Florets set out
                to bridge this gap. Since 2015, we&apos;ve grown into one of
                India&apos;s most awarded preschool chains with 145+ centres
                across India, Nepal, and Uganda.
              </p>
              <p>
                Our Marredpally centre, established in 2017, has been a trusted
                part of the West Marredpally community — serving families with
                the same commitment to joyful, holistic early childhood
                education that defines the Iris Florets experience everywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-warm-gray py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal/10 text-teal">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="mt-4 text-xl font-extrabold text-text">
                Our Vision
              </h3>
              <p className="mt-3 text-text-light leading-relaxed">
                To establish an exemplary preschool chain that is supreme in
                offering a powerful foundation to young children who will
                joyfully embark on the journey to discover the world of happy
                thinking and learning.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange/10 text-orange">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mt-4 text-xl font-extrabold text-text">
                Our Mission
              </h3>
              <p className="mt-3 text-text-light leading-relaxed">
                To unlock the potential of preschoolers to become courageous,
                motivated individuals. To create moments of pride and joy for
                parents. To integrate exceptional processes and build an iconic
                model of early childhood education.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-extrabold text-text sm:text-4xl">
            Our Values
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-teal/10 text-teal">
                  {value.icon}
                </div>
                <h3 className="mt-4 text-lg font-bold text-text">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm text-text-light">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Iro */}
      <section className="bg-cream py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-teal text-4xl">
              🐼
            </div>
            <h2 className="mt-6 text-2xl font-extrabold text-text sm:text-3xl">
              Meet Iro — The Happy Panda
            </h2>
            <p className="mt-4 text-text-light leading-relaxed">
              Iro is the heart and soul of Iris Florets. Just like pandas —
              cute, gentle, friendly, and always happy — Iro represents
              everything we stand for: peace, positivity, and a heart of gold.
              Children love Iro, and Iro loves every single one of them!
            </p>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-extrabold text-text sm:text-4xl">
            Our Leadership
          </h2>
          <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-3">
            <div className="rounded-2xl bg-warm-gray p-6 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-teal text-2xl font-bold text-white">
                ST
              </div>
              <h3 className="mt-4 font-bold text-text">Sirish Turlapati</h3>
              <p className="text-sm text-text-light">Chairman &amp; MD</p>
              <p className="mt-2 text-xs text-text-light">
                Edupreneur &amp; award-winning school leader. Recipient of
                &quot;Asia&apos;s Greatest Leader&quot; 2018.
              </p>
            </div>
            <div className="rounded-2xl bg-warm-gray p-6 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange text-2xl font-bold text-white">
                RT
              </div>
              <h3 className="mt-4 font-bold text-text">Radhika Turlapati</h3>
              <p className="text-sm text-text-light">Director — Academics</p>
              <p className="mt-2 text-xs text-text-light">
                30+ years of experience designing curricula focused on holistic
                child development.
              </p>
            </div>
            <div className="rounded-2xl bg-warm-gray p-6 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-teal-light text-2xl font-bold text-white">
                RA
              </div>
              <h3 className="mt-4 font-bold text-text">Rahul Appani</h3>
              <p className="text-sm text-text-light">Director — Operations</p>
              <p className="mt-2 text-xs text-text-light">
                BITS Pilani &amp; IIM alumnus. Oversees systems innovation and
                technology integration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="bg-teal py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-extrabold text-white sm:text-4xl">
            Awards &amp; Recognition
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-white/80">
            100+ national and international accolades recognising our commitment
            to excellence in early childhood education.
          </p>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {awards.map((award) => (
              <div
                key={award}
                className="flex items-start gap-3 rounded-xl bg-white/10 p-4 backdrop-blur-sm"
              >
                <svg
                  className="mt-0.5 h-5 w-5 shrink-0 text-orange-light"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
                <span className="text-sm text-white/90">{award}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream py-12 text-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-text">
            Experience the Iris Florets Difference
          </h2>
          <p className="mx-auto mt-3 max-w-md text-text-light">
            Visit our Marredpally centre and see why thousands of parents trust
            us.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-teal px-7 py-3 text-base font-bold text-white transition-all hover:bg-teal-dark hover:shadow-lg"
          >
            Schedule a Visit
          </Link>
        </div>
      </section>
    </>
  );
}
