# Afyahub Healthcare Management System

## Overview
Afyahub is a comprehensive healthcare management system built with React, TypeScript, and Node.js. It provides a robust platform for managing healthcare facilities, staff, and patient information.

## Tech Stack
- **Frontend:**
  - React 18.x with TypeScript
  - Vite for build tooling
  - TailwindCSS for styling
  - React Router v6 for navigation
  - React-Toastify for notifications
  - Axios for API calls

- **Backend:**
  - Node.js with Express
  - MySQL database
  - JWT for authentication
  - bcrypt for password hashing

## Features
- 🔐 Secure Authentication System
- 👥 Role-based Access Control (Admin/Employee)
- 📊 Interactive Dashboards
- 👨‍⚕️ Employee Management
- 🏥 Department Management
- 📱 Responsive Design

## Project Structure

```plaintext
afyahub/
├── client/                 # Frontend application
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── contexts/      # React Context providers
│   │   ├── hooks/         # Custom React hooks
│   │   ├── pages/         # Page components
│   │   ├── services/      # API service functions
│   │   └── types/         # TypeScript type definitions
│   └── ...
└── backend/               # Backend application
    ├── controllers/       # Request handlers
    ├── routes/           # API routes
    ├── config/           # Configuration files
    └── ...
```

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MySQL
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/afyahub.git
cd afyahub
```

2. **Frontend Setup**
```bash
cd client
npm install
npm run dev
```

3. **Backend Setup**
```bash
cd backend
npm install
npm run start
```

4. **Environment Variables**
Create `.env` files in both client and backend directories:

Frontend (.env):
```plaintext
VITE_API_URL=http://localhost:5500
```

Backend (.env):
```plaintext
PORT=5500
DB_HOST=localhost
DB_USER=your_username
DB_PASSWORD=your_password
DB_NAME=afyahub
JWT_SECRET=your_secret_key
```

## API Endpoints

### Authentication
- POST `/employee/register` - Register new employee
- POST `/employee/login` - Employee login
- GET `/employee/profile` - Get employee profile

### Admin Routes
- GET `/admin/employees` - Get all employees
- PUT `/admin/employee/:id` - Update employee
- DELETE `/admin/employee/:id` - Delete employee

## Authentication Flow
1. User submits login credentials
2. Server validates and returns JWT token
3. Token stored in localStorage
4. Token included in subsequent API requests
5. Role-based routing handles access control

## Development

### Available Scripts

**Frontend:**
```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run lint       # Run ESLint
npm run preview    # Preview production build
```

**Backend:**
```bash
npm run start      # Start server
npm run dev        # Start with nodemon
```

### Code Style
- ESLint configured for TypeScript
- Prettier for code formatting
- Husky for pre-commit hooks

## Security Features
- JWT authentication
- Password hashing
- Protected routes
- Role-based access control
- HTTP-only cookies
- CORS configuration

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments
- React Documentation
- TypeScript Handbook
- TailwindCSS Documentation
- Express.js Guide

## Contact
Raymond
Project Link: [https://github.com/Terkihacks/afyahub](https://github.com/Terkihacks/afyahub)
