import { useState, useEffect } from "react";
import cyberpunkBg from "@/assets/cyberpunk-bg.jpg";

const Dashboard = () => {
  // Mock user data - replace with actual auth state
  const [userStats] = useState({
    teamName: "CyberNinjas",
    score: 1250,
    rank: 3,
    lastSubmission: "1:19:20 PM"
  });

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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
          {/* Welcome Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold neon-text glitch mb-4" data-text="MISSION_CONTROL">
              MISSION_CONTROL
            </h1>
            <p className="text-2xl font-mono text-primary/80 animate-neon-pulse">
              Hey {userStats.teamName}, cracking the code and owning the leaderboard!
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="cyber-card p-6 text-center">
              <div className="text-3xl font-bold neon-text mb-2">
                {userStats.teamName}
              </div>
              <div className="text-primary/60 font-mono uppercase tracking-wider">
                Team Name
              </div>
            </div>

            <div className="cyber-card p-6 text-center">
              <div className="text-3xl font-bold neon-text mb-2">
                {userStats.score.toLocaleString()}
              </div>
              <div className="text-primary/60 font-mono uppercase tracking-wider">
                Total Score
              </div>
            </div>

            <div className="cyber-card p-6 text-center">
              <div className="text-3xl font-bold neon-text mb-2">
                #{userStats.rank}
              </div>
              <div className="text-primary/60 font-mono uppercase tracking-wider">
                Current Rank
              </div>
            </div>

            <div className="cyber-card p-6 text-center">
              <div className="text-3xl font-bold neon-text mb-2">
                {userStats.lastSubmission}
              </div>
              <div className="text-primary/60 font-mono uppercase tracking-wider">
                Last Submission
              </div>
            </div>
          </div>

          {/* System Status */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Terminal */}
            <div className="cyber-card p-6">
              <h3 className="text-xl font-bold neon-text mb-4 font-mono">
                [SYSTEM_TERMINAL]
              </h3>
              <div className="bg-cyber-darker p-4 rounded font-mono text-sm space-y-2">
                <div className="text-neon-green">
                  root@ctf-hub:~$ whoami
                </div>
                <div className="text-primary/70">
                  {userStats.teamName.toLowerCase()}
                </div>
                <div className="text-neon-green">
                  root@ctf-hub:~$ uptime
                </div>
                <div className="text-primary/70">
                  System online: {currentTime.toLocaleTimeString()}
                </div>
                <div className="text-neon-green">
                  root@ctf-hub:~$ status
                </div>
                <div className="text-primary/70">
                  [OK] All systems operational
                </div>
                <div className="text-neon-green animate-pulse">
                  root@ctf-hub:~$ <span className="cursor">_</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="cyber-card p-6">
              <h3 className="text-xl font-bold neon-text mb-4 font-mono">
                [QUICK_ACCESS]
              </h3>
              <div className="space-y-4">
                <a href="/challenges" className="cyber-btn block text-center py-3">
                  View Challenges
                </a>
                <a href="/scoreboard" className="cyber-btn block text-center py-3">
                  Check Scoreboard
                </a>
                <button className="cyber-btn block w-full text-center py-3">
                  Download Tools
                </button>
                <button className="cyber-btn block w-full text-center py-3">
                  Submit Flag
                </button>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="mt-8">
            <div className="cyber-card p-6">
              <h3 className="text-xl font-bold neon-text mb-4 font-mono">
                [RECENT_ACTIVITY]
              </h3>
              <div className="space-y-3 font-mono text-sm">
                <div className="flex justify-between items-center p-3 bg-cyber-darker/50 rounded">
                  <span className="text-primary/70">Flag submitted for "SQL Injection 101"</span>
                  <span className="text-neon-green">+150 pts</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-cyber-darker/50 rounded">
                  <span className="text-primary/70">Attempted "Buffer Overflow Basics"</span>
                  <span className="text-red-400">Failed</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-cyber-darker/50 rounded">
                  <span className="text-primary/70">Flag submitted for "XSS Challenge"</span>
                  <span className="text-neon-green">+200 pts</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;