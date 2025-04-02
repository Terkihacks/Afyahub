import { useState, useCallback } from 'react';
import { toast } from 'react-toastify';
import { getTeams, createTeam, updateTeam, deleteTeam } from '../services/TeamService';

interface Team {
  id: number;
  team_name: string;
  team_lead: number;
  department: string;
  created_at: string;
  updated_at: string;
}

export const useTeams = () => {
  const [teams, setTeams] = useState<Team[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchTeams = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getTeams();
      setTeams(data);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch teams';
      setError(errorMessage);
      toast.error('Failed to fetch teams');
    } finally {
      setLoading(false);
    }
  }, []);

  const handleCreateTeam = useCallback(async (teamData: Partial<Team>) => {
    setLoading(true);
    try {
      const response = await createTeam(teamData);
      setTeams(prev => [...prev, response.data]);
      toast.success('Team created successfully');
      return response;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to create team';
      setError(errorMessage);
      toast.error(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const handleUpdateTeam = useCallback(async (id: number, teamData: Partial<Team>) => {
    setLoading(true);
    try {
      const response = await updateTeam(id, teamData);
      setTeams(prev => prev.map(team => 
        team.id === id ? { ...team, ...response.data } : team
      ));
      toast.success('Team updated successfully');
      return response;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to update team';
      setError(errorMessage);
      toast.error(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const handleDeleteTeam = useCallback(async (id: number) => {
    setLoading(true);
    try {
      await deleteTeam(id);
      setTeams(prev => prev.filter(team => team.id !== id));
      toast.success('Team deleted successfully');
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to delete team';
      setError(errorMessage);
      toast.error(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    teams,
    loading,
    error,
    fetchTeams,
    createTeam: handleCreateTeam,
    updateTeam: handleUpdateTeam,
    deleteTeam: handleDeleteTeam,
  };
};