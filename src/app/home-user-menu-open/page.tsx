import Image from "next/image";
import Link from "next/link";
import { getProducts, type Product } from "@/lib/products";

function ProductCard({ product }: { product: Product }) {
  const price = product.today;
  const change = product.change;
  const isUp = change?.dir === "up";

  return (
    <Link
      href={`/product/${product.id}`}
      className="flex items-center justify-between gap-3 rounded-xl border border-gray-100 bg-white p-4 transition hover:border-green-200 hover:shadow-md"
    >
      <div className="flex min-w-0 items-center gap-3">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-green-50 text-2xl">
          {product.categoryIcon || "🛒"}
        </span>

        <div className="min-w-0">
          <h3 className="truncate font-bold text-gray-800">
            {product.nameBn}
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            প্রতি {product.unit}
          </p>
        </div>
      </div>

      <div className="shrink-0 text-right">
        <p className="font-extrabold text-gray-900">
          ৳{price}
        </p>

        <p
          className={`mt-1 text-xs font-semibold ${
            isUp ? "text-red-600" : "text-green-600"
          }`}
        >
          {isUp ? "▲" : "▼"} {change?.pct ?? 0}%
        </p>
      </div>
    </Link>
  );
}

export default async function HomeUserMenuOpenPage() {
  let products: Product[] = [];

  try {
    products = await getProducts();
  } catch {
    products = [];
  }

  const increased = products.filter(
    (product) => product.change?.dir === "up"
  );

  const decreased = products.filter(
    (product) => product.change?.dir === "down"
  );

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-10 sm:px-6 md:grid-cols-2 lg:px-8 lg:py-16">
        <div>
          <span className="inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-800">
            আপনার প্রতিদিনের বাজারের সঙ্গী
          </span>

          <h1 className="mt-5 text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
            প্রতিদিনের
            <span className="block text-green-700">
              বাজারের সর্বশেষ তথ্য
            </span>
            এক নজরে জানুন
          </h1>

          <p className="mt-5 max-w-xl leading-8 text-gray-600">
            চাল, ডাল, তেল, সবজিসহ নিত্যপ্রয়োজনীয় পণ্যের আজকের বাজারদর
            জানুন। কোন পণ্যের দাম বেড়েছে এবং কোন পণ্যের দাম কমেছে,
            সহজেই দেখে নিন।
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="#দাম-বেড়েছে"
              className="rounded-xl bg-green-700 px-6 py-3 font-bold text-white transition hover:bg-green-800"
            >
              আজকের বাজারদর দেখুন
            </Link>

            <Link
              href="/category/chal"
              className="rounded-xl border border-green-700 px-6 py-3 font-bold text-green-700 transition hover:bg-green-50"
            >
              পণ্যের বিভাগ
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl">
          <Image
            src="/bazar-hero.png"
            alt="বাজারের নিত্যপ্রয়োজনীয় পণ্য"
            width={700}
            height={550}
            priority
            className="h-auto w-full rounded-3xl object-contain"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900">
              📈 আজ দাম বেড়েছে
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              যেসব পণ্যের দাম আগের তুলনায় বেড়েছে
            </p>
          </div>

          <span className="rounded-full bg-red-50 px-4 py-2 text-sm font-semibold text-red-600">
            দাম বৃদ্ধি
          </span>
        </div>

        {increased.length > 0 ? (
          <div
            id="দাম-বেড়েছে"
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {increased.slice(0, 6).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="rounded-xl border border-gray-100 bg-white p-5 text-gray-500">
            এই মুহূর্তে দাম বেড়েছে এমন পণ্যের তথ্য পাওয়া যাচ্ছে না।
          </p>
        )}
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900">
              📉 আজ দাম কমেছে
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              যেসব পণ্যের দাম আগের তুলনায় কমেছে
            </p>
          </div>

          <span className="rounded-full bg-green-50 px-4 py-2 text-sm font-semibold text-green-700">
            দাম হ্রাস
          </span>
        </div>

        {decreased.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {decreased.slice(0, 6).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="rounded-xl border border-gray-100 bg-white p-5 text-gray-500">
            এই মুহূর্তে দাম কমেছে এমন পণ্যের তথ্য পাওয়া যাচ্ছে না।
          </p>
        )}
      </section>
    </main>
  );
}