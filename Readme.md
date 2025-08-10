# Imagify - Text to Image AI
[![Ask DeepWiki](https://devin.ai/assets/askdeepwiki.png)](https://deepwiki.com/himanshux88/Imagify-Text-to-Image-AI)

Imagify is a full-stack web application that transforms your text descriptions into stunning images using the power of AI. Built with the MERN stack, it features a credit-based system for image generation and seamless payment integration with Razorpay.

## Features

-   **AI-Powered Image Generation**: Converts textual prompts into high-quality images using the ClipDrop API.
-   **User Authentication**: Secure user registration and login system with JWT (JSON Web Tokens).
-   **Credit System**: New users start with 5 free credits. Image generation costs 1 credit per image.
-   **Payment Integration**: Users can purchase additional credits through various pricing plans using Razorpay.
-   **Responsive UI**: A modern, clean, and fully responsive user interface built with React, Vite, and Tailwind CSS.
-   **Dynamic Experience**: Smooth animations and transitions powered by Framer Motion.

## Tech Stack

**Client-Side:**
-   **Framework/Library**: React.js
-   **Build Tool**: Vite
-   **Styling**: Tailwind CSS
-   **Routing**: React Router DOM
-   **Animations**: Framer Motion
-   **HTTP Client**: Axios
-   **Notifications**: React Toastify

**Server-Side:**
-   **Runtime**: Node.js
-   **Framework**: Express.js
-   **Database**: MongoDB with Mongoose ODM
-   **Authentication**: JSON Web Tokens (JWT)
-   **Password Hashing**: Bcrypt
-   **Payment Gateway**: Razorpay
-   **External APIs**: ClipDrop Text-to-Image API

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

-   Node.js and npm installed
-   A MongoDB instance (local or cloud-based like MongoDB Atlas)
-   API keys for ClipDrop and Razorpay

### Backend Setup

1.  **Navigate to the server directory:**
    ```sh
    cd server
    ```
2.  **Install NPM packages:**
    ```sh
    npm install
    ```
3.  **Create a `.env` file** in the `server` directory and add the following environment variables:
    ```env
    PORT=4000
    MONGODB_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    CLIPDROP_API=your_clipdrop_api_key
    RAZORPAY_KEY_ID=your_razorpay_key_id
    RAZORPAY_KEY_SECRET=your_razorpay_key_secret
    CURRENCY=INR
    ```
4.  **Start the server:**
    ```sh
    npm start
    ```

### Frontend Setup

1.  **Navigate to the client directory:**
    ```sh
    cd Client
    ```
2.  **Install NPM packages:**
    ```sh
    npm install
    ```
3.  **Create a `.env` file** in the `Client` directory and add the following variables:
    ```env
    VITE_BACKEND_URL=your_backend_url
    VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
    ```
4.  **Start the client:**
    ```sh
    npm run dev
    ```

The application should now be running on your local machine.

## API Endpoints

The server exposes the following RESTful API endpoints:

| Method | Endpoint                  | Description                                            | Authentication |
| :----- | :------------------------ | :----------------------------------------------------- | :------------- |
| `POST` | `/api/user/register`      | Register a new user.                                   | Public         |
| `POST` | `/api/user/login`         | Log in an existing user and receive a JWT.             | Public         |
| `GET`  | `/api/user/credits`       | Get the current user's credit balance and name.        | Required       |
| `POST` | `/api/user/payment`       | Create a Razorpay order to purchase credits.           | Required       |
| `POST` | `/api/user/verify`        | Verify a Razorpay payment and update user credits.     | Required       |
| `POST` | `/api/image/generate`     | Generate an image from a text prompt.                  | Required       |
