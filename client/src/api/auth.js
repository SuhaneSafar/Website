import { supabase } from '../supabaseClient';

/**
 * Log in an admin user using Supabase Authentication.
 * This utilizes Supabase's built-in auth system so you don't need to manually hash passwords.
 * @param {string} email 
 * @param {string} password 
 * @returns {object} { user, session, error }
 */
export const loginAdmin = async (email, password) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      throw error;
    }

    return { user: data.user, session: data.session, error: null };
  } catch (error) {
    return { user: null, session: null, error: error.message };
  }
};

/**
 * Log out the currently authenticated admin.
 */
export const logoutAdmin = async () => {
  try {
    const { error } = await supabase.auth.signOut();
    return { error };
  } catch (error) {
    return { error: error.message };
  }
};
