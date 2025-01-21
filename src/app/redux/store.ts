import { create } from 'zustand';
import { persist, PersistStorage } from 'zustand/middleware';

interface AuthState {
    token: string | null;
    setToken: (token: string | null) => void;
}
interface PasswordState {
    password: string | null;
    setPassword: (password: string) => void;
}
interface EmailState {
    email: string | null;
    setEmail: (email: string) => void;
}
interface InnState {
    inn: string | null;
    setInn: (inn: string) => void;
}
interface RefreshState {
    refresh: string | null;
    setRefresh: (refresh: string) => void;
}


  // Define the persist options type
const customStorage: PersistStorage<AuthState> = {
    getItem: (name) => {
      const storedValue = localStorage.getItem(name);
      return storedValue ? JSON.parse(storedValue) : null;
    },
    setItem: (name, value) => {
      localStorage.setItem(name, JSON.stringify(value));
    },
    removeItem: (name) => {
      localStorage.removeItem(name);
    },
  };

export const useAuthStore = create<AuthState>()(persist((set) => ({
     
    token: null,
    setToken: (token) => set({ token }),
}), {
    name: "cart",
    storage: customStorage
}
));

export const usePasswordStore = create<PasswordState>((set) => ({
    password: null,
    setPassword: (password) => set({ password }),
}));
export const useEmailStore = create<EmailState>((set) => ({
    email: null,
    setEmail: (email) => set({ email }),
}));
export const useInnStore = create<InnState>((set) => ({
    inn: null,
    setInn: (inn) => set({ inn }),
}));
export const useRefreshStore = create<RefreshState>((set) => ({
    refresh: null,
    setRefresh: (refresh) => set({ refresh }),
}));

