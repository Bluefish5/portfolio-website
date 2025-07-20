"use client";

import { useState } from "react";

export default function Home() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form data:", form);
    alert("Form submitted! Check console.");
  };

  return (
    <main >
      <section className="p-6 bg-white rounded-lg shadow-md mt-10 opacity-60" >
        <h1 className="text-3xl font-bold mb-6 text-center ">Formularz kontaktowy (TODO.)</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2 font-medium text-gray-700">
              Imię:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Twoje imie"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 font-medium text-gray-700">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Twojemail@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 font-medium text-gray-700">
              Wiadomość:
            </label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Wpisz swoją wiadomość tutaj..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#4753A2] text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition"
            disabled
          >
            Wyślij
          </button>
        </form>
      </section>

      <section className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">Social media i linki </h1>
        <ul className="space-y-3 text-center text-blue-600">
          <li>
            <a
              href="https://www.linkedin.com/in/rafa%C5%82-grabowski-b46815233/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              LinkedIn Profile
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Bluefish5"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              GitHub
            </a>
          </li>
          <li className="text-gray-700">Email: r.grabowski2001@gmail.com</li>
        </ul>
      </section>
    </main>
  );
}
