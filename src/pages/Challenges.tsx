import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import cyberpunkBg from "@/assets/cyberpunk-bg.jpg";

interface Challenge {
  id: number;
  title: string;
  category: string;
  points: number;
  description: string;
  flag: string;
  solved?: boolean;
}

const Challenges = () => {
  const [challenges] = useState<Challenge[]>([
    {
      id: 1,
      title: "Reverse Engineering 101",
      category: "Reverse",
      points: 100,
      flag: "flag{reverse_easy}",
      description: "Disassemble the binary and find the flag hidden in the code.",
      solved: false
    },
    {
      id: 2,
      title: "SQL Injection Basic",
      category: "Web",
      points: 150,
      flag: "flag{sql_injection_basic}",
      description: "Exploit the login form to bypass authentication and access admin panel.",
      solved: true
    },
    {
      id: 3,
      title: "Buffer Overflow Basics",
      category: "Pwn",
      points: 200,
      flag: "flag{buffer_overflow_pwn}",
      description: "Overflow the buffer to control program execution and spawn a shell.",
      solved: false
    },
    {
      id: 4,
      title: "RSA Crypto Challenge",
      category: "Crypto",
      points: 300,
      flag: "flag{rsa_factorization}",
      description: "Factor the RSA modulus to decrypt the message and reveal the flag.",
      solved: false
    },
    {
      id: 5,
      title: "Network Forensics",
      category: "Forensics",
      points: 250,
      flag: "flag{network_analysis}",
      description: "Analyze the PCAP file to find suspicious network traffic and extract the flag.",
      solved: false
    },
    {
      id: 6,
      title: "XSS Playground",
      category: "Web",
      points: 175,
      flag: "flag{xss_payload}",
      description: "Craft an XSS payload to steal admin cookies and retrieve the flag.",
      solved: true
    }
  ]);

  const [flagInputs, setFlagInputs] = useState<Record<number, string>>({});

  const handleFlagSubmit = (challengeId: number, flag: string) => {
    const challenge = challenges.find(c => c.id === challengeId);
    if (challenge && flag === challenge.flag) {
      alert(`Correct! You earned ${challenge.points} points!`);
      // TODO: Update challenge solved status and user score
    } else {
      alert("Incorrect flag. Try again!");
    }
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      Web: "bg-neon-green/20 text-neon-green border-neon-green",
      Reverse: "bg-glitch-pink/20 text-glitch-pink border-glitch-pink",
      Pwn: "bg-red-500/20 text-red-400 border-red-400",
      Crypto: "bg-blue-400/20 text-blue-300 border-blue-300",
      Forensics: "bg-purple-400/20 text-purple-300 border-purple-300"
    };
    return colors[category as keyof typeof colors] || "bg-primary/20 text-primary border-primary";
  };

  return (
    <div 
      className="min-h-screen pt-20 relative"
      style={{
        backgroundImage: `url(${cyberpunkBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-cyber-darker/85"></div>
      
      <div className="relative z-10 container mx-auto px-6 py-8">
        <div className="animate-fade-in">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold neon-text glitch mb-4" data-text="CHALLENGE_MATRIX">
              CHALLENGE_MATRIX
            </h1>
            <p className="text-xl font-mono text-primary/70">
              {">"} Exploit vulnerabilities, capture flags, gain points
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="cyber-card p-6 text-center">
              <div className="text-2xl font-bold neon-text mb-2">
                {challenges.filter(c => c.solved).length}/{challenges.length}
              </div>
              <div className="text-primary/60 font-mono uppercase tracking-wider">
                Challenges Solved
              </div>
            </div>
            <div className="cyber-card p-6 text-center">
              <div className="text-2xl font-bold neon-text mb-2">
                {challenges.filter(c => c.solved).reduce((sum, c) => sum + c.points, 0)}
              </div>
              <div className="text-primary/60 font-mono uppercase tracking-wider">
                Total Points
              </div>
            </div>
            <div className="cyber-card p-6 text-center">
              <div className="text-2xl font-bold neon-text mb-2">
                {new Set(challenges.map(c => c.category)).size}
              </div>
              <div className="text-primary/60 font-mono uppercase tracking-wider">
                Categories
              </div>
            </div>
          </div>

          {/* Challenges Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {challenges.map((challenge) => (
              <div
                key={challenge.id}
                className={`cyber-card p-6 transition-all duration-300 ${
                  challenge.solved ? 'bg-neon-green/5 border-neon-green/40' : ''
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold neon-text font-mono">
                    {challenge.title}
                  </h3>
                  {challenge.solved && (
                    <div className="text-neon-green text-xl">✓</div>
                  )}
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <Badge className={`font-mono text-xs ${getCategoryColor(challenge.category)}`}>
                    {challenge.category}
                  </Badge>
                  <span className="text-neon-green font-mono font-bold">
                    {challenge.points} pts
                  </span>
                </div>

                <p className="text-primary/70 font-mono text-sm mb-6 leading-relaxed">
                  {challenge.description}
                </p>

                <div className="space-y-3">
                  <Input
                    type="text"
                    placeholder="flag{enter_flag_here}"
                    value={flagInputs[challenge.id] || ""}
                    onChange={(e) => 
                      setFlagInputs(prev => ({
                        ...prev,
                        [challenge.id]: e.target.value
                      }))
                    }
                    className="cyber-input font-mono"
                    disabled={challenge.solved}
                  />
                  
                  <Button
                    onClick={() => handleFlagSubmit(challenge.id, flagInputs[challenge.id] || "")}
                    disabled={challenge.solved}
                    className={`cyber-btn w-full ${
                      challenge.solved ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    {challenge.solved ? '[SOLVED]' : '[SUBMIT_FLAG]'}
                  </Button>
                </div>

                {challenge.solved && (
                  <div className="mt-4 p-3 bg-neon-green/10 border border-neon-green/30 rounded">
                    <p className="text-xs font-mono text-neon-green">
                      [SUCCESS] Challenge completed successfully!
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Challenges;