import React from "react";
import Donation from "../assets/donation.jpg"
function Donate() {
  return (
    <section className="min-h-screen pt-24 pb-16 bg-gradient-to-b from-yellow-50 to-blue-50 text-gray-800">
      {/* Header */}
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-600 mb-4">
          🙏 সাহায্য করুন – আপনার দান আমাদের শক্তি
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed">
          সপ্তপর্ণীর কার্যক্রমগুলো আপনাদের সাহায্যে আরও কার্যকর হয়ে উঠতে পারে।
          ধর্মীয় শিক্ষা, শিশুদের সৃজনশীলতা, স্বেচ্ছাসেবা ও মানবিক সহায়তা চালিয়ে
          যেতে আপনাদের অবদান প্রয়োজন।
        </p>
      </div>

      {/* Why Donate */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-4 items-center bg-white/70 rounded-2xl shadow-lg py-10 my-10 backdrop-blur-sm">
        <div className="flex justify-start">
          <img
            src={Donation}
            alt="Donate"
            className="rounded-xl shadow-md w-full max-w-md"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            💡 কেন সাহায্য করবেন?
          </h2>
          <ul className="text-gray-700 space-y-2 list-disc list-inside">
            <li>শিশুদের জন্য ধর্মীয় ও নৈতিক শিক্ষার আয়োজন</li>
            <li>বুদ্ধপূর্ণিমা ও প্রবারণা উৎসব বাস্তবায়ন</li>
            <li>মানবিক সহায়তা, রক্তদান কর্মসূচি</li>
            <li>সৃজনশীল প্রতিযোগিতা ও ফানুস কর্মশালা</li>
          </ul>
        </div>
      </div>

      {/* Donation Methods */}
      <div className="max-w-6xl mx-auto px-4 py-12 bg-blue-100/60 rounded-2xl shadow-inner text-center">
        <h2 className="text-3xl font-semibold text-blue-800 mb-6">
          📬 সাহায্য পাঠানোর উপায়
        </h2>
        <div className="grid md:grid-cols-2 gap-6 text-center">
          <div className="bg-white/70 rounded-xl p-6 shadow-md backdrop-blur-sm">
            <h3 className="text-xl font-bold text-yellow-700 mb-2">
              বিকাশ (Bkash)
            </h3>
            <p className="text-gray-700">📱 নম্বর: 01881286898</p>
            <p className="text-gray-600 text-sm">
              বিকাশ পেমেন্ট অপশন ব্যবহার করুন
            </p>
          </div>
          <div className="bg-white/70 rounded-xl p-6 shadow-md backdrop-blur-sm">
            <h3 className="text-xl font-bold text-yellow-700 mb-2">
              নগদ (Nagad)
            </h3>
            <p className="text-gray-700">📱 নম্বর: 01881286898</p>
            <p className="text-gray-600 text-sm">
              নগদ অ্যাকাউন্টে সরাসরি পাঠান
            </p>
          </div>
        </div>
      </div>

      {/* Transparency & Contact */}
      <div className="max-w-5xl mx-auto px-4 py-12 mt-12 text-center bg-yellow-100/60 rounded-xl shadow-inner">
        <h2 className="text-2xl font-semibold text-yellow-800 mb-4">
          🔍 স্বচ্ছতা ও বিশ্বাস
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed mb-6">
          প্রতিটি টাকা আমরা স্বচ্ছভাবে খরচ করি এবং চাইলে আপনাকে খরচের বিস্তারিত
          জানাতে প্রস্তুত। আপনার দান আমাদের সংগঠনের জন্য আশীর্বাদস্বরূপ।
        </p>
        <p className="text-gray-600 text-sm">
          কোনো প্রশ্ন থাকলে যোগাযোগ করুন 📧:{" "}
          <span className="underline">support@saptaporni.org</span>
        </p>
      </div>

      {/* Footer Quote */}
      <div className="mt-16 text-center px-4 bg-blue-50 py-10 rounded-xl shadow-inner max-w-4xl mx-auto">
        <p className="text-lg text-blue-700 italic mb-4">
          “Thousands of candles can be lit from a single candle, and the life of
          the candle will not be shortened.”
        </p>
        <p className="text-gray-600 font-semibold">
          🌱 আপনার একটি দান – অনেক জীবনে আলোর দিশা।
        </p>
      </div>
    </section>
  );
}

export default Donate;
