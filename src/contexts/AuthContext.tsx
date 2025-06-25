import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, AuthContextType } from '../types';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock data for development
const mockUsers: User[] = [
  {
    id: '1',
    email: 'mayorista@example.com',
    name: 'Juan Pérez',
    businessName: 'Joyería El Dorado',
    businessType: 'mayorista',
    status: 'approved',
    ruc: '12345678901',
    phone: '+51 999 123 456',
    address: 'Av. Principal 123, Lima',
    createdAt: new Date('2024-01-15'),
  },
  {
    id: '2',
    email: 'empresario@example.com',
    name: 'María García',
    businessName: 'Accesorios Premium',
    businessType: 'empresario',
    status: 'approved',
    ruc: '10987654321',
    phone: '+51 999 654 321',
    address: 'Jr. Comercio 456, Arequipa',
    createdAt: new Date('2024-02-01'),
  }
];

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for saved user in localStorage
    const savedUser = localStorage.getItem('kevin-jewelry-user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setLoading(true);
    
    // Mock authentication
    const foundUser = mockUsers.find(u => u.email === email);
    if (foundUser && password === 'password123') {
      setUser(foundUser);
      localStorage.setItem('kevin-jewelry-user', JSON.stringify(foundUser));
      setLoading(false);
      return true;
    }
    
    setLoading(false);
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('kevin-jewelry-user');
  };

  const register = async (userData: Partial<User>): Promise<boolean> => {
    setLoading(true);
    
    // Mock registration
    const newUser: User = {
      id: Date.now().toString(),
      email: userData.email!,
      name: userData.name!,
      businessName: userData.businessName!,
      businessType: userData.businessType!,
      status: 'pending',
      ruc: userData.ruc,
      phone: userData.phone!,
      address: userData.address,
      createdAt: new Date(),
    };

    // In a real app, this would make an API call
    setLoading(false);
    return true;
  };

  const value: AuthContextType = {
    user,
    login,
    logout,
    register,
    isAuthenticated: !!user,
    loading,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};