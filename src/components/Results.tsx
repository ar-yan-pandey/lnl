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
      value: "15,000+",
      label: "Meetings Booked",
      description: "Qualified appointments scheduled last quarter"
    },
    {
      icon: DollarSign,
      value: "$50M+",
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
      quote: "Leads N Links helped us scale from 50 to 500 qualified meetings per month without adding headcount.",
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
    <section id="results" className="py-20 bg-white">
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
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-lg font-semibold text-gray-700 mb-2">{stat.label}</div>
              <div className="text-sm text-gray-500">{stat.description}</div>
            </div>
          ))}
        </div>
        
        {/* Testimonials */}
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
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