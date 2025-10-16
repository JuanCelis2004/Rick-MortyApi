import { create } from "zustand";
import Cookies from "js-cookie";
import { AuthState } from "@/interface/interface";

const useAuthStore = create<AuthState>((set) => ({
  isLogged: !!Cookies.get("user"),
  user: Cookies.get("user") ? JSON.parse(Cookies.get("user")!) : null,
  login: (userData) => {
    set({ isLogged: true, user: userData });
    Cookies.set("user", JSON.stringify(userData), { expires: 7 }); // 7 días
  },
  logout: () => {
    set({ isLogged: false, user: null });
    Cookies.remove("user");
  },
}));

export default useAuthStore;