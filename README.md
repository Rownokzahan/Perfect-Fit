# Perfect Fit

Welcome to Perfect Fit, a web application designed to provide users with a seamless shopping experience for customizable dresses.

## Description

Perfect Fit allows users to browse through a catalog of dresses, customize their selections, manage their shopping cart and wishlist, place orders, and much more. The admin panel enables easy management of product listings and ensures smooth operation of the platform.

## Technologies Used

- React
- Vite
- React Router Dom
- Tailwind CSS
- Redux
- Redux Toolkit
- React Icons
- React Hook Form
- Headless UI
- React Hot Toast
- React Slick

## Live Link

Explore Perfect Fit live at [perfect-fit-1234.web.app](https://perfect-fit-1234.web.app/).

## GitHub Repositories

- Frontend: [Perfect Fit Frontend](https://github.com/Rownokzahan/perfect-fit)
- Backend: [Perfect Fit Server](https://github.com/Rownokzahan/perfect-fit-server)

## Features

### User Panel

1. **Home**
    - Carousel for "Our Team" section

2. **Dress Catalog**
    - Search functionality by name or category
    - Filter options: Newest, Price, Alphabetical
    - Sort dropdown: All Dress, Seasonal Dress, Formal Gown, Maxi Dress, Cocktail Dress
    - Pagination for browsing multiple pages

3. **Wishlist Management**
    - Add and remove items
    - Local storage for wishlist items

4. **Shopping Cart**
    - Display items with selected customization options
    - Option to delete items from the cart

5. **Custom Dress Creation**
    - Dynamic creation of dresses based on selected styles and preferences

6. **Order Management**
    - View previous orders with selected customizations and pricing details

7. **Authentication**
    - Login and sign up via email and Google using Firebase
    - Private route implementation: Redirect to login for protected routes, redirect back after login

### Admin Panel

1. **Product Management**
    - Add new products with image upload to Firebase and preview functionality
    - Edit existing products
    - Delete products

## Setup Instructions

1. Clone the repository from GitHub:

    ```bash
    git clone https://github.com/Rownokzahan/perfect-fit.git
    cd perfect-fit
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add the following environment variables:

    ```env
    VITE_FIREBASE_API_KEY=your-firebase-api-key
    VITE_FIREBASE_AUTH_DOMAIN=your-firebase-auth-domain
    VITE_FIREBASE_PROJECT_ID=your-firebase-project-id
    VITE_FIREBASE_STORAGE_BUCKET=your-firebase-storage-bucket
    VITE_FIREBASE_MESSAGING_SENDER_ID=your-firebase-messaging-sender-id
    VITE_FIREBASE_APP_ID=your-firebase-app-id
    VITE_API_BASE_URL=https://your-api-url.com
    ```

   Replace the placeholders with your actual API URL, Firebase API key, auth domain, project ID, storage bucket, messaging sender ID, and app ID.

4. Run the development server:

    ```bash
    npm run dev
    ```

5. Access the application in your browser at `http://localhost:3000`.
