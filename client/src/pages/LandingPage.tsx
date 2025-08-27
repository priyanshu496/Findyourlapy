import React from 'react';
import { ChevronRight, Sparkles, Target, TrendingUp } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url(./assets/bg.jpg)] bg-cover bg-center bg-no-repeat" />
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40" />
      
      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Find Your
          <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Perfect Laptop
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl leading-relaxed">
          Skip the endless research. Our AI analyzes your needs and finds the ideal laptop with the best deals.
        </p>
        
        <p className="text-lg text-gray-400 mb-12 max-w-2xl">
          Answer a few quick questions and get personalized recommendations tailored just for you.
        </p>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <button className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
            <Target className="w-5 h-5" />
            Take the Quiz
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            
            {/* Animated ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 animate-ping" />
          </button>
          
          <div className="flex items-center gap-2 text-gray-300 text-sm">
            <TrendingUp className="w-4 h-4 text-green-400" />
            <span>Join 50K+ satisfied users</span>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl">
          <div className="p-6 rounded-2xl bg-gray-900 bg-opacity-5 backdrop-blur-md borde border-opacity-10 hover:bg-opacity-10 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4 mx-auto">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-white text-lg font-semibold mb-2">AI-Powered Analysis</h3>
            <p className="text-gray-400 text-sm">Smart algorithms analyze your needs for perfect matches</p>
          </div>
          
          <div className="p-6 rounded-2xl bg-gray-900 bg-opacity-5 backdrop-blur-md border border-opacity-10 hover:bg-opacity-10 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 mx-auto">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-white text-lg font-semibold mb-2">Personalized Results</h3>
            <p className="text-gray-400 text-sm">Get recommendations tailored to your specific requirements</p>
          </div>
          
          <div className="p-6 rounded-2xl bg-gray-900 bg-opacity-5 backdrop-blur-md border border-opacity-10 hover:bg-opacity-10 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center mb-4 mx-auto">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-white text-lg font-semibold mb-2">Best Deals</h3>
            <p className="text-gray-400 text-sm">Find the lowest prices and exclusive offers available</p>
          </div>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 mt-12 text-center">
          <div>
            <div className="text-2xl md:text-3xl font-bold text-cyan-400">50K+</div>
            <div className="text-gray-400 text-sm">Happy Users</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-bold text-purple-400">1000+</div>
            <div className="text-gray-400 text-sm">Laptops Analyzed</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-bold text-green-400">95%</div>
            <div className="text-gray-400 text-sm">Match Accuracy</div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default LandingPage;