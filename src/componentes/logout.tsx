'use client';
import useAuthStore from "../store/useAuthStore";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const logout = useAuthStore((state) => state.logout);
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  return <button onClick={handleLogout} className="bg-red-500 text-white px-3 py-1 rounded">Logout</button>;
}
