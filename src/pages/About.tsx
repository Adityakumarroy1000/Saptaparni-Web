import React from "react";
import alpona  from "../assets/alpona.jpg"
import fanush from "../assets/fanush.jpg";
import prodip from "../assets/prodip.jpg";
import gate from "../assets/gate.jpg";
function About() {
  return (
    <section className="min-h-screen pt-24 pb-16 bg-gradient-to-b from-blue-50 to-blue-100 text-gray-800">
      {/* Header */}
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
          🌿 আমাদের সম্পর্কে – সপ্তপর্ণী
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
          সপ্তপর্ণী একটি সামাজিক এবং বৌদ্ধ ধর্মীয় একটি সংঘটন। আমরা সমাজে
          সৃজনশীলতা, ধর্মীয় শিক্ষা এবং মানবিক সহায়তার মাধ্যমে একটি ইতিবাচক
          পরিবর্তন আনার লক্ষ্যে কাজ করি।
        </p>
      </div>

      {/* Intro Section */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-4 items-center bg-white/70 rounded-2xl shadow-lg py-10 my-10 backdrop-blur-sm">
        {/* Image Left */}
        <div className="flex justify-start">
          <img
            src={alpona}
            alt="Community Activities"
            className="rounded-xl shadow-md w-full max-w-md"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            📌 আমাদের কার্যক্রম
          </h2>
          <ul className="text-gray-700 space-y-2 list-disc list-inside">
            <li>বুদ্ধপূর্ণিমা উপলক্ষে আলপনা উৎসব</li>
            <li>শিশু সিদ্ধার্থ স্নান, প্রদীপ প্রজ্বলন</li>
            <li>রক্তদান কর্মসূচি ও ধর্মীয় শিক্ষা ক্লাস</li>
            <li>ফানুস বানানো কর্মশালা ও ফানুস উড়ানো</li>
            <li>বিভিন্ন রকমের প্রতিযোগিতা</li>
            <li>মানবিক সহায়তার কাজ</li>
          </ul>
        </div>
      </div>

      {/* Goal Section */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-4 items-center bg-blue-100/70 rounded-2xl shadow-inner py-10 my-10">
        <div>
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            🎯 আমাদের লক্ষ্য
          </h2>
          <p className="text-gray-700 leading-relaxed">
            “সপ্তপর্ণী” সমাজ উন্নয়ন, সৃজনশীলতা, এবং বৌদ্ধ শিশুদের ধর্মীয় চেতনা
            জাগ্রত করার জন্য কাজ করে। বৌদ্ধদের উৎসবগুলোকে আরো সুন্দরভাবে উদযাপন
            করা এবং শিশুদের সৃজনশীলতাকে গুরুত্ব দেওয়া আমাদের প্রধান উদ্দেশ্য।
          </p>
        </div>
        {/* Image Right */}
        <div className="flex justify-end">
          <img
            src={prodip}
            alt="Goal"
            className="rounded-xl shadow-md w-full max-w-md"
          />
        </div>
      </div>

      {/* What We Do Section */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-4 items-center bg-yellow-100/70 rounded-2xl shadow-inner py-10 my-10">
        {/* Image Left */}
        <div className="flex justify-start">
          <img
            src={fanush}
            alt="Activities"
            className="rounded-xl shadow-md w-full max-w-md"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-yellow-700 mb-4">
            🔍 আমরা কী করি?
          </h2>
          <ul className="text-gray-700 space-y-2 list-disc list-inside">
            <li>আলপনা উৎসব ও ধর্মীয় শিক্ষা ক্লাস</li>
            <li>সৃজনশীলতা ও শিল্প চর্চার প্রতিযোগিতা</li>
            <li>স্বেচ্ছাসেবামূলক কার্যক্রম</li>
            <li>সংস্কৃতি, ইতিহাস ও ঐতিহ্য চর্চা</li>
            <li>ফানুস বানানো ও উড়ানোর আয়োজন</li>
          </ul>
        </div>
      </div>

      {/* For Whom Section */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-4 items-center bg-blue-100/70 rounded-2xl shadow-inner py-10 my-10">
        <div>
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            🤝 আমরা কার জন্য?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            যেকোনো বয়স, যেকোনো পেশার মানুষ — যারা নিজের ভেতরের সম্ভাবনাকে জাগাতে
            চান এবং সমাজের জন্য কিছু করতে চান — সপ্তপর্ণী তাদের জন্যই কাজ করে।
          </p>
        </div>
        {/* Image Right */}
        <div className="flex justify-end">
          <img
            src={gate}
            alt="For All"
            className="rounded-xl shadow-md w-full max-w-md"
          />
        </div>
      </div>

      {/* Name Meaning Section */}
      <div className="max-w-5xl mx-auto px-4 text-center bg-yellow-50/70 py-10 rounded-2xl shadow-inner my-10">
        <h2 className="text-2xl font-semibold text-yellow-700 mb-4">
          🌼 নামের পেছনের অর্থ
        </h2>
        <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
          সপ্তপর্ণী শব্দটি এসেছে সংস্কৃত থেকে, যার মানে "সাতটি পাতা"। এটি একদিকে
          ঐক্যের প্রতীক, অন্যদিকে প্রকৃতির সাথে মানুষের সম্পর্কের এক চিরন্তন
          বন্ধন। এই নামটি আমাদের উদ্দেশ্য ও চিন্তার গভীরতা বহন করে।
        </p>
      </div>

      {/* Quote Section */}
      <div className="mt-16 text-center px-4 bg-blue-50 py-10 rounded-xl shadow-inner max-w-4xl mx-auto">
        <p className="text-lg text-blue-700 italic mb-4">
          “Peace comes from within. Do not seek it without.” — The Buddha
        </p>
        <p className="text-gray-600 font-semibold">
          🌱 আমাদের মূলমন্ত্র - "যেমনটি আমরা ভাবি, তেমনটিই আমরা হয়ে উঠি।"
        </p>
      </div>
    </section>
  );
}

export default About;
