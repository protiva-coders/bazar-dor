export default function SignUpPage() {
return ( <main className="min-h-screen bg-[#f7f7f7] flex items-center justify-center px-4 py-10"> <div className="w-full max-w-md rounded-2xl bg-white p-6 sm:p-8 shadow-lg"> <div className="mb-6 text-center"> <h1 className="text-3xl font-bold text-gray-900">
Create Account </h1> <p className="mt-2 text-sm text-gray-500">
Join BazarDor and start shopping! </p> </div>


    <form className="space-y-4">
      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-700">
          Full Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Enter your full name"
          required
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email"
          required
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
        />
      </div>

      <div>
        <label htmlFor="phone" className="mb-1 block text-sm font-medium text-gray-700">
          Phone Number
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="Enter your phone number"
          required
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
        />
      </div>

      <div>
        <label htmlFor="password" className="mb-1 block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Create a password"
          minLength={8}
          required
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
        />
      </div>

      <div>
        <label htmlFor="confirmPassword" className="mb-1 block text-sm font-medium text-gray-700">
          Confirm Password
        </label>
        <input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          placeholder="Confirm your password"
          minLength={8}
          required
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-green-600 py-3 font-semibold text-white transition hover:bg-green-700"
      >
        Create Account
      </button>
    </form>

    <p className="mt-6 text-center text-sm text-gray-600">
      Already have an account?{" "}
      <a href="/signin" className="font-semibold text-green-700 hover:underline">
        Sign In
      </a>
    </p>
  </div>
</main>


);
}
