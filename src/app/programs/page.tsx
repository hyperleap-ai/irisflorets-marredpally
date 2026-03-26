import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Explore age-appropriate preschool programs at Iris Florets Marredpally — Toddlers, Nursery, Junior KG, Senior KG, Daycare, and Activity Club.",
};

const programs = [
  {
    name: "Toddlers",
    ages: "2 years",
    accent: "border-l-purple bg-purple/5",
    details: [
      "Gentle introduction to a structured environment",
      "Sensory play and motor skill development",
      "Language exposure through rhymes, stories, and songs",
      "Socialisation through guided group activities",
      "Parent-teacher collaboration for smooth transition",
    ],
  },
  {
    name: "Nursery",
    ages: "3 years",
    accent: "border-l-blue bg-blue/5",
    details: [
      "Pre-reading skills — phonics awareness and letter recognition",
      "Pre-writing through tracing, drawing, and fine motor activities",
      "Number concepts through hands-on manipulatives",
      "Creative expression via art, craft, and dramatic play",
      "Nature exploration and basic science concepts",
    ],
  },
  {
    name: "Junior KG",
    ages: "4 years",
    accent: "border-l-purple-muted bg-purple-muted/5",
    details: [
      "Reading readiness — blending sounds, sight words",
      "Writing practice — alphabets, numbers, simple words",
      "Math foundations — counting, sorting, patterns, shapes",
      "Environmental awareness and community helpers",
      "Project-based learning for deeper understanding",
    ],
  },
  {
    name: "Senior KG",
    ages: "5 years",
    accent: "border-l-orange bg-orange/5",
    details: [
      "School-readiness programme with structured learning",
      "Fluent reading and creative writing exercises",
      "Advanced math — addition, subtraction, time, money",
      "Critical thinking and problem-solving challenges",
      "Leadership skills through group projects and presentations",
    ],
  },
  {
    name: "Grade 1",
    ages: "6 years",
    accent: "border-l-peach bg-peach/10",
    details: [
      "Transition from KG to formal schooling",
      "Reading and writing with growing fluency",
      "Math — addition, subtraction, and number concepts",
      "Environmental studies and basic science",
      "Creative arts, music, and physical education",
    ],
  },
  {
    name: "Grade 2",
    ages: "7 years",
    accent: "border-l-orange bg-orange/5",
    details: [
      "Advanced reading comprehension and writing",
      "Math — multiplication, division, and word problems",
      "Introduction to social studies and science concepts",
      "Critical thinking and collaborative projects",
      "Public speaking and presentation skills",
    ],
  },
  {
    name: "Daycare",
    ages: "2 – 8 years",
    accent: "border-l-sage bg-sage/10",
    details: [
      "Full-time, half-time, flexible, and hourly options",
      "Freshly cooked nutritious meals and snacks",
      "Supervised nap and rest time",
      "Age-appropriate activities and free play",
      "Live parent app for real-time updates",
    ],
  },
  {
    name: "After School & Activity Club",
    ages: "2 – 8 years",
    accent: "border-l-peach bg-peach/10",
    details: [
      "Art & craft workshops",
      "Dance, music, and movement sessions",
      "Story-telling and puppet theatre",
      "Yoga and mindfulness for little ones",
      "Seasonal and festival-themed activities",
    ],
  },
];

const petals = [
  {
    name: "Montessori",
    description: "Self-directed learning through hands-on materials that build independence and concentration.",
  },
  {
    name: "Play-Based",
    description: "Learning through structured and free play, encouraging curiosity and social development.",
  },
  {
    name: "Project-Based",
    description: "In-depth exploration of topics through collaborative, real-world projects.",
  },
  {
    name: "Reggio Emilia",
    description: "Child-led inquiry where the environment acts as the third teacher.",
  },
  {
    name: "Multiple Intelligences",
    description: "Recognising and nurturing each child's unique strengths and learning style.",
  },
  {
    name: "Eduten Finland Math",
    description: "AI-driven math learning from Finland with proven 45% improvement in outcomes.",
  },
  {
    name: "Creative Arts",
    description: "Expression through visual arts, music, dance, and dramatic play for holistic growth.",
  },
];

export default function ProgramsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-purple to-purple-dark py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            Our Programs
          </h1>
          <p className="mt-4 max-w-xl text-lg text-white/85">
            Age-appropriate programmes designed around the Iris 7 Petals
            curriculum — nurturing creativity, independence, and a lifelong love
            for learning.
          </p>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {programs.map((program) => (
              <div
                key={program.name}
                className={`rounded-2xl border-l-4 p-6 sm:p-8 ${program.accent}`}
              >
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4">
                  <h2 className="text-2xl font-extrabold text-purple-dark">
                    {program.name}
                  </h2>
                  <span className="text-sm font-semibold text-text-light">
                    Ages {program.ages}
                  </span>
                </div>
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {program.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex items-start gap-2 text-sm text-text-light"
                    >
                      <svg
                        className="mt-0.5 h-4 w-4 shrink-0 text-purple"
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
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Finland Math Partnership */}
      <section className="bg-blue/5 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:gap-10">
            <Image
              src="/images/finland-math.png"
              alt="Eduten Finland Math Partnership"
              width={200}
              height={80}
              className="h-16 w-auto"
            />
            <div>
              <h3 className="text-lg font-bold text-purple-dark">
                Powered by Eduten Finland Math
              </h3>
              <p className="mt-1 text-sm text-text-light">
                AI-driven math learning developed by researchers at the
                University of Turku, Finland. Proven to improve learning
                outcomes by 45%.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Iris 7 Petals Curriculum */}
      <section className="bg-cream py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-purple-dark sm:text-4xl">
              The Iris 7 Petals Curriculum
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-text-light">
              Our signature curriculum integrates seven pedagogical approaches,
              ensuring every child&apos;s unique learning style is honoured and
              nurtured.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {petals.map((petal, i) => (
              <div
                key={petal.name}
                className="rounded-2xl bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple text-sm font-bold text-white">
                  {i + 1}
                </div>
                <h3 className="mt-3 text-lg font-bold text-purple-dark">
                  {petal.name}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-text-light">
                  {petal.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-purple py-12 text-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
            Ready to give your child the best start?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-white/85">
            Schedule a visit to experience our programmes and facilities
            first-hand.
          </p>
          <Link
            href="/admissions"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-orange px-7 py-3 text-base font-bold text-purple-dark transition-all hover:bg-orange-light hover:shadow-lg"
          >
            Enquire Now
          </Link>
        </div>
      </section>
    </>
  );
}
