import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import cyberpunkBg from "@/assets/cyberpunk-bg.jpg";

const Index = () => {
  return (
    <div 
      className="min-h-screen relative overflow-hidden"
      style={{
        backgroundImage: `url(${cyberpunkBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-cyber-darker/80"></div>
      
      {/* Navigation */}
      <nav className="relative z-10 p-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold neon-text glitch" data-text="[CTF_HUB]">
            [CTF_HUB]
          </div>
          <div className="space-x-4">
            <Link to="/login" className="cyber-btn py-2 px-4">
              Login
            </Link>
            <Link to="/register" className="cyber-btn py-2 px-4">
              Register
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="text-center animate-fade-in">
          <h1 className="text-7xl md:text-8xl font-bold neon-text glitch mb-8 leading-tight" data-text="CAPTURE">
            CAPTURE
          </h1>
          <h1 className="text-7xl md:text-8xl font-bold neon-text glitch mb-8 leading-tight" data-text="THE FLAG">
            THE FLAG
          </h1>
          
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-xl md:text-2xl font-mono text-primary/80 mb-6 animate-neon-pulse">
              {">"} Enter the matrix of cybersecurity challenges
            </p>
            <p className="text-lg font-mono text-primary/60 leading-relaxed">
              Test your hacking skills against elite challenges in web exploitation, 
              cryptography, reverse engineering, and binary exploitation. 
              Compete with hackers worldwide for glory and prizes.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-16">
            <Link to="/register" className="cyber-btn text-lg py-4 px-8">
              [JOIN_THE_MATRIX]
            </Link>
            <Link to="/scoreboard" className="cyber-btn text-lg py-4 px-8">
              [VIEW_RANKINGS]
            </Link>
            <Link to="/about" className="cyber-btn text-lg py-4 px-8">
              [MISSION_BRIEF]
            </Link>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto animate-slide-in">
          <div className="cyber-card p-6 text-center">
            <div className="text-3xl font-bold neon-text mb-2">500+</div>
            <div className="text-primary/60 font-mono uppercase text-sm">Active Teams</div>
          </div>
          <div className="cyber-card p-6 text-center">
            <div className="text-3xl font-bold neon-text mb-2">48H</div>
            <div className="text-primary/60 font-mono uppercase text-sm">Competition</div>
          </div>
          <div className="cyber-card p-6 text-center">
            <div className="text-3xl font-bold neon-text mb-2">$50K</div>
            <div className="text-primary/60 font-mono uppercase text-sm">Prize Pool</div>
          </div>
          <div className="cyber-card p-6 text-center">
            <div className="text-3xl font-bold neon-text mb-2">24/7</div>
            <div className="text-primary/60 font-mono uppercase text-sm">Live Support</div>
          </div>
        </div>
      </div>

      {/* Terminal Window */}
      <div className="relative z-10 container mx-auto px-6 pb-20">
        <div className="max-w-3xl mx-auto cyber-card p-6">
          <div className="bg-cyber-darker p-6 rounded font-mono text-sm">
            <div className="flex items-center mb-4">
              <div className="flex space-x-2 mr-4">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-neon-green rounded-full"></div>
              </div>
              <span className="text-primary/50">root@ctf-hub:~</span>
            </div>
            <div className="space-y-2">
              <div className="text-neon-green">
                root@ctf-hub:~$ ./start_ctf.sh
              </div>
              <div className="text-primary/70">
                [INFO] Initializing CTF environment...
              </div>
              <div className="text-primary/70">
                [OK] Challenges loaded successfully
              </div>
              <div className="text-primary/70">
                [OK] Scoreboard online
              </div>
              <div className="text-neon-green">
                [READY] System ready for hacking
              </div>
              <div className="text-neon-green animate-pulse">
                root@ctf-hub:~$ <span className="cursor">_</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
