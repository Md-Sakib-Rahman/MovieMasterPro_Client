# 🎬 MovieMaster Pro

**A comprehensive MERN Stack Movie Management System.**

[![Live Site](https://img.shields.io/badge/Live%20Site-Visit%20Now-brightgreen?style=for-the-badge&logo=vercel)](https://movie-master-pro-client.vercel.app)
[![Client Repo](https://img.shields.io/badge/GitHub-Client%20Code-blue?style=for-the-badge&logo=github)](https://github.com/Md-Sakib-Rahman/MovieMasterPro_Client.git)
[![Server Repo](https://img.shields.io/badge/GitHub-Server%20Code-blue?style=for-the-badge&logo=github)](https://github.com/Md-Sakib-Rahman/MovieMasterPro_Server.git)

---

## 📖 Project Overview

**MovieMaster Pro** is a dynamic web application designed for movie enthusiasts to browse, manage, and organize their favorite films. Built with the MERN stack (MongoDB, Express, React, Node.js), it offers a seamless user experience with secure authentication, real-time data updates, and personalized user collections. Users can explore a curated library, add their own entries, and manage a private watchlist.

### 📸 Application Screenshot
![App Screenshot](https://via.placeholder.com/1200x600?text=MovieMaster+Pro+Home+Page+Screenshot)

--![screenshot-2025-11-18T18-31-49](https://github.com/user-attachments/assets/07406f79-518c-46b4-a91c-d6c01be77d14)
-![screenshot-2025-11-18T18-33-13](https://github.com/user-attachments/assets/f31882fd-745b-491b-8535-e43799282b51)


## 🚀 Key Features

* **🔐 Secure Authentication:** Robust user login and registration system using **Firebase Auth** (Email/Password & Google Sign-In).
* **📂 Full CRUD Operations:** Authenticated users can **Add**, **Update**, and **Delete** movie details from the database securely.
* **👤 Personalized Dashboard:** A private "My Collection" route that fetches and displays only the movies added by the specific logged-in user.
* **🔍 Advanced Search & Filter:** * Live search functionality to find movies instantly.
    * Sort and filter movies by **Genre**, **Rating**, and **Duration**.
* **❤️ User Watchlist:** A dedicated feature allowing users to save interesting movies to a personal watchlist for future viewing.
* **🌓 Dynamic Theme System:** Built-in Light/Dark mode toggle powered by a Theme Controller for better user accessibility.
* **📱 Fully Responsive Design:** Optimized for all devices (Mobile, Tablet, and Desktop) using Tailwind CSS.
* **🔔 Interactive UI Feedback:** Smooth loading animations and Toast notifications (SweetAlert/React Hot Toast) for success and error messages.
* **📊 404 & Error Handling:** Custom error pages for invalid routes to ensure a smooth user journey.

---

## 🛠️ Technologies Used

### **Frontend**
* **React.js:** Component-based UI architecture.
* **React Router DOM:** For single-page application navigation.
* **Tailwind CSS:** Utility-first CSS framework for styling.
* **DaisyUI:** Component library for faster UI development.
* **Firebase Auth:** For user authentication and management.

### **Backend**
* **Node.js:** JavaScript runtime environment.
* **Express.js:** Web framework for handling API routes.
* **MongoDB:** NoSQL database for storing movie and user data.

---

## 📦📦 Server Side

* `cors`: Middleware to enable Cross-Origin Resource Sharing.
* `dotenv`: For managing environment variables.
* `cookie-parser`: To parse cookies for JWT authentication.
* `jsonwebtoken`: For generating access tokens.

---
## 📦📦Client Side Dependencies
```bash
  "dependencies": {
    "@emotion/react": "^11.14.0",
    "@tailwindcss/vite": "^4.1.17",
    "axios": "^1.13.2",
    "firebase": "^12.5.0",
    "react": "^19.1.1",
    "react-awesome-reveal": "^4.3.1",
    "react-dom": "^19.1.1",
    "react-icons": "^5.5.0",
    "react-router": "^7.9.5",
    "react-toastify": "^11.0.5",
    "swiper": "^12.0.3",
    "tailwindcss": "^4.1.17"
  },
```
## 📦📦 Dev Dependencies
```bash
  "devDependencies": {
    "@eslint/js": "^9.36.0",
    "@types/react": "^19.1.16",
    "@types/react-dom": "^19.1.9",
    "@vitejs/plugin-react": "^5.0.4",
    "daisyui": "^5.4.7",
    "eslint": "^9.36.0",
    "eslint-plugin-react-hooks": "^5.2.0",
    "eslint-plugin-react-refresh": "^0.4.22",
    "globals": "^16.4.0",
    "vite": "^7.1.7"
  }
```
## ⚙️ How to Run Locally

Follow these steps to run the project on your local machine:

### 1. Clone the Repositories
```bash
# Clone Client
git clone [https://github.com/your-username/movie-master-pro-client.git](https://github.com/Md-Sakib-Rahman/MovieMasterPro_Client.git)

# Clone Server
git clone [https://github.com/Md-Sakib-Rahman/MovieMasterPro_Client.git](https://github.com/Md-Sakib-Rahman/MovieMasterPro_Server.git)

```
### 2. Server-Side Setup
```bash
cd MovieMasterPro_Server
npm install

```

### Configuration: Create a .env file in the root of the server directory and add the following:
```bash
PORT=5000
DB_USER=your_mongodb_username
DB_PASS=your_mongodb_password
ACCESS_TOKEN_SECRET=your_random_secret_token

```
### Start the Server:
```bash
PORT=5000
DB_USER=your_mongodb_username
DB_PASS=your_mongodb_password
ACCESS_TOKEN_SECRET=your_random_secret_token

```
### 3. Client-Side Setup

Navigate to the client folder and install dependencies:
```bash
cd movie-master-pro-client
npm install

```
### 3. Configuration: Create a .env.local file in the client root and add your Firebase config:

Navigate to the client folder and install dependencies:
```bash
VITE_apiKey=your_api_key
VITE_authDomain=your_auth_domain
VITE_projectId=your_project_id
VITE_storageBucket=your_storage_bucket
VITE_messagingSenderId=your_sender_id
VITE_appId=your_app_id

```

### Start the Client:

Navigate to the client folder and install dependencies:
```bash
npm run dev
```


###  4. Access the App

Open your browser and navigate to: http://localhost:5173



Developed by MD Sakib Rahman

