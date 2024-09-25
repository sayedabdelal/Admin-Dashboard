# Admin Dashboard

This is a responsive and feature-rich admin dashboard built using **React**, **TypeScript**, and **SCSS**. The dashboard provides an intuitive interface for managing data, users, and settings, and is styled with modern design principles.

## Features

- **User Management**: Add, edit, delete, and manage user accounts.
- **Analytics Dashboard**: View key data metrics in an easy-to-understand layout.
- **Responsive Design**: Fully responsive and works across all screen sizes.
- **Dynamic Charts**: Interactive charts and graphs using libraries like **Chart.js** or **Recharts**.
- **Theme Customization**: Light and dark mode options for better accessibility.
- **Authentication**: Login, registration, and user authentication system (optional).
- **Settings Panel**: Manage various application settings.
- **Role-Based Access Control**: Different features based on user roles (admin, editor, viewer).

## Tech Stack

- **React**: Front-end JavaScript library for building the user interface.
- **TypeScript**: Provides static typing, ensuring robust and maintainable code.
- **SCSS**: CSS preprocessor for more powerful styling options.
- **React Router**: For handling routing between dashboard pages.
- **Axios**: For making HTTP requests to APIs.
- **Redux Toolkit**: (Optional) For state management, if needed.
- **Chart.js / Recharts**: For displaying analytics and graphs.
- **Font Awesome**: Icons used throughout the dashboard.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/sayedabdelal/Admin-Dashboard.git
    cd admin-dashboard
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Run the development server**:
    ```bash
    npm start
    ```

4. Open your browser and go to `http://localhost:3000` to see the dashboard.

## Scripts

- `npm start`: Runs the development server.
- `npm build`: Builds the app for production.
- `npm test`: Runs the test suite.

## Folder Structure

```bash
├── public
│   ├── index.html
│   └── ...
├── src
│   ├── assets/       # Static assets like images, fonts, icons
│   ├── components/   # Reusable components
│   ├── pages/        # Dashboard pages
│   ├── services/     # API calls, axios services
│   ├── store/        # Redux store, slices (if using Redux)
│   ├── styles/       # Global SCSS styles
│   ├── types/        # TypeScript types and interfaces
│   ├── utils/        # Utility functions
│   ├── App.tsx       # Main app file
│   └── index.tsx     # Entry point of the app

