import Image from "next/image";

export default function Home() {
const products = [
{ name: "চাল", icon: "🍚" },
{ name: "ডাল", icon: "🫘" },
{ name: "আলু", icon: "🥔" },
{ name: "পেঁয়াজ", icon: "🧅" },
{ name: "সয়াবিন তেল", icon: "🫒" },
{ name: "ডিম", icon: "🥚" },
];

return ( <main className="flex-1 bg-[#f8f7f2]"> <section className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-12 sm:px-6 md:grid-cols-2 md:py-20 lg:px-8"> <div> <p className="font-semibold text-green-700">
প্রতিদিনের বাজারের সর্বশেষ তথ্য </p>

```
      <h1 className="mt-4 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl">
        বাজারের দাম
        <br />
        <span className="text-green-800">এক নজরে জানুন</span>
      </h1>

      <p className="mt-4 leading-7 text-gray-600">
        আপনার প্রয়োজনীয় পণ্যের বাজারদর জানুন এবং সচেতনভাবে বাজার করুন।
      </p>

      <a
        href="#সব-পণ্য"
        className="mt-6 inline-block rounded-lg bg-green-800 px-6 py-3 font-semibold text-white hover:bg-green-900"
      >
        সব পণ্য দেখুন →
      </a>
    </div>

    <Image
      src="/bazar-hero.png"
      alt="বাজারের পণ্য"
      width={600}
      height={450}
      priority
      className="h-auto w-full object-contain"
    />
  </section>

  <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
    <h2 className="text-2xl font-bold text-gray-900">
      📈 আজ দাম বেড়েছে
    </h2>

    <p className="mt-2 text-gray-600">
      বাজারে দাম বেড়েছে এমন পণ্য
    </p>

    <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
      {products.map((product) => (
        <article
          key={product.name}
          className="rounded-xl bg-white p-5 shadow-sm"
        >
          <div className="flex h-20 items-center justify-center rounded-lg bg-green-50 text-4xl">
            {product.icon}
          </div>
          <h3 className="mt-4 font-bold text-gray-800">
            {product.name}
          </h3>
          <p className="mt-2 text-sm text-gray-500">
            বাজারদর শীঘ্রই দেখানো হবে
          </p>
        </article>
      ))}
    </div>
  </section>

  <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
    <h2 className="text-2xl font-bold text-gray-900">
      📉 আজ দাম কমেছে
    </h2>

    <p className="mt-2 text-gray-600">
      বাজারে দাম কমেছে এমন পণ্য
    </p>

    <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
      {products.map((product) => (
        <article
          key={product.name}
          className="rounded-xl bg-white p-5 shadow-sm"
        >
          <div className="flex h-20 items-center justify-center rounded-lg bg-green-50 text-4xl">
            {product.icon}
          </div>
          <h3 className="mt-4 font-bold text-gray-800">
            {product.name}
          </h3>
          <p className="mt-2 text-sm text-gray-500">
            বাজারদর শীঘ্রই দেখানো হবে
          </p>
        </article>
      ))}
    </div>
  </section>

  <section
    id="সব-পণ্য"
    className="mx-auto max-w-7xl px-4 py-10 pb-20 sm:px-6 lg:px-8"
  >
    <h2 className="text-2xl font-bold text-gray-900">
      🛒 সব পণ্য
    </h2>

    <p className="mt-2 text-gray-600">
      প্রয়োজনীয় পণ্যের তালিকা এক জায়গায় দেখুন।
    </p>

    <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
      {products.map((product) => (
        <article
          key={product.name}
          className="rounded-xl bg-white p-5 shadow-sm"
        >
          <div className="flex h-20 items-center justify-center rounded-lg bg-green-50 text-4xl">
            {product.icon}
          </div>
          <h3 className="mt-4 font-bold text-gray-800">
            {product.name}
          </h3>
          <p className="mt-2 text-sm text-gray-500">
            বাজারদর শীঘ্রই দেখানো হবে
          </p>
        </article>
      ))}
    </div>
  </section>
</main>


);
}