'use client';
import useAuthStore from '../store/useAuthStore';
import { useRouter } from 'next/navigation';

export default function Header() {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem' }}>
      <h2>Rick & Morty App</h2>
      {user ? (
        <div>
          <span style={{ marginRight: '1rem' }}>{user.name}</span>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : null}
    </header>
  );
}
