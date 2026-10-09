"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [date, setDate] = useState("");

  useEffect(() => {
    const today = new Date();

    const formattedDate = new Intl.DateTimeFormat("bn-BD", {
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "Asia/Dhaka",
    }).format(today);

    const timer = window.setTimeout(() => {
      setDate(formattedDate);
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <span className="text-3xl">🛒</span>

          <span>
            <span className="block text-xl font-extrabold text-green-800 sm:text-2xl">
              বাজার দর
            </span>

            <span className="block text-xs text-gray-500">
              {date || "আজকের বাজারদর"}
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
            className="rounded-lg border border-green-700 px-3 py-2 text-sm font-semibold text-green-700 transition hover:bg-green-50"
          >
            সাইন ইন
          </Link>

          <Link
            href="/signup"
            className="rounded-lg bg-green-700 px-3 py-2 text-sm font-semibold text-white transition hover:bg-green-800"
          >
            সাইন আপ
          </Link>
        </div>
      </div>

      <div className="overflow-hidden border-t border-green-100 bg-green-50 py-2">
        <div className="flex w-max animate-[ticker_25s_linear_infinite] items-center gap-8 whitespace-nowrap px-4 text-sm font-medium text-gray-700">
          <span>🥔 আলু — আজকের বাজারদর</span>
          <span>🍚 চাল — আজকের বাজারদর</span>
          <span>🧅 পেঁয়াজ — আজকের বাজারদর</span>
          <span>🥚 ডিম — আজকের বাজারদর</span>
          <span>🫒 সয়াবিন তেল — আজকের বাজারদর</span>
          <span>🐟 মাছ — আজকের বাজারদর</span>
          <span>🥔 আলু — আজকের বাজারদর</span>
          <span>🍚 চাল — আজকের বাজারদর</span>
        </div>
      </div>
    </header>
  );
}
