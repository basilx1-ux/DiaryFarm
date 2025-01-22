import React, { useState } from 'react';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeAll = () => {
    setIsDropdownOpen(false);
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { href: '/', text: 'Home' },
    { href: '/products', text: 'Products' },
    { href: '/about', text: 'About' },
  ];

  return (
    <div>
      <header className="bg-white shadow-lg fixed top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          

          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0 flex items-center space-x-3">
              <span className="text-blue-600 text-2xl">🥛</span>
              <div>
                <h1 className="text-2xl font-bold text-blue-800">FreshFarm</h1>
                <p className="text-sm font-medium text-green-600">Freshness Delivered to Your Doorstep</p>
              </div>
            </div>

            <nav className="hidden md:flex items-center space-x-10">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="flex items-center space-x-2 text-green-600 hover:text-blue-600 transition-colors duration-300"
                >
                  <span className="font-medium">{link.text}</span>
                </a>
              ))}

              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center space-x-2 text-green-600 hover:text-blue-600 transition-colors duration-300"
                >
                  <span className="font-medium">Login</span>
                  <span className="text-sm">{isDropdownOpen ? '▲' : '▼'}</span>
                </button>

                {isDropdownOpen && (
                  <div className="absolute right-0 mt-3 w-48 bg-white rounded-lg shadow-xl py-2 border border-gray-100">
                    {['Customer', 'Staff', 'Admin'].map((userType) => (
                      <a
                        key={userType}
                        href={`/${userType.toLowerCase()}-login`}
                        className="block px-4 py-2.5 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors duration-200"
                        onClick={closeAll}
                      >
                        {userType}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </nav>

            <button
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-green-600 hover:bg-gray-100 transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>

          {isMobileMenuOpen && (
            <div className="md:hidden py-4">
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="flex items-center space-x-2 text-gray-600 hover:text-green-600 px-4 py-2.5 rounded-md transition-colors duration-200"
                    onClick={closeAll}
                  >
                    <span className="font-medium">{link.text}</span>
                  </a>
                ))}

                <div className="border-t border-gray-200 pt-4">
                  {['Customer', 'Staff', 'Admin'].map((userType) => (
                    <a
                      key={userType}
                      href={`/${userType.toLowerCase()}-login`}
                      className="flex items-center space-x-2 text-gray-600 hover:text-green-600 px-4 py-2.5 rounded-md transition-colors duration-200"
                      onClick={closeAll}
                    >
                      <span className="font-medium">{userType} Login</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
{/* New centered div under navbar */}
<div className="w-full bg-blue-50 pt-24">
        <div className="max-w-4xl mx-auto py-12 px-4 text-center">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">Welcome to FreshFarm</h2>
          <p className="text-lg text-gray-600">
            Experience the finest dairy products delivered fresh to your doorstep. 
            We source directly from local farms to ensure quality and freshness.
          </p>
        </div>
      </div>
      <main className="mt-24 p-6 space-y-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[...Array(6)].map((_, idx) => (
            <div key={idx} className="flex flex-col items-center space-y-3 p-4 hover:shadow-lg transition-shadow duration-300 rounded-lg">
              <img
                src={`/api/placeholder/150/150?text=Image+${idx + 1}`}
                alt={`Image ${idx + 1}`}
                className="w-40 h-40 object-cover rounded-lg shadow-md"
              />
              <p className="text-center text-gray-700 font-medium">Text {idx + 1}</p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <p className="text-gray-700 text-lg text-center leading-relaxed">
            This is a placeholder paragraph where you can add any descriptive or informational text.
            Make it engaging and informative for your visitors.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {['Information One', 'Information Two', 'Information Three'].map((text) => (
            <div key={text} className="p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-700">{text}</p>
              <p className="text-gray-600 mt-2">Additional details about {text.toLowerCase()} can be found here. Click to learn more about our services and offerings.</p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto p-6 bg-gray-50 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Product Information</h2>
          <p className="text-gray-700 leading-relaxed">
            Our products are carefully selected to ensure the highest quality and freshness. 
            We work directly with local farmers to bring you the best seasonal produce and 
            dairy products, maintaining strict quality control throughout our supply chain.
          </p>
        </div>

        <footer className="text-center py-6 border-t border-gray-200">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-gray-800">Contact Us</h3>
            <p className="text-gray-600">support@freshfarm.com</p>
            <p className="text-gray-600">9995496038</p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Header;