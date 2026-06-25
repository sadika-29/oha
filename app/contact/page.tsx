"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, Send, CheckCircle, MapPin, Phone } from "lucide-react";

const page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <div>
      <section className="max-w-6xl mx-auto px-4 py-20">
        <header className="text-center space-y-8">
          <div className="inline-block px-6 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700 mb-4">
            OHA Design Workshop — North Sydney
          </div>
          <h1 className="text-6xl font-bold text-black leading-tight">
            Get In Touch
          </h1>
          <p className="mt-6 text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Whether you have a project brief ready or just an idea, we would
            love to hear from you. Initial consultations are complimentary and
            obligation-free.
          </p>
        </header>

        <div className="mt-12 grid md:grid-cols-2 gap-12 items-start">
          {/* Studio details */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Our Studio</h2>
            <div className="flex items-start gap-3 text-gray-700">
              <MapPin className="w-5 h-5 mt-1 text-[#BC4749] flex-shrink-0" />
              <div>
                <p className="font-medium">OHA Design Workshop</p>
                <p>Level 10, 122 Arthur Street</p>
                <p>North Sydney NSW 2060</p>
                <p>Australia</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <Mail className="w-5 h-5 text-[#BC4749] flex-shrink-0" />
              <Link
                href="mailto:studio@ohadesign.com.au"
                className="hover:text-[#BC4749] transition-colors"
              >
                studio@ohadesign.com.au
              </Link>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <Phone className="w-5 h-5 text-[#BC4749] flex-shrink-0" />
              <Link
                href="tel:+61290000000"
                className="hover:text-[#BC4749] transition-colors"
              >
                +61 2 9000 0000
              </Link>
            </div>
            <div className="pt-4 border-t border-gray-100">
              <p className="text-sm text-gray-500">
                <strong>Studio hours:</strong> Monday–Friday, 9 am–5:30 pm AEST
              </p>
              <p className="text-sm text-gray-500 mt-1">
                <strong>Principal:</strong> Omar Ahmed
              </p>
            </div>
          </div>

          {/* Contact form */}
          <div className="bg-gray-50 shadow-sm rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h2>
            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle size={48} className="text-[#BC4749] mx-auto mb-2" />
                <p className="text-gray-700">
                  Thank you — we will be in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#BC4749] focus:border-transparent"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#BC4749] focus:border-transparent"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Tell us about your project
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Briefly describe the project type, location, and any key requirements..."
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#BC4749] focus:border-transparent"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center py-2 px-4 bg-[#BC4749] hover:shadow-md text-white font-semibold rounded-md transition"
                >
                  <Send size={20} className="mr-2" />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
