import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { User, AuthContextType } from "../types";
import axios from "axios";

const AuthContext = createContext<AuthContextType | undefined>(undefined);
const API_URL = import.meta.env.VITE_API_URL;

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Verifica si hay usuario guardado en localStorage
    const savedUser = localStorage.getItem("kevin-jewelry-user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  // 🔑 Login con API
  const login = async (email: string, password: string): Promise<boolean> => {
    setLoading(true);
    try {
      const response = await axios.post(`${API_URL}/auth/login`, {
        email,
        password,
      });

      if (response.data) {
        const loggedUser = response.data.user; // 👈 revisa que tu API devuelva { user: {...} }
        setUser(loggedUser);
        localStorage.setItem("kevin-jewelry-user", JSON.stringify(loggedUser));
        setLoading(false);
        return true;
      }
    } catch (error) {
      console.error("Error en login:", error);
    }
    setLoading(false);
    return false;
  };

  // 🚪 Logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem("kevin-jewelry-user");
  };

  // 📝 Register (mock, no tocar)
  const register = async (userData: Partial<User>): Promise<boolean> => {
    setLoading(true);

    const newUser: User = {
      id: Date.now().toString(),
      email: userData.email!,
      name: userData.name!,
      businessName: userData.businessName!,
      businessType: userData.businessType!,
      status: "pending",
      ruc: userData.ruc,
      phone: userData.phone!,
      address: userData.address,
      createdAt: new Date(),
    };

    // Aquí iría un llamado real a tu API
    setLoading(false);
    return true;
  };

  // 📦 Valor que se pasa al contexto
  const value: AuthContextType = {
    user,
    login,
    logout,
    register,
    isAuthenticated: !!user,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Hook para usar el contexto
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};