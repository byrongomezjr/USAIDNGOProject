# USAID Donation Management Platform

## Overview
A donation management platform developed for USAID as part of Rutgers University's senior capstone project. The platform streamlines charitable giving processes, specifically focused on supporting underprivileged children in Sri Lanka.

## 🎯 Features

- **Donation Management**: Streamlined process for managing and tracking donations
- **Child Support Tracking**: System to monitor support provided to children
- **Internationalization**: Multi-language support using i18next
- **Responsive Design**: Mobile-first approach with smooth animations
- **Secure Transactions**: Safe and transparent donation processing

## 🛠️ Tech Stack

- **Frontend**:
  - Next.js (React Framework)
  - TypeScript (.tsx files)
  - Tailwind CSS for styling
  - Framer Motion for animations
  - i18next for internationalization

- **Backend**:
  - SQL Database
  - Next.js API Routes

## 📋 Prerequisites

- Node.js (version 14.0 or higher)
- npm or yarn package manager
- SQL Database

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/byrongomezjr/USAIDNGOProject.git
   ```

2. **Install dependencies**
   ```bash
   cd usaidngoproject
   npm install
   # or
   yarn install
   ```

3. **Create and open .env.local file**
      ```bash
      touch .env.local
      open -e .env.local
      ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 💻 Project Structure

```
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/         # Next.js pages and API routes
│   ├── styles/        # Global styles and Tailwind configuration
│   ├── lib/           # Utility functions and helpers
│   └── types/         # TypeScript type definitions
├── public/            # Static assets
└── locales/          # i18next translation files
```

## 🌐 Internationalization

This project uses i18next for managing translations. Available languages:
- Sinhalese
- Tamil
- English
- German
- French

## 🤝 Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/contribute`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/contribute`)
5. Create a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## 👥 Team

- Byron Gomez Jr - Project Lead
- Niekelle Bloomfield
- Adam Shimou
- Olumayowa Otunuga

## 🙏 Acknowledgments

- USAID for their support and collaboration
- Rutgers University Computer Science Department
- Professor Dr. Galathara Kahanda

## 📞 Contact

For questions or support, please contact byrongomezjr@protonmail.com
