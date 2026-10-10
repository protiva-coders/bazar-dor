"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(pathname === "/home-user-menu-open");

  const today = new Intl.DateTimeFormat("bn-BD", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Dhaka",
  }).format(new Date());

  const isMenuPage = pathname === "/home-user-menu-open";

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <Image
            src="/logo-icon.png"
            alt="বাজার দর লোগো"
            width={44}
            height={44}
            priority
            className="h-11 w-11 object-contain"
          />

          <span>
            <span className="block text-xl font-extrabold text-green-800 sm:text-2xl">
              বাজার দর
            </span>
            <span className="block text-xs text-gray-500">
              {today || "আজকের বাজারদর"}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-5 lg:flex">
          <Link
            href="/"
            className="font-semibold text-green-700 transition hover:text-green-900"
          >
            প্রচ্ছদ
          </Link>

          <Link
            href="/category/chal"
            className="text-gray-600 transition hover:text-green-700"
          >
            চাল
          </Link>

          <Link
            href="/category/dal"
            className="text-gray-600 transition hover:text-green-700"
          >
            ডাল
          </Link>

          <Link
            href="/category/tel"
            className="text-gray-600 transition hover:text-green-700"
          >
            তেল
          </Link>

          <Link
            href="/#সব-পণ্য"
            className="text-gray-600 transition hover:text-green-700"
          >
            সব পণ্য
          </Link>
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <Link
            href="/signin"
            className="hidden rounded-lg border border-green-700 px-3 py-2 text-sm font-semibold text-green-700 transition hover:bg-green-50 sm:inline-flex"
          >
            সাইন ইন
          </Link>

          <Link
            href="/signup"
            className="rounded-lg bg-green-700 px-3 py-2 text-sm font-semibold text-white transition hover:bg-green-800"
          >
            সাইন আপ
          </Link>

          <div className="relative">
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label="ইউজার মেনু খুলুন"
              aria-expanded={menuOpen}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-gray-50 text-gray-700 transition hover:bg-green-50 hover:text-green-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="8" r="4" />
                <path d="M5 21a7 7 0 0 1 14 0" />
              </svg>
            </button>

            {menuOpen && (
              <>
                <button
                  type="button"
                  aria-label="মেনু বন্ধ করুন"
                  className="fixed inset-0 z-40 cursor-default"
                  onClick={() => setMenuOpen(false)}
                />

                <div className="absolute right-0 z-50 mt-3 w-60 rounded-xl border border-gray-100 bg-white p-2 shadow-xl">
                  <div className="border-b border-gray-100 px-3 py-3">
                    <p className="font-bold text-gray-900">স্বাগতম!</p>
                    <p className="mt-1 text-xs text-gray-500">
                      আপনার অ্যাকাউন্ট
                    </p>
                  </div>

                  <Link
                    href="/profile"
                    onClick={() => setMenuOpen(false)}
                    className="mt-2 block rounded-lg px-3 py-3 text-sm text-gray-700 transition hover:bg-green-50 hover:text-green-800"
                  >
                    আমার প্রোফাইল
                  </Link>

                  <Link
                    href="/signin"
                    onClick={() => setMenuOpen(false)}
                    className="block rounded-lg px-3 py-3 text-sm text-gray-700 transition hover:bg-green-50 hover:text-green-800"
                  >
                    সাইন ইন
                  </Link>

                  <Link
                    href="/signup"
                    onClick={() => setMenuOpen(false)}
                    className="block rounded-lg px-3 py-3 text-sm text-gray-700 transition hover:bg-green-50 hover:text-green-800"
                  >
                    নতুন অ্যাকাউন্ট তৈরি করুন
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="overflow-hidden border-t border-green-100 bg-green-50 py-2">
        <div className="flex w-max animate-[ticker_25s_linear_infinite] items-center gap-8 whitespace-nowrap px-4 text-sm font-medium text-gray-700">
          <span>🥔 আলু — আজকের বাজারদর</span>
          <span>🍚 চাল — আজকের বাজারদর</span>
          <span>🧅 পেঁয়াজ — আজকের বাজারদর</span>
          <span>🥚 ডিম — আজকের বাজারদর</span>
          <span>🛢️ সয়াবিন তেল — আজকের বাজারদর</span>
          <span>🐟 মাছ — আজকের বাজারদর</span>
          <span>🥔 আলু — আজকের বাজারদর</span>
          <span>🍚 চাল — আজকের বাজারদর</span>
          <span>🧅 পেঁয়াজ — আজকের বাজারদর</span>
          <span>🥚 ডিম — আজকের বাজারদর</span>
          <span>🛢️ সয়াবিন তেল — আজকের বাজারদর</span>
          <span>🐟 মাছ — আজকের বাজারদর</span>
        </div>
      </div>
    </header>
  );
}
