import React from 'react';
import { Link } from 'react-router-dom';

const features = [
  {
    title: 'Precision Lead Generation',
    desc: 'We pinpoint and connect your sales team with decision-makers who are actively seeking solutions like yours.'
  },
  {
    title: 'Omnichannel Outreach',
    desc: 'Email, LinkedIn, and calls—strategically blended to maximize your engagement and conversion rates.'
  },
  {
    title: 'Guaranteed Meetings',
    desc: 'Receive pre-scheduled appointments with high-quality prospects to keep your pipeline moving.'
  },
  {
    title: 'Insights-Driven Tactics',
    desc: 'AI-powered analytics help you focus on the right audience and refine your approach for better results.'
  }
];

const steps = [
  {
    title: 'Ideal Customer Profiling',
    desc: 'We analyze your top customers and build laser-focused prospect lists.'
  },
  {
    title: 'Personalized Outreach',
    desc: 'Custom messaging across channels to deeply engage your target audience.'
  },
  {
    title: 'Appointment Setting',
    desc: 'We book meetings directly into your calendar with vetted prospects.'
  },
  {
    title: 'Performance Reporting',
    desc: 'Transparent, actionable campaign insights to optimize your sales process.'
  }
];

export default function RevenueAccelerator() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-900 to-black text-white py-16 px-4 text-center">
        <h5 className="text-xl font-semibold mb-2">Less Pitching. More Deals.</h5>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Accelerate Your Pipeline & Revenue</h1>
        <p className="max-w-2xl mx-auto text-lg opacity-90 mb-6">
          We design personalized outbound campaigns, equip you with the right tech stack to track every metric, and deliver booked meetings with buyers ready to talk.
        </p>
        <Link to="/contact-us" className="inline-block bg-white text-blue-900 font-bold px-8 py-3 rounded-full shadow-lg hover:bg-blue-100 transition">Contact Us</Link>
      </section>

      {/* Why Choose Section */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 md:mb-0">Why Choose Revenue Accelerator?</h2>
          <Link to="/contact-us" className="hidden md:inline-block bg-blue-900 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-800 transition">Contact us Today</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div key={i} className="bg-blue-50 rounded-2xl shadow p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-blue-100 rounded-full">
                <span className="text-2xl text-blue-900 font-bold">{i+1}</span>
              </div>
              <h3 className="font-semibold text-lg text-blue-900 mb-2">{f.title}</h3>
              <p className="text-gray-700 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
        <div className="md:hidden flex justify-center mt-8">
          <Link to="/contact-us" className="bg-blue-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-800 transition">Contact us Today</Link>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">How It Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <div key={i} className="bg-white rounded-2xl shadow p-6 text-center border-t-4 border-blue-900">
              <div className="w-10 h-10 mx-auto mb-3 flex items-center justify-center bg-blue-100 rounded-full">
                <span className="text-lg text-blue-900 font-bold">{i+1}</span>
              </div>
              <h4 className="font-semibold text-md text-blue-900 mb-2">{s.title}</h4>
              <p className="text-gray-700 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
