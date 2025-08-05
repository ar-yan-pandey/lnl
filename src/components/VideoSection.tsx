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
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Resources &
            <span className="bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent"> Industry Experts</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Access exclusive content, masterclasses, and insights from top B2B sales professionals.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-xl flex items-center justify-center">
                  <Video className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Weekly Masterclasses</h3>
                  <p className="text-gray-400">Live sessions every Tuesday at 2 PM EST</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-colors cursor-pointer group">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-white group-hover:text-blue-400 transition-colors">AI-Powered Personalization at Scale</h4>
                      <p className="text-sm text-gray-400">Jan 23, 2025 • 45 min</p>
                    </div>
                    <Play className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                  </div>
                </div>
                
                <div className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-colors cursor-pointer group">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-white group-hover:text-blue-400 transition-colors">Multi-Threading: The Complete Guide</h4>
                      <p className="text-sm text-gray-400">Jan 16, 2025 • 52 min</p>
                    </div>
                    <Play className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                  </div>
                </div>
                
                <div className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-colors cursor-pointer group">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-white group-hover:text-blue-400 transition-colors">From 2% to 23% Response Rates</h4>
                      <p className="text-sm text-gray-400">Jan 9, 2025 • 38 min</p>
                    </div>
                    <Play className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                  </div>
                </div>
              </div>
              
              <button className="w-full mt-6 bg-gradient-to-r from-blue-600 to-blue-400 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-200">
                View All Masterclasses
              </button>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                  <Mic className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">The Outreach Podcast</h3>
                  <p className="text-gray-400">New episodes every Thursday</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-colors cursor-pointer group">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-white group-hover:text-green-400 transition-colors">#47: Scaling to $10M ARR with Outbound</h4>
                      <p className="text-sm text-gray-400">With Sarah Chen, VP Sales at TechFlow</p>
                    </div>
                    <Play className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                  </div>
                </div>
                
                <div className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-colors cursor-pointer group">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-white group-hover:text-green-400 transition-colors">#46: The Psychology of B2B Buying</h4>
                      <p className="text-sm text-gray-400">With Dr. Marcus Reid, Behavioral Economist</p>
                    </div>
                    <Play className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                  </div>
                </div>
                
                <div className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-colors cursor-pointer group">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-white group-hover:text-green-400 transition-colors">#45: AI Revolution in Sales Development</h4>
                      <p className="text-sm text-gray-400">With Alex Thompson, CEO of SalesAI</p>
                    </div>
                    <Play className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                  </div>
                </div>
              </div>
              
              <button className="w-full mt-6 bg-gradient-to-r from-green-600 to-blue-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-200">
                Listen on All Platforms
              </button>
            </div>
            
            <div className="bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl p-8 text-white">
              <div className="flex items-center space-x-4 mb-4">
                <Users className="w-8 h-8" />
                <div>
                  <h3 className="text-xl font-semibold">Join Our Community</h3>
                  <p className="text-blue-100">5,000+ B2B sales professionals</p>
                </div>
              </div>
              <p className="text-blue-100 mb-6">
                Connect with like-minded sales leaders, share strategies, and get exclusive access to templates and tools.
              </p>
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Join Free Community
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;