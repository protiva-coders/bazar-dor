export default function Footer() {
  return (
    <footer className="mt-auto w-full border-t border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-4 py-6 sm:px-6 md:flex-row md:items-center lg:px-8">
        <p className="text-sm font-bold text-black">
          বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।
        </p>

        <p
          className="text-sm font-medium leading-6 text-black md:text-right"
          style={{
            opacity: 1,
            filter: "none",
            textShadow: "none",
            WebkitFontSmoothing: "antialiased",
          }}
        >
          সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।
        </p>
      </div>
    </footer>
  );
}
