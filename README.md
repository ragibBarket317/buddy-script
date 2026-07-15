# BuddyScript — Full Stack Developer Assessment (Appifylab)

A social feed application built as part of the Full Stack Developer selection task for Appifylab. Users can register, log in, create posts (text + image, public/private), like/unlike posts, comment, reply, and see who has liked a post, comment, or reply.

> **Design note:** The original HTML/CSS design provided in the task was kept as-is. Only the markup and functionality were converted into React/Next.js components — no design changes were made.

---

## 🚀 Live Links

- **Live URL:** [https://buddy-script-puce-theta.vercel.app/]
- **API Base URL:** [https://buddy-script-server-nine.vercel.app/]
- **GitHub Repository:** [https://github.com/ragibBarket317/buddy-script]

---

## 🛠️ Tech Stack

**Frontend**
- Next.js (React)
- Axios (API calls)
- Plain CSS (from the provided design)

**Backend**
- Node.js + Express
- MongoDB with Mongoose
- JWT for authentication
- Multer + Cloudinary for image upload/storage
- bcrypt for password hashing

---

## ✨ Features

### Authentication & Authorization
- Register with first name, last name, email, and password
- Login with JWT-based authentication
- Protected `/feed` route — redirects unauthenticated users to `/login`

### Feed
- Create posts with text and/or image
- Posts sorted with the newest first
- Public and private post visibility
  - **Public:** visible to everyone
  - **Private:** visible only to the author
- Like / unlike posts, comments, and replies with correct state
- View who has liked a post, comment, or reply
- Comment on posts
- Reply to comments

---

## ⚙️ Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- A MongoDB instance (local or Atlas)
- A Cloudinary account (for image uploads)

### 1. Clone the repository
```bash
git clone <repo-url>
cd <repo-folder>
```

### 2. Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file in the `backend` folder:
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLIENT_URL=http://localhost:3000

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_SECRET_KEY=your_api_secret
```

Run the backend:
```bash
npm run dev
```

### 3. Frontend Setup
```bash
cd frontend
npm install
```

Create a `.env.local` file in the `frontend` folder:
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

Run the frontend:
```bash
npm run dev
```

The app will be available at `http://localhost:8080`.

---

## 🔑 API Overview

| Method | Endpoint                          | Description                     | Auth Required |
|--------|------------------------------------|----------------------------------|----------------|
| POST   | `/api/auth/register`              | Register a new user             | No             |
| POST   | `/api/auth/login`                 | Login and receive JWT           | No             |
| POST   | `/api/auth/logout`                | Logout                          | Yes            |
| GET    | `/api/auth/me`                    | Get current logged-in user      | Yes            |
| GET    | `/api/posts`                      | Get feed (public + own private) | Yes            |
| POST   | `/api/posts`                      | Create a post (text/image)      | Yes            |
| POST   | `/api/posts/:postId/like`         | Toggle like on a post           | Yes            |
| GET    | `/api/posts/:postId/likes`        | Get users who liked a post      | Yes            |
| GET    | `/api/posts/:postId/comments`     | Get comments on a post          | Yes            |
| POST   | `/api/posts/:postId/comments`     | Add a comment to a post         | Yes            |
| POST   | `/api/comments/:commentId/like`   | Toggle like on a comment        | Yes            |
| GET    | `/api/comments/:commentId/likes`  | Get users who liked a comment   | Yes            |
| GET    | `/api/comments/:commentId/replies`| Get replies to a comment        | Yes            |
| POST   | `/api/comments/:commentId/replies`| Add a reply to a comment        | Yes            |
| POST   | `/api/replies/:replyId/like`      | Toggle like on a reply          | Yes            |
| GET    | `/api/replies/:replyId/likes`     | Get users who liked a reply     | Yes            |

---

## 🧠 Key Decisions & Trade-offs

- **JWT over HttpOnly cookies:** Authentication was initially implemented using HttpOnly cookies for better protection against XSS. However, deploying the frontend and backend to free hosting platforms (e.g., Vercel) put them on different domains, which caused cross-domain/same-site cookie issues — cookies weren't being reliably sent. The auth strategy was switched to JWT (stored client-side and sent via the `Authorization` header) to work reliably across domains on free hosting. With more time/infra (a shared domain or a reverse proxy), HttpOnly cookie-based auth would be the preferred approach.
- **Separate like collections:** Likes for posts, comments, and replies are stored in separate collections, each with a unique compound index on `(target, user)`. This prevents duplicate likes and keeps like counts/toggles efficient even as data grows.
- **Indexing for scale:** Since the system is designed to handle millions of posts and reads, indexes were added on fields used for filtering and sorting — e.g., `(visibility, createdAt)` on posts, and `(post, createdAt)` / `(comment, createdAt)` on comments/replies — to keep feed and lookup queries fast.
- **No pagination (time constraint):** Due to time constraints, feed pagination was not implemented for this task, to keep the scope simple. The indexing strategy above is already in place so cursor-based pagination can be added on top without restructuring the schema.
- **Image storage:** Post images are uploaded via Multer (memory storage) and stored on Cloudinary, which also handles CDN delivery.
- **Password security:** Passwords are hashed using bcrypt before being stored.

---

## 🔒 Known Limitations / Future Improvements

- Add cursor-based pagination to the feed
- Move JWT storage to HttpOnly cookies (with a proper same-domain or proxy setup)
- Add server-side input validation (e.g., with Joi/Zod) in addition to frontend validation
- Add rate limiting on auth endpoints
- Add file type/size validation on image uploads

---
