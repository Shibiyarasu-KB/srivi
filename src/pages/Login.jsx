import { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../useAuth';

export default function AuthPage() {
  const { user, login } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [msg, setMsg] = useState('');
  const url = "https://fantastic-space-fortnight-x5r9gj5g6gjr2v4vp-3000.app.github.dev/users";

  useEffect(() => {
    if (user) {
      login(user);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setMsg('Processing...');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return setMsg("Invalid email format.");
    if (password.length < 8) return setMsg("Password must be 8+ chars.");

    try {
      if (isLogin) {
        const res = await axios.get(url, {params:{email, password}});
        if (res.data.length > 0) {
          login(res.data[0]);
        } else {
          setMsg("Invalid credentials.");
        }
      } else {
        
        const checkRes = await axios.get(url, {params:{email}});
        if (checkRes.data.length > 0) {
          return setMsg("mail already registered.");
        }

        
        const res = await axios.post(url, {name, email, password});
        if (res.status === 201) {
          setMsg("Registered successfully!");
          setIsLogin(true);
        }
      }
    } catch {
      setMsg("Connection failed.");
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-50 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border">
        <h1 className="text-2xl font-bold text-center mb-6">{isLogin ? "Login" : "Register"}</h1>
        {msg && (
          <div className={`p-3 mb-4 text-center rounded text-sm font-bold ${msg.includes('Error') ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}`}>
            {msg}
          </div>
        )}
        <form className="space-y-4" onSubmit={handleFormSubmit}>
          {!isLogin && <input type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} className="w-full p-3 border rounded-lg" required/>}
          <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} className="w-full p-3 border rounded-lg" required/>
          <input type="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="w-full p-3 border rounded-lg" required/>
          <button type="submit" className="w-full bg-yellow-500 text-white font-bold py-3 rounded-lg">
            {isLogin ? "Sign In" : "Register"}
          </button>
        </form>
        <button onClick={()=>{setIsLogin(!isLogin); setMsg('');}} className="w-full text-center text-sm text-yellow-600 mt-6 underline">
          {isLogin ? "Create account" : "Back to Login"}
        </button>
      </div>
    </div>
  );
}