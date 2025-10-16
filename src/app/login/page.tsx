'use client';
import { useRouter } from 'next/navigation';
import useAuthStore from '../../store/useAuthStore';

export default function LoginPage() {
  const login = useAuthStore((state) => state.login);
  const router = useRouter();

  const handleLogin = () => {
    const userData = { name: 'Juan', email: 'juan@mail.com' };
    login(userData);
    router.push('/character');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '5rem' }}>
      <h1>Login</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
