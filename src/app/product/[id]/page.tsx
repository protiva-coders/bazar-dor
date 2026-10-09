import { notFound } from "next/navigation";
import Link from "next/link";
import { getProducts } from "@/lib/products";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function ProductDetails({ params }: Props) {
  const { id } = await params;

  let products;

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

  const product = products.find((item) => String(item.id) === id);

  if (!product) {
    notFound();
  }

  const markets = product.markets;

  const minPrice = Math.min(...markets.map((market) => market.min));
  const maxPrice = Math.max(...markets.map((market) => market.max));

  const averagePrice =
    markets.length > 0
      ? Math.round(
          markets.reduce(
            (total, market) => total + (market.min + market.max) / 2,
            0,
          ) / markets.length,
        )
      : 0;

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
    <main className="flex-1 bg-[#f8f7f2] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/"
          className="inline-block font-semibold text-green-800 hover:text-green-950"
        >
          ← প্রচ্ছদে ফিরে যান
        </Link>

        <section className="mt-6 rounded-2xl bg-white p-6 shadow-sm sm:p-10">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div className="flex min-h-56 items-center justify-center rounded-xl bg-green-50 text-7xl">
              {product.image || product.categoryIcon}
            </div>

            <div>
              <p className="font-semibold text-green-700">
                {product.categoryIcon} {product.categoryNameBn}
              </p>

              <h1 className="mt-3 text-3xl font-extrabold text-gray-900">
                {product.nameBn}
              </h1>

              <p className="mt-4 text-3xl font-extrabold text-green-800">
                ৳{product.today.toLocaleString("bn-BD")}
                <span className="ml-2 text-base font-normal text-gray-500">
                  / {unitName}
                </span>
              </p>

              <p
                className={`mt-3 font-semibold ${
                  isUp
                    ? "text-red-600"
                    : isDown
                      ? "text-green-700"
                      : "text-gray-500"
                }`}
              >
                {isUp ? "↑ দাম বেড়েছে" : isDown ? "↓ দাম কমেছে" : "− দাম অপরিবর্তিত"}
                {" "}
                {Math.abs(product.change.pct).toLocaleString("bn-BD")}%
              </p>

              <p className="mt-2 text-sm text-gray-500">
                গত দিনের দাম: ৳{product.yesterday.toLocaleString("bn-BD")}
              </p>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-xl bg-green-50 p-5">
              <p className="text-sm text-gray-600">সর্বনিম্ন বাজারদর</p>
              <p className="mt-2 text-2xl font-bold text-green-800">
                ৳{minPrice.toLocaleString("bn-BD")}
              </p>
            </div>

            <div className="rounded-xl bg-blue-50 p-5">
              <p className="text-sm text-gray-600">গড় বাজারদর</p>
              <p className="mt-2 text-2xl font-bold text-blue-800">
                ৳{averagePrice.toLocaleString("bn-BD")}
              </p>
            </div>

            <div className="rounded-xl bg-red-50 p-5">
              <p className="text-sm text-gray-600">সর্বোচ্চ বাজারদর</p>
              <p className="mt-2 text-2xl font-bold text-red-700">
                ৳{maxPrice.toLocaleString("bn-BD")}
              </p>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-bold text-gray-900">
              বাজারভিত্তিক দাম
            </h2>

            {markets.length === 0 ? (
              <p className="mt-4 rounded-xl bg-gray-50 p-5 text-gray-500">
                এই পণ্যের বাজারভিত্তিক দাম পাওয়া যায়নি।
              </p>
            ) : (
              <div className="mt-5 overflow-x-auto rounded-xl border border-gray-200">
                <table className="w-full min-w-[500px] text-left">
                  <thead className="bg-green-50">
                    <tr>
                      <th className="p-4 text-sm font-bold text-gray-700">
                        বাজার
                      </th>
                      <th className="p-4 text-sm font-bold text-gray-700">
                        বিভাগ
                      </th>
                      <th className="p-4 text-sm font-bold text-gray-700">
                        সর্বনিম্ন
                      </th>
                      <th className="p-4 text-sm font-bold text-gray-700">
                        সর্বোচ্চ
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {markets.map((market, index) => (
                      <tr
                        key={`${market.market}-${index}`}
                        className="border-t border-gray-100"
                      >
                        <td className="p-4 font-semibold text-gray-800">
                          {market.market}
                        </td>
                        <td className="p-4 text-gray-600">
                          {market.division}
                        </td>
                        <td className="p-4 font-semibold text-green-700">
                          ৳{market.min.toLocaleString("bn-BD")}
                        </td>
                        <td className="p-4 font-semibold text-red-600">
                          ৳{market.max.toLocaleString("bn-BD")}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}