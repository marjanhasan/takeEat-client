# takeEat (Client Side)

A full-stack restaurant web application providing a seamless experience for both customers and administrators.

## WakaTime Reports

[![wakatime](https://wakatime.com/badge/user/5225e8ed-9a14-4fe9-b3f5-b0a5b485c255/project/1cf32d34-2144-4bf4-88b9-f1ab2908621c.svg)](https://wakatime.com/badge/user/5225e8ed-9a14-4fe9-b3f5-b0a5b485c255/project/1cf32d34-2144-4bf4-88b9-f1ab2908621c)

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup](#setup)
- [Usage](#usage)
- [Contributing](#contributing)

### Features
- **Fully Responsive Design**: Optimized for mobile and desktop navigation.
- **Authentication & Authorization**:
  - Email/password login with CAPTCHA.
  - Google Sign-in.
  - User registration with complete profile management.
- **Interactive Feedback**: SweetAlert notifications for user actions such as login, cart updates, and payments.
- **Menu and Review System**: Organized browsing by categories with a review section for customer feedback.
- **Shopping Cart & Secure Payments**: Manage orders and complete payments via Stripe.
- **Dashboards**:
  - User dashboard for cart management, payment history, and order details.
  - Admin dashboard for managing users, viewing payment records, and sales analytics.

### Technologies Used
- **Frontend**: React.js
- **State Management**: Context API
- **UI Components**: CSS, SweetAlert
- **Authentication**: Firebase

### Setup

1. Clone the client-side repository.
   ```bash
   git clone <client-repo-url>
   ```
2. Navigate to the project directory.
   ```bash
   cd takeEat-client
   ```
3. Install dependencies.
   ```bash
   npm install
   ```
4. Create a `.env` file in the root directory and configure your environment variables.
   ```env
   REACT_APP_FIREBASE_API_KEY=your_api_key
   REACT_APP_STRIPE_KEY=your_stripe_key
   VITE_apiKey=your_firebase_apiKey
   VITE_authDomain=your_firebase_authDomain
   VITE_projectId=your_firebase_projectId
   VITE_storageBucket=your_firebase_storageBucket
   VITE_messagingSenderId=your_firebase_messagingSenderId
   VITE_appId=your_firebase_appId
   VITE_IMAGE_HOSTING_KEY=your_imagebb_IMAGE_HOSTING_KEY
   VITE_PAYMENT_GATEWAY_PK=your_stripe_pk
   ```
5. Start the development server.
   ```bash
   npm start
   ```

### Usage
- Register or log in with email or Google to explore the menu.
- Add items to the cart and proceed to secure payments.
- Use the admin dashboard to manage the platform.

### Contributing
Contributions are welcome! Fork the repository and submit a pull request.
