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
    >
      <div className="flex h-24 items-center justify-center rounded-lg bg-green-50 text-4xl">
        {product.image || product.categoryIcon}
      </div>

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
      title: "📈 আজ দাম বেড়েছে",
      description: "যেসব পণ্যের দাম গত দিনের তুলনায় বেড়েছে",
      items: risingProducts,
    },
    {
      title: "📉 আজ দাম কমেছে",
      description: "যেসব পণ্যের দাম গত দিনের তুলনায় কমেছে",
      items: fallingProducts,
    },
    {
      title: "🛒 সব পণ্য",
      description: "প্রয়োজনীয় পণ্যের সর্বশেষ বাজারদর",
      items: products,
    },
  ];

  return (
    <main className="min-h-screen flex-1 bg-[#f8f7f2]">
      <section className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-12 sm:px-6 md:grid-cols-2 md:py-20 lg:px-8">
        <div>
          <p className="font-semibold text-green-700">
            প্রতিদিনের বাজারের সর্বশেষ তথ্য
          </p>

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

          <Link
            href="#সব-পণ্য"
            className="mt-7 inline-flex items-center rounded-lg bg-green-800 px-6 py-3 font-semibold text-white transition hover:bg-green-900"
          >
            সব পণ্য দেখুন →
          </Link>
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

      {hasError ? (
        <div className="mx-auto max-w-7xl px-4 py-12 text-center text-red-600">
          পণ্যের তথ্য লোড করা যায়নি।
          অনুগ্রহ করে কিছুক্ষণ পর আবার চেষ্টা করুন।
        </div>
      ) : (
        sections.map((section, index) => (
          <section
            key={section.title}
            id={index === 2 ? "সব-পণ্য" : undefined}
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
    </main>
  );
}