# 🛒 বাজার দর (BazarDor)

### প্রতিদিনের বাজারের সর্বশেষ তথ্য এক নজরে

**BazarDor** একটি বাংলা বাজারদর ওয়েবসাইট। এর মাধ্যমে ব্যবহারকারীরা বাংলাদেশের নিত্যপ্রয়োজনীয় পণ্যের দাম, দামের পরিবর্তন এবং বিভিন্ন পণ্যের বিভাগ সম্পর্কে জানতে পারবেন।

## 🔗 Project Links

* **Live Website:** https://bazar-dor-red.vercel.app/
* **GitHub Repository:** https://github.com/protiva-coders/bazar-dor

## 📌 Project Description

BazarDor-এর মূল উদ্দেশ্য হলো নিত্যপ্রয়োজনীয় পণ্যের বাজারদর সহজে ব্যবহারকারীদের সামনে তুলে ধরা। ব্যবহারকারীরা চাল, ডাল, তেল, সবজি এবং অন্যান্য পণ্যের দাম ও দামের পরিবর্তন সম্পর্কে জানতে পারবেন।

ওয়েবসাইটটিতে ব্যবহারকারীর জন্য প্রয়োজনীয় পেজ, পণ্যের তালিকা, ক্যাটাগরি এবং Authentication-এর ব্যবস্থা রাখা হয়েছে।

## 🚀 Technologies Used

* **Next.js** — React-ভিত্তিক ওয়েব অ্যাপ্লিকেশন তৈরি করতে
* **React** — Interactive user interface তৈরি করতে
* **TypeScript** — Type-safe code লেখার জন্য
* **Tailwind CSS** — ওয়েবসাইট ডিজাইন ও responsive layout-এর জন্য
* **MongoDB** — ব্যবহারকারীর প্রয়োজনীয় তথ্য সংরক্ষণের জন্য
* **Better Auth** — User authentication ও session management-এর জন্য
* **React Hot Toast** — Notification দেখানোর জন্য
* **Lucide React** — Icons ব্যবহারের জন্য
* **REST API** — পণ্যের তথ্য সংগ্রহ করতে
* **Git and GitHub** — Version control ও source code সংরক্ষণের জন্য
* **Vercel** — ওয়েবসাইট deploy করার জন্য

## ✨ Main Features

1. **বাংলা User Interface:** ব্যবহারকারীদের জন্য বাংলা কনটেন্ট ও সহজ নেভিগেশন।
2. **Home Page:** বাজারদর সম্পর্কিত পরিচিতি ও প্রয়োজনীয় তথ্য।
3. **চলন্ত Price List:** Navbar-এর নিচে পণ্যের দাম দেখানোর ব্যবস্থা।
4. **দাম বেড়েছে:** যেসব পণ্যের দাম বৃদ্ধি পেয়েছে, সেগুলোর তালিকা।
5. **দাম কমেছে:** যেসব পণ্যের দাম কমেছে, সেগুলোর তালিকা।
6. **Category Page:** বিভিন্ন বিভাগের পণ্য দেখার ব্যবস্থা।
7. **Product Details:** নির্দিষ্ট পণ্যের বিস্তারিত তথ্য।
8. **Sign Up:** নতুন ব্যবহারকারীর নিবন্ধনের পেজ।
9. **Sign In:** নিবন্ধিত ব্যবহারকারীর লগইন পেজ।
10. **Profile Page:** ব্যবহারকারীর প্রোফাইলের পেজ।
11. **MongoDB Integration:** প্রয়োজনীয় ব্যবহারকারীর তথ্য ডেটাবেসে সংরক্ষণের ব্যবস্থা।
12. **Better Auth:** ব্যবহারকারীর Authentication ও session পরিচালনার ব্যবস্থা।
13. **Responsive Design:** বিভিন্ন স্ক্রিনের জন্য উপযোগী লেআউট।
14. **API Integration:** API থেকে পণ্যের তথ্য সংগ্রহ ও প্রদর্শন।

## 🔗 API Information

**Base API URL:**

https://api.api-store.workers.dev/api/bazardor

### Available Endpoints

| Endpoint                  | Description                 |
| ------------------------- | --------------------------- |
| `/products`               | সব পণ্যের তালিকা            |
| `/products?category=chal` | চাল বিভাগের পণ্য            |
| `/products/1`             | নির্দিষ্ট ID-এর পণ্যের তথ্য |
| `/categories`             | সব বিভাগের তালিকা           |
| `/categories/chal`        | চাল বিভাগের তথ্য            |

API থেকে পাওয়া তথ্যের ওপর নির্ভর করে পণ্যের দাম ও দামের পরিবর্তন দেখানো হয়।

## 🔐 Authentication and Database

প্রজেক্টের Authentication-এর জন্য **Better Auth** এবং ডেটাবেস হিসেবে **MongoDB** ব্যবহারের পরিকল্পনা রয়েছে।

* Better Auth ব্যবহারকারীর নিবন্ধন, লগইন ও session management পরিচালনা করতে পারে।
* MongoDB ব্যবহারকারীর প্রয়োজনীয় তথ্য সংরক্ষণ করতে পারে।
* Database connection ও authentication configuration-এর জন্য প্রয়োজনীয় environment variables সেট করতে হবে।
* সংবেদনশীল credentials কখনো GitHub repository-তে প্রকাশ করা উচিত নয়।

**Note:** MongoDB ও Better Auth-এর integration সম্পন্ন করতে প্রয়োজনীয় configuration এবং connection সঠিকভাবে সেট করতে হবে।

## ⚙️ Installation and Setup

### Prerequisites

* Node.js
* npm
* Git
* MongoDB database
* Better Auth configuration

### Step 1: Clone the Repository

```bash
git clone https://github.com/protiva-coders/bazar-dor.git
```

### Step 2: Navigate to the Project Directory

```bash
cd bazar-dor
```

### Step 3: Install Dependencies

```bash
npm install
```

### Step 4: Configure Environment Variables

প্রজেক্টের authentication ও database configuration অনুযায়ী প্রয়োজনীয় environment variables সেট করতে হবে।

MongoDB connection string এবং Better Auth-এর secret ও base URL-এর মতো প্রয়োজনীয় configuration সঠিকভাবে সেট করো। আসল secret বা database credentials GitHub-এ commit করবে না।

### Step 5: Start the Development Server

```bash
npm run dev
```

### Step 6: Open the Website

ব্রাউজারে নিচের ঠিকানাটি খোলো:

http://localhost:3000

## 📁 Project Structure

```text
bazar-dor/
├── public/
│   ├── bazar-hero.png
│   └── logo-icon.png
├── src/
│   ├── app/
│   │   ├── category/
│   │   ├── product/
│   │   ├── profile/
│   │   ├── signin/
│   │   ├── signup/
│   │   ├── home-user-menu-open/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── lib/
├── package.json
└── README.md
```

## 🌐 Deployment

প্রজেক্টটি Vercel-এ deploy করা হয়েছে।

* **Live Website:** https://bazar-dor-red.vercel.app/
* **GitHub Repository:** https://github.com/protiva-coders/bazar-dor

Production deployment-এ প্রয়োজনীয় environment variables Vercel-এর Project Settings থেকে configure করতে হবে।

## 👩‍💻 Author

Developed as part of **Programming Hero Assignment-07**.

## 📝 Disclaimer

এখানে প্রদর্শিত বাজারদর সম্ভাব্য। বাজারের অবস্থা, স্থান ও সময়ের ওপর নির্ভর করে পণ্যের দাম পরিবর্তিত হতে পারে।
