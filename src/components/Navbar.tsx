import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(false); // TODO: Replace with actual auth state

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Dashboard", path: "/dashboard", authRequired: true },
    { name: "Scoreboard", path: "/scoreboard" },
    { name: "Challenges", path: "/challenges", authRequired: true },
    { name: "About", path: "/about" },
  ];

  const handleLogout = () => {
    // TODO: Implement logout logic
    setIsAuthenticated(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cyber-darker/95 border-b border-primary/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold neon-text glitch" data-text="[CTF_HUB]">
            [CTF_HUB]
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              if (item.authRequired && !isAuthenticated) return null;
              
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`font-mono uppercase tracking-wider transition-all duration-300 hover:text-neon-green hover:animate-neon-pulse ${
                    location.pathname === item.path
                      ? "text-neon-green border-b border-neon-green"
                      : "text-primary/70"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
            
            {/* Auth Actions */}
            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="cyber-btn text-sm py-2 px-4"
              >
                Log Out
              </button>
            ) : (
              <div className="flex space-x-4">
                <Link to="/login" className="cyber-btn text-sm py-2 px-4">
                  Login
                </Link>
                <Link to="/register" className="cyber-btn text-sm py-2 px-4">
                  Register
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-neon-green">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;