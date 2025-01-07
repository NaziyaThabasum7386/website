import React, { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";

const App = () => {
  const sliderTexts = [
    "Transform Your Vision into Reality",
    "Build Modern Websites with Us",
    "Achieve Seamless User Experiences",
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % sliderTexts.length);
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full bg-black text-white py-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-2xl font-bold">FullStack Freelance</h1>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#home" className="hover:text-yellow-400">Home</a></li>
              <li><a href="#about" className="hover:text-yellow-400">About</a></li>
              <li><a href="#services" className="hover:text-yellow-400">Services</a></li>
              <li><a href="#technologies" className="hover:text-yellow-400">Technologies</a></li>
              <li><a href="#contact" className="hover:text-yellow-400">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="flex items-center justify-center h-screen bg-gradient-to-b from-black to-gray-900">
        <div className="text-center px-6">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 transition-opacity duration-500 ease-in-out">
            {sliderTexts[currentTextIndex]}
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-6">
            We provide top-notch full-stack development services to bring your ideas to life.
          </p>
          <a
            href="#contact"
            className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500"
          >
            Get a Quote
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-lg text-gray-300">
            We are a team of passionate developers ready to tackle your project with precision and creativity.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-800 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Web Development</h3>
              <p className="text-gray-400">
                Creating responsive and engaging websites tailored to your needs.
              </p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Mobile App Development</h3>
              <p className="text-gray-400">
                Developing cross-platform mobile applications for a seamless user experience.
              </p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Maintenance & Support</h3>
              <p className="text-gray-400">
                Ensuring your applications run smoothly with our reliable support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="technologies" className="py-20 bg-gray-800 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Technologies We Use</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-700 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Frontend</h3>
              <p className="text-gray-400">React, Tailwind CSS, Material-UI</p>
            </div>
            <div className="p-6 bg-gray-700 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Backend</h3>
              <p className="text-gray-400">Node.js, Express.js</p>
            </div>
            <div className="p-6 bg-gray-700 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Database</h3>
              <p className="text-gray-400">MongoDB, MySQL</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg text-gray-300 mb-6">
            Ready to start your project? Reach out to us today!
          </p>
          <form className="max-w-md mx-auto">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 mb-4 bg-gray-700 text-white rounded-lg"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 mb-4 bg-gray-700 text-white rounded-lg"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full p-3 mb-4 bg-gray-700 text-white rounded-lg"
            ></textarea>
            <button
              type="submit"
              className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-black text-center text-gray-400">
        <p>&copy; 2025 FullStack Freelance. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default App;
