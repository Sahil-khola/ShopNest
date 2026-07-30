Here is the README content for ShopNest:

```markdown
# ShopNest

A full-stack e-commerce platform built with the MERN stack, featuring user authentication, product browsing, cart management, Razorpay integration, order tracking, and an admin dashboard.

## Features

- **User Authentication** — Register, login, JWT-based session persistence
- **Product Browsing** — View products, search/filter, product details
- **Shopping Cart** — Add/remove items, update quantities (Redux Toolkit)
- **Checkout** — Razorpay payment integration with student bypass test mode
- **Order Management** — Order history, status tracking
- **Admin Dashboard** — Manage products, users, and orders; view analytics
- **Email Notifications** — Order confirmation emails via Nodemailer
- **Image Hosting** — Cloudinary integration for product images

## Tech Stack

### Backend
- Node.js + Express.js
- MongoDB + Mongoose
- JSON Web Token (JWT) authentication
- Razorpay (payment gateway)
- Nodemailer (order emails)
- Cloudinary (image uploads)
- Express File Upload / Multer

### Frontend
- React 19
- Redux Toolkit (cart state management)
- React Router DOM 7
- Vite
- Context API (auth state)

## Project Structure

```
ShopNest/
├── Backend/
│   ├── config/          # Database, Cloudinary config
│   ├── controllers/     # Route handlers (user, product, order, payment, analytics)
│   ├── middlewares/      # Auth & admin middleware
│   ├── models/          # Mongoose schemas (User, Product, Order)
│   ├── routes/          # API route definitions
│   ├── utils/           # Helper utilities (sendMail)
│   ├── index.js         # Express server entry point
│   └── seed.js          # Database seeder
├── Frontend/
│   └── src/
│       ├── admin/       # Admin pages (Dashboard, Products, Orders, Users)
│       ├── components/  # Reusable UI (Navbar, Footer, ProductCard)
│       ├── context/     # AuthContext
│       ├── pages/       # User-facing pages (Home, Shop, Cart, Checkout, Profile, etc.)
│       ├── redux/       # Cart slice & store
│       └── styles/      # CSS modules
└── package.json         # Root scripts
```

## Environment Variables

Create a `.env` file inside `Backend/` with the following:

```env
PORT=3000
CLIENT_URL=http://localhost:5173
MONGO_URI=mongodb://localhost:27017/SHOP_NEST
JWT_USER_KEY=your_jwt_secret_key

# Nodemailer
SMTP_EMAIL=your_email@gmail.com
SMTP_PASSWORD=your_app_password

# Cloudinary
CLOUD_NAME=your_cloud_name
CLOUD_API_KEY=your_api_key
CLOUD_API_SECRET=your_api_secret

# Razorpay (optional for test/bypass mode)
RAZORPAY_KEY_ID=
RAZORPAY_KEY_SECRET=
```

## Getting Started

### Prerequisites
- Node.js
- MongoDB (running locally on default port 27017)
- Razorpay account (optional — bypass mode available for testing)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Sahil-khola/ShopNest.git
cd ShopNest
```

2. Install root dependencies:
```bash
npm install
```

3. Install backend dependencies:
```bash
npm install --prefix Backend
```

4. Install frontend dependencies:
```bash
npm install --prefix Frontend
```

5. Configure environment variables in `Backend/.env`

6. Seed the database (optional):
```bash
npm run seed --prefix Backend
```

### Running the Application

From the root directory:

```bash
npm run dev
```

This starts:
- **Backend** on `http://localhost:3000`
- **Frontend** on `http://localhost:5173`

## API Routes

| Method | Route                          | Description                          |
|--------|--------------------------------|--------------------------------------|
| POST   | `/api/auth/register`           | Register a new user                  |
| POST   | `/api/auth/login`              | Login user                           |
| GET    | `/api/products`                | Get all products                     |
| GET    | `/api/products/:id`            | Get single product                   |
| POST   | `/api/orders`                  | Create a new order                   |
| GET    | `/api/orders/myOrders`         | Get logged-in user's orders          |
| GET    | `/api/orders`                  | Get all orders (admin)               |
| PUT    | `/api/orders/orderStatus/:id`  | Update order status (admin)          |
| POST   | `/api/payment/order`           | Create Razorpay order                |
| POST   | `/api/payment/verify`          | Verify Razorpay payment              |
| GET    | `/api/analytics`               | Get sales analytics (admin)          |

## Payment Note

The checkout flow uses Razorpay. If Razorpay keys are not configured in the backend `.env`, the app will prompt a **Student Bypass Mode** dialog to place a test order without processing a real payment.

## Admin Access

Admin routes are protected by role-based middleware. Ensure the user's `role` field is set to `"admin"` in the database to access admin pages.

## Author

**Sahil Khola**

## License

ISC
```