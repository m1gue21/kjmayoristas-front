export interface User {
  id: string;
  email: string;
  name: string;
  businessName: string;
  businessType: 'mayorista' | 'empresario';
  status: 'pending' | 'approved' | 'suspended';
  ruc?: string;
  phone: string;
  address?: string;
  createdAt: Date;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  images: string[];
  category: string;
  material: string;
  sku: string;
  publicPrice: number;
  wholesalePrice: number;
  entrepreneurPrice: number;
  inStock: boolean;
  quantity: number;
  specifications: Record<string, string>;
}

export interface CartItem {
  productId: string;
  quantity: number;
  price: number;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  status: 'pending' | 'approved' | 'processing' | 'shipped' | 'completed' | 'cancelled';
  total: number;
  shippingAddress: string;
  paymentMethod: string;
  notes?: string;
  createdAt: Date;
}

export interface Meeting {
  id: string;
  userId: string;
  date: Date;
  time: string;
  purpose: string;
  status: 'scheduled' | 'completed' | 'cancelled';
  meetingLink?: string;
  notes?: string;
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  register: (userData: Partial<User>) => Promise<boolean>;
  isAuthenticated: boolean;
  loading: boolean;
}