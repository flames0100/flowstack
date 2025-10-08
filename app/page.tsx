"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white px-6 text-center">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-5xl md:text-6xl font-bold mb-4"
      >
        FlowStack
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-gray-300 max-w-lg mb-8 text-lg"
      >
        AI-Driven E-Commerce Automation — manage products, sales, and insights
        without lifting a finger. Build smarter, sell faster, grow effortlessly.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="flex gap-4"
      >
        <Link
          href="/login"
          className="bg-indigo-600 hover:bg-indigo-700 transition px-6 py-3 rounded-xl font-semibold"
        >
          Login
        </Link>
        <Link
          href="/register"
          className="bg-gray-800 hover:bg-gray-700 border border-gray-600 transition px-6 py-3 rounded-xl font-semibold"
        >
          Register
        </Link>
      </motion.div>

      <footer className="mt-16 text-gray-600 text-sm">
        © {new Date().getFullYear()} FlowStack. All rights reserved.
      </footer>
    </main>
  );
}
