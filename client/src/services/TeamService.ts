import axios from 'axios';

const API_URL_BASE = 'http://localhost:5500/teams';

interface Team {
  id: number;
  team_name: string;
  team_lead: number;
  department: string;
  created_at: string;
  updated_at: string;
}

// ...existing code...

// Fetch Teams
export const getTeams = async (): Promise<Team[]> => {
  try {
    const response = await axios.get(`${API_URL_BASE}/getTeams`);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching teams:', error);
    throw error;
  }
};

// Fetch Team Members
// export const getTeamMembers = async (): Promise<any> => {
//   try {
//     const response = await axios.get(`${API_URL_BASE}/getTeamMembers`);
//     return response.data.data;
//   } catch (error) {
//     console.error('Error fetching team members:', error);
//     throw error;
//   }
// };

// Fix existing functions
export const createTeam = async (teamData: Partial<Team>) => {
  try {
    const response = await axios.post(`${API_URL_BASE}/createTeam`, teamData);
    return response.data;
  } catch (error) {
    console.error('Error creating team:', error);
    throw error;
  }
};

export const updateTeam = async (id: number, teamData: Partial<Team>) => {
  try {
    const response = await axios.put(`${API_URL_BASE}/update/${id}`, teamData);
    return response.data;
  } catch (error) {
    console.error('Error updating team:', error);
    throw error;
  }
};

export const deleteTeam = async (id: number) => {
  try {
    const response = await axios.delete(`${API_URL_BASE}/delete/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting team:', error);
    throw error;
  }
};