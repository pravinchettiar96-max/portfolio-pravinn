'use client';

export default function Services() {
  const services = [
    {
      icon: "💻",
      title: "Web Development",
      description: "Building responsive and modern websites using React, Next.js, and latest web technologies.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: "🎨",
      title: "UI/UX Design",
      description: "Creating beautiful and intuitive user interfaces with focus on user experience and accessibility.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: "📱",
      title: "Responsive Design",
      description: "Ensuring your website looks perfect on all devices from mobile phones to desktop computers.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: "⚡",
      title: "Performance Optimization",
      description: "Optimizing websites for speed and performance to provide the best user experience.",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: "🛒",
      title: "E-Commerce Solutions",
      description: "Developing full-featured online stores with secure payment integration and inventory management.",
      gradient: "from-red-500 to-pink-500"
    },
    {
      icon: "🔧",
      title: "Maintenance & Support",
      description: "Providing ongoing maintenance, updates, and technical support for your web applications.",
      gradient: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-blue-500 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="section-title">SERVICES</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card-enhanced group relative"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Gradient background with color theme */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-15 transition-opacity duration-300 rounded-xl blur-sm`} />
              
              {/* Animated border with glow */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-500/60 rounded-xl transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.4)]"></div>
              
              {/* Service badge effect */}
              <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center shadow-lg group-hover:scale-110">
                <span className="text-white text-xl">★</span>
              </div>
              
              <div className="relative bg-gray-800 rounded-xl p-8 h-full transform group-hover:-translate-y-3 group-hover:scale-[1.03] transition-all duration-300 shadow-lg group-hover:shadow-xl group-hover:shadow-purple-500/40 will-change-transform">
                {/* Icon with glow effect */}
                <div className="relative mb-4">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-full blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-300`}></div>
                  <div className="text-6xl transform group-hover:scale-110 transition-transform duration-300 inline-block relative z-10 filter group-hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.6)]">
                    {service.icon}
                  </div>
                </div>
                
                {/* Title with gradient animation */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:via-pink-400 group-hover:to-purple-400 transition-all duration-300">
                  {service.title}
                </h3>
                
                {/* Description with better contrast */}
                <p className="text-gray-400 group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Animated progress bar */}
                <div className="mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-full transition-all duration-500"></div>
                
                {/* Corner decorations */}
                <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-purple-500/0 group-hover:border-purple-500/50 rounded-bl-xl transition-all duration-300"></div>
                <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-pink-500/0 group-hover:border-pink-500/50 rounded-tr-xl transition-all duration-300"></div>
                
                {/* Floating particles effect */}
                <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-float transition-opacity duration-300" style={{transform: 'translate(-20px, -20px)'}}></div>
                <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-float transition-opacity duration-300" style={{transform: 'translate(20px, 20px)', animationDelay: '0.5s'}}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
