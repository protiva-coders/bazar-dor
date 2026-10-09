import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <Link href="/" className="text-2xl font-extrabold text-green-400">
            🛒 বাজার দর
          </Link>

          <p className="mt-4 max-w-sm text-sm leading-7 text-gray-300">
            প্রতিদিনের নিত্যপ্রয়োজনীয় পণ্যের সর্বশেষ বাজারদর জানুন।
            সচেতনভাবে বাজার করুন, সাশ্রয়ী থাকুন।
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold">গুরুত্বপূর্ণ লিংক</h2>

          <ul className="mt-4 space-y-3 text-sm text-gray-300">
            <li>
              <Link href="/" className="transition hover:text-green-400">
                প্রচ্ছদ
              </Link>
            </li>
            <li>
              <Link
                href="/category/chal"
                className="transition hover:text-green-400"
              >
                চাল
              </Link>
            </li>
            <li>
              <Link
                href="/category/dal"
                className="transition hover:text-green-400"
              >
                ডাল
              </Link>
            </li>
            <li>
              <Link
                href="/category/tel"
                className="transition hover:text-green-400"
              >
                তেল
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-bold">আমাদের উদ্দেশ্য</h2>

          <p className="mt-4 text-sm leading-7 text-gray-300">
            বাজারের দাম সম্পর্কে সঠিক ধারণা দিয়ে আপনাকে কেনাকাটার
            সিদ্ধান্ত নিতে সাহায্য করা।
          </p>
        </div>
      </div>

      <div className="border-t border-gray-700 px-4 py-5 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} বাজার দর। সর্বস্বত্ব সংরক্ষিত।
      </div>
    </footer>
  );
}