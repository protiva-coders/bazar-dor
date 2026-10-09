import Link from "next/link";

export default function ProfilePage() {
return ( <main className="min-h-screen bg-gray-50 px-4 py-12"> <div className="mx-auto max-w-5xl"> <div className="mb-8"> <h1 className="text-3xl font-bold text-gray-900">
My Profile </h1> <p className="mt-2 text-gray-500">
Manage your personal information and account settings. </p> </div>

```
    <div className="grid gap-8 md:grid-cols-3">
      <aside className="h-fit rounded-2xl bg-white p-6 shadow-sm">
        <div className="flex flex-col items-center text-center">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-green-100 text-5xl">
            👤
          </div>

          <h2 className="mt-4 text-xl font-bold text-gray-900">
            Your Name
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            BazarDor Member
          </p>
        </div>

        <div className="mt-6 space-y-2 border-t border-gray-100 pt-5">
          <Link
            href="/profile"
            className="block rounded-lg bg-green-50 px-4 py-3 font-medium text-green-700"
          >
            My Profile
          </Link>

          <Link
            href="/"
            className="block rounded-lg px-4 py-3 text-gray-600 transition hover:bg-gray-50"
          >
            Home
          </Link>

          <Link
            href="/signin"
            className="block rounded-lg px-4 py-3 text-gray-600 transition hover:bg-gray-50"
          >
            Sign In
          </Link>

          <Link
            href="/signup"
            className="block rounded-lg px-4 py-3 text-gray-600 transition hover:bg-gray-50"
          >
            Create Account
          </Link>
        </div>
      </aside>

      <section className="rounded-2xl bg-white p-6 shadow-sm md:col-span-2 sm:p-8">
        <div className="mb-6 border-b border-gray-100 pb-5">
          <h2 className="text-xl font-bold text-gray-900">
            Personal Information
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Update your personal details below.
          </p>
        </div>

        <form className="space-y-5">
          <div>
            <label
              htmlFor="fullName"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>

            <input
              id="fullName"
              name="fullName"
              type="text"
              placeholder="Enter your full name"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email address"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>

            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Enter your phone number"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
            />
          </div>

          <div>
            <label
              htmlFor="address"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Delivery Address
            </label>

            <textarea
              id="address"
              name="address"
              rows={3}
              placeholder="Enter your delivery address"
              className="w-full resize-y rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
            />
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              className="rounded-lg bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
            >
              Save Changes
            </button>

            <Link
              href="/"
              className="rounded-lg border border-gray-300 px-6 py-3 text-center font-semibold text-gray-700 transition hover:bg-gray-50"
            >
              Back to Home
            </Link>
          </div>
        </form>
      </section>
    </div>
  </div>
</main>


);
}
