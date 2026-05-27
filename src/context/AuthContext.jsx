import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    // Simulate login — in real app, call your API
    if (email && password.length >= 6) {
      const userData = {
        name: email.split('@')[0].replace(/[._]/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
        email,
        avatar: email[0].toUpperCase(),
      };
      setUser(userData);
      return { success: true };
    }
    return { success: false, message: 'Invalid credentials. Password must be 6+ characters.' };
  };

  const signup = (name, email, password) => {
    if (name && email && password.length >= 6) {
      const userData = { name, email, avatar: name[0].toUpperCase() };
      setUser(userData);
      return { success: true };
    }
    return { success: false, message: 'All fields required. Password must be 6+ characters.' };
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
