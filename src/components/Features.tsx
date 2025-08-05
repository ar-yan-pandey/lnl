import React from 'react';
import { Search, Users, MessageCircle, Target, BarChart3, Zap } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Search,
      title: "Verified Contact Discovery",
      description: "AI-powered search engine finds and verifies contact information with 95% accuracy across 200M+ profiles.",
      stats: "95% accuracy rate"
    },
    {
      icon: MessageCircle,
      title: "Multithreaded Outreach",
      description: "Engage multiple stakeholders simultaneously with personalized messaging across email, LinkedIn, and phone.",
      stats: "3x higher response rates"
    },
    {
      icon: Target,
      title: "High-Intent Lead Scoring",
      description: "Machine learning algorithms identify prospects showing buying signals and optimal engagement timing.",
      stats: "67% conversion lift"
    },
    {
      icon: Users,
      title: "Appointment Setting",
      description: "Automated scheduling with intelligent follow-ups that book qualified meetings directly into your calendar.",
      stats: "2.4x more bookings"
    },
    {
      icon: BarChart3,
      title: "Real-Time Analytics",
      description: "Track campaign performance, engagement metrics, and ROI with detailed insights and actionable recommendations.",
      stats: "Complete visibility"
    },
    {
      icon: Zap,
      title: "Contact Enrichment",
      description: "Automatically enrich your existing database with fresh contact details, company data, and technographic insights.",
      stats: "40+ data points"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Everything You Need to
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent"> Scale Outreach</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From prospecting to closing, our AI-powered platform handles every step of your outbound sales process.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group bg-gray-50 hover:bg-white hover:shadow-xl border border-gray-100 rounded-2xl p-8 transition-all duration-300">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
                
                <div className="pt-4 border-t border-gray-200">
                  <div className="text-sm font-medium text-blue-600">{feature.stats}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;