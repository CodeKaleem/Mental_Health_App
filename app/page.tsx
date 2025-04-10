'use client'
import AuthPage from "@/app/auth/Auth"; // adjusted the path here
import React from "react";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen flex justify-center items-center">
      <AuthPage />
    </main>
  );
}
