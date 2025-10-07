"use client";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Logging in with:", email, password);
    // 🔐 TODO: Connect to your API authentication later (e.g. Supabase, Firebase, or custom backend)
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-950 text-white px-6">
      <div className="w-full max-w-md bg-gray-900 border border-gray-800 rounded-2xl p-8 shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>

        <form onSubmit={handleLogin} className="flex flex-col gap-5">
          <div>
            <label htmlFor="email" className="block text-sm mb-2 text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm mb-2 text-gray-400"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 transition py-3 rounded-lg font-semibold mt-2"
          >
            Sign In
          </button>
        </form>

        <p className="text-sm text-gray-500 text-center mt-6">
          Don’t have an account?{" "}
          <Link
            href="/register"
            className="text-indigo-500 hover:text-indigo-400 transition"
          >
            Register
          </Link>
        </p>
      </div>

      <footer className="mt-12 text-gray-600 text-sm">
        © {new Date().getFullYear()} FlowStack. All rights reserved.
      </footer>
    </main>
  );
}
