# Figur - Your Financial Lifestyle App 💳

[![Live Demo](https://img.shields.io/badge/demo-live-success)](https://figur-app.vercel.app/)
[![GitHub](https://img.shields.io/badge/github-repository-blue)](https://github.com/omofon/figur)
[![React](https://img.shields.io/badge/React-18+-61dafb?logo=react)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3+-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)

A modern financial lifestyle application designed to simplify global payments, bill management, and savings. From instant airtime-to-cash conversions to generating virtual dollar cards, Figur provides a seamless interface for individual and business financial needs.

---

## 🔗 Quick Links

- **Live Demo**: [figur-app.vercel.app](https://figur-app.vercel.app/)
- **Repository**: [github.com/omofon/figur](https://github.com/omofon/figur)

---

## 🚀 Project Overview

Figur is built as a high-performance Single Page Application (SPA) using React and Vite. It features a robust authentication system, protected routes for user dashboards, and a responsive UI designed with Tailwind CSS.

### Key Features

- **💳 Virtual Dollar Cards**: Shop locally and pay globally with ease
- **📱 Airtime to Cash**: Instant conversion of mobile airtime to spendable cash
- **🎁 Gift Card Marketplace**: Access to 5,000+ gift cards across multiple categories
- **💡 Bill Payments**: Affordable data, electricity, TV subscriptions, and airtime
- **🏦 Automated Savings**: Track income, expenses, and set specific saving goals (Emergency Fund, Vacation Fund, etc.)
- **📊 Financial Dashboard**: Real-time insights into transactions and cashflow
- **🔐 Secure Authentication**: Protected routes with persistent sessions

---

## 🛠 Tech Stack

| Category           | Technology              |
|--------------------|-------------------------|
| Frontend Framework | React.js (via Vite)     |
| Styling            | Tailwind CSS            |
| Routing            | React Router DOM        |
| State Management   | React Context API       |
| Validation         | Custom regex utilities  |
| Build Tool         | Vite                    |
| Deployment         | Vercel                  |

---

## 📂 Project Structure

```
figur/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── BusinessFeatu...
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Partners.jsx
│   │   ├── ProtectedRoute.jsx
│   │   ├── Services.jsx
│   │   └── Testimonials.jsx
│   ├── context/             # Global state management
│   │   └── AuthContext.jsx
│   ├── pages/               # Full-page views
│   │   ├── Dashboard.jsx
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   └── Signup.jsx
│   ├── utils/               # Helper functions & validation
│   ├── App.jsx              # Root routing configuration
│   └── main.jsx             # Application entry point
├── public/                  # Static assets
├── .eslintrc.json          # ESLint configuration
├── .gitignore              # Git ignore rules
├── package.json            # Dependencies & scripts
├── tailwind.config.js      # Tailwind configuration
└── vite.config.js          # Vite build configuration
```

---

## ⚙️ Installation & Setup

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/omofon/figur.git
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

---

## 🔐 Core Architecture

### 1. Authentication & Security

The application uses a Context API provider to manage user sessions across the platform. Security features include:

- **Protected Routes**: A wrapper component (`ProtectedRoute.jsx`) that redirects unauthenticated users to the login page
- **LocalStorage Persistence**: User data and authentication status persist across browser sessions
- **Secure Navigation**: Conditional rendering based on authentication state

### 2. Form Validation

A dedicated utility module handles strict validation for financial contexts:

- **Email**: Standard RFC-compliant format verification
- **Phone**: Supports Nigerian formats (starting with `0` or `+234`)
- **Password**: Minimum 8 characters with at least one letter and one number
- **Name**: Minimum 2 characters, letters only

### 3. Responsive Navigation

The Header component features:

- **Mobile-First Design**: State-managed hamburger menu for mobile screens
- **Interactive Dropdowns**: Detailed product menus for Individual and Business services
- **Smooth Transitions**: Professional animations using Tailwind classes

### 4. State Management

Centralized state management via React Context API provides:

- User authentication state
- Session persistence
- Global access to user data across components

---

## 📸 Features Gallery

### Desktop Navigation
Clean, professional header with dropdowns for exploring Individual and Business products.

### Mobile Experience
Optimized hamburger menu providing easy access to all features on the go.

### Dashboard Interface
Data-rich interface displaying:
- Recent transactions
- Cashflow statistics (income vs. expenses)
- Active saving plans with progress tracking
- Quick actions for common tasks

---

## 🚦 Available Scripts

| Command              | Description                          |
|----------------------|--------------------------------------|
| `npm run dev`        | Start development server            |
| `npm run build`      | Build for production                |
| `npm run preview`    | Preview production build locally    |
| `npm run lint`       | Run ESLint for code quality         |

---

## 🎯 Roadmap

- [ ] Backend API integration
- [ ] Real-time transaction notifications
- [ ] Multi-currency wallet support
- [ ] Advanced analytics dashboard
- [ ] Mobile app (React Native)
- [ ] Two-factor authentication (2FA)
- [ ] Biometric login support

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please ensure your code follows the existing style conventions and passes all linting checks.

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Developer

**Omofon**  
GitHub: [@omofon](https://github.com/omofon)

---

## 🙏 Acknowledgments

- React team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Vercel for seamless deployment
- All contributors and testers

---

## 📧 Contact & Support

For questions, feedback, or support:
- Open an issue on [GitHub](https://github.com/omofon/figur/issues)
- Check out the [live demo](https://figur-app.vercel.app/)

---

<div align="center">
  <p>Built with ❤️ using React and Tailwind CSS</p>
  <p>⭐ Star this repository if you find it helpful!</p>
</div>
