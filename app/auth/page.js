"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (!response.ok) {
        // Handle server-side errors
        const errorData = await response.json();
        console.error("Error from server:", errorData);
        alert(errorData.error || "Login failed");
        return;
      }
  
      const data = await response.json(); // Parse successful response
      console.log("Login successful:", data);
  
      // Example: Store the token and redirect
      localStorage.setItem("token", data.token);
      alert("Login successful!");
      window.location.href = "/"; // Redirect to dashboard
    } catch (error) {
      // Catch network or unexpected errors
      console.error("Unexpected error during login:", error);
      alert("An unexpected error occurred. Please try again.");
    }
  };
  

  return (
    <>
    <Header />
      <main className="bg-white">
        <section className="flex items-center justify-center h-screen">
          <div className="p-8 w-full max-w-md">
            <h1 className="text-5xl font-extrabold text-gray-800 text-center mb-6">
              Welcome Back!
            </h1>
            <p className="text-gray-600 mb-6 text-center">
              Register your email and unlock access to personalized resources,
              exclusive updates
            </p>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-4 border border-[#20212A] rounded-3xl text-[#20212A] focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-4 border border-[#20212A] rounded-3xl text-[#20212A] focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full p-4 text-white bg-[#20212A] rounded-3xl font-bold text-xl hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Log in
              </button>
            </form>
            <p className="text-center text-gray-600 mt-4">
              <a href="#" className="text-[#20212A] hover:underline">
                Forgot Your password?
              </a>
            </p>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
