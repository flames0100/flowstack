
"use client";
import { useState } from "react";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Account created for ${form.name}`);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-950 text-white">
      <div className="p-8 border rounded-xl bg-gray-900 w-80 shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
        <form onSubmit={handleRegister} className="flex flex-col gap-3">
          <input
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="p-2 rounded bg-gray-800 border border-gray-700"
          />
          <input
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="p-2 rounded bg-gray-800 border border-gray-700"
          />
          <input
            placeholder="Password"
            type="password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="p-2 rounded bg-gray-800 border border-gray-700"
          />
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 py-2 rounded mt-2"
          >
            Create Account
          </button>
        </form>
      </div>
    </main>
  );
}
