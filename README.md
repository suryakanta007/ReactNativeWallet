# 💸 Wallet – Expense Tracker App 🚀
---
A full-stack mobile application for effortlessly tracking income and expenses with real-time balance updates. This project was built to showcase a complete development lifecycle, from API design to mobile UI and cloud deployment.

### ✨ Features
- **Secure Authentication:** User signup and login with email verification powered by Clerk.
- **Transaction Management:** Easily add new income or expense transactions, and delete past ones.
- **Real-time Updates:** Pull-to-refresh functionality instantly syncs data and updates your balance.
- **Intuitive UI:** A clean, mobile-first design built with React Native and Expo.
- **Persistent Data:** All transactions and user data are stored in a PostgreSQL database.
- **Stateful Sessions:** Secure user sessions and rate-limiting are managed with Redis.

### 📸 Screenshots & Demo
Here’s a look at the app in action:

<p align="center">
  <img src="https://github.com/suryakanta007/ReactNativeWallet/blob/main/screenshots/homeScreen.png" alt="Home Screen" width="250" />
  <img src="https://github.com/suryakanta007/ReactNativeWallet/blob/main/screenshots/addTransaction.png" alt="Create Transaction Screen" width="250" />
  <img src="https://github.com/suryakanta007/ReactNativeWallet/blob/main/screenshots/signin.png" alt="Login/Signup Flow" width="250" />
  <img src="https://github.com/suryakanta007/ReactNativeWallet/blob/main/screenshots/signup.png" alt="Login/Signup Flow" width="250" />
</p>

> 🎥 **Or, watch a quick demo video:** [Link to your demo video here]

---
### ⚙️ Tech Stack
This project is a full-stack application built with the following technologies:

| Category | Technology |
| :--- | :--- |
| **Frontend (Mobile)** | React Native (using Expo) |
| **Backend** | Express.js, PostgreSQL (with Neon) |
| **Authentication** | Clerk |
| **Cache & Rate Limiting**| Redis |
| **Deployment** | Expo, Cloud Platforms |

---
### 🧠 What I Learned
Building this project was a great opportunity to deepen my skills in several key areas:

- **Full-Stack Architecture:** Connecting a React Native frontend to a custom Express API.
- **Database Management:** Designing a PostgreSQL schema and interacting with the database using Neon.
- **Secure Authentication:** Implementing secure user signup and login flows with email verification using Clerk.
- **State & Navigation:** Managing application state with React Navigation for a smooth user experience.
- **Advanced Backend Concepts:** Applying rate limiting and caching with Redis to enhance API security and performance.
- **Deployment Workflow:** Deploying both the mobile app and the backend to cloud-based platforms.

---
### 🚀 Getting Started

**Prerequisites:** Node.js, npm, and a code editor.

1.  **Clone the Repository**
    ```bash
    git clone [your_repo_url]
    cd wallet
    ```
2.  **Set Up Environment Variables**

    Create `.env` files in both the `backend` and `mobile` directories.

    **`backend/.env`**
    ```env
    PORT=5001
    NODE_ENV=development

    CLERK_PUBLISHABLE_KEY=<your_clerk_publishable_key>
    CLERK_SECRET_KEY=<your_clerk_secret_key>

    DATABASE_URL=<your_neon_postgres_connection_url>
    REDIS_URL=<your_redis_connection_url>
    ```

    **`mobile/.env`**
    ```env
    EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=<your_clerk_publishable_key>
    ```

3.  **Run the Backend**
    ```bash
    cd backend
    npm install
    npm run dev
    ```
4.  **Run the Mobile App**
    ```bash
    cd mobile
    npm install
    npx expo start
    ```

---
### 🌍 Deployment
- **Backend:** The Express API is deployed on a cloud platform (e.g., Railway, Vercel) with PostgreSQL from Neon and Redis.
- **Mobile App:** The React Native app is deployed via Expo, with Clerk handling authentication.


### 📌 Future Improvements
- **📊 Data Visualization:** Add charts to visualize income vs. expense trends over time.
- **☁️ Receipt Storage:** Integrate a cloud storage solution for uploading and storing transaction receipts.
- **🔔 Push Notifications:** Implement push notifications for spending alerts or balance updates.
- **👥 Multi-User Wallets:** Add functionality for shared wallets among multiple users.

---
### 📝 License
This project is licensed under the MIT License. Feel free to use and modify it!

---
> 🔥 Built with ❤️ using React Native & Express 🚀
