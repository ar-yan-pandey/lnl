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
    <section id="features" className="py-20 bg-white relative">
  {/* Minimal plus pattern background */}
  <div
    className="absolute inset-0 w-full h-full pointer-events-none opacity-20 z-0"
    style={{
      backgroundImage:
        'url("data:image/svg+xml,%3Csvg width=\'28\' height=\'28\' viewBox=\'0 0 28 28\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Ccircle cx=\'14\' cy=\'14\' r=\'1.5\' fill=\'%239ca3af\' fill-opacity=\'0.7\'/%3E%3C/svg%3E")',
      backgroundRepeat: 'repeat',
      backgroundPosition: 'center',
      backgroundSize: '32px 32px',
    }}
  />
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
          {features.map((feature, index) => {
            const isEven = index % 2 === 0;
            const isDark = !isEven;
            
            return (
              <div 
                key={index} 
                className={`group rounded-3xl p-8 shadow-xl transition-all duration-500 transform hover:scale-105 overflow-hidden relative
  ${isDark
    ? 'bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 hover:shadow-[0_0_64px_24px_rgba(59,130,246,0.55)] hover:ring-2 hover:ring-blue-400'
    : 'bg-gradient-to-br from-blue-50 via-white to-blue-50 hover:shadow-[0_0_48px_16px_rgba(59,130,246,0.18)] hover:ring-2 hover:ring-blue-200'}
}`}
              >
                {/* Decorative background elements */}
                <div className={`absolute top-0 right-0 w-32 h-32 rounded-full opacity-10 transform translate-x-8 -translate-y-8 ${
                  isDark ? 'bg-white' : 'bg-blue-400'
                }`}></div>
                <div className={`absolute bottom-0 left-0 w-24 h-24 rounded-full opacity-5 transform -translate-x-4 translate-y-4 ${
                  isDark ? 'bg-white' : 'bg-blue-300'
                }`}></div>
                
                <div className="relative z-10 space-y-6">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg ${
                    isDark
                      ? 'bg-white/20 backdrop-blur-sm'
                      : 'bg-gradient-to-br from-blue-100 to-blue-200'
                  }`}>
                    <feature.icon className={`w-8 h-8 transition-colors duration-300 ${
                      isDark ? 'text-white' : 'text-blue-600'
                    }`} />
                  </div>
                  
                  <div>
                    <h3 className={`text-2xl font-bold mb-3 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>{feature.title}</h3>
                    <p className={`leading-relaxed mb-6 text-base ${
                      isDark ? 'text-blue-100' : 'text-gray-600'
                    }`}>{feature.description}</p>
                  </div>
                  
                  <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold shadow-md ${
                    isDark
                      ? 'text-blue-600 bg-white/90'
                      : 'text-green-600 bg-green-50 border border-green-200'
                  }`}>
                    <div className={`w-2 h-2 rounded-full mr-2 ${
                      isDark ? 'bg-blue-600' : 'bg-green-500'
                    }`}></div>
                    {feature.stats}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;