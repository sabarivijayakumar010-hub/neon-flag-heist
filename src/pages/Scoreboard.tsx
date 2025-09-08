import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import cyberpunkBg from "@/assets/cyberpunk-bg.jpg";

interface Team {
  rank: number;
  teamName: string;
  score: number;
  lastSubmission: string;
  solvedChallenges: number;
}

const Scoreboard = () => {
  const [teams, setTeams] = useState<Team[]>([
    {
      rank: 1,
      teamName: "HackTheMatrix",
      score: 2150,
      lastSubmission: "2:45:33 PM",
      solvedChallenges: 8
    },
    {
      rank: 2,
      teamName: "CyberSpartans",
      score: 1875,
      lastSubmission: "2:23:17 PM",
      solvedChallenges: 7
    },
    {
      rank: 3,
      teamName: "CyberNinjas",
      score: 1250,
      lastSubmission: "1:19:20 PM",
      solvedChallenges: 5
    },
    {
      rank: 4,
      teamName: "NullPointers",
      score: 950,
      lastSubmission: "12:55:42 PM",
      solvedChallenges: 4
    },
    {
      rank: 5,
      teamName: "BinaryBandits",
      score: 825,
      lastSubmission: "11:32:18 AM",
      solvedChallenges: 3
    },
    {
      rank: 6,
      teamName: "RootAccess",
      score: 675,
      lastSubmission: "10:15:55 AM",
      solvedChallenges: 3
    },
    {
      rank: 7,
      teamName: "ScriptKiddies",
      score: 450,
      lastSubmission: "9:42:31 AM",
      solvedChallenges: 2
    },
    {
      rank: 8,
      teamName: "ByteBusters",
      score: 300,
      lastSubmission: "8:28:14 AM",
      solvedChallenges: 1
    }
  ]);

  const [lastUpdate, setLastUpdate] = useState(new Date());

  useEffect(() => {
    // Simulate live updates every 30 seconds
    const interval = setInterval(() => {
      setLastUpdate(new Date());
      // TODO: Fetch real-time data from backend
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const getRankBadgeColor = (rank: number) => {
    switch (rank) {
      case 1:
        return "bg-yellow-400/20 text-yellow-300 border-yellow-300";
      case 2:
        return "bg-gray-300/20 text-gray-300 border-gray-300";
      case 3:
        return "bg-orange-400/20 text-orange-300 border-orange-300";
      default:
        return "bg-primary/20 text-primary border-primary";
    }
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
            <h1 className="text-5xl font-bold neon-text glitch mb-4" data-text="LEADERBOARD">
              LEADERBOARD
            </h1>
            <p className="text-xl font-mono text-primary/70 mb-4">
              {">"} Live competition rankings
            </p>
            <div className="text-sm font-mono text-primary/50">
              Last updated: {lastUpdate.toLocaleString()}
              <span className="animate-pulse ml-2 text-neon-green">●</span>
            </div>
          </div>

          {/* Top 3 Podium */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {teams.slice(0, 3).map((team, index) => {
              const positions = [1, 0, 2]; // 2nd, 1st, 3rd positions
              const heights = ["h-32", "h-40", "h-28"];
              const actualIndex = positions[index];
              const actualTeam = teams[actualIndex];
              
              return (
                <div
                  key={actualTeam.rank}
                  className={`cyber-card p-6 text-center ${heights[index]} flex flex-col justify-end relative overflow-hidden`}
                >
                  <div className="absolute top-4 left-4">
                    <Badge className={`font-mono text-lg ${getRankBadgeColor(actualTeam.rank)}`}>
                      #{actualTeam.rank}
                    </Badge>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold neon-text font-mono mb-2">
                      {actualTeam.teamName}
                    </h3>
                    <div className="text-2xl font-bold text-neon-green mb-1">
                      {actualTeam.score.toLocaleString()}
                    </div>
                    <div className="text-sm font-mono text-primary/60">
                      {actualTeam.solvedChallenges} challenges
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Full Scoreboard Table */}
          <div className="cyber-card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full font-mono">
                <thead>
                  <tr className="border-b border-primary/20 bg-primary/5">
                    <th className="text-left p-4 text-neon-green">RANK</th>
                    <th className="text-left p-4 text-neon-green">TEAM_NAME</th>
                    <th className="text-left p-4 text-neon-green">SCORE</th>
                    <th className="text-left p-4 text-neon-green">SOLVED</th>
                    <th className="text-left p-4 text-neon-green">LAST_SUBMISSION</th>
                  </tr>
                </thead>
                <tbody>
                  {teams.map((team, index) => (
                    <tr
                      key={team.teamName}
                      className={`border-b border-primary/10 hover:bg-primary/5 transition-colors ${
                        index < 3 ? 'bg-neon-green/5' : ''
                      }`}
                    >
                      <td className="p-4">
                        <Badge className={`font-mono ${getRankBadgeColor(team.rank)}`}>
                          #{team.rank}
                        </Badge>
                      </td>
                      <td className="p-4">
                        <div className="font-bold text-primary">
                          {team.teamName}
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="text-neon-green font-bold text-lg">
                          {team.score.toLocaleString()}
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="text-primary/70">
                          {team.solvedChallenges}
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="text-primary/70 text-sm">
                          {team.lastSubmission}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Stats Footer */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="cyber-card p-6 text-center">
              <div className="text-2xl font-bold neon-text mb-2">
                {teams.length}
              </div>
              <div className="text-primary/60 font-mono uppercase tracking-wider">
                Active Teams
              </div>
            </div>
            <div className="cyber-card p-6 text-center">
              <div className="text-2xl font-bold neon-text mb-2">
                {teams.reduce((sum, t) => sum + t.solvedChallenges, 0)}
              </div>
              <div className="text-primary/60 font-mono uppercase tracking-wider">
                Total Solves
              </div>
            </div>
            <div className="cyber-card p-6 text-center">
              <div className="text-2xl font-bold neon-text mb-2">
                {Math.max(...teams.map(t => t.score)).toLocaleString()}
              </div>
              <div className="text-primary/60 font-mono uppercase tracking-wider">
                High Score
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scoreboard;