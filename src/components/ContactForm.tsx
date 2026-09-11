"use client";

import { useState } from "react";

const INITIAL_FORM = { name: "", email: "", subject: "", message: "" };

export default function ContactForm() {
  const [formData, setFormData] = useState(INITIAL_FORM);

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormData(INITIAL_FORM);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {[
        ["name", "Full Name", "text", "John Doe"],
        ["email", "Email Address", "email", "john@example.com"],
        ["subject", "Subject", "text", "How can we help?"],
      ].map(([name, label, type, placeholder]) => (
        <div key={name}>
          <label htmlFor={name} className="mb-3 block text-sm font-semibold text-saafin-dark-text">
            {label}
          </label>
          <input
            type={type}
            id={name}
            name={name}
            value={formData[name as keyof typeof formData]}
            onChange={handleChange}
            required
            className="w-full rounded-saafin-lg border border-saafin-dark-border bg-saafin-dark-surface px-4 py-3 text-saafin-dark-text placeholder-saafin-dark-muted transition-colors focus:border-saafin-dark-text focus:outline-none"
            placeholder={placeholder}
          />
        </div>
      ))}

      <div>
        <label htmlFor="message" className="mb-3 block text-sm font-semibold text-saafin-dark-text">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full resize-none rounded-saafin-lg border border-saafin-dark-border bg-saafin-dark-surface px-4 py-3 text-saafin-dark-text placeholder-saafin-dark-muted transition-colors focus:border-saafin-dark-text focus:outline-none"
          placeholder="Tell us more about your inquiry..."
        />
      </div>

      <div className="pt-4">
        <button type="submit" className="w-full rounded-full bg-saafin-dark-text px-8 py-4 font-semibold text-saafin-dark-bg transition-colors duration-300 hover:bg-saafin-dark-border">
          Send Message
        </button>
      </div>
      <p className="text-center text-sm text-saafin-dark-muted">
        We respect your privacy. Your information will only be used to respond to your inquiry.
      </p>
    </form>
  );
}