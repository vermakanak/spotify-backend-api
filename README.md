# 🎵 Spotify Backend API

A RESTful backend API for a **Spotify-inspired music application**, built with **Node.js, Express.js, and MongoDB**.

The project provides backend functionality for user authentication, music management, album data, protected routes, and media storage using a structured controller-service architecture.

## ✨ Features

- 👤 User registration and login
- 🔐 JWT-based authentication
- 🔑 Password hashing using bcrypt
- 🍪 Cookie-based token handling
- 🎵 Music management
- 💿 Album data management
- 🛡️ Authentication middleware
- 📤 File upload handling with Multer
- ☁️ Media storage using ImageKit
- 🗄️ MongoDB database integration
- 📦 Mongoose models
- 🧩 Modular controllers, routes, models, and services
- 🔒 Environment-based configuration

## 🛠️ Tech Stack

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### Authentication
- JSON Web Token (JWT)
- bcryptjs
- Cookie Parser

### Media Storage
- ImageKit
- Multer

### Development
- Nodemon
- dotenv

## 📁 Project Structure

```text
spotify-backend-api/
│
├── src/
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   └── music.controller.js
│   │
│   ├── db/
│   │   └── db.js
│   │
│   ├── middlewares/
│   │   └── auth.middleware.js
│   │
│   ├── models/
│   │   ├── album.model.js
│   │   ├── music.model.js
│   │   └── user.model.js
│   │
│   ├── routes/
│   │   ├── auth.routes.js
│   │   └── music.routes.js
│   │
│   ├── services/
│   │   └── storage.service.js
│   │
│   └── app.js
│
├── .gitignore
├── package.json
├── package-lock.json
├── server.js
└── README.md
```

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/vermakanak/spotify-backend-api.git
```

### 2. Navigate to the project

```bash
cd spotify-backend-api
```

### 3. Install dependencies

```bash
npm install
```

## 🔐 Environment Variables

Create a `.env` file in the root directory and configure the environment variables required by the application.

```env
PORT=your_port
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint
```

> Never commit your `.env` file or credentials to GitHub.

## ▶️ Running the Project

### Development mode

```bash
npm run dev
```

### Production mode

```bash
npm start
```

The development command uses Nodemon to automatically restart the server when files change.

## 🏗️ Architecture

The backend follows a modular structure:

```text
Client Request
      ↓
    Routes
      ↓
  Middleware
      ↓
 Controllers
      ↓
Models / Services
      ↓
MongoDB / ImageKit
```

### Controllers

Contain the application logic for authentication and music-related operations.

### Models

Define MongoDB schemas for:

- Users
- Music
- Albums

### Routes

Define API endpoints and connect incoming requests to the appropriate controllers.

### Middleware

Handles authentication and protects routes that require a valid user.

### Services

Handles external functionality such as media storage.

## 🔒 Authentication Flow

```text
User Registration / Login
          ↓
   Authentication Route
          ↓
 Authentication Controller
          ↓
 Password Hash / Verification
          ↓
       JWT Token
          ↓
       Cookie
          ↓
 Protected API Routes
```

Passwords are hashed before being stored, while JWT tokens are used to authenticate protected requests.

## ☁️ Media Storage

The project uses **ImageKit** for media storage and **Multer** for handling uploaded files.

This keeps media storage separate from the application server and allows the backend to manage uploaded music-related assets through a dedicated storage service.

## 🎯 What I Practiced

This project helped me strengthen my understanding of:

- REST API development
- Node.js and Express.js
- MongoDB and Mongoose
- JWT authentication
- Password hashing
- Authentication middleware
- File uploads
- Cloud media storage
- MVC-style backend architecture
- Controller and service patterns
- Environment variable management

## 🚀 Future Improvements

- Playlist management
- Search functionality
- Favorites / liked songs
- Role-based authorization
- Improved API validation
- Centralized error handling
- API documentation with Swagger
- Automated API testing
- Deployment

## 👩‍💻 Author

**Kanak Verma**

- GitHub: [@vermakanak](https://github.com/vermakanak)
- LinkedIn: [Kanak Verma](https://www.linkedin.com/in/kanakverma13/)

## ⭐ Support

If you find this project useful, consider giving the repository a star.
