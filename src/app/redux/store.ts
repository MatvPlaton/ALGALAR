import { create } from 'zustand';
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
interface TimeZoneState {
  zone: number | null;
  setZone: (zone: number) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  token: null,
  setToken: (token) => set({ token }),
}));
export const usePasswordStore = create<PasswordState>((set) => ({
  password: null,
  setPassword: (password) => set({ password }),
}));
export const useEmailStore = create<EmailState>((set) => ({
  email: null,
  setEmail: (email) => set({ email }),
}));
export const useTimeZoneStore = create<TimeZoneState>((set) => ({
  zone: null,
  setZone: (zone) => set({ zone }),
}));
export const useInnStore = create<InnState>((set) => ({
  inn: null,
  setInn: (inn) => set({ inn }),
}));
export const useRefreshStore = create<RefreshState>((set) => ({
  refresh: null,
  setRefresh: (refresh) => set({ refresh }),
}));
