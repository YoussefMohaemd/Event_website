# EventHub - React Navigation Component

## 🌟 Overview
EventHub's navigation component is a modern, responsive navbar built with React, featuring smooth animations and a clean user interface. This component is designed to provide seamless navigation experience across different screen sizes while maintaining a consistent and professional look.

## 🚀 Features
- Responsive design that works on both desktop and mobile devices
- Smooth scroll navigation on the homepage
- User authentication state management
- Profile dropdown menu
- Animated navigation items using Framer Motion
- Clean and modern gradient UI
- Mobile-friendly hamburger menu

## 🛠️ Technologies Used
- React.js
- React Router DOM
- Framer Motion
- React Icons
- Tailwind CSS
- Local Storage for auth state management

## 📦 Dependencies
```json
{
  "react": "^18.x",
  "react-router-dom": "^6.x",
  "framer-motion": "^10.x",
  "react-icons": "^4.x",
  "tailwindcss": "^3.x"
}
```

## 🔧 Installation

1. Clone the repository:
```bash
git clone <your-repository-url>
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

## 💻 Usage

Import and use the Navbar component in your application:

```jsx
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      {/* Your other components */}
    </div>
  );
}
```

## 🎨 Component Features

### Navigation
- Smooth scrolling to sections on the homepage
- Router navigation for other pages
- Responsive menu for mobile devices

### Authentication
- Login/Logout functionality
- User profile management
- Protected routes handling

### UI/UX
- Animated hover effects on navigation items
- Gradient background
- Responsive design with mobile-first approach
- Profile dropdown menu with user options

## 🔐 Local Storage
The component uses local storage to maintain authentication state:
- `localStorage.getItem("isLoggedIn")` - Checks login status
- `localStorage.setItem("isLoggedIn", "false")` - Updates login status

## 📱 Responsive Design
- Desktop: Full navigation menu with all options visible
- Mobile: Hamburger menu with collapsible navigation
- Breakpoint: `md` (768px)

## 🛡️ License
[Add your license here]

## 👥 Contributing
[Add contributing guidelines here]

## 📞 Contact
[Add your contact information here]