'use client';
import React, { useState } from "react";

const ContactMeSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setSubmitted(true);
        setForm({ name: "", email: "", message: "" });
      } else {
        alert("Something went wrong. Please try again!");
      }
    } catch  {
      alert("Something went wrong. Please try again!");
    }
  };

  return (
    <section className="w-full py-12 flex flex-col items-center bg-gradient-to-b from-black via-gray-900 to-black relative">
      <h2 className="text-white text-2xl sm:text-3xl font-bold mb-8 tracking-wide text-center">
        Contact Me
      </h2>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col gap-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="bg-gray-900 text-white rounded-md px-4 py-2 outline-none border border-gray-700 focus:border-amber-400"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          className="bg-gray-900 text-white rounded-md px-4 py-2 outline-none border border-gray-700 focus:border-amber-400"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          className="bg-gray-900 text-white rounded-md px-4 py-2 outline-none border border-gray-700 focus:border-amber-400 resize-none"
        />
        <button
          type="submit"
          className="bg-amber-400 text-black font-semibold py-2 rounded-md hover:bg-amber-500 transition-colors duration-300"
        >
          Send Message
        </button>
        {submitted && (
          <p className="text-green-400 text-center mt-2">Thank you! Your message has been sent.</p>
        )}
      </form>
    </section>
  );
};

export default ContactMeSection;
