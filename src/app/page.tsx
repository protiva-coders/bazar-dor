"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type Product = {
  id?: string | number;
  _id?: string;
  slug?: string;
  name?: string;
  nameBn?: string;
  banglaName?: string;
  productName?: string;
  title?: string;
  description?: string;
  category?: string | { name?: string; slug?: string };
  categoryName?: string;
  unit?: string;
  price?: number | string;
  currentPrice?: number | string;
  todayPrice?: number | string;
  averagePrice?: number | string;
  avgPrice?: number | string;
  change?: number | string;
  changePercent?: number | string;
  percentageChange?: number | string;
  priceChange?: number | string;
  emoji?: string;
  [key: string]: unknown;
};

const API_URL =
  "https://api.api-store.workers.dev/api/bazardor/products";

const bnNumber = (value: number) =>
  new Intl.NumberFormat("bn-BD", {
    maximumFractionDigits: 2,
  }).format(value);

function getProducts(data: unknown): Product[] {
  if (Array.isArray(data)) {
    return data as Product[];
  }

  if (data && typeof data === "object") {
    const result = data as Record<string, unknown>;

    for (const key of ["products", "data", "results", "items"]) {
      const value = result[key];

      if (Array.isArray(value)) {
        return value as Product[];
      }

      if (value && typeof value === "object") {
        const nested = getProducts(value);

        if (nested.length > 0) {
          return nested;
        }
      }
    }
  }

  return [];
}

function getName(product: Product) {
  return (
    product.nameBn ||
    product.banglaName ||
    product.productName ||
    product.name ||
    product.title ||
    "পণ্যের নাম"
  );
}

function getPrice(product: Product): number | null {
  const value =
    product.currentPrice ??
    product.todayPrice ??
    product.price ??
    product.averagePrice ??
    product.avgPrice;

  if (value === undefined || value === null || value === "") {
    return null;
  }

  const price = Number(value);

  return Number.isFinite(price) && price >= 0 ? price : null;
}

function getChange(product: Product): number {
  const value =
    product.changePercent ??
    product.percentageChange ??
    product.priceChange ??
    product.change ??
    0;

  if (typeof value === "object" && value !== null) {
    const changeObject = value as Record<string, unknown>;

    return Number(
      changeObject.percentage ?? changeObject.value ?? 0,
    ) || 0;
  }

  return Number(value) || 0;
}

function getEmoji(product: Product) {
  if (product.emoji) {
    return product.emoji;
  }

  const name = getName(product);

  if (/চাল|rice/i.test(name)) return "🍚";
  if (/ডাল|lentil/i.test(name)) return "🫘";
  if (/আলু|potato/i.test(name)) return "🥔";
  if (/পেঁয়াজ|পেঁয়াজ|onion/i.test(name)) return "🧅";
  if (/রসুন|garlic/i.test(name)) return "🧄";
  if (/তেল|oil/i.test(name)) return "🫒";
  if (/ডিম|egg/i.test(name)) return "🥚";
  if (/মাছ|fish/i.test(name)) return "🐟";
  if (/মুরগি|chicken/i.test(name)) return "🍗";
  if (/টমেটো|tomato/i.test(name)) return "🍅";
  if (/দুধ|milk/i.test(name)) return "🥛";
  if (/মরিচ|chili/i.test(name)) return "🌶️";

  return "🛍️";
}

function getProductLink(product: Product) {
  const slug = product.slug || product.id || product._id;

  if (!slug) {
    return "/#সব-পণ্য";
  }

  return `/product/${encodeURIComponent(String(slug))}`;
}

function ProductCard({ product }: { product: Product }) {
  const name = getName(product);
  const price = getPrice(product);
  const change = getChange(product);

  const unit =
    typeof product.unit === "string" ? product.unit : "কেজি";

  return (
    <Link
      href={getProductLink(product)}
      className="group rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:border-green-200 hover:shadow-lg sm:p-5"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#f4f7ed] text-4xl">
          {getEmoji(product)}
        </div>

        {change !== 0 && (
          <span
            className={`rounded-full px-2.5 py-1 text-xs font-bold ${
              change > 0
                ? "bg-red-50 text-red-600"
                : "bg-green-50 text-green-700"
            }`}
          >
            {change > 0 ? "▲ " : "▼ "}
            {bnNumber(Math.abs(change))}%
          </span>
        )}
      </div>

      <h3 className="mt-4 text-lg font-bold text-gray-900 group-hover:text-green-800">
        {name}
      </h3>

      <p className="mt-1 text-sm text-gray-500">
        প্রতি {unit}
      </p>

      <div className="mt-4 flex items-end justify-between gap-2">
        <p className="text-xl font-extrabold text-gray-900">
          {price !== null ? `৳ ${bnNumber(price)}` : "দাম জানা যায়নি"}
        </p>

        <span className="text-sm font-semibold text-green-700">
          বিস্তারিত →
        </span>
      </div>
    </Link>
  );
}

