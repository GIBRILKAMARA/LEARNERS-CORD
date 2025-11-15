# Learners Cord

A modern, full-featured educational website designed to aid in academics. Built with React and Vite for optimal performance and user experience.

## 🎯 Overview

Learners Cord is a comprehensive educational platform that provides various learning services including online courses, tutoring, test preparation, and academic resources. The website features a clean, modern design with responsive layouts that work seamlessly across all devices.

## ✨ Features

- **Responsive Navigation**: Fixed navigation bar with smooth scrolling and mobile menu
- **Home Page**: Hero section, feature highlights, statistics, and call-to-action
- **Services Page**: Detailed information about all educational services offered
- **Contact Page**: Contact form with validation and contact information
- **Footer**: Social media links (Facebook, Instagram, TikTok) and quick navigation
- **Modern Design**: Clean UI with smooth animations and transitions
- **Fully Responsive**: Mobile-first design that works on all screen sizes

## 📁 Project Structure

```
learners-cord/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable components
│   │   ├── Navbar.jsx      # Navigation component
│   │   ├── Navbar.css
│   │   ├── Footer.jsx      # Footer component
│   │   └── Footer.css
│   ├── pages/              # Page components
│   │   ├── Home.jsx        # Home page
│   │   ├── Home.css
│   │   ├── Services.jsx    # Services page
│   │   ├── Services.css
│   │   ├── Contact.jsx     # Contact page
│   │   └── Contact.css
│   ├── App.jsx             # Main app component with routing
│   ├── main.jsx            # Application entry point
│   └── index.css           # Global styles and design system
├── index.html              # HTML template
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite configuration
└── README.md               # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

### Build for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## 🎨 Design System

The website uses a consistent design system defined in `src/index.css`:

### Colors
- **Primary**: Blue (#2563eb) - Main brand color
- **Secondary**: Green (#10b981) - Accent color
- **Accent**: Amber (#f59e0b) - Highlights
- **Text Dark**: #1f2937
- **Text Light**: #6b7280
- **Background**: #f9fafb

### Typography
- Font family: System fonts stack for optimal performance
- Responsive font sizes with mobile-first approach

### Components
- Consistent spacing and padding
- Reusable button styles
- Card components with hover effects
- Smooth transitions and animations

## 📄 Pages & Routes

### Home (`/`)
- Hero section with call-to-action buttons
- Feature cards highlighting key benefits
- Statistics section
- Call-to-action section

### Services (`/services`)
- Grid of service cards with detailed information
- Feature lists for each service
- "How It Works" process section

### Contact (`/contact`)
- Contact form with validation
- Contact information display
- Service selection dropdown

## 🔧 Key Functional Parts

### Navigation
- Fixed navbar that changes on scroll
- Active route highlighting
- Mobile-responsive hamburger menu
- Smooth scroll behavior

### Footer
- Social media icons (Facebook, Instagram, TikTok)
- Quick navigation links
- Responsive grid layout

### Contact Form
- Form validation
- Success message display
- Service selection dropdown
- Responsive layout

### Routing
- React Router DOM for client-side routing
- Clean URL structure
- Navigation between pages

## 🛠️ Technologies Used

- **React 18**: UI library
- **React Router DOM**: Client-side routing
- **Vite**: Build tool and dev server
- **CSS3**: Styling with CSS variables
- **HTML5**: Semantic markup

## 📱 Responsive Design

The website is fully responsive with breakpoints for:
- Mobile devices (< 768px)
- Tablets (768px - 968px)
- Desktop (> 968px)

## 🎯 Customization

### Updating Content
- Edit page components in `src/pages/`
- Modify service information in `Services.jsx`
- Update contact information in `Contact.jsx`

### Styling
- Global styles: `src/index.css`
- Component styles: Individual CSS files in component/page folders
- Color scheme: Update CSS variables in `index.css`

### Social Media Links
- Update links in `src/components/Footer.jsx`
- Replace placeholder URLs with actual social media profiles

## 📝 Notes

- The contact form currently simulates submission (no backend integration)
- Social media links point to placeholder URLs - update with actual links
- All content is customizable and can be adjusted to your needs

## 🤝 Contributing

Feel free to customize and adjust the website according to your specific needs. The structure is designed to be easily extensible.

## 📄 License

This project is open source and available for customization.

---

**Built with ❤️ for education**
