# 🛒 SONYX Electronics - Full Stack E-Commerce Platform

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![Django](https://img.shields.io/badge/Django-REST%20Framework-092E20?logo=django)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?logo=mysql)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-7952B3?logo=bootstrap)
![JWT](https://img.shields.io/badge/JWT-Authentication-red)
![Razorpay](https://img.shields.io/badge/Razorpay-Payment-0C7BFF)
![Google Gemini AI](https://img.shields.io/badge/Google-Gemini%20AI-4285F4?logo=google)

---

## 📖 Overview

SONYX Electronics is a modern Full Stack E-Commerce web application developed using **React.js**, **Django REST Framework**, and **MySQL**.

The platform enables users to browse electronic products, search and filter items, manage shopping carts and wishlists, securely place orders using Razorpay, manage addresses, track orders, and receive AI-powered shopping assistance through Google Gemini AI.

The application follows RESTful architecture with JWT Authentication and provides a responsive experience across desktop, tablet, and mobile devices.

---

# ✨ Features

## 🔐 Authentication

- User Registration
- Secure Login using JWT Authentication
- Logout
- Protected Routes
- Change Password

---

## 👤 User Profile

- View & Edit Profile
- Manage Delivery Addresses
- User Dashboard Statistics

---

## 🛍️ Shopping

- Browse Products
- Category-wise Products
- Product Details
- Product Search
- Product Filters
- Wishlist
- Shopping Cart
- Quantity Management
- Checkout

---

## 💳 Payment

- Razorpay Payment Gateway Integration
- Secure Payment Verification
- Order Confirmation

---

## 📦 Orders

- Place Orders
- View Order History
- Order Details Page
- Payment Status
- Delivery Status

---

## 🤖 AI Customer Support

Powered by **Google Gemini AI**

Users can:

- Compare Products
- Ask Product Questions
- Get Buying Suggestions
- Receive Smart Shopping Assistance

---

## 📱 Responsive UI

- Desktop
- Tablet
- Mobile Devices

---

# 🛠️ Tech Stack

| Category | Technologies |
|-----------|--------------|
| Frontend | React.js, Bootstrap 5, CSS3, Axios, React Router |
| Backend | Python, Django, Django REST Framework |
| Database | MySQL |
| Authentication | JWT (Simple JWT) |
| Payment | Razorpay |
| AI | Google Gemini AI |
| Deployment | Render (Backend), Vercel / Render (Frontend) |

---

# 📂 Project Structure

```text
SONYX-Ecommerce/
│
├── backend/
│   ├── account/
│   ├── cart/
│   ├── chatbot/
│   ├── config/
│   ├── media/
|   ├── orders/
│   ├── payments/
│   ├── products/
│   ├── venv/
│   ├── wishlist/
│   ├── manage.py
│   └── requirements.txt
│
├── frontend/
│   ├── public/
│   ├── src /
|   ├── index.html
│   ├── package.json
│   └── ...
│
└── README.md
```

---

# 🚀 Installation

## Clone the Repository

```bash
git clone https://github.com/yourusername/SONYX-Ecommerce.git
```

---

## Backend Setup

```bash
cd backend

python -m venv venv

# Windows
venv\Scripts\activate

# macOS/Linux
source venv/bin/activate

pip install -r requirements.txt

python manage.py migrate

python manage.py runserver
```

---

## Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

---

# 🔑 Environment Variables

Create a `.env` file inside the **backend** directory.

```env
SECRET_KEY=

DEBUG=True

DB_NAME=
DB_USER=
DB_PASSWORD=
DB_HOST=
DB_PORT=

EMAIL_HOST_USER=
EMAIL_HOST_PASSWORD=

RAZORPAY_KEY_ID=
RAZORPAY_KEY_SECRET=

GEMINI_API_KEY=

ALLOWED_HOSTS=

CORS_ALLOWED_ORIGINS=
```

---

# 📸 Screenshots

The following screenshots will be added after deployment:

- 🏠 Home Page
- 📂 Product Categories
- 🔍 Product Search & Filters
- 📄 Product Details
- ❤️ Wishlist
- 🛒 Shopping Cart
- 💳 Checkout & Razorpay Payment
- 📦 Orders
- 📑 Order Details
- 👤 User Profile
- 🤖 AI Customer Support

---

# 🌐 Live Demo

Frontend

```
Coming Soon
```

Backend API

```
Coming Soon
```

---

# 🔮 Future Enhancements

- Product Ratings & Reviews
- Coupon & Discount System Enhancements
- Order Cancellation & Refund
- Product Recommendation System
- Admin Analytics Dashboard
- Invoice PDF Generation
- Email Notifications for Order Status

---

# 👨‍💻 Developer

**Sreejith R**

Python Full Stack Developer

- Frontend: React.js, Bootstrap, JavaScript
- Backend: Django, Django REST Framework
- Database: MySQL
- REST API Development
- JWT Authentication
- Razorpay Integration
- Google Gemini AI Integration

---

## ⭐ Support

If you found this project helpful, please consider giving it a **⭐ Star** on GitHub.

It motivates me to build and share more projects.