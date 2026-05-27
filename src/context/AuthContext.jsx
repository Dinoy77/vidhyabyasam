import React, { createContext, useContext, useState } from 'react';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
  reload,
} from 'firebase/auth';
import { auth } from '../firebase';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [pendingUser, setPendingUser] = useState(null);

  // ── LOGIN ──
  const login = async (email, password) => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      setUser({
        name: result.user.displayName || email.split('@')[0],
        email: result.user.email,
        avatar: (result.user.displayName || email)[0].toUpperCase(),
        emailVerified: result.user.emailVerified,
      });
      return { success: true };
    } catch (err) {
      return { success: false, message: 'Invalid email or password. Please try again.' };
    }
  };

  // ── SIGNUP STEP 1 — Create account and send email verification ──
  const initiateSignup = async (name, email, phone, password) => {
    if (!name || !email || !phone || password.length < 6) {
      return { success: false, message: 'All fields required. Password must be 6+ characters.' };
    }
    if (!/^\d{10}$/.test(phone)) {
      return { success: false, message: 'Enter a valid 10-digit phone number.' };
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, { displayName: name });
      await sendEmailVerification(userCredential.user);

      setPendingUser({ name, email, phone, password });
      return { success: true };
    } catch (err) {
      if (err.code === 'auth/email-already-in-use') {
        return { success: false, message: 'Email already registered. Please log in.' };
      }
      return { success: false, message: err.message || 'Signup failed. Please try again.' };
    }
  };

  // ── SIGNUP STEP 2 — Check if email is verified ──
  const checkEmailVerified = async () => {
    try {
      const currentUser = auth.currentUser;
      if (!currentUser) return { success: false, message: 'Session expired. Please try again.' };

      await reload(currentUser);

      if (currentUser.emailVerified) {
        setUser({
          name: pendingUser.name,
          email: pendingUser.email,
          phone: pendingUser.phone,
          avatar: pendingUser.name[0].toUpperCase(),
          emailVerified: true,
        });
        setPendingUser(null);
        return { success: true };
      } else {
        return { success: false, message: 'Email not verified yet. Please check your inbox and click the verification link.' };
      }
    } catch (err) {
      return { success: false, message: 'Verification check failed. Please try again.' };
    }
  };

  // ── Resend email verification ──
  const resendEmailVerification = async () => {
    try {
      const currentUser = auth.currentUser;
      if (!currentUser) return { success: false, message: 'Session expired.' };
      await sendEmailVerification(currentUser);
      return { success: true };
    } catch (err) {
      return { success: false, message: 'Failed to resend. Please wait a moment and try again.' };
    }
  };

  const logout = () => {
    auth.signOut();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{
      user, login, initiateSignup,
      checkEmailVerified, resendEmailVerification,
      pendingUser, logout,
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);