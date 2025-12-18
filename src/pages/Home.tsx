import { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram, FaEnvelope } from "react-icons/fa";

// Import images
import slide1 from "../assets/slide1.png";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.png";
import slide4 from "../assets/slide4.jpg";
import slide5 from "../assets/slide5.jpg";
import slide6 from "../assets/slide6.jpg";
import slide7 from "../assets/slide7.jpg";
import slide8 from "../assets/slide8.jpg";

const slides = [slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide8];

function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000); // 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0">
        {slides.map((img, index) => (
          <img
            key={index}
            src={img}
            alt=""
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-100/40 to-yellow-100/20" />
      <div className="absolute inset-0 bg-black/40" />

      {/* Hero Content */}
      <div className="z-10 px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-yellow-400 drop-shadow-[0_0_20px_rgba(250,204,21,0.8)]">
          সপ্তপর্ণী
        </h1>

        <p className="text-xl md:text-2xl max-w-2xl mx-auto text-gray-100 drop-shadow-md">
          "যেমনটি আমরা ভাবি, তেমনটিই আমরা হয়ে উঠি।"
        </p>

        <p className="mt-4 text-lg text-blue-100">
          Join us in creating a world of harmony through meditation retreats,
          cultural events, and compassionate outreach to uplift humanity.
        </p>

        <p className="mt-2 text-lg text-blue-100">
          “সপ্তপর্ণী” কাজ করে সমাজের উন্নয়ন, সৃজনশীলতা, বৌদ্ধ শিশুদের ধর্মীয়
          চেতনা জাগ্রত করা।
        </p>

        {/* Social Icons */}
        <div className="mt-8 flex justify-center space-x-6">
          <a
            href="https://www.facebook.com/teamsaptaparni"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 text-2xl"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/team_saptaparni/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-pink-700 text-2xl"
          >
            <FaInstagram />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&to=saptaparni2023@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 hover:text-red-700 text-2xl"
          >
            <FaEnvelope />
          </a>
        </div>

        <a
          href="/about"
          className="mt-6 inline-block bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-medium px-6 py-3 rounded-lg transition duration-300 shadow-lg"
        >
          Learn More
        </a>
      </div>
    </section>
  );
}

export default Home;
