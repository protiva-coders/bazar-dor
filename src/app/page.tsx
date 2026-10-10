import Image from "next/image";
import Link from "next/link";
import { getProducts, type Product } from "@/lib/products";

function ProductCard({ product }: { product: Product }) {
const isUp = product.change.dir === "up";
const isDown = product.change.dir === "down";

const unitName =
product.unit === "kg"
? "কেজি"
: product.unit === "litre"
? "লিটার"
: product.unit === "dozen"
? "ডজন"
: "টি";

const changeColor = isUp
? "text-red-600"
: isDown
? "text-green-700"
: "text-gray-500";

const changeIcon = isUp ? "↑" : isDown ? "↓" : "−";

return (
<Link
href={`/product/${product.id}`}
className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
> <div className="flex h-24 items-center justify-center rounded-lg bg-green-50 text-4xl">
{product.image || product.categoryIcon} </div>


  <h3 className="mt-4 font-bold text-gray-800">
    {product.nameBn}
  </h3>

  <p className="mt-2 text-xl font-extrabold text-green-800">
    ৳{product.today.toLocaleString("bn-BD")}
    <span className="ml-1 text-xs font-normal text-gray-500">
      / {unitName}
    </span>
  </p>

  <p className={`mt-2 text-sm font-semibold ${changeColor}`}>
    {changeIcon}{" "}
    {Math.abs(product.change.pct).toLocaleString("bn-BD")}%
    <span className="ml-1 font-normal text-gray-500">
      গত দিনের তুলনায়
    </span>
  </p>

  <p className="mt-2 text-xs text-gray-500">
    আগের দাম: ৳{product.yesterday.toLocaleString("bn-BD")}
  </p>
</Link>


);
}

export default async function Home() {
let products: Product[] = [];
let hasError = false;

try {
products = await getProducts();
} catch {
hasError = true;
}

const risingProducts = products.filter(
(product) => product.change.dir === "up",
);

const fallingProducts = products.filter(
(product) => product.change.dir === "down",
);

const sections = [
{
id: "dam-bereche",
title: "📈 আজ দাম বেড়েছে",
description: "যেসব পণ্যের দাম গত দিনের তুলনায় বেড়েছে",
items: risingProducts,
},
{
id: "dam-komeche",
title: "📉 আজ দাম কমেছে",
description: "যেসব পণ্যের দাম গত দিনের তুলনায় কমেছে",
items: fallingProducts,
},
{
id: "sob-ponno",
title: "🛒 সব পণ্য",
description: "প্রয়োজনীয় পণ্যের সর্বশেষ বাজারদর",
items: products,
},
];

return ( <main className="min-h-screen flex-1 bg-[#f8f7f2]"> <section className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-12 sm:px-6 md:grid-cols-2 md:py-20 lg:px-8"> <div> <p className="font-semibold text-green-700">
প্রতিদিনের বাজারের সর্বশেষ তথ্য </p>


      <h1 className="mt-4 text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
        বাজারের দাম
        <br />
        <span className="text-green-800">
          এক নজরে জানুন
        </span>
      </h1>

      <p className="mt-5 max-w-lg leading-8 text-gray-600">
        আপনার প্রয়োজনীয় পণ্যের বাজারদর জানুন,
        দাম বাড়া-কমার তথ্য বুঝুন এবং সচেতনভাবে
        প্রতিদিনের বাজার করুন।
      </p>

      <div className="mt-7 flex flex-wrap gap-3">
        <Link
          href="#sob-ponno"
          className="inline-flex items-center rounded-lg bg-green-800 px-6 py-3 font-semibold text-white transition hover:bg-green-900"
        >
          সব পণ্য দেখুন →
        </Link>

        <Link
          href="/category/chal"
          className="inline-flex items-center rounded-lg border border-green-800 px-6 py-3 font-semibold text-green-800 transition hover:bg-green-50"
        >
          চালের দাম
        </Link>
      </div>

      <div className="mt-8 grid max-w-md grid-cols-2 gap-3">
        <div className="rounded-xl border border-green-100 bg-white p-4">
          <p className="text-sm text-gray-500">মোট পণ্য</p>
          <p className="mt-1 text-2xl font-extrabold text-green-800">
            {products.length.toLocaleString("bn-BD")}
          </p>
        </div>

        <div className="rounded-xl border border-green-100 bg-white p-4">
          <p className="text-sm text-gray-500">দাম কমেছে</p>
          <p className="mt-1 text-2xl font-extrabold text-green-800">
            {fallingProducts.length.toLocaleString("bn-BD")}
          </p>
        </div>
      </div>
    </div>

    <div className="flex items-center justify-center">
      <Image
        src="/bazar-hero.png"
        alt="বাজারের বিভিন্ন পণ্য"
        width={600}
        height={450}
        priority
        className="h-auto w-full object-contain"
      />
    </div>
  </section>

  <section className="border-y border-green-100 bg-white">
    <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-4 py-4 text-sm font-semibold text-gray-700 sm:px-6 lg:justify-between lg:px-8">
      <Link href="/category/chal" className="hover:text-green-800">
        🌾 চালের বাজারদর
      </Link>

      <Link href="/category/dal" className="hover:text-green-800">
        🫘 ডালের বাজারদর
      </Link>

      <Link href="/category/tel" className="hover:text-green-800">
        🫗 তেলের বাজারদর
      </Link>

      <Link href="#dam-bereche" className="hover:text-red-600">
        📈 দাম বেড়েছে
      </Link>

      <Link href="#dam-komeche" className="hover:text-green-700">
        📉 দাম কমেছে
      </Link>
    </div>
  </section>

  {hasError ? (
    <div className="mx-auto max-w-7xl px-4 py-12 text-center text-red-600">
      <p className="text-lg font-semibold">
        পণ্যের তথ্য লোড করা যায়নি।
      </p>

      <p className="mt-2 text-sm">
        অনুগ্রহ করে কিছুক্ষণ পর আবার চেষ্টা করুন।
      </p>
    </div>
  ) : (
    sections.map((section) => (
      <section
        key={section.id}
        id={section.id}
        className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8"
      >
        <div className="border-b border-gray-200 pb-4">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            {section.title}
          </h2>

          <p className="mt-2 text-gray-600">
            {section.description}
          </p>
        </div>

        {section.items.length === 0 ? (
          <p className="mt-6 rounded-xl bg-white p-6 text-gray-500 shadow-sm">
            এই মুহূর্তে কোনো পণ্যের তথ্য পাওয়া যায়নি।
          </p>
        ) : (
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {section.items.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        )}
      </section>
    ))
  )}

  <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
    <div className="rounded-2xl bg-green-800 px-6 py-8 text-center text-white sm:px-10 sm:py-10">
      <h2 className="text-2xl font-extrabold sm:text-3xl">
        বাজার করুন জেনে-বুঝে
      </h2>

      <p className="mx-auto mt-3 max-w-xl leading-7 text-green-50">
        কেনাকাটার আগে পণ্যের দাম দেখুন এবং আপনার
        প্রতিদিনের বাজারের পরিকল্পনা করুন।
      </p>

      <Link
        href="#sob-ponno"
        className="mt-5 inline-block rounded-lg bg-white px-6 py-3 font-bold text-green-800 transition hover:bg-green-50"
      >
        পণ্য দেখুন →
      </Link>
    </div>
  </section>
</main>


);
}
