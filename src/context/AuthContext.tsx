import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { AuthState, LoginCredentials, SignUpCredentials, User } from '../types/auth';
import { authReducer } from '../reducers/authReducer';
import { loadUser, loginUser, signUpUser, logoutUser } from '../utils/auth';

interface AuthContextType extends AuthState {
  login: (credentials: LoginCredentials) => Promise<void>;
  signup: (credentials: SignUpCredentials) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  isLoading: true,
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    const initAuth = async () => {
      const user = await loadUser();
      dispatch({ type: 'SET_USER', payload: user });
      dispatch({ type: 'SET_LOADING', payload: false });
    };
    initAuth();
  }, []);

  const login = async (credentials: LoginCredentials) => {
    try {
      const user = await loginUser(credentials);
      dispatch({ type: 'SET_USER', payload: user });
    } catch (error) {
      throw error;
    }
  };

  const signup = async (credentials: SignUpCredentials) => {
    try {
      const user = await signUpUser(credentials);
      dispatch({ type: 'SET_USER', payload: user });
    } catch (error) {
      throw error;
    }
  };

  const logout = () => {
    logoutUser();
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <AuthContext.Provider value={{ ...state, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};