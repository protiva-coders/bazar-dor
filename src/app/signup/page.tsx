"use client";

import { useState } from "react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";

export default function SignUpPage() {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [phone, setPhone] = useState("");
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");
const [error, setError] = useState("");
const [success, setSuccess] = useState("");
const [loading, setLoading] = useState(false);

async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
e.preventDefault();
setError("");
setSuccess("");


if (password !== confirmPassword) {
  setError("দুটি পাসওয়ার্ড মিলছে না।");
  return;
}

if (password.length < 8) {
  setError("পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে।");
  return;
}

setLoading(true);

try {
  const { error: signUpError } = await authClient.signUp.email({
    name,
    email,
    password,
  });

  if (signUpError) {
    setError(signUpError.message || "অ্যাকাউন্ট তৈরি করা যায়নি।");
    return;
  }

  setSuccess("অ্যাকাউন্ট তৈরি হয়েছে! এখন Sign In পেজে যাও।");
  setName("");
  setEmail("");
  setPhone("");
  setPassword("");
  setConfirmPassword("");
} catch {
  setError("সমস্যা হয়েছে। MongoDB connection ও server পরীক্ষা করো।");
} finally {
  setLoading(false);
}


}

return ( <main className="flex min-h-screen items-center justify-center bg-[#f7f7f7] px-4 py-10"> <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-lg sm:p-8"> <div className="mb-6 text-center"> <h1 className="text-3xl font-bold text-gray-900">অ্যাকাউন্ট তৈরি করো</h1> <p className="mt-2 text-sm text-gray-500">
BazarDor-এ যোগ দাও, বাজারদর জানো সহজেই। </p> </div>


    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-700">
          পুরো নাম
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="তোমার পুরো নাম লেখো"
          required
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
          ইমেইল ঠিকানা
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="তোমার ইমেইল লেখো"
          required
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
        />
      </div>

      <div>
        <label htmlFor="phone" className="mb-1 block text-sm font-medium text-gray-700">
          মোবাইল নম্বর
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="তোমার মোবাইল নম্বর লেখো"
          required
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
        />
      </div>

      <div>
        <label htmlFor="password" className="mb-1 block text-sm font-medium text-gray-700">
          পাসওয়ার্ড
        </label>
        <input
          id="password"
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="কমপক্ষে ৮ অক্ষর"
          minLength={8}
          required
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
        />
      </div>

      <div>
        <label htmlFor="confirmPassword" className="mb-1 block text-sm font-medium text-gray-700">
          পাসওয়ার্ড আবার লেখো
        </label>
        <input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="পাসওয়ার্ড নিশ্চিত করো"
          minLength={8}
          required
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
        />
      </div>

      {error && (
        <p role="alert" className="rounded-lg bg-red-50 p-3 text-sm text-red-700">
          {error}
        </p>
      )}

      {success && (
        <p role="status" className="rounded-lg bg-green-50 p-3 text-sm text-green-700">
          {success}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-lg bg-green-600 py-3 font-semibold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "অপেক্ষা করো..." : "অ্যাকাউন্ট তৈরি করো"}
      </button>
    </form>

    <p className="mt-6 text-center text-sm text-gray-600">
      আগে থেকেই অ্যাকাউন্ট আছে?{" "}
      <Link href="/signin" className="font-semibold text-green-700 hover:underline">
        সাইন ইন করো
      </Link>
    </p>
  </div>
</main>


);
}
