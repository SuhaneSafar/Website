import { supabase } from '../supabaseClient';

/**
 * Fetch all upcoming adventures from Supabase
 */
export const fetchAdventures = async () => {
  try {
    const { data, error } = await supabase
      .from('upcoming_adventures')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      throw error;
    }

    return { adventures: data, error: null };
  } catch (error) {
    console.error('Error fetching adventures:', error);
    return { adventures: null, error: error.message };
  }
};

/**
 * Add a new adventure event to Supabase
 * @param {Object} eventData - Formatted object matching the upcoming_adventures schema
 */
export const addAdventure = async (eventData) => {
  try {
    const { data, error } = await supabase
      .from('upcoming_adventures')
      .insert([eventData])
      .select();

    if (error) {
      throw error;
    }

    return { data, error: null };
  } catch (error) {
    console.error('Error adding adventure:', error);
    return { data: null, error: error.message };
  }
};

/**
 * Update an existing adventure event
 * @param {string|number} id - The id of the adventure
 * @param {Object} eventData - The fields to update
 */
export const updateAdventure = async (id, eventData) => {
  try {
    const { data, error } = await supabase
      .from('upcoming_adventures')
      .update(eventData)
      .eq('id', id)
      .select();

    if (error) {
      throw error;
    }

    return { data, error: null };
  } catch (error) {
    console.error('Error updating adventure:', error);
    return { data: null, error: error.message };
  }
};

/**
 * Delete an adventure event
 * @param {string|number} id - The id of the adventure to delete
 */
export const deleteAdventure = async (id) => {
  try {
    const { error } = await supabase
      .from('upcoming_adventures')
      .delete()
      .eq('id', id);

    if (error) {
      throw error;
    }

    return { error: null };
  } catch (error) {
    console.error('Error deleting adventure:', error);
    return { error: error.message };
  }
};

/**
 * Fetch all community trips from Supabase
 */
export const fetchCommunityTrips = async () => {
  try {
    const { data, error } = await supabase
      .from('community_trips')
      .select('*')
      .order('created_at', { ascending: true });

    if (error) throw error;
    return { trips: data, error: null };
  } catch (error) {
    console.error('Error fetching community trips:', error);
    return { trips: null, error: error.message };
  }
};

/**
 * Add a new community trip to Supabase
 */
export const addCommunityTrip = async (tripData) => {
  try {
    const { data, error } = await supabase
      .from('community_trips')
      .insert([tripData])
      .select();

    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error('Error adding community trip:', error);
    return { data: null, error: error.message };
  }
};

/**
 * Update an existing community trip
 */
export const updateCommunityTrip = async (id, tripData) => {
  try {
    // Remove id from the update payload if it somehow sneaks in
    const { id: _, ...updateData } = tripData;
    const { data, error } = await supabase
      .from('community_trips')
      .update(updateData)
      .eq('id', id)
      .select();

    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error('Error updating community trip:', error);
    return { data: null, error: error.message };
  }
};

/**
 * Delete a community trip
 */
export const deleteCommunityTrip = async (id) => {
  try {
    const { error } = await supabase
      .from('community_trips')
      .delete()
      .eq('id', id);

    if (error) throw error;
    return { error: null };
  } catch (error) {
    console.error('Error deleting community trip:', error);
    return { error: error.message };
  }
};

/**
 * Fetch all team members from Supabase
 */
export const fetchTeamMembers = async () => {
  try {
    const { data, error } = await supabase
      .from('team_members')
      .select('*')
      .order('id', { ascending: true });

    if (error) throw error;
    return { members: data, error: null };
  } catch (error) {
    console.error('Error fetching team members:', error);
    return { members: null, error: error.message };
  }
};

/**
 * Add a new team member to Supabase
 */
export const addTeamMember = async (memberData) => {
  try {
    const { data, error } = await supabase
      .from('team_members')
      .insert(Array.isArray(memberData) ? memberData : [memberData])
      .select();

    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error('Error adding team member:', error);
    return { data: null, error: error.message };
  }
};

/**
 * Update an existing team member
 */
export const updateTeamMember = async (id, memberData) => {
  try {
    const { id: _, ...updateData } = memberData;
    const { data, error } = await supabase
      .from('team_members')
      .update(updateData)
      .eq('id', id)
      .select();

    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error('Error updating team member:', error);
    return { data: null, error: error.message };
  }
};

/**
 * Delete a team member
 */
export const deleteTeamMember = async (id) => {
  try {
    const { error } = await supabase
      .from('team_members')
      .delete()
      .eq('id', id);

    if (error) throw error;
    return { error: null };
  } catch (error) {
    console.error('Error deleting team member:', error);
    return { error: error.message };
  }
};

