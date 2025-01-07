import React from 'react';

const Services = () => (
  <section id="services" className="py-20 bg-white">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
      <div className="grid gap-8 md:grid-cols-3">
        <div className="p-6 bg-gray-100 rounded-lg shadow-lg text-center hover:bg-gray-200 transition">
          <h3 className="text-xl font-bold mb-2">Web Development</h3>
          <p className="text-gray-600">Responsive and scalable web applications tailored to your needs.</p>
        </div>
        <div className="p-6 bg-gray-100 rounded-lg shadow-lg text-center hover:bg-gray-200 transition">
          <h3 className="text-xl font-bold mb-2">API Integration</h3>
          <p className="text-gray-600">Seamless integration of APIs for enhanced functionality.</p>
        </div>
        <div className="p-6 bg-gray-100 rounded-lg shadow-lg text-center hover:bg-gray-200 transition">
          <h3 className="text-xl font-bold mb-2">UI/UX Design</h3>
          <p className="text-gray-600">Beautiful and user-friendly designs to captivate your audience.</p>
        </div>
      </div>
    </div>
  </section>
);

export default Services;
