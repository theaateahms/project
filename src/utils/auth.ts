import { LoginCredentials, SignUpCredentials, User } from '../types/auth';

// Simulated delay for API calls
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Load user from localStorage
export async function loadUser(): Promise<User | null> {
  const userData = localStorage.getItem('user');
  return userData ? JSON.parse(userData) : null;
}

// Login user
export async function loginUser(credentials: LoginCredentials): Promise<User> {
  await delay(1000); // Simulate API call
  
  // In a real app, this would be an API call
  if (credentials.email === 'demo@example.com' && credentials.password === 'password') {
    const user: User = {
      id: '1',
      email: credentials.email,
      name: 'Demo User',
      createdAt: new Date().toISOString(),
    };
    localStorage.setItem('user', JSON.stringify(user));
    return user;
  }
  
  throw new Error('Invalid credentials');
}

// Sign up user
export async function signUpUser(credentials: SignUpCredentials): Promise<User> {
  await delay(1000); // Simulate API call
  
  // In a real app, this would be an API call
  const user: User = {
    id: Math.random().toString(36).substr(2, 9),
    email: credentials.email,
    name: credentials.name,
    createdAt: new Date().toISOString(),
  };
  
  localStorage.setItem('user', JSON.stringify(user));
  return user;
}

// Logout user
export function logoutUser(): void {
  localStorage.removeItem('user');
}