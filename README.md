# Learning Management System (LMS)

A modern learning management system built with the MERN stack (MongoDB, Express.js, React, Node.js) that enables course creation, management, and student learning experiences.

## 🚀 Features

- **Authentication & Authorization**
  - User registration and login
  - JWT based authentication
  - Role-based access control (Admin, Instructor, Student)

- **Course Management**
  - Create, edit, and delete courses
  - Upload course materials (videos, documents)
  - Course progress tracking
  - Course enrollment system

- **User Management**
  - Profile management
  - Update user information
  - Role management

- **Media Management**
  - Cloudinary integration for media storage
  - Support for various file types
  - Secure file upload and retrieval

## 🛠️ Tech Stack

### Frontend
- React.js with Vite
- Redux Toolkit for state management
- RTK Query for API calls
- Tailwind CSS for styling
- Shadcn UI components

### Backend
- Node.js & Express.js
- MongoDB with Mongoose
- JWT for authentication
- Cloudinary for media storage

## 📁 Project Structure

```
LMS/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── features/      # Redux features
│   │   ├── pages/        # Page components
│   │   └── app/          # Redux store setup
│   └── public/           # Static files
│
├── server/                # Backend Node.js application
│   ├── controllers/      # Request handlers
│   ├── models/          # MongoDB models
│   ├── routes/          # API routes
│   ├── middleware/      # Custom middleware
│   └── config/         # Configuration files
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn
- Cloudinary account

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/lms.git
cd lms
```

2. **Install dependencies**
```bash
# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
```

3. **Environment Variables**

Create `.env` file in server directory:
```env
PORT=8080
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

Create `.env` file in client directory:
```env
VITE_API_URL=http://localhost:8080/api/v1
```

4. **Start the application**
```bash
# Start server (from server directory)
npm run dev

# Start client (from client directory)
npm run dev
```

## 📚 API Endpoints

### Auth Routes
- `POST /api/v1/user/register` - Register new user
- `POST /api/v1/user/login` - Login user
- `GET /api/v1/user/logout` - Logout user

### Course Routes
- `GET /api/v1/course` - Get all courses
- `POST /api/v1/course` - Create new course
- `PUT /api/v1/course/:id` - Update course
- `DELETE /api/v1/course/:id` - Delete course

### User Routes
- `GET /api/v1/user/profile` - Get user profile
- `PUT /api/v1/user/profile/update` - Update user profile

## 🔒 Security Features

- Password hashing
- JWT authentication
- Protected routes
- Input validation
- CORS configuration

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- (https://github.com/vishaldjagdale)

## 🙏 Acknowledgments

- Shadcn UI for component library
- Cloudinary for media storage
- MongoDB Atlas for database hosting
