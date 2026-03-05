import { useState } from 'react';

export default function AuthPage() {
    // State to toggle between Login and Register
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className="flex h-screen items-center justify-center bg-gray-50 p-4">
            <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-100 transition-all duration-300">
                
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800">
                        {isLogin ? "Welcome Back" : "Create Account"}
                    </h1>
                    <p className="text-gray-500 mt-2">
                        {isLogin ? "Please enter your details to login" : "Join SrivibhaYoga today"}
                    </p>
                </div>

                <form className="space-y-4">
                    {!isLogin && (
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-700">Full Name</label>
                            <input
                                type="text"
                                placeholder="John Doe"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 outline-none transition-all"
                            />
                        </div>
                    )}

                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700">Email Address</label>
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 outline-none transition-all"
                        />
                    </div>

                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 outline-none transition-all"
                        />
                    </div>

                    <button 
                        type="submit"
                        className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 rounded-lg shadow-lg hover:shadow-yellow-500/30 transition-all transform active:scale-[0.98] mt-2"
                    >
                        {isLogin ? "Sign In" : "Register Now"}
                    </button>
                </form>

                <p className="text-center text-sm text-gray-600 mt-8">
                    {isLogin ? "Don't have an account?" : "Already have an account?"}
                    <button 
                        onClick={() => setIsLogin(!isLogin)}
                        className="text-yellow-600 font-semibold hover:underline ml-1 focus:outline-none"
                    >
                        {isLogin ? "Register here" : "Login here"}
                    </button>
                </p>
            </div>
        </div>
    );
}