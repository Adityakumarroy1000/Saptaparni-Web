// src/pages/Events.tsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

interface EventItem {
  title: string;
  year: number;
  desc: string;
  cover: string;
  images: string[];
}

const Events: React.FC = () => {
  const [events, setEvents] = useState<EventItem[]>([]);
  const [filter, setFilter] = useState<string>("All");
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryImages, setGalleryImages] = useState<any[]>([]);

  useEffect(() => {
    fetch("/events.json")
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch((err) => console.error("Error loading events:", err));
  }, []);

  const filteredEvents =
    filter === "All"
      ? events
      : events.filter((event) => event.year.toString() === filter);

  const years = Array.from(new Set(events.map((event) => event.year))).sort(
    (a, b) => b - a
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-green-50 px-6 py-12">
      <div className="max-w-7xl mx-auto my-10">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center text-gray-800 mb-10 tracking-tight drop-shadow-sm"
        >
          Our Events
        </motion.h1>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <button
            onClick={() => setFilter("All")}
            className={`px-4 py-2 rounded-full border transition-all duration-300 shadow-sm hover:shadow-md 
    ${
      filter == "All"
        ? "bg-blue-400 text-white border-blue-400"
        : "bg-white text-gray-700 border-gray-300 hover:bg-blue-100"
    }`}
          >
            All
          </button>
          {years.map((year) => (
            <button
              key={year}
              onClick={() => setFilter(year.toString())}
              className={`px-5 py-2 rounded-full font-semibold transition-all duration-300 ${
                filter === year.toString()
                  ? "bg-blue-400 text-white border-blue-400"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-blue-100"
              }`}
            >
              {year}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredEvents.map((event, index) => (
            <motion.div
              onClick={() => {
                const imgs = event.images.map((img) => ({
                  original: img,
                  thumbnail: img,
                }));
                setGalleryImages(imgs);
                setGalleryOpen(true);
              }}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 overflow-hidden"
              whileHover={{ scale: 1.02 }}
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img
                src={event.cover}
                alt={event.title}
                className="w-full h-56 object-cover hover:opacity-90 transition duration-300"
              />
              <div className="p-5">
                <h2 className="text-xl font-semibold text-gray-800 mb-1">
                  {event.title}
                </h2>
                <p className="text-sm text-gray-500 mb-2">Year: {event.year}</p>
                <p className="text-gray-600 text-sm">{event.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {galleryOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-4 max-w-4xl w-4/5 ">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-black text-2xl w-[35%]"
              onClick={() => setGalleryOpen(false)}
            >
              ✖
            </button>
            <ImageGallery
              items={galleryImages}
              showPlayButton={false}
              showFullscreenButton={false}
              additionalClass="custom-gallery"
            />
          </div>
        </div>
      )}

      {/* Glow Text Style */}
      <style>
        {`
          .text-glow {
            text-shadow: 0 0 10px rgba(255, 255, 0, 0.8),
                         0 0 20px rgba(255, 255, 0, 0.6),
                         0 0 30px rgba(255, 255, 0, 0.4);
          }
        `}
      </style>
    </div>
  );
};

export default Events;
