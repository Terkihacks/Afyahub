// import React from "react";

// interface TeamCardProps {
//   team_name: string;
//   team_lead: string;
//   department: string;
//   created_at: string;
// }

// const TeamCard: React.FC<TeamCardProps> = ({ team_name, team_lead, department, created_at }) => {
//   return (
//     <div className="bg-white shadow-lg rounded-2xl p-6 transition duration-300 hover:shadow-xl hover:scale-105">
//       <h2 className="text-2xl font-semibold text-gray-800 mb-2">{team_name}</h2>
//       <p className="text-gray-600 text-sm mb-4">
//         Department: <span className="font-medium text-gray-900">{department}</span>
//       </p>
//       <p className="text-gray-600 text-sm">
//         Team Lead: <span className="font-medium text-blue-600">{team_lead}</span>
//       </p>
//       <p className="text-gray-500 text-xs mt-3">Created on: {new Date(created_at).toLocaleDateString()}</p>
//     </div>
//   );
// };

// export default function TeamComponent() {
//   const teams = [
//     {
//       team_name: "Innovation Squad",
//       team_lead: "John Doe",
//       department: "Research & Development",
//       created_at: "2024-01-15T12:00:00Z",
//     },
//     {
//       team_name: "Tech Warriors",
//       team_lead: "Jane Smith",
//       department: "Engineering",
//       created_at: "2023-11-05T14:30:00Z",
//     },
//     {
//         team_name: "Tech Warriors",
//         team_lead: "Jane Smith",
//         department: "Engineering",
//         created_at: "2023-11-05T14:30:00Z",
//       },
//       {
//         team_name: "Tech Warriors",
//         team_lead: "Jane Smith",
//         department: "Engineering",
//         created_at: "2023-11-05T14:30:00Z",
//       },

//   ];

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
//       {teams.map((team, index) => (
//         <TeamCard key={index} {...team} />
//       ))}
//     </div>
//   );
// }

import { useEffect } from 'react';
import { useTeams } from '../hooks/useTeam';

interface TeamCardProps {
  id: number;
  team_name: string;
  team_lead: number;
  department: string;
  created_at: string;
  onDelete: (id: number) => void;
}

const TeamCard: React.FC<TeamCardProps> = ({ 
//   id, 
  team_name, 
  team_lead, 
  department, 
  created_at,
//   onDelete 
}) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 transition duration-300 hover:shadow-xl hover:scale-105">
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">{team_name}</h2>
      <p className="text-gray-600 text-sm mb-4">
        Department: <span className="font-medium text-gray-900">{department}</span>
      </p>
      <p className="text-gray-600 text-sm">
        Team Lead ID: <span className="font-medium text-blue-600">{team_lead}</span>
      </p>
      <p className="text-gray-500 text-xs mt-3">
        Created on: {new Date(created_at).toLocaleDateString()}
      </p>
      {/* <button 
        onClick={() => onDelete(id)}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
      >
        Delete Team
      </button> */}
    </div>
  );
};

export default function TeamComponent() {
  const { 
    teams, 
    loading, 
    error, 
    fetchTeams, 
    deleteTeam 
  } = useTeams();

  useEffect(() => {
    fetchTeams();
  }, [fetchTeams]);

  if (loading) return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
    </div>
  );

  if (error) return (
    <div className="text-center text-red-500 p-4">
      Error: {error}
    </div>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {teams.map((team) => (
        <TeamCard 
          key={team.id} 
          {...team} 
          onDelete={deleteTeam}
        />
      ))}
    </div>
  );
}