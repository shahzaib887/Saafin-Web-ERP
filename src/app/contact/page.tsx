"use client";

import { useState } from "react";
import type { Metadata } from "next";
import Navbar from "@/components/landing-page/Navbar";
import Footer from "@/components/landing-page/Footer";
import Reveal from "@/components/Reveal";

const CONTACT_INFO = [
  {
    label: "Email",
    value: "hello@saafin.com",
    description: "We typically respond within 24 hours",
  },
  {
    label: "Phone",
    value: "+1 (555) 123-4567",
    description: "Monday to Friday, 9 AM to 6 PM",
  },
  {
    label: "Address",
    value: "123 Water Street, Hydration City, HC 12345",
    description: "Visit our headquarters",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-saafin-dark-bg pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-saafin-dark-surface via-saafin-dark-bg to-saafin-dark-bg opacity-60" />

        <div className="relative z-10 mx-auto max-w-4xl px-6 py-24 text-center md:px-10">
          <Reveal delay={0.1}>
            <div className="flex items-center justify-center gap-2 text-saafin-dark-muted mb-6">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                className="h-4 w-4"
              >
                <line x1="12" y1="2" x2="12" y2="22" />
                <line x1="4" y1="7" x2="20" y2="17" />
                <line x1="20" y1="7" x2="4" y2="17" />
              </svg>
              <span className="text-sm font-medium">Get in Touch</span>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tight text-saafin-dark-text leading-tight">
              Let's Talk
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-6 text-lg md:text-xl text-saafin-dark-text/80 leading-relaxed">
              Have questions about Saafin? We'd love to hear from you. Reach out and let's 
              start a conversation.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-saafin-dark-surface text-saafin-dark-text">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <Reveal delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-16">
              Contact Information
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {CONTACT_INFO.map((info, i) => (
              <Reveal key={info.label} delay={0.12 + i * 0.08}>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-saafin-dark-muted mb-2">
                    {info.label}
                  </h3>
                  <p className="text-2xl font-bold text-saafin-dark-text mb-2">
                    {info.value}
                  </p>
                  <p className="text-saafin-dark-muted text-sm">
                    {info.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-saafin-dark-bg text-saafin-dark-text">
        <div className="mx-auto max-w-4xl px-6 py-20 md:px-10">
          <Reveal delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-4">
              Send us a Message
            </h2>
            <p className="text-lg text-saafin-dark-text/80 mb-16">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-saafin-dark-text mb-3"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-saafin-dark-surface border border-saafin-dark-border rounded-saafin-lg text-saafin-dark-text placeholder-saafin-dark-muted focus:outline-none focus:border-saafin-dark-text transition-colors"
                  placeholder="John Doe"
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-saafin-dark-text mb-3"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-saafin-dark-surface border border-saafin-dark-border rounded-saafin-lg text-saafin-dark-text placeholder-saafin-dark-muted focus:outline-none focus:border-saafin-dark-text transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              {/* Subject Field */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-semibold text-saafin-dark-text mb-3"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-saafin-dark-surface border border-saafin-dark-border rounded-saafin-lg text-saafin-dark-text placeholder-saafin-dark-muted focus:outline-none focus:border-saafin-dark-text transition-colors"
                  placeholder="How can we help?"
                />
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-saafin-dark-text mb-3"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-saafin-dark-surface border border-saafin-dark-border rounded-saafin-lg text-saafin-dark-text placeholder-saafin-dark-muted focus:outline-none focus:border-saafin-dark-text transition-colors resize-none"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-saafin-dark-text text-saafin-dark-bg font-semibold rounded-full transition-colors duration-300 hover:bg-saafin-dark-border"
                >
                  Send Message
                </button>
              </div>

              {/* Form Note */}
              <p className="text-sm text-saafin-dark-muted text-center">
                We respect your privacy. Your information will only be used to respond to your inquiry.
              </p>
            </form>
          </Reveal>
        </div>
      </section>

      {/* Map/Additional Info Section */}
      <section className="bg-saafin-dark-surface text-saafin-dark-text">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <Reveal delay={0.1}>
              <div>
                <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-8">
                  Multiple Ways to Connect
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-saafin-dark-text">
                      Phone Support
                    </h3>
                    <p className="text-saafin-dark-muted">
                      Call us for immediate assistance with orders, delivery, or product questions.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-saafin-dark-text">
                      Email
                    </h3>
                    <p className="text-saafin-dark-muted">
                      Send us an email for detailed inquiries or feedback. We respond within 24 hours.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-saafin-dark-text">
                      Visit Us
                    </h3>
                    <p className="text-saafin-dark-muted">
                      Drop by our headquarters to learn more about Saafin and our services.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="relative aspect-square w-full overflow-hidden rounded-saafin-lg bg-saafin-dark-bg">
                <img
                  src="https://ik.imagekit.io/mmyzvdovbv/Saafin/Gemini_Generated_Image_eejvh0eejvh0eejv.jpg?updatedAt=1788452014242"
                  alt="Contact us"
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-saafin-dark-bg text-saafin-dark-text">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center md:px-10">
          <Reveal delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-6">
              We're Here to Help
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-lg text-saafin-dark-text/80 mb-12">
              Whether you have a question about our products, need to place an order, or want to 
              explore corporate solutions, our team is ready to assist.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <a
              href="/"
              className="inline-flex items-center gap-3 rounded-full bg-saafin-dark-text px-8 py-4 text-sm font-semibold text-saafin-dark-bg transition-colors duration-300 hover:bg-saafin-dark-border"
            >
              Back to Home
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
                <path d="M6 2h12v20l-6-4.2L6 22V2z" />
              </svg>
            </a>
          </Reveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
