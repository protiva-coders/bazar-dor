"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

export default function SignInPage() {
const router = useRouter();
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [loading, setLoading] = useState(false);

async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
event.preventDefault();
setLoading(true);


try {
  const result = await authClient.signIn.email({
    email,
    password,
  });

  if (result.error) {
    toast.error(result.error.message || "লগইন করা যায়নি");
    return;
  }

  toast.success("সফলভাবে লগইন হয়েছে!");
  router.push("/profile");
  router.refresh();
} catch {
  toast.error("লগইন করতে সমস্যা হয়েছে। আবার চেষ্টা করুন।");
} finally {
  setLoading(false);
}

}

return ( <main className="flex min-h-screen items-center justify-center bg-[#f8f7f2] px-4 py-10"> <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg"> <div className="mb-8 text-center"> <h1 className="text-3xl font-bold text-gray-900">
Welcome Back! </h1> <p className="mt-2 text-gray-500">
Sign in to your BazarDor account </p> </div>


    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter your email"
          required
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-600"
        />
      </div>

      <div>
        <label htmlFor="password" className="mb-2 block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Enter your password"
          required
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-600"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-lg bg-green-800 py-3 font-semibold text-white transition hover:bg-green-900 disabled:opacity-60"
      >
        {loading ? "Signing In..." : "Sign In"}
      </button>
    </form>

    <p className="mt-6 text-center text-sm text-gray-600">
      Don&apos;t have an account?{" "}
      <Link href="/signup" className="font-semibold text-green-700 hover:underline">
        Sign Up
      </Link>
    </p>

    <Link href="/" className="mt-5 block text-center text-sm text-gray-500 hover:underline">
      Back to Home
    </Link>
  </div>
</main>


);
}
