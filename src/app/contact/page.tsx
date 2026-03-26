import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Iris Florets Marredpally. Visit us at West Marredpally, Hyderabad or call +91 91540 77002.",
};

const contactInfo = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "Address",
    value: "Plot No 26, Police Station Road, Krishnapuri Colony, West Marredpally, Hyderabad, Telangana 500026",
    href: "https://maps.google.com/?q=Iris+Florets+West+Marredpally+Hyderabad",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: "Phone",
    value: "+91 91540 77002",
    href: "tel:+919154077002",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: "Landline",
    value: "+91 40 6590 0541",
    href: "tel:+914065900541",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "Email",
    value: "westmarredpally@irisflorets.com",
    href: "mailto:westmarredpally@irisflorets.com",
  },
];

const hours = [
  { label: "Preschool", time: "Mon – Fri, 9:30 AM – 12:30 PM" },
  { label: "Daycare", time: "Mon – Sat, 9:00 AM – 6:30 PM" },
  { label: "Office Hours", time: "Mon – Sat, 9:00 AM – 5:00 PM" },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-teal to-teal-dark py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            Contact Us
          </h1>
          <p className="mt-4 max-w-xl text-lg text-white/85">
            We&apos;d love to hear from you. Visit our centre, give us a call,
            or send us a message.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Left — Info */}
            <div>
              <h2 className="text-2xl font-extrabold text-text">
                Get in Touch
              </h2>
              <div className="mt-8 space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal/10 text-teal">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-text-light">
                        {info.label}
                      </p>
                      <a
                        href={info.href}
                        target={info.label === "Address" ? "_blank" : undefined}
                        rel={
                          info.label === "Address"
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="mt-0.5 text-sm font-medium text-text hover:text-teal"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Hours */}
              <div className="mt-10">
                <h3 className="text-lg font-bold text-text">Hours</h3>
                <div className="mt-4 space-y-3">
                  {hours.map((h) => (
                    <div
                      key={h.label}
                      className="flex items-center justify-between rounded-lg bg-warm-gray px-4 py-3"
                    >
                      <span className="text-sm font-semibold text-text">
                        {h.label}
                      </span>
                      <span className="text-sm text-text-light">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social */}
              <div className="mt-10">
                <h3 className="text-lg font-bold text-text">Follow Us</h3>
                <div className="mt-3 flex gap-3">
                  <a
                    href="https://www.facebook.com/irisfloretsmarredpally/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-teal/10 text-teal transition-colors hover:bg-teal hover:text-white"
                    aria-label="Facebook"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/irisflorets/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-teal/10 text-teal transition-colors hover:bg-teal hover:text-white"
                    aria-label="Instagram"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Right — Form + Map */}
            <div>
              <h2 className="text-2xl font-extrabold text-text">
                Send Us a Message
              </h2>
              <form className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1 block text-sm font-semibold text-text"
                    >
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-text outline-none transition-colors focus:border-teal focus:ring-1 focus:ring-teal"
                      placeholder="Full name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contactPhone"
                      className="mb-1 block text-sm font-semibold text-text"
                    >
                      Phone *
                    </label>
                    <input
                      type="tel"
                      id="contactPhone"
                      name="phone"
                      required
                      className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-text outline-none transition-colors focus:border-teal focus:ring-1 focus:ring-teal"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="contactEmail"
                    className="mb-1 block text-sm font-semibold text-text"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="contactEmail"
                    name="email"
                    className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-text outline-none transition-colors focus:border-teal focus:ring-1 focus:ring-teal"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="mb-1 block text-sm font-semibold text-text"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-text outline-none transition-colors focus:border-teal focus:ring-1 focus:ring-teal"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contactMessage"
                    className="mb-1 block text-sm font-semibold text-text"
                  >
                    Message *
                  </label>
                  <textarea
                    id="contactMessage"
                    name="message"
                    rows={4}
                    required
                    className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-text outline-none transition-colors focus:border-teal focus:ring-1 focus:ring-teal"
                    placeholder="Your message..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-teal px-7 py-3 text-base font-bold text-white transition-all hover:bg-teal-dark hover:shadow-lg sm:w-auto"
                >
                  Send Message
                </button>
              </form>

              {/* Map */}
              <div className="mt-10">
                <h3 className="mb-3 text-lg font-bold text-text">Find Us</h3>
                <div className="overflow-hidden rounded-xl">
                  <iframe
                    title="Iris Florets Marredpally Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.1!2d78.498!3d17.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI3JzAwLjAiTiA3OMKwMjknNTMuMCJF!5e0!3m2!1sen!2sin!4v1"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
