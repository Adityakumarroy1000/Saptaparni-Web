// src/components/Join.tsx
"use client"
import React, { useState } from "react";


const Join: React.FC = () => {
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const url =
        "https://script.google.com/macros/s/AKfycbzyqEkfQ3LxdBncj1bV0gqCW2KwAFy9DtA_8Fpg_u18qVSV6tlCQW0i0zL_T9MXz1RL/exec";

      const formData = new FormData(e.currentTarget);

      fetch(url, { method: "POST", body: formData })
        .then((res) => res.text())
        .then(() => {
          setSuccess(true);
          e.currentTarget.reset();
          setTimeout(() => setSuccess(false), 8000);
        })
        .catch((err) => console.error("Error:", err));
    };
    return (
      <section
        id="join"
        className="min-h-screen bg-gradient-to-br from-sky-100 via-green-50 to-yellow-50 py-24 px-6 flex items-center justify-center"
      >
        <div className="max-w-3xl w-full bg-white/50 backdrop-blur-xl shadow-xl rounded-2xl p-8 border border-blue-100 shadow-emerald-300">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-6">
            Saptaparni Membership Form
          </h2>
          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Name */}
            <div>
              <label className="block font-medium text-gray-700 mb-1">
                Your Name
              </label>
              <input
                type="text"
                required
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
                placeholder="Enter your full name"
                name='name'
              />
            </div>

            {/* Father's Name */}
            <div>
              <label className="block font-medium text-gray-700 mb-1">
                Father Name
              </label>
              <input
                type="text"
                required
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
                placeholder="Enter father's name"
                name="fathername"
              />
            </div>

            {/* Mother's Name */}
            <div>
              <label className="block font-medium text-gray-700 mb-1">
                Mother Name
              </label>
              <input
                type="text"
                required
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
                placeholder="Enter mother's name"
                name='mothername'
              />
            </div>

            {/* DOB */}
            <div>
              <label className="block font-medium text-gray-700 mb-1">
                Date of Birth
              </label>
              <input
                type="date"
                required
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
                name='birthday'
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                required
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
                placeholder="Enter phone number"
                name='number'
              />
            </div>

            {/* Address */}
            <div>
              <label className="block font-medium text-gray-700 mb-1">
                Present Address
              </label>
              <textarea
                required
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
                placeholder="Enter your address"
                name='address'
              ></textarea>
            </div>

            {/* Gender */}
            <div>
              <label className="block font-medium text-gray-700 mb-1">
                Gender
              </label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="gender"
                    required
                    className="accent-sky-500"
                    value="Male"
                  />{" "}
                  Male
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="gender"
                    required
                    className="accent-sky-500"
                    value="Female"
                  />{" "}
                  Female
                </label>
              </div>
            </div>

            {/* Institute */}
            <div>
              <label className="block font-medium text-gray-700 mb-1">
                Name of Your Institute
              </label>
              <input
                type="text"
                required
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
                placeholder="Enter institute name"
                name='message'
              />
            </div>

            {/* Profession */}
            <div>
              <label className="block font-medium text-gray-700 mb-1">
                Profession
              </label>
              <select
                required
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
                name="proffession"
              >
                <option value="">Select Profession</option>
                <option>Student</option>
                <option>Job</option>
              </select>
            </div>

            {/* Email */}
            <div>
              <label className="block font-medium text-gray-700 mb-1">
                Your E-mail
              </label>
              <input
                type="email"
                required
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
                placeholder="Enter your email"
                name='email'
              />
            </div>

            {/* Monthly Donation */}
            <div>
              <label className="block font-medium text-gray-700 mb-1">
                Monthly Donation 20 Taka
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" required className="accent-green-500" />{" "}
                Agree
              </label>
            </div>

            {/* Terms */}
            <div className="bg-sky-50 p-4 rounded-lg border border-sky-200 text-sm text-gray-700 max-h-48 overflow-y-auto">
              <h3 className="font-semibold mb-2">
                Terms and Condition of The Agreement
              </h3>
              <ol className="list-decimal list-inside space-y-1">
                <li>
                  After filling out the membership form, the person will be known
                  as a lifetime member of the organization.
                </li>
                <li>All the secrets of the organization must be protected.</li>
                <li>
                  You will be required to attend a minimum of three programs per
                  year and must attend all meetings.
                </li>
                <li>
                  All junior members must be treated well, spoken to with love and
                  care. No kind of misbehavior will be tolerated.
                </li>
                <li>Everyone should fulfill their own responsibilities.</li>
                <li>
                  If any member wants to leave the organization, he/she will have
                  to pay a fine of 1000 taka along with a resignation letter.
                </li>
                <li>
                  For the annual program, a fixed amount of donation will be
                  determined from juniors and seniors and that donation will have
                  to be paid. There will be no connection between the annual fixed
                  amount donation and the monthly donation.
                </li>
              </ol>
            </div>

            {/* Agree */}
            <div>
              <label className="flex items-center gap-2">
                <input type="checkbox" required className="accent-green-500" />{" "}
                Yes, I agree with the terms and conditions.
              </label>
            </div>

            {/* Submit */}
            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-3 bg-sky-600 text-white rounded-lg shadow-lg hover:bg-sky-700 transition duration-300"
              >
                Join Now
              </button>
            </div>
            {success && (
              <div className="bg-green-100 text-green-800 p-4 rounded mt-4 text-center">
                ✅ Membership form submitted successfully!
              </div>
            )}
          </form>
        </div>
      </section>
    );
  };


export default Join;
