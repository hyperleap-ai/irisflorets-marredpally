import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admissions",
  description:
    "Admissions open at Iris Florets Marredpally. Fee structure, admission process, and enquiry form for preschool & daycare programs.",
};

const fees = [
  { item: "Admission Fee", amount: "₹5,000", note: "One-time" },
];

const steps = [
  {
    step: 1,
    title: "Enquire",
    description:
      "Fill out the enquiry form below or call us. Our team will reach out within 24 hours.",
  },
  {
    step: 2,
    title: "Visit & Tour",
    description:
      "Schedule a centre visit. Walk through our classrooms, learning centres, and meet our teachers.",
  },
  {
    step: 3,
    title: "Apply",
    description:
      "Complete the admission form, submit required documents, and pay the admission fee.",
  },
  {
    step: 4,
    title: "Welcome!",
    description:
      "Receive your child's welcome kit, orientation details, and start date. Your Iris Florets journey begins!",
  },
];

const eligibility = [
  { program: "Toddlers", age: "2 years (age completed on or before 1st April)" },
  { program: "Nursery", age: "3 years (age completed on or before 1st April)" },
  { program: "Junior KG", age: "4 years (age completed on or before 1st April)" },
  { program: "Senior KG", age: "5 years (age completed on or before 1st April)" },
  { program: "Grade 1", age: "6 years (age completed on or before 1st April)" },
  { program: "Grade 2", age: "7 years (age completed on or before 1st April)" },
  { program: "Daycare", age: "2 – 8 years" },
];

function EnquiryForm() {
  return (
    <form className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="parentName"
            className="mb-1 block text-sm font-semibold text-text"
          >
            Parent&apos;s Name *
          </label>
          <input
            type="text"
            id="parentName"
            name="parentName"
            required
            className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-text outline-none transition-colors focus:border-purple focus:ring-1 focus:ring-purple"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label
            htmlFor="childName"
            className="mb-1 block text-sm font-semibold text-text"
          >
            Child&apos;s Name *
          </label>
          <input
            type="text"
            id="childName"
            name="childName"
            required
            className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-text outline-none transition-colors focus:border-purple focus:ring-1 focus:ring-purple"
            placeholder="Your child's name"
          />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="childAge"
            className="mb-1 block text-sm font-semibold text-text"
          >
            Child&apos;s Age *
          </label>
          <select
            id="childAge"
            name="childAge"
            required
            className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-text outline-none transition-colors focus:border-purple focus:ring-1 focus:ring-purple"
          >
            <option value="">Select age</option>
            <option value="2">2 years</option>
            <option value="3">3 years</option>
            <option value="4">4 years</option>
            <option value="5">5 years</option>
            <option value="6">6 years</option>
            <option value="7">7 years</option>
            <option value="8">8 years</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="program"
            className="mb-1 block text-sm font-semibold text-text"
          >
            Program of Interest
          </label>
          <select
            id="program"
            name="program"
            className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-text outline-none transition-colors focus:border-purple focus:ring-1 focus:ring-purple"
          >
            <option value="">Select program</option>
            <option value="toddlers">Toddlers</option>
            <option value="nursery">Nursery</option>
            <option value="junior-kg">Junior KG</option>
            <option value="senior-kg">Senior KG</option>
            <option value="grade-1">Grade 1</option>
            <option value="grade-2">Grade 2</option>
            <option value="daycare">Daycare</option>
          </select>
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="phone"
            className="mb-1 block text-sm font-semibold text-text"
          >
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-text outline-none transition-colors focus:border-purple focus:ring-1 focus:ring-purple"
            placeholder="+91 XXXXX XXXXX"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="mb-1 block text-sm font-semibold text-text"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-text outline-none transition-colors focus:border-purple focus:ring-1 focus:ring-purple"
            placeholder="you@example.com"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="message"
          className="mb-1 block text-sm font-semibold text-text"
        >
          Message (optional)
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-text outline-none transition-colors focus:border-purple focus:ring-1 focus:ring-purple"
          placeholder="Any questions or specific requirements..."
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-full bg-orange px-7 py-3 text-base font-bold text-white transition-all hover:bg-orange-light hover:shadow-lg sm:w-auto"
      >
        Submit Enquiry
      </button>
    </form>
  );
}

