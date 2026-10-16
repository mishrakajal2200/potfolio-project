# Personal Portfolio Website

A modern, responsive full-stack developer portfolio built to showcase my skills, projects, experience, and services as a Full Stack JavaScript Developer. The application includes a React frontend and a Node.js backend with MongoDB Atlas integration.

## Overview

This portfolio is designed to showcase my development work and provide a way for potential clients and recruiters to contact me.

### Key Features

- Responsive portfolio website
- Home, About, Projects, and Contact pages
- Project cards and project detail pages
- Skills, technology stack, and experience sections
- Reusable React components
- Contact form connected to a backend API (implementation in progress)
- MongoDB Atlas database integration (implementation in progress)
- Admin authentication and project management (planned)

## Tech Stack

### Frontend

- React.js
- Vite
- JavaScript (ES6+)
- React Router
- Tailwind CSS / Bootstrap, as configured in the project
- Axios for API requests
- React Icons
- Framer Motion

### Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- dotenv
- Helmet
- CORS
- express-rate-limit

## Project Structure

```text
portfolio/
├── client/
│   ├── public/
│   │   ├── favicon.svg
│   │   └── resume.pdf
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── data/
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── utils/
│   │   ├── routes/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── middleware/
│   │   ├── validators/
│   │   ├── utils/
│   │   ├── app.js
│   │   └── server.js
│   ├── tests/
│   ├── .env.example
│   └── package.json
│
├── .gitignore
└── README.md
```

## Getting Started

### Prerequisites

- Node.js and npm
- A MongoDB Atlas account
- Git

### 1. Clone the repository

```bash
git clone https://github.com/mishrakajal2200
cd portfolio
```

Replace the placeholder with your actual GitHub repository URL.

### 2. Set up the frontend

```bash
cd client
npm install
npm run dev
```

Vite will display the local frontend URL in your terminal, usually `http://localhost:5173`.

### 3. Set up the backend

Open a second terminal:

```bash
cd server
npm install
```

Create a `.env` file inside the `server` directory using `.env.example` as a template.

Configure the following variables:

```dotenv
PORT=5000
NODE_ENV=development
MONGODB_URI=your_mongodb_atlas_connection_string
```

Replace the MongoDB placeholder with your actual Atlas connection string. Never commit real credentials to GitHub.

Start the backend:

```bash
npm run dev
```

The API should run at `http://localhost:5000`, provided the database connection succeeds.

## API

### Health Check

| Method | Endpoint | Description |
|---|---|---|
| GET | `/` | Check whether the API is running |

Example response:

```json
{
  "success": true,
  "message": "Portfolio API is running"
}
```

Contact, project, and authentication endpoints will be documented here as they are implemented and tested.

## Environment Variables

| Variable | Description |
|---|---|
| `PORT` | Backend server port |
| `NODE_ENV` | Application environment |
| `MONGODB_URI` | MongoDB Atlas connection string |

## Security Practices

- Keep secrets in environment variables.
- Exclude `.env` files from version control.
- Configure CORS for the intended frontend origin.
- Use Helmet for HTTP security headers.
- Apply request rate limiting.
- Validate incoming API data.
- Protect administrative endpoints with authentication and authorization.

## Development Roadmap

- [x] Set up the React frontend structure
- [x] Configure the initial Express application
- [x] Add environment-based backend configuration
- [ ] Complete and verify MongoDB Atlas connection
- [ ] Build and validate the contact form API
- [ ] Connect the frontend contact form to the backend
- [ ] Build project management endpoints
- [ ] Implement admin authentication
- [ ] Add automated API tests
- [ ] Deploy the full-stack application

## Author

**Kajal Mishra**

- GitHub: https://github.com/mishrakajal2200
- LinkedIn: https://linkedin.com/in/kajal-mishra178a4b298

## License

This project is intended to showcase my development skills and portfolio work. Add a license if you plan to distribute or reuse the source code publicly.