function ProductSection({
  title,
  subtitle,
  products,
  type,
}: {
  title: string;
  subtitle: string;
  products: Product[];
  type: "up" | "down" | "all";
}) {
  return (
    <section className="py-10 sm:py-12">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
            {title}
          </h2>

          <p className="mt-2 text-sm text-gray-500 sm:text-base">
            {subtitle}
          </p>
        </div>

        {type === "all" && (
          <span className="rounded-full bg-green-50 px-3 py-1.5 text-sm font-semibold text-green-800">
            {bnNumber(products.length)}টি পণ্য
          </span>
        )}
      </div>

      {products.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product, index) => (
            <ProductCard
              key={
                product.id ??
                product._id ??
                product.slug ??
                `${getName(product)}-${index}`
              }
              product={product}
            />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-gray-200 bg-white p-8 text-center">
          <p className="text-3xl">🛒</p>
          <p className="mt-3 font-semibold text-gray-700">
            {type === "all"
              ? "এখনো কোনো পণ্যের তথ্য পাওয়া যায়নি।"
              : "এই মুহূর্তে দেখানোর মতো তথ্য নেই।"}
          </p>
        </div>
      )}
    </section>
  );
}

function ProductSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {Array.from({ length: 8 }).map((_, index) => (
        <div
          key={index}
          className="animate-pulse rounded-2xl border border-gray-100 bg-white p-5"
        >
          <div className="h-16 w-16 rounded-2xl bg-gray-100" />
          <div className="mt-5 h-5 w-2/3 rounded bg-gray-100" />
          <div className="mt-3 h-4 w-1/3 rounded bg-gray-100" />
          <div className="mt-6 h-7 w-1/2 rounded bg-gray-100" />
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function loadProducts() {
      try {
        const response = await fetch(API_URL, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error("পণ্যের তথ্য আনা যায়নি");
        }

        const data: unknown = await response.json();
        const productList = getProducts(data);

        setProducts(productList);
        setError(false);
      } catch {
        if (!controller.signal.aborted) {
          setError(true);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    void loadProducts();

    return () => controller.abort();
  }, []);

  const increasing = [...products]
    .filter((product) => getChange(product) > 0)
    .sort((a, b) => getChange(b) - getChange(a))
    .slice(0, 6);

  const decreasing = [...products]
    .filter((product) => getChange(product) < 0)
    .sort((a, b) => getChange(a) - getChange(b))
    .slice(0, 6);

  return (
    <main className="min-h-screen bg-[#f8f7f2] text-gray-900">
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid items-center gap-8 overflow-hidden rounded-[2rem] bg-[#edf4e5] p-6 sm:p-10 lg:grid-cols-2 lg:p-14">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-green-800 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-green-600" />
              প্রতিদিনের বাজারের সর্বশেষ তথ্য
            </span>

            <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">
              বাজারের দাম
              <br />
              <span className="text-green-800">এক নজরে জানুন</span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-8 text-gray-600 sm:text-lg">
              আপনার প্রয়োজনীয় পণ্যের বাজারদর সহজেই দেখুন।
              বিভিন্ন পণ্যের দামের তথ্য এক জায়গায় পেয়ে
              বাজার করুন আরও সচেতনভাবে।
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#সব-পণ্য"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-800 px-6 py-3.5 font-bold text-white shadow-sm transition hover:bg-green-900"
              >
                সব পণ্য দেখুন
                <span>→</span>
              </a>

              <span className="text-sm font-medium text-gray-600">
                সহজ · সুবিধাজনক · বাংলায়
              </span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute inset-8 rounded-full bg-green-200/60 blur-3xl" />

            <Image
              src="/bazar-hero.png"
              alt="বাজারের বিভিন্ন পণ্য"
              width={640}
              height={520}
              priority
              className="relative h-auto w-full rounded-3xl object-contain"
            />

            <div className="absolute bottom-3 left-2 rounded-2xl border border-white/70 bg-white/95 px-4 py-3 shadow-lg sm:bottom-6 sm:left-0">
              <p className="text-xs font-medium text-gray-500">
                সচেতন বাজারের প্রথম ধাপ
              </p>
              <p className="mt-1 font-extrabold text-green-800">
                বাজারদর জেনে বাজার করুন
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {error && (
          <div className="rounded-2xl border border-red-200 bg-red-50 p-5 text-center">
            <p className="font-bold text-red-800">
              দুঃখিত! পণ্যের তথ্য আনা যায়নি।
            </p>
            <p className="mt-2 text-sm text-red-700">
              ইন্টারনেট সংযোগ পরীক্ষা করে পেজটি আবার রিফ্রেশ করুন।
            </p>
          </div>
        )}

        <section className="py-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-2xl">
                  🛍️
                </span>
                <div>
                  <p className="text-sm text-gray-500">মোট পণ্য</p>
                  <p className="text-2xl font-extrabold">
                    {loading ? "—" : bnNumber(products.length)}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-2xl">
                  📈
                </span>
                <div>
                  <p className="text-sm text-gray-500">দাম বেড়েছে</p>
                  <p className="text-2xl font-extrabold text-red-600">
                    {loading ? "—" : bnNumber(increasing.length)}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-2xl">
                  📉
                </span>
                <div>
                  <p className="text-sm text-gray-500">দাম কমেছে</p>
                  <p className="text-2xl font-extrabold text-green-700">
                    {loading ? "—" : bnNumber(decreasing.length)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8">
          <div className="mb-6">
            <h2 className="text-2xl font-extrabold sm:text-3xl">
              📈 আজ দাম বেড়েছে
            </h2>
            <p className="mt-2 text-gray-500">
              যেসব পণ্যের দামে ঊর্ধ্বগতি দেখা যাচ্ছে
            </p>
          </div>

          {loading ? (
            <ProductSkeleton />
          ) : (
            <ProductSection
              title="দাম বাড়ার তালিকা"
              subtitle="বেশি দাম বেড়েছে এমন পণ্য আগে দেখানো হচ্ছে"
              products={increasing}
              type="up"
            />
          )}
        </section>

        <section className="py-8">
          {loading ? (
            <>
              <div className="mb-6">
                <h2 className="text-2xl font-extrabold sm:text-3xl">
                  📉 আজ দাম কমেছে
                </h2>
                <p className="mt-2 text-gray-500">
                  যেসব পণ্যের দামে নিম্নগতি দেখা যাচ্ছে
                </p>
              </div>
              <ProductSkeleton />
            </>
          ) : (
            <ProductSection
              title="📉 আজ দাম কমেছে"
              subtitle="যেসব পণ্যের দাম কমেছে"
              products={decreasing}
              type="down"
            />
          )}
        </section>

        <section id="সব-পণ্য" className="scroll-mt-36 py-8 pb-16">
          <div className="mb-6">
            <h2 className="text-2xl font-extrabold sm:text-3xl">
              🛒 সব পণ্য
            </h2>
            <p className="mt-2 text-gray-500">
              আপনার প্রয়োজনীয় পণ্যের বাজারদর দেখুন
            </p>
          </div>

          {loading ? (
            <ProductSkeleton />
          ) : (
            <ProductSection
              title="পণ্যের তালিকা"
              subtitle="বিস্তারিত জানতে যেকোনো পণ্যে ক্লিক করুন"
              products={products}
              type="all"
            />
          )}
        </section>
      </div>

      <footer className="border-t border-gray-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>
            <p className="font-extrabold text-green-800">
              বাজার দর
            </p>
            <p className="mt-1 text-sm text-gray-500">
              প্রয়োজনীয় পণ্যের দাম এক নজরে।
            </p>
          </div>

          <p className="max-w-xl text-sm leading-6 text-gray-500 md:text-right">
            সকল দাম সম্ভাব্য; বাজার ও সময়ের ওপর নির্ভর করে
            পরিবর্তিত হতে পারে।
          </p>
        </div>
      </footer>
    </main>
  );
}
