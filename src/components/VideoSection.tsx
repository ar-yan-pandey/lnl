import React from 'react';
import { Play, Mic, Video, Users } from 'lucide-react';

const VideoSection = () => {
  return (
    <section id="video" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Featured Video Hero */}
        <div className="text-center mb-20">
          <div className="relative max-w-4xl mx-auto">
            <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full flex items-center justify-center mx-auto hover:scale-110 transition-transform cursor-pointer">
                    <Play className="w-8 h-8 text-white fill-current ml-1" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">See Leads N Links in Action</h3>
                    <p className="text-gray-300">Watch how we helped TechFlow increase their response rates by 1,150%</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Video stats overlay */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
              <div className="bg-white rounded-lg shadow-lg px-6 py-3 flex items-center space-x-6">
                <div className="text-center">
                  <div className="text-lg font-bold text-gray-900">12:34</div>
                  <div className="text-xs text-gray-500">Duration</div>
                </div>
                <div className="w-px h-8 bg-gray-200"></div>
                <div className="text-center">
                  <div className="text-lg font-bold text-gray-900">25K+</div>
                  <div className="text-xs text-gray-500">Views</div>
                </div>
                <div className="w-px h-8 bg-gray-200"></div>
                <div className="text-center">
                  <div className="text-lg font-bold text-gray-900">4.9★</div>
                  <div className="text-xs text-gray-500">Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Simple, Transparent Pricing
            <span className="block text-green-600 text-2xl mt-2">Get First 100 for Just ₹5 Each!</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            No monthly fees, no hidden costs. Pay only for verified phone numbers you get.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* First 100 Contacts */}
          <div className="bg-white border-2 border-green-200 rounded-2xl shadow-md p-8 flex flex-col items-center relative">
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-500 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg">80% OFF</span>
            <div className="mb-4 text-green-600 text-6xl font-extrabold">₹5</div>
            <div className="text-gray-800 font-bold text-lg mb-2">First 100 Contacts</div>
            <div className="text-gray-500 mb-4 text-center">Perfect for testing and small teams</div>
            <ul className="text-gray-700 space-y-2 text-sm mb-6 text-left">
              <li>100 verified phone numbers</li>
              <li>100% credit refund for wrong numbers</li>
              <li>91% accuracy guarantee</li>
              <li>Perfect for sales & recruitment</li>
            </ul>
            <button className="w-full bg-green-600 text-white font-semibold py-3 rounded-lg hover:bg-green-700 transition">Get First 100 for ₹5 – Contact Us</button>
          </div>

          {/* After 100 Contacts */}
          <div className="bg-white border-2 border-blue-200 rounded-2xl shadow-lg p-8 flex flex-col items-center relative scale-105 z-10">
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg">Most Popular</span>
            <div className="mb-4 text-blue-600 text-6xl font-extrabold">₹25</div>
            <div className="text-gray-800 font-bold text-lg mb-2">After 100 Contacts</div>
            <div className="text-gray-500 mb-4 text-center">For growing teams and professionals</div>
            <ul className="text-gray-700 space-y-2 text-sm mb-6 text-left">
              <li>Unlimited contacts</li>
              <li>100% credit refund for wrong numbers</li>
              <li>91% accuracy guarantee</li>
              <li>Priority support</li>
            </ul>
            <button className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition">Get Started</button>
          </div>

          {/* 500+ Contacts/Month */}
          <div className="bg-white border-2 border-purple-200 rounded-2xl shadow-md p-8 flex flex-col items-center relative">
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-600 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg">Enterprise</span>
            <div className="mb-4 text-purple-600 text-3xl font-extrabold">Custom</div>
            <div className="text-gray-800 font-bold text-lg mb-2">500+ Contacts/Month</div>
            <div className="text-gray-500 mb-4 text-center">For large teams and enterprises</div>
            <ul className="text-gray-700 space-y-2 text-sm mb-6 text-left">
              <li>Bulk pricing (up to 40% off)</li>
              <li>Dedicated account manager</li>
              <li>API access</li>
              <li>24/7 priority support</li>
            </ul>
            <button className="w-full bg-purple-600 text-white font-semibold py-3 rounded-lg hover:bg-purple-700 transition">Contact Sales</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;