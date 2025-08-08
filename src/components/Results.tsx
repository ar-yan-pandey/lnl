import React from 'react';
import { TrendingUp, Users, Calendar, DollarSign } from 'lucide-react';

const Results = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: "340%",
      label: "Average ROI Increase",
      description: "Our clients see significant returns within 30 days"
    },
    {
      icon: Users,
      value: "2.5M+",
      label: "Verified Contacts",
      description: "High-quality prospects added monthly"
    },
    {
      icon: Calendar,
      value: "1,500+",
      label: "Meetings Booked",
      description: "Qualified appointments scheduled last quarter"
    },
    {
      icon: DollarSign,
      value: "$5M+",
      label: "Pipeline Generated",
      description: "Total qualified pipeline created for clients"
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "VP of Sales",
      company: "InnoTech India",
      image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      quote: "We went from 2% to 23% response rates in just 6 weeks. The AI personalization is incredible.",
      results: "+1,150% response rate increase"
    },
    {
      name: "Rohan Mehra",
      role: "Head of Growth",
      company: "DataCore Analytics India",
      image: "https://st.depositphotos.com/1011643/4430/i/950/depositphotos_44309759-stock-photo-young-indian-man-outdoors.jpg",
      quote: "Leads N Links helped us scale from 50 to 150 qualified meetings per month without adding headcount.",
      results: "+900% meeting volume increase"
    },
    {
      name: "Aarti Patel",
      role: "Sales Director",
      company: "CloudScale Solutions",
      image: "https://tse3.mm.bing.net/th/id/OIP.Fd9FpzhrFkFZ3wN-uBD3lwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
      quote: "The contact verification alone saved us 15 hours per week. Now we focus on selling, not prospecting.",
      results: "15 hours saved weekly"
    }
  ];

  return (
    <section id="results" className="py-20 bg-white relative">
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
            Proven
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent"> Results</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. See the measurable impact we've delivered for hundreds of B2B companies.
          </p>
        </div>
        
        {/* Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group transition-all duration-300 hover:shadow-[0_0_48px_16px_rgba(59,130,246,0.25)] hover:ring-2 hover:ring-blue-300 bg-blue-600 rounded-2xl p-8 text-white">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-lg font-semibold text-blue-100 mb-2">{stat.label}</div>
              <div className="text-sm text-blue-200">{stat.description}</div>
            </div>
          ))}
        </div>
        
        {/* Testimonials */}
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 transition-all duration-300 hover:shadow-[0_0_48px_16px_rgba(34,197,94,0.20)] hover:ring-2 hover:ring-green-300">
              <div className="flex items-center space-x-4 mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-blue-600">{testimonial.company}</div>
                </div>
              </div>
              
              <blockquote className="text-gray-700 mb-4 italic">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="bg-green-50 border-l-4 border-green-400 p-3 rounded">
                <div className="text-sm font-medium text-green-800">{testimonial.results}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;