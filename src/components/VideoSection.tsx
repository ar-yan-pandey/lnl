import React, { useState } from "react";
import PlanComparisonModal from "./PlanComparisonModal";
import ContactForm from "./ContactForm";
import { Play, Mic, Video, Users } from 'lucide-react';

const VideoSection = () => {
  const [showComparison, setShowComparison] = useState(false);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  return (
    <section id="plans" className="py-24 relative overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Collage Video Grid */}
        <div className="w-full flex justify-center items-center py-8">
          <div className="relative grid grid-cols-3 grid-rows-2 gap-6 max-w-5xl w-full">
            {/* Left video (small) */}
            <div className="row-span-2 col-span-1 flex items-center">
              <video src="/videos/v1.mp4" className="rounded-2xl shadow-lg object-cover w-full h-60" autoPlay muted loop playsInline />
            </div>
            {/* Center video (large, portrait/phone style) */}
            <div className="row-span-2 col-span-1 flex items-center justify-center">
              <div className="w-44 md:w-60 lg:w-72 aspect-[9/19] bg-black rounded-[2.5rem] shadow-2xl flex items-center justify-center overflow-hidden border-[8px] border-black">
                <video src="/videos/v2.mp4" className="object-cover w-full h-full rounded-[2rem]" autoPlay muted loop playsInline />
              </div>
            </div>
            {/* Top right video */}
            <div className="col-span-1 row-span-1">
              <video src="/videos/v3.mp4" className="rounded-2xl shadow-lg object-cover w-full h-36" autoPlay muted loop playsInline />
            </div>
            {/* Bottom right video */}
            <div className="col-span-1 row-span-1 flex items-end">
              <video src="/videos/v4.mp4" className="rounded-2xl shadow-lg object-cover w-full h-36" autoPlay muted loop playsInline />
            </div>
          </div>
        </div>
        
        <div className="relative mt-20 mb-16">
  {/* Background image with overlay only for plans section */}
  <img
    src="https://images.pexels.com/photos/262470/pexels-photo-262470.jpeg"
    alt="Background"
    className="absolute inset-0 w-full h-full object-cover object-center opacity-60 z-0 rounded-3xl"
    style={{ pointerEvents: 'none' }}
  />
  <div className="absolute inset-0 bg-black bg-opacity-60 z-0 rounded-3xl" />
  <div
    className="absolute inset-0 w-full h-full pointer-events-none opacity-20 z-0 rounded-3xl"
    style={{
      backgroundImage:
        'url("data:image/svg+xml,%3Csvg width=\'28\' height=\'28\' viewBox=\'0 0 28 28\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Ccircle cx=\'14\' cy=\'14\' r=\'1.5\' fill=\'%239ca3af\' fill-opacity=\'0.7\'/%3E%3C/svg%3E")',
      backgroundRepeat: 'repeat',
      backgroundPosition: 'center',
      backgroundSize: '32px 32px',
    }}
  />
  <div className="relative z-10 text-center space-y-4 py-16 px-4">
    <h2 className="text-4xl lg:text-5xl font-bold text-white">
      Choose Your Plan
    </h2>
    <p className="text-lg text-blue-100 max-w-3xl mx-auto">
      Flexible solutions for every team: from just the data to a fully managed lead engine.
    </p>
    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-12">

  {/* LeadLite – Just the Data */}
  <div className="bg-white border-2 border-gray-200 rounded-2xl shadow-md p-10 m-4 flex flex-col items-center relative transition-all duration-300 hover:border-gray-400 hover:shadow-[0_0_64px_24px_rgba(55,65,81,0.25)] hover:ring-2 hover:ring-gray-300 text-gray-900">
    <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-lg font-extrabold px-7 py-2 rounded-full shadow-xl tracking-wide ring-2 ring-gray-300/30 drop-shadow-lg uppercase">
  LeadLite
</span>
    <div className="text-gray-900 font-bold text-lg mb-2 mt-6">Just the Data</div>
    <div className="text-gray-500 mb-4 text-center">For teams who prefer full control over their outreach.</div>
    <ul className="text-gray-800 space-y-2 text-base mb-6 text-left">
  <li className="flex items-start"><span className="text-green-400 mr-2 mt-1">✔</span>Curated list of high-intent prospects</li>
  <li className="flex items-start"><span className="text-green-400 mr-2 mt-1">✔</span>Verified email IDs and phone numbers</li>
  <li className="flex items-start"><span className="text-green-400 mr-2 mt-1">✔</span>Segmented by your Ideal Customer Profile (ICP)</li>
  <li className="flex items-start"><span className="text-green-400 mr-2 mt-1">✔</span>Perfect if you have an in-house team ready to engage, just need the right contacts.</li>
</ul>
    <button
  className="w-full bg-gray-900 text-white font-semibold py-3 rounded-lg hover:bg-gray-800 transition"
  onClick={() => setShowComparison(true)}
>
  Get LeadLite
</button>
  </div>

  {/* LinkUp – Meetings Done for You */}
  <div className="bg-white border-2 border-blue-200 rounded-2xl shadow-lg p-10 m-4 flex flex-col items-center relative scale-105 z-10 transition-all duration-300 hover:border-blue-400 hover:shadow-[0_0_64px_24px_rgba(59,130,246,0.45)] hover:ring-2 hover:ring-blue-300 text-blue-900">
    <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-lg font-extrabold px-7 py-2 rounded-full shadow-xl tracking-wide ring-2 ring-blue-300/30 drop-shadow-lg uppercase">
  LinkUp
</span>
    <div className="text-blue-900 font-bold text-lg mb-2 mt-6">Meetings Done for You</div>
    <div className="text-gray-500 mb-4 text-center">You bring the leads, we handle the rest.</div>
    <ul className="text-gray-800 space-y-2 text-base mb-6 text-left">
  <li className="flex items-start"><span className="text-green-400 mr-2 mt-1">✔</span>Multithreaded outreach to your ICPs</li>
  <li className="flex items-start"><span className="text-green-400 mr-2 mt-1">✔</span>Personalized messaging across channels</li>
  <li className="flex items-start"><span className="text-green-400 mr-2 mt-1">✔</span>Calendar-ready appointments booked</li>
  <li className="flex items-start"><span className="text-green-400 mr-2 mt-1">✔</span>Best for teams with data but no time to chase or follow up.</li>
</ul>
    <button
  className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
  onClick={() => setIsContactFormOpen(true)}
>
  Get LinkUp
</button>
  </div>

  {/* Leads & Links PRO – The Full Suite */}
  <div className="bg-white border-2 border-purple-200 rounded-2xl shadow-md p-10 m-4 flex flex-col items-center relative transition-all duration-300 hover:border-purple-400 hover:shadow-[0_0_64px_24px_rgba(168,85,247,0.45)] hover:ring-2 hover:ring-purple-300 text-purple-900">
    <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-purple-600 text-white text-lg font-extrabold px-7 py-2 rounded-full shadow-xl tracking-wide ring-2 ring-purple-300/30 drop-shadow-lg uppercase whitespace-nowrap">
  Leads & Links PRO
</span>
    <div className="text-purple-900 font-bold text-lg mb-2 mt-6">The Full Suite</div>
    <div className="text-gray-500 mb-4 text-center">Everything you need, from data to booked calls.</div>
    <ul className="text-gray-800 space-y-2 text-base mb-6 text-left">
  <li className="flex items-start"><span className="text-green-400 mr-2 mt-1">✔</span>Lead sourcing + multi-channel qualification</li>
  <li className="flex items-start"><span className="text-green-400 mr-2 mt-1">✔</span>End-to-end outreach & nurturing</li>
  <li className="flex items-start"><span className="text-green-400 mr-2 mt-1">✔</span>Meetings scheduled</li>
  <li className="flex items-start"><span className="text-green-400 mr-2 mt-1">✔</span>Ideal for businesses that want a hands-off, outcome-driven lead engine</li>
</ul>
    <button
  className="w-full bg-purple-600 text-white font-semibold py-3 rounded-lg hover:bg-purple-700 transition"
  onClick={() => setIsContactFormOpen(true)}
>
  Get PRO Suite
</button>
  </div>
</div>
      </div>
  </div> {/* End relative z-10 text-center space-y-4 py-16 px-4 */}
</div> {/* End relative mt-20 mb-16 (plans bg wrapper) */}
<PlanComparisonModal
        open={showComparison}
        onClose={() => setShowComparison(false)}
        onOpenContactForm={() => setIsContactFormOpen(true)}
      />
<ContactForm isOpen={isContactFormOpen} onClose={() => setIsContactFormOpen(false)} />
</section>
  );
};

export default VideoSection;