import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-8 bg-white text-center">
      <h2 className="text-3xl font-bold mb-6">Contact</h2>
      <p className="text-gray-700 mb-6">Vous pouvez me contacter via email ou LinkedIn</p>
      <a href="mailto:ariane@example.com" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
        Envoyer un email
      </a>
    </section>
  );
}
