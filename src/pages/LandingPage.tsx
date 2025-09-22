import React, { useState, useEffect } from 'react';
import { 
  Zap, 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Users, 
  BarChart3, 
  Brain, 
  Video, 
  MessageSquare,
  Monitor,
  Globe,
  TrendingUp,
  Shield,
  Clock,
  Award
} from 'lucide-react';

export const LandingPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Insights',
      description: 'Get intelligent analysis and predictions powered by machine learning',
      color: 'from-purple-500 to-blue-600'
    },
    {
      icon: Video,
      title: 'Live Testing',
      description: 'Monitor real-time user sessions and gather behavioral insights',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: MessageSquare,
      title: 'Feedback Management',
      description: 'Analyze and manage user feedback with AI-powered sentiment analysis',
      color: 'from-green-500 to-teal-600'
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Comprehensive dashboards with real-time metrics and insights',
      color: 'from-orange-500 to-red-600'
    }
  ];

  const stats = [
    { value: 'Alpha', label: 'Version' },
    { value: '500+', label: 'Waitlist Members' },
    { value: 'Q2 2025', label: 'Beta Launch' },
    { value: 'AI-First', label: 'Approach' }
  ];

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      // Handle waitlist submission
      console.log('Waitlist signup:', email);
      setIsSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">UXGenie</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">Features</a>
              <a href="#roadmap" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">Roadmap</a>
              <a href="#waitlist" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">Waitlist</a>
              <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105">
                Join Waitlist
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
                The Future of UX Research
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Powered by AI
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
                Be among the first to experience the next generation of UX research. Our AI-powered platform 
                is currently in alpha development - join the waitlist for early access.
              </p>
              
              <div className="max-w-md mx-auto mb-12">
                {!isSubmitted ? (
                  <form onSubmit={handleWaitlistSubmit} className="flex flex-col sm:flex-row gap-4">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email for early access"
                      className="flex-1 px-6 py-4 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                    <button
                      type="submit"
                      className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center"
                    >
                      Join Waitlist
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </button>
                  </form>
                ) : (
                  <div className="text-center p-6 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-800">
                    <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400 mx-auto mb-3" />
                    <h3 className="text-lg font-semibold text-green-800 dark:text-green-300 mb-2">You're on the list!</h3>
                    <p className="text-green-700 dark:text-green-400">We'll notify you when UXGenie is ready for beta testing.</p>
                  </div>
                )}
              </div>

              <div className="flex items-center justify-center space-x-8 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Alpha access
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Early bird pricing
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Shape the product
                </div>
              </div>
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative max-w-6xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-3xl"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                {/* Browser Bar */}
                <div className="flex items-center space-x-2 px-4 py-3 bg-gray-50 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="flex-1 mx-4">
                    <div className="bg-white dark:bg-gray-600 rounded-lg px-3 py-1 text-sm text-gray-500 dark:text-gray-400">
                      app.uxgenie.com/dashboard
                    </div>
                  </div>
                </div>
                
                {/* Dashboard Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h2>
                      <p className="text-gray-600 dark:text-gray-400">Welcome back! Here's what's happening with your user research.</p>
                    </div>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      New Test
                    </button>
                  </div>

                  {/* Metrics Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                    <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Total Feedback</p>
                          <p className="text-2xl font-bold text-gray-900 dark:text-white">12,458</p>
                          <p className="text-sm text-green-600">+18% from last month</p>
                        </div>
                        <MessageSquare className="w-8 h-8 text-blue-600" />
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Active Sessions</p>
                          <p className="text-2xl font-bold text-gray-900 dark:text-white">342</p>
                          <p className="text-sm text-green-600">+12% from yesterday</p>
                        </div>
                        <Users className="w-8 h-8 text-green-600" />
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Conversion Rate</p>
                          <p className="text-2xl font-bold text-gray-900 dark:text-white">73.2%</p>
                          <p className="text-sm text-green-600">+5.4% from last week</p>
                        </div>
                        <TrendingUp className="w-8 h-8 text-purple-600" />
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Avg. Session Time</p>
                          <p className="text-2xl font-bold text-gray-900 dark:text-white">4m 32s</p>
                          <p className="text-sm text-red-600">-2% from last week</p>
                        </div>
                        <Clock className="w-8 h-8 text-orange-600" />
                      </div>
                    </div>
                  </div>

                  {/* Chart Placeholder */}
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">AI Insights</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-sm text-gray-700 dark:text-gray-300">AI-powered insights coming soon...</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-sm text-gray-700 dark:text-gray-300">Real-time user behavior analysis</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm text-gray-700 dark:text-gray-300">Predictive UX recommendations</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Coming soon: Everything you need for
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                world-class UX research
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              We're building the most advanced UX research platform. Here's what's coming in our alpha and beta releases.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isActive = activeFeature === index;
              
              return (
                <div 
                  key={index}
                  className={`relative p-8 rounded-2xl border transition-all duration-500 hover:shadow-xl ${
                    isActive 
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 shadow-lg transform scale-105' 
                      : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                  }`}
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Additional Features Grid */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Monitor className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Multi-Device Testing</h3>
              <p className="text-gray-600 dark:text-gray-400">Test across desktop, mobile, and tablet devices with seamless switching.</p>
            </div>
            
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Global Panel</h3>
              <p className="text-gray-600 dark:text-gray-400">Access 50,000+ pre-screened participants from around the world.</p>
            </div>
            
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Enterprise Security</h3>
              <p className="text-gray-600 dark:text-gray-400">SOC 2 compliant with enterprise-grade security and privacy controls.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="roadmap" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Development Roadmap
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Here's what we're building and when you can expect it
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Alpha Phase</h3>
                  <p className="text-blue-600 dark:text-blue-400 text-sm font-medium">Current - Q1 2025</p>
                </div>
              </div>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  Core dashboard & analytics
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  Basic user testing tools
                </li>
                <li className="flex items-center">
                  <Clock className="w-4 h-4 text-gray-400 mr-2 flex-shrink-0" />
                  AI insights foundation
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl flex items-center justify-center mr-4">
                  <Video className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Beta Phase</h3>
                  <p className="text-green-600 dark:text-green-400 text-sm font-medium">Q2 2025</p>
                </div>
              </div>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-center">
                  <Clock className="w-4 h-4 text-gray-400 mr-2 flex-shrink-0" />
                  Live user session recording
                </li>
                <li className="flex items-center">
                  <Clock className="w-4 h-4 text-gray-400 mr-2 flex-shrink-0" />
                  Advanced AI recommendations
                </li>
                <li className="flex items-center">
                  <Clock className="w-4 h-4 text-gray-400 mr-2 flex-shrink-0" />
                  Third-party integrations
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mr-4">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Full Launch</h3>
                  <p className="text-purple-600 dark:text-purple-400 text-sm font-medium">Q3 2025</p>
                </div>
              </div>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-center">
                  <Clock className="w-4 h-4 text-gray-400 mr-2 flex-shrink-0" />
                  Global participant panel
                </li>
                <li className="flex items-center">
                  <Clock className="w-4 h-4 text-gray-400 mr-2 flex-shrink-0" />
                  Enterprise features
                </li>
                <li className="flex items-center">
                  <Clock className="w-4 h-4 text-gray-400 mr-2 flex-shrink-0" />
                  Mobile app & API
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist CTA Section */}
      <section id="waitlist" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Be the first to experience the future
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join our exclusive waitlist and get early access to UXGenie when we launch our beta.
            </p>
            
            {!isSubmitted ? (
              <form onSubmit={handleWaitlistSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-6 py-4 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50"
                    required
                  />
                  <button
                    type="submit"
                    className="px-8 py-4 bg-white text-blue-600 text-lg font-semibold rounded-xl hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
                  >
                    Join Waitlist
                  </button>
                </div>
              </form>
            ) : (
              <div className="max-w-md mx-auto p-6 bg-white/10 rounded-xl border border-white/20">
                <CheckCircle className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold mb-2">Welcome to the waitlist!</h3>
                <p className="opacity-90">We'll keep you updated on our progress and notify you when beta access is available.</p>
              </div>
            )}
            
            <div className="flex items-center justify-center space-x-8 mt-8 text-sm opacity-75">
              <div className="flex items-center">
                <Award className="w-4 h-4 mr-2" />
                Early access
              </div>
              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-2" />
                Special pricing
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-2" />
                Shape the product
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Early Access Benefits */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Why join the waitlist?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Early supporters get exclusive benefits and help shape the future of UX research
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Early Access</h3>
              <p className="text-gray-600 dark:text-gray-400">Be among the first to use UXGenie when we launch our beta version.</p>
            </div>
            
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Special Pricing</h3>
              <p className="text-gray-600 dark:text-gray-400">Lock in exclusive early-bird pricing with significant discounts.</p>
            </div>
            
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Shape the Product</h3>
              <p className="text-gray-600 dark:text-gray-400">Your feedback will directly influence features and development priorities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Removed old testimonials section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to revolutionize UX research?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join the waitlist today and be part of the future of user experience research.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button 
                onClick={() => !isSubmitted && document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-white text-blue-600 text-lg font-semibold rounded-xl hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
              >
                Join Waitlist
              </button>
              <button className="px-8 py-4 border-2 border-white text-white text-lg font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-all">
                Learn More
              </button>
            </div>
            
            <div className="flex items-center justify-center space-x-8 mt-8 text-sm opacity-75">
              <div className="flex items-center">
                <Award className="w-4 h-4 mr-2" />
                Alpha access
              </div>
              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-2" />
                No commitment
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2" />
                Updates included
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">UXGenie</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                The modern UX research platform powered by AI. Transform insights into better products.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400">
              © 2025 UXGenie. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};