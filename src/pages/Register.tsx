import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import cyberpunkBg from "@/assets/cyberpunk-bg.jpg";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    teamName: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // TODO: Implement registration logic
    console.log("Registration attempt:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center relative py-16"
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
            <h1 className="text-4xl font-bold neon-text glitch mb-4" data-text="NEW_USER_INIT">
              NEW_USER_INIT
            </h1>
            <p className="text-primary/70 font-mono">
              {">"} Create your hacker profile
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
                placeholder="Choose username..."
                required
              />
            </div>

            <div>
              <label className="block text-sm font-mono text-primary mb-2">
                TEAM_NAME:
              </label>
              <Input
                type="text"
                name="teamName"
                value={formData.teamName}
                onChange={handleChange}
                className="cyber-input w-full py-3"
                placeholder="Enter team name..."
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
                placeholder="Create password..."
                required
              />
            </div>

            <div>
              <label className="block text-sm font-mono text-primary mb-2">
                CONFIRM_PASSWORD:
              </label>
              <Input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="cyber-input w-full py-3"
                placeholder="Confirm password..."
                required
              />
            </div>

            <Button
              type="submit"
              className="cyber-btn w-full py-3"
            >
              [CREATE_PROFILE]
            </Button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-primary/60 font-mono text-sm">
              Already have access? 
              <Link 
                to="/login" 
                className="text-neon-green hover:animate-neon-pulse ml-2 underline"
              >
                Login here
              </Link>
            </p>
          </div>

          <div className="mt-6 p-4 bg-primary/5 border border-primary/20 rounded">
            <p className="text-xs font-mono text-primary/50">
              [INFO] By registering, you agree to follow CTF rules and guidelines.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;