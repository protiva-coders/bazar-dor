# বাজার দর (BazarDor)

### প্রতিদিনের বাজারের সর্বশেষ তথ্য এক নজরে

**বাজার দর** একটি বাংলা বাজারদর ওয়েবসাইট। এর মাধ্যমে ব্যবহারকারীরা নিত্যপ্রয়োজনীয় পণ্যের বাজারদর, দামের পরিবর্তন এবং বিভিন্ন পণ্যের বিভাগ সম্পর্কে জানতে পারবেন।

## 📌 Project Description

BazarDor তৈরি করা হয়েছে যেন ব্যবহারকারীরা সহজেই চাল, ডাল, তেল, সবজি এবং অন্যান্য নিত্যপ্রয়োজনীয় পণ্যের বাজারদর জানতে পারেন। ওয়েবসাইটটিতে পণ্যের তথ্য, দামের পরিবর্তন এবং প্রয়োজনীয় পেজগুলো সহজভাবে সাজানো হয়েছে।

## 🚀 Technologies Used

* Next.js
* React
* TypeScript
* Tailwind CSS
* MongoDB
* Better Auth
* React Hot Toast
* Lucide React
* REST API
* Git and GitHub
* Vercel

## ✨ Main Features

1. **বাংলা ইউজার ইন্টারফেস:** সম্পূর্ণ ওয়েবসাইট বাংলায় ব্যবহার করা যায়।
2. **চলন্ত Price List:** Navbar-এর নিচে নিত্যপ্রয়োজনীয় পণ্যের তালিকা দেখানো হয়।
3. **Home Page:** বাজারদর সম্পর্কিত পরিচিতি ও প্রয়োজনীয় তথ্য রয়েছে।
4. **দাম বৃদ্ধি ও হ্রাস:** যেসব পণ্যের দাম বেড়েছে বা কমেছে, সেগুলো আলাদাভাবে দেখানোর ব্যবস্থা রয়েছে।
5. **Category Page:** বিভিন্ন বিভাগের পণ্য দেখা যায়।
6. **Product Details:** নির্দিষ্ট পণ্যের বিস্তারিত তথ্য দেখার ব্যবস্থা রয়েছে।
7. **User Authentication Pages:** Sign Up ও Sign In পেজ রয়েছে।
8. **Profile Page:** ব্যবহারকারীর প্রোফাইলের জন্য আলাদা পেজ রয়েছে।
9. **Responsive Design:** বিভিন্ন স্ক্রিনের উপযোগী লেআউট তৈরির ব্যবস্থা রয়েছে।
10. **API Integration:** API থেকে পণ্যের তথ্য সংগ্রহ করে দেখানোর ব্যবস্থা রয়েছে।

## 🔗 API Information

BazarDor API থেকে পণ্যের তথ্য ও বিভাগের তালিকা সংগ্রহ করতে পারে।

**Base API URL:**

`https://api.api-store.workers.dev/api/bazardor`

**Available Endpoints:**

| Endpoint                  | Description                 |
| ------------------------- | --------------------------- |
| `/products`               | সব পণ্যের তালিকা            |
| `/products?category=chal` | চাল বিভাগের পণ্য            |
| `/products/1`             | নির্দিষ্ট ID-এর পণ্যের তথ্য |
| `/categories`             | সব বিভাগের তালিকা           |
| `/categories/chal`        | চাল বিভাগের তথ্য            |

API থেকে পাওয়া তথ্যের ওপর নির্ভর করে পণ্যের দাম ও দামের পরিবর্তন দেখানো হয়।

## ⚙️ Installation and Setup

### Prerequisites

* Node.js
* npm
* Git

### Step 1: Clone the repository


git clone YOUR_GITHUB_REPOSITORY_URL


### Step 2: Go to the project directory


cd bazar-dor


### Step 3: Install dependencies


npm install


### Step 4: Start the development server


npm run dev


### Step 5: Open the website

Open the following address in your browser:

http://localhost:3000`

## 📁 Project Structure


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


## 🌐 Deployment

The application is intended to be deployed using Vercel.

After deployment, the live website URL can be added here.

**Live Website:** Add your deployed website URL here.

**GitHub Repository:** Add your GitHub repository URL here.

## 👩‍💻 Author

Developed as part of Programming Hero Assignment-07.

## 📝 Disclaimer

সকল বাজারদর সম্ভাব্য। বাজারের অবস্থার ওপর নির্ভর করে দাম পরিবর্তিত হতে পারে।
