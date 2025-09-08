import cyberpunkBg from "@/assets/cyberpunk-bg.jpg";

const About = () => {
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
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold neon-text glitch mb-4" data-text="INTEL_BRIEFING">
              INTEL_BRIEFING
            </h1>
            <p className="text-xl font-mono text-primary/70">
              {">"} Mission parameters and operational guidelines
            </p>
          </div>

          {/* Main Content */}
          <div className="space-y-8">
            {/* Event Info */}
            <div className="cyber-card p-8">
              <h2 className="text-2xl font-bold neon-text mb-6 font-mono">
                [EVENT_DETAILS]
              </h2>
              <div className="space-y-4 font-mono text-primary/80 leading-relaxed">
                <p>
                  Welcome to <span className="text-neon-green font-bold">CyberHack CTF 2024</span>, 
                  the premier cybersecurity competition where elite hackers test their skills 
                  against cutting-edge challenges.
                </p>
                <p>
                  This Capture The Flag (CTF) event features multiple categories including 
                  Web Exploitation, Reverse Engineering, Cryptography, Forensics, and Binary Exploitation.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-cyber-darker/50 p-4 rounded border border-primary/20">
                    <h4 className="text-neon-green font-bold mb-2">Event Duration:</h4>
                    <p>48 hours of intense hacking</p>
                  </div>
                  <div className="bg-cyber-darker/50 p-4 rounded border border-primary/20">
                    <h4 className="text-neon-green font-bold mb-2">Prize Pool:</h4>
                    <p>$50,000 in total rewards</p>
                  </div>
                  <div className="bg-cyber-darker/50 p-4 rounded border border-primary/20">
                    <h4 className="text-neon-green font-bold mb-2">Participants:</h4>
                    <p>500+ teams worldwide</p>
                  </div>
                  <div className="bg-cyber-darker/50 p-4 rounded border border-primary/20">
                    <h4 className="text-neon-green font-bold mb-2">Format:</h4>
                    <p>Jeopardy-style online CTF</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Rules */}
            <div className="cyber-card p-8">
              <h2 className="text-2xl font-bold neon-text mb-6 font-mono">
                [RULES_OF_ENGAGEMENT]
              </h2>
              <div className="space-y-4 font-mono text-primary/80 leading-relaxed">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <span className="text-neon-green font-bold">01.</span>
                    <p>Teams may consist of 1-4 members maximum.</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-neon-green font-bold">02.</span>
                    <p>No sharing of flags or solutions between teams.</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-neon-green font-bold">03.</span>
                    <p>Attacking CTF infrastructure or other teams is prohibited.</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-neon-green font-bold">04.</span>
                    <p>Automated tools are allowed, but no excessive brute forcing.</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-neon-green font-bold">05.</span>
                    <p>Flag format: <code className="bg-cyber-darker px-2 py-1 rounded text-neon-green">flag{'{...}'}</code></p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-neon-green font-bold">06.</span>
                    <p>Respect the platform and other participants at all times.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Categories */}
            <div className="cyber-card p-8">
              <h2 className="text-2xl font-bold neon-text mb-6 font-mono">
                [CHALLENGE_CATEGORIES]
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-cyber-darker/50 p-4 rounded border border-neon-green/20">
                    <h4 className="text-neon-green font-bold mb-2">Web Exploitation</h4>
                    <p className="text-sm text-primary/70">SQL injection, XSS, authentication bypass, and more web vulnerabilities.</p>
                  </div>
                  <div className="bg-cyber-darker/50 p-4 rounded border border-glitch-pink/20">
                    <h4 className="text-glitch-pink font-bold mb-2">Reverse Engineering</h4>
                    <p className="text-sm text-primary/70">Disassemble binaries, analyze malware, and understand program logic.</p>
                  </div>
                  <div className="bg-cyber-darker/50 p-4 rounded border border-blue-400/20">
                    <h4 className="text-blue-300 font-bold mb-2">Cryptography</h4>
                    <p className="text-sm text-primary/70">Break ciphers, analyze encryption schemes, and solve crypto puzzles.</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-cyber-darker/50 p-4 rounded border border-red-400/20">
                    <h4 className="text-red-300 font-bold mb-2">Binary Exploitation</h4>
                    <p className="text-sm text-primary/70">Buffer overflows, ROP chains, and memory corruption vulnerabilities.</p>
                  </div>
                  <div className="bg-cyber-darker/50 p-4 rounded border border-purple-400/20">
                    <h4 className="text-purple-300 font-bold mb-2">Digital Forensics</h4>
                    <p className="text-sm text-primary/70">Analyze network traffic, memory dumps, and digital evidence.</p>
                  </div>
                  <div className="bg-cyber-darker/50 p-4 rounded border border-yellow-400/20">
                    <h4 className="text-yellow-300 font-bold mb-2">Miscellaneous</h4>
                    <p className="text-sm text-primary/70">OSINT, steganography, and other creative challenges.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Organizers */}
            <div className="cyber-card p-8">
              <h2 className="text-2xl font-bold neon-text mb-6 font-mono">
                [MISSION_CONTROL]
              </h2>
              <div className="space-y-6 font-mono text-primary/80">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-neon-green mb-4">CyberSec Academy</h3>
                  <p className="leading-relaxed">
                    Organized by the elite cybersecurity training institute with over a decade 
                    of experience in ethical hacking education and competitive cyber warfare.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center">
                    <h4 className="text-neon-green font-bold mb-2">Contact</h4>
                    <p className="text-sm">admin@cybersec-academy.org</p>
                  </div>
                  <div className="text-center">
                    <h4 className="text-neon-green font-bold mb-2">Support</h4>
                    <p className="text-sm">Discord: CyberHackCTF</p>
                  </div>
                  <div className="text-center">
                    <h4 className="text-neon-green font-bold mb-2">Updates</h4>
                    <p className="text-sm">@CyberHackCTF</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-12 p-6 bg-primary/5 border border-primary/20 rounded">
            <p className="text-sm font-mono text-primary/50">
              [CLASSIFIED] This briefing is for authorized personnel only. 
              Unauthorized access will result in immediate disqualification.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;