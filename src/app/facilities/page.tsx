import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Facilities",
  description:
    "Explore world-class facilities at Iris Florets Marredpally — innovative learning centres, safety infrastructure, and child-friendly spaces designed by EDA architects.",
};

const learningCentres = [
  {
    icon: "/images/learning-centres/audiovisual-theatre.png",
    name: "Audiovisual Theatre",
    description:
      "A dedicated screening room where children learn through educational films, animations, and interactive presentations that bring lessons to life.",
  },
  {
    icon: "/images/learning-centres/art-craft-centre.png",
    name: "Creative Art & Craft Centre",
    description:
      "A vibrant studio equipped with paints, clay, paper, and craft supplies where children explore their artistic side through guided and free creative expression.",
  },
  {
    icon: "/images/learning-centres/fitness-studio.png",
    name: "360 Fitness Studio",
    description:
      "An indoor fitness space designed for young bodies — balancing beams, soft climbing structures, and age-appropriate exercise activities for physical development.",
  },
  {
    icon: "/images/learning-centres/organic-farming.png",
    name: "Organic Farming Zone",
    description:
      "A hands-on gardening area where children plant seeds, water plants, and learn about nature, sustainability, and where their food comes from.",
  },
  {
    icon: "/images/learning-centres/roleplay-amphitheatre.png",
    name: "Roleplay Area & Amphitheatre",
    description:
      "An imaginative space with costumes, props, and a mini stage where children act out stories, explore roles, and build confidence through dramatic play.",
  },
];

const safetyFeatures = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    title: "CCTV Surveillance",
    description: "24/7 camera monitoring across all areas with footage accessible to management.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: "Live Parent App",
    description: "Real-time updates, photos, and activity reports delivered straight to parents' phones.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: "Child-Friendly Design",
    description: "Infrastructure designed by EDA, an international architecture firm, with rounded edges and safe materials.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "First Aid & Emergency",
    description: "Trained staff with first aid kits and emergency procedures in place at all times.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
      </svg>
    ),
    title: "Well-Ventilated Classrooms",
    description: "Bright, airy, well-ventilated classrooms designed for comfort and a healthy learning environment.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    title: "Hygiene Standards",
    description: "Regular sanitisation, clean drinking water, and hygiene-trained staff throughout the centre.",
  },
];

const additionalFacilities = [
  "Transport facility (pick-up & drop-off)",
  "Indoor & outdoor play spaces",
  "Dedicated nap rooms for daycare children (coming soon)",
  "Spacious parking area for parents",
];

export default function FacilitiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-purple to-purple-dark py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            Our Facilities
          </h1>
          <p className="mt-4 max-w-xl text-lg text-white/85">
            World-class learning centres and child-safe infrastructure designed
            to inspire curiosity, creativity, and confidence.
          </p>
        </div>
      </section>

      {/* Learning Centres */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-extrabold text-purple-dark sm:text-4xl">
            Innovative Learning Centres
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-text-light">
            Specially designed spaces that maximise student engagement and make
            learning an exciting adventure.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {learningCentres.map((centre) => (
              <div
                key={centre.name}
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <Image
                  src={centre.icon}
                  alt={centre.name}
                  width={64}
                  height={64}
                  className="h-16 w-16"
                />
                <h3 className="mt-3 text-lg font-bold text-purple-dark">
                  {centre.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">
                  {centre.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Infrastructure */}
      <section className="bg-cream py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-extrabold text-purple-dark sm:text-4xl">
            Safety &amp; Infrastructure
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-text-light">
            Your child&apos;s safety is our top priority. Every detail of our
            infrastructure reflects this commitment.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {safetyFeatures.map((feature) => (
              <div
                key={feature.title}
                className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple/10 text-purple">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-bold text-purple-dark">{feature.title}</h3>
                  <p className="mt-1 text-sm text-text-light">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Facilities */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-extrabold text-purple-dark sm:text-3xl">
              And So Much More
            </h2>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 text-left">
              {additionalFacilities.map((facility) => (
                <div
                  key={facility}
                  className="flex items-center gap-3 rounded-xl bg-cream p-4"
                >
                  <svg
                    className="h-5 w-5 shrink-0 text-purple"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm font-medium text-purple-dark">
                    {facility}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-orange to-orange-light py-12 text-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-purple-dark sm:text-3xl">
            Come See Our Facilities
          </h2>
          <p className="mx-auto mt-3 max-w-md text-purple-dark/80">
            Schedule a tour and experience our learning centres and
            infrastructure first-hand.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-purple px-7 py-3 text-base font-bold text-white transition-all hover:bg-purple-dark hover:shadow-lg"
          >
            Book a Visit
          </Link>
        </div>
      </section>
    </>
  );
}
