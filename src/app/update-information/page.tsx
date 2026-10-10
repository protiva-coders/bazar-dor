"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

export default function UpdateInformationPage() {
const router = useRouter();
const { data: session, isPending } = authClient.useSession();
const [name, setName] = useState("");
const [loaded, setLoaded] = useState(false);
const [saving, setSaving] = useState(false);

if (session?.user && !loaded) {
setName(session.user.name || "");
setLoaded(true);
}

async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
event.preventDefault();


if (!name.trim()) {
  toast.error("আপনার নাম লিখুন");
  return;
}

setSaving(true);

try {
  const result = await authClient.updateUser({
    name: name.trim(),
  });

  if (result.error) {
    toast.error(result.error.message || "তথ্য আপডেট করা যায়নি");
    return;
  }

  toast.success("আপনার নাম আপডেট হয়েছে");
  router.push("/profile");
  router.refresh();
} catch {
  toast.error("সমস্যা হয়েছে। আবার চেষ্টা করুন।");
} finally {
  setSaving(false);
}


}

if (isPending) {
return ( <main className="flex min-h-screen items-center justify-center bg-[#f8f7f2]">
তথ্য লোড হচ্ছে... </main>
);
}

if (!session?.user) {
return ( <main className="flex min-h-screen items-center justify-center bg-[#f8f7f2] p-4"> <div className="rounded-2xl bg-white p-8 text-center shadow-sm"> <h1 className="text-2xl font-bold">আগে সাইন ইন করুন</h1> <Link
         href="/signin"
         className="mt-5 inline-block rounded-lg bg-green-800 px-6 py-3 text-white"
       >
Sign In </Link> </div> </main>
);
}

return ( <main className="min-h-screen bg-[#f8f7f2] px-4 py-12"> <div className="mx-auto max-w-xl rounded-2xl bg-white p-6 shadow-sm sm:p-8"> <h1 className="text-3xl font-bold text-gray-900">
Update Information </h1>


    <p className="mt-2 text-gray-600">
      আপনার অ্যাকাউন্টের তথ্য পরিবর্তন করুন।
    </p>

    <form onSubmit={handleSubmit} className="mt-8 space-y-5">
      <div>
        <label
          htmlFor="name"
          className="mb-2 block font-medium text-gray-700"
        >
          আপনার নাম
        </label>

        <input
          id="name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-700"
          placeholder="আপনার নাম লিখুন"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-2 block font-medium text-gray-700"
        >
          ইমেইল
        </label>

        <input
          id="email"
          type="email"
          value={session.user.email || ""}
          readOnly
          className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-gray-500"
        />
      </div>

      <button
        type="submit"
        disabled={saving}
        className="w-full rounded-lg bg-green-800 px-6 py-3 font-semibold text-white transition hover:bg-green-900 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {saving ? "আপডেট হচ্ছে..." : "Update Information"}
      </button>

      <Link
        href="/profile"
        className="block text-center font-medium text-green-800 hover:underline"
      >
        প্রোফাইলে ফিরে যান
      </Link>
    </form>
  </div>
</main>


);
}
