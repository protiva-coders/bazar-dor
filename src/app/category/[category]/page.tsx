import Link from "next/link";
import { notFound } from "next/navigation";
import { getProducts, type Product } from "@/lib/products";

type Props = {
  params: Promise<{ category: string }>;
  searchParams: Promise<{ sort?: string }>;
};

const categoryNames: Record<string, string> = {
  chal: "চাল",
  dal: "ডাল",
  tel: "তেল",
};

function ProductCard({ product }: { product: Product }) {
  const unitName =
    product.unit === "kg"
      ? "কেজি"
      : product.unit === "litre"
        ? "লিটার"
        : product.unit === "dozen"
          ? "ডজন"
          : "টি";

  const isUp = product.change.dir === "up";
  const isDown = product.change.dir === "down";

  return (
    <Link
      href={`/product/${product.id}`}
      className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    >
      <div className="flex h-24 items-center justify-center rounded-lg bg-green-50 text-4xl">
        {product.image || product.categoryIcon}
      </div>

      <h2 className="mt-4 font-bold text-gray-800">{product.nameBn}</h2>

      <p className="mt-2 text-xl font-extrabold text-green-800">
        ৳{product.today.toLocaleString("bn-BD")}
        <span className="ml-1 text-xs font-normal text-gray-500">
          / {unitName}
        </span>
      </p>

      <p
        className={`mt-2 text-sm font-semibold ${
          isUp
            ? "text-red-600"
            : isDown
              ? "text-green-700"
              : "text-gray-500"
        }`}
      >
        {isUp ? "↑" : isDown ? "↓" : "−"}{" "}
        {Math.abs(product.change.pct).toLocaleString("bn-BD")}%
      </p>

      <p className="mt-2 text-xs text-gray-500">
        আগের দাম: ৳{product.yesterday.toLocaleString("bn-BD")}
      </p>
    </Link>
  );
}

export default async function CategoryPage({
  params,
  searchParams,
}: Props) {
  const { category } = await params;
  const { sort } = await searchParams;

  const categoryName = categoryNames[category];

  if (!categoryName) {
    notFound();
  }

  let products: Product[];

  try {
    products = await getProducts();
  } catch {
    return (
      <main className="flex-1 bg-[#f8f7f2] px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-800">
          পণ্যের তথ্য লোড করা যায়নি
        </h1>

        <Link href="/" className="mt-4 inline-block text-green-700">
          ← প্রচ্ছদে ফিরে যান
        </Link>
      </main>
    );
  }

  const filteredProducts = products.filter(
    (product) => product.category === category,
  );

  if (sort === "low") {
    filteredProducts.sort((a, b) => a.today - b.today);
  } else if (sort === "high") {
    filteredProducts.sort((a, b) => b.today - a.today);
  } else if (sort === "name") {
    filteredProducts.sort((a, b) => a.nameBn.localeCompare(b.nameBn, "bn"));
  }

  return (
    <main className="flex-1 bg-[#f8f7f2] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Link
          href="/"
          className="font-semibold text-green-800 hover:text-green-950"
        >
          ← প্রচ্ছদে ফিরে যান
        </Link>

        <div className="mt-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900">
              {categoryName} এর বাজারদর
            </h1>

            <p className="mt-2 text-gray-600">
              মোট {filteredProducts.length.toLocaleString("bn-BD")}টি পণ্য
            </p>
          </div>

          <form
            method="GET"
            className="flex flex-wrap items-center gap-2"
          >
            <label htmlFor="sort" className="font-medium text-gray-700">
              সাজান:
            </label>

            <select
              id="sort"
              name="sort"
              defaultValue={sort || "default"}
              className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-800 outline-none focus:border-green-700"
            >
              <option value="default">সাধারণ</option>
              <option value="low">দাম: কম থেকে বেশি</option>
              <option value="high">দাম: বেশি থেকে কম</option>
              <option value="name">নাম অনুযায়ী</option>
            </select>

            <button
              type="submit"
              className="rounded-lg bg-green-800 px-4 py-2 font-semibold text-white transition hover:bg-green-900"
            >
              সাজান
            </button>
          </form>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="mt-8 rounded-xl bg-white p-10 text-center">
            <p className="text-lg font-semibold text-gray-700">
              এই ক্যাটাগরিতে কোনো পণ্য পাওয়া যায়নি।
            </p>

            <Link
              href="/"
              className="mt-4 inline-block rounded-lg bg-green-800 px-5 py-3 font-semibold text-white"
            >
              প্রচ্ছদে ফিরে যান
            </Link>
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}