export default function AdmissionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-purple to-purple-dark py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="inline-block rounded-full bg-orange px-5 py-1.5 text-sm font-bold text-white">
            Admissions Open 2026–27
          </div>
          <h1 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            Join the Iris Florets Family
          </h1>
          <p className="mt-4 max-w-xl text-lg text-white/85">
            Give your child the best start with our award-winning preschool
            programmes. Enquire today and schedule a visit.
          </p>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-extrabold text-text sm:text-4xl">
            How to Apply
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div key={s.step} className="relative text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-purple text-xl font-extrabold text-white">
                  {s.step}
                </div>
                <h3 className="mt-4 text-lg font-bold text-text">{s.title}</h3>
                <p className="mt-2 text-sm text-text-light">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Age Eligibility + Fee Structure */}
      <section className="bg-warm-gray py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Eligibility */}
            <div>
              <h2 className="text-2xl font-extrabold text-text">
                Age Eligibility
              </h2>
              <p className="mt-2 text-sm text-text-light">
                Admissions are open year-round, subject to seat availability.
              </p>
              <div className="mt-6 overflow-hidden rounded-xl bg-white shadow-sm">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-gray-100 bg-purple/5">
                      <th className="px-5 py-3 font-bold text-text">
                        Program
                      </th>
                      <th className="px-5 py-3 font-bold text-text">
                        Age Group
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {eligibility.map((e) => (
                      <tr
                        key={e.program}
                        className="border-b border-gray-50 last:border-0"
                      >
                        <td className="px-5 py-3 font-medium text-text">
                          {e.program}
                        </td>
                        <td className="px-5 py-3 text-text-light">{e.age}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Fee Structure */}
            <div>
              <h2 className="text-2xl font-extrabold text-text">
                Fee Structure
              </h2>
              <p className="mt-2 text-sm text-text-light">
                Please contact us directly for complete fee details and payment plan options.
              </p>
              <div className="mt-6 overflow-hidden rounded-xl bg-white shadow-sm">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-gray-100 bg-orange/5">
                      <th className="px-5 py-3 font-bold text-text">Item</th>
                      <th className="px-5 py-3 font-bold text-text">Amount</th>
                      <th className="px-5 py-3 font-bold text-text">
                        Frequency
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {fees.map((fee) => (
                      <tr
                        key={fee.item}
                        className="border-b border-gray-50 last:border-0"
                      >
                        <td className="px-5 py-3 font-medium text-text">
                          {fee.item}
                        </td>
                        <td className="px-5 py-3 font-semibold text-purple">
                          {fee.amount}
                        </td>
                        <td className="px-5 py-3 text-text-light">
                          {fee.note}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-2xl font-extrabold text-text sm:text-3xl">
              Enquiry Form
            </h2>
            <p className="mt-2 text-text-light">
              Fill out the form and we&apos;ll get back to you within 24 hours.
              Or call us directly at{" "}
              <a
                href="tel:+918886707373"
                className="font-semibold text-purple hover:underline"
              >
                +91 88867 07373
              </a>
              .
            </p>
            <div className="mt-8">
              <EnquiryForm />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Strip */}
      <section className="bg-purple py-10 text-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-lg font-bold text-white">
            Have questions? We&apos;re here to help.
          </p>
          <div className="mt-4 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="tel:+918886707373"
              className="inline-flex items-center gap-2 rounded-full bg-white/15 px-6 py-2.5 text-sm font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/25"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              +91 88867 07373
            </a>
            <a
              href="mailto:marredpally@irisflorets.com"
              className="inline-flex items-center gap-2 rounded-full bg-white/15 px-6 py-2.5 text-sm font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/25"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              marredpally@irisflorets.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
