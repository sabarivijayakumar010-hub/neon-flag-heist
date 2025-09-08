import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import cyberpunkBg from "@/assets/cyberpunk-bg.jpg";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement login logic
    console.log("Login attempt:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center relative"
      style={{
        backgroundImage: `url(${cyberpunkBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-cyber-darker/80"></div>
      
      <div className="relative z-10 w-full max-w-md p-8 animate-fade-in">
        <div className="cyber-card p-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold neon-text glitch mb-4" data-text="ACCESS_TERMINAL">
              ACCESS_TERMINAL
            </h1>
            <p className="text-primary/70 font-mono">
              {">"} Authenticate to enter the CTF arena
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-mono text-primary mb-2">
                USERNAME:
              </label>
              <Input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="cyber-input w-full py-3"
                placeholder="Enter username..."
                required
              />
            </div>

            <div>
              <label className="block text-sm font-mono text-primary mb-2">
                PASSWORD:
              </label>
              <Input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="cyber-input w-full py-3"
                placeholder="Enter password..."
                required
              />
            </div>

            <Button
              type="submit"
              className="cyber-btn w-full py-3"
            >
              [AUTHENTICATE]
            </Button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-primary/60 font-mono text-sm">
              No access credentials? 
              <Link 
                to="/register" 
                className="text-neon-green hover:animate-neon-pulse ml-2 underline"
              >
                Register here
              </Link>
            </p>
          </div>

          <div className="mt-6 p-4 bg-primary/5 border border-primary/20 rounded">
            <p className="text-xs font-mono text-primary/50">
              [WARNING] Unauthorized access attempts will be logged and traced.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;