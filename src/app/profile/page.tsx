"use client";

import Link from "next/link";
import { authClient } from "@/lib/auth-client";

export default function ProfilePage() {
const { data: session, isPending } = authClient.useSession();
const user = session?.user;

if (isPending) {
return ( <main className="flex min-h-screen items-center justify-center bg-[#f8f7f2]"> <p className="text-gray-600">Loading profile...</p> </main>
);
}

if (!user) {
return ( <main className="flex min-h-screen items-center justify-center bg-[#f8f7f2] px-4"> <div className="rounded-2xl bg-white p-8 text-center shadow-sm"> <h1 className="text-2xl font-bold text-gray-900">Please Sign In</h1> <p className="mt-3 text-gray-500">
Sign in to view your profile. </p> <Link
         href="/signin"
         className="mt-6 inline-block rounded-lg bg-green-800 px-6 py-3 font-semibold text-white hover:bg-green-900"
       >
Sign In </Link> </div> </main>
);
}

return ( <main className="min-h-screen bg-[#f8f7f2] px-4 py-12"> <div className="mx-auto max-w-5xl"> <h1 className="text-3xl font-bold text-gray-900">My Profile</h1> <p className="mt-2 text-gray-600">
Manage your personal information and account settings. </p>


    <div className="mt-8 grid gap-8 md:grid-cols-3">
      <aside className="h-fit rounded-2xl bg-white p-6 shadow-sm">
        <div className="text-center">
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-green-100 text-5xl">
            👤
          </div>

          <h2 className="mt-4 break-words text-xl font-bold text-gray-900">
            {user.name || "BazarDor Member"}
          </h2>

          <p className="mt-1 break-all text-sm text-gray-500">
            {user.email}
          </p>
        </div>

        <div className="mt-6 space-y-2 border-t border-gray-100 pt-5">
          <Link
            href="/profile"
            className="block rounded-lg bg-green-50 px-4 py-3 font-medium text-green-800"
          >
            My Profile
          </Link>

          <Link
            href="/"
            className="block rounded-lg px-4 py-3 text-gray-600 hover:bg-gray-50"
          >
            Home
          </Link>

          <button
            type="button"
            onClick={async () => {
              await authClient.signOut();
              window.location.href = "/signin";
            }}
            className="block w-full rounded-lg px-4 py-3 text-left text-gray-600 hover:bg-gray-50"
          >
            Sign Out
          </button>
        </div>
      </aside>

      <section className="rounded-2xl bg-white p-6 shadow-sm md:col-span-2 sm:p-8">
        <h2 className="text-xl font-bold text-gray-900">
          Personal Information
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          View and update your account information.
        </p>

        <div className="mt-6 space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              value={user.name || ""}
              readOnly
              className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-gray-700"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              value={user.email || ""}
              readOnly
              className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-gray-700"
            />
          </div>

          <Link
            href="/update-information"
            className="inline-block rounded-lg bg-green-800 px-6 py-3 text-center font-semibold text-white hover:bg-green-900"
          >
            Update Information
          </Link>
        </div>
      </section>
    </div>
  </div>
</main>


);
}
