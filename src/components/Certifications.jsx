'use client';
import { useState } from 'react';

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  const certifications = [
    {
      title: "Teaching the AI Fluency Framework",
      issuer: "Anthropic",
      date: "2026",
      color: "from-sky-400 to-blue-500",
      image: "/teachinhg the ai fluency framework,.png",
      quality: "Certificate of Completion"
    },
    {
      title: "AI Fluency for Educators",
      issuer: "Anthropic",
      date: "2026",
      color: "from-teal-400 to-green-500",
      image: "/aifleuncyforeducators.png",
      quality: "Certificate of Completion"
    },
    {
      title: "AI Fluency for Students",
      issuer: "Anthropic",
      date: "2026",
      color: "from-indigo-400 to-purple-500",
      image: "/aifluencystudents.png",
      quality: "Certificate of Completion"
    },
    {
      title: "AI Fluency for Nonprofits",
      issuer: "Anthropic & GivingTuesday",
      date: "2026",
      color: "from-emerald-400 to-teal-500",
      image: "/aifulencynonprofits.png",
      quality: "Certificate of Completion"
    },
    {
      title: "AI Fluency: Framework & Foundations",
      issuer: "Anthropic",
      date: "2026",
      color: "from-lime-500 to-green-600",
      image: "/aifluency.png",
      quality: "Certificate of Completion"
    },
    {
      title: "Claude 101",
      issuer: "Anthropic",
      date: "2026",
      color: "from-stone-400 to-amber-500",
      image: "/claude 101.png",
      quality: "Certificate of Completion"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-64 h-64 bg-yellow-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-500 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="section-title">CERTIFICATIONS</h2>

        <div className="flex flex-wrap justify-center gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group relative w-full sm:w-96"
            >
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${cert.color} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

              <div className="relative bg-gray-800 rounded-xl p-5 shadow-lg group-hover:shadow-xl group-hover:shadow-purple-500/30 transition-all duration-300 transform group-hover:-translate-y-1 will-change-transform flex flex-col items-center">

                {/* Certificate image */}
                <div className="w-full h-60 rounded-lg overflow-hidden border border-gray-700 mb-4">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-contain bg-gray-900"
                  />
                </div>

                {/* Quality badge */}
                <span className="px-4 py-1 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/40 text-yellow-400 text-sm font-semibold rounded-full mb-2">
                  ✓ {cert.quality}
                </span>

                {/* Title */}
                <h3 className="text-base font-bold text-white text-center mb-1">
                  {cert.title}
                </h3>

                {/* Issuer + date */}
                <p className="text-gray-400 text-sm text-center mb-4">
                  {cert.issuer} · {cert.date}
                </p>

                {/* View Certificate button */}
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="w-full py-2.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold rounded-lg hover:scale-105 transition-all duration-300 hover:shadow-md hover:shadow-purple-500/50 flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  View Certificate
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <a
            href="https://drive.google.com/file/d/1opl2aRN21huoSpj2tzg_on38KAsfBmTz/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center gap-3 px-8 py-4 font-bold text-lg rounded-full group/btn overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-yellow-600 via-orange-600 to-yellow-600 bg-[length:200%_auto] animate-gradient-x"></span>
            <span className="absolute inset-0 bg-gradient-to-r from-orange-600 via-yellow-600 to-orange-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></span>
            <span className="absolute -inset-1 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-full blur-md opacity-50 group-hover/btn:opacity-100 transition-opacity duration-500 -z-10"></span>
            <span className="relative z-10 text-white">View All Certifications</span>
            <svg className="relative z-10 w-5 h-5 text-white group-hover/btn:rotate-45 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>

      {/* Full certificate modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative w-full max-w-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute -top-10 right-0 text-white hover:text-pink-400 transition-colors flex items-center gap-1 text-sm"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              Close
            </button>

            {/* Full certificate image */}
            <img
              src={selectedCert.image}
              alt={selectedCert.title}
              className="w-full rounded-xl shadow-2xl shadow-purple-500/30"
            />

            {/* Info below */}
            <div className="mt-4 text-center">
              <h3 className="text-lg font-bold text-white">{selectedCert.title}</h3>
              <p className="text-gray-400 text-sm mt-1">{selectedCert.issuer} · {selectedCert.date}</p>
              <span className="inline-block mt-2 px-4 py-1 bg-yellow-500/20 border border-yellow-500/40 text-yellow-400 text-sm font-semibold rounded-full">
                ✓ {selectedCert.quality}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
