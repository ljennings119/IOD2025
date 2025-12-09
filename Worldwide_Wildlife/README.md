Worldwide Wildlife – Full Stack 

------Description------

Worldwide Wildlife is a full-stack MERN-style web application that allows users to:

Sign up and log in

Create, read, update, and delete wildlife-related posts

View educational pages about unique animals

Access a protected "Cool Facts" page using a third-party API

The purpose of this project is to reinforce backend–frontend integration, database connections, authentication, CRUD operations, and clean MVC structure.

This project builds on concepts covered in Modules 8 and 9.


------Tech Stack------
Frontend
React 
React Router
Bootstrap
AOS animations
Backend
Node.js
Express.js (MVC structure)
Database
MongoDB & Mongoose
Authentication
JWT (JSON Web Tokens)
Protected Routes (backend + frontend)
External API
some-random-api.ml – used for the Cool Facts protected page


-------Architecture Overview------
Frontend (React)

--Located in /frontend--
Contains:

/components — reusable UI components

/pages — Axolotl, Platypus, Black Panther, Secretary Bird

/Auth — Login, Signup

/ProtectedRoute — protects pages using JWT

Backend (Express)


--Located in /backend--
Follows MVC structure:

Models

User.js

Post.js

Controllers

authController.js

postController.js

Routes

/api/auth

/api/posts

Config

MongoDB connection

.env for secrets and DB URLs

Request Flow

React → Express API → MongoDB → Express Response → React UI Update


------User Stories------
Core CRUD (Posts)

 As a user, I want to create a wildlife post so I can share info or photos.
 As a user, I want to read wildlife posts so I can explore community content.
 As a user, I want to update my own posts so I can correct or improve them.
 As a user, I want to delete my posts so I can remove things I no longer want displayed.

Authentication

 As a new user, I want to sign up so I can create my own wildlife posts.
 As a returning user, I want to log in securely using my credentials.
 As a user, I want protected pages that only load if I'm logged in.

Stretch Stories

 As a user, I want to see random wildlife facts from an external API.
 As a user, I want to comment on posts.
 As a user, I want persistent data stored in the database.


------Getting Started------
Prerequisites
Node.js 
npm
MongoDB 

------Installation------
1. Clone the repository
git clone <your-repo-url>
cd project-root

2. Install backend dependencies
cd src/backend
npm install

3. Install frontend dependencies
cd ../frontend
npm install

------Environment Variables------

Create a .env file in /backend:

PORT=5000
MONGODB_URI=mongodb://localhost:27017/worldwide-wildlife
JWT_SECRET=supersecretjwtkey
NODE_ENV=development

------Running the Application------
Start the Backend
cd src/backend
npm run dev


Backend runs on:

http://localhost:5000

Start the Frontend
cd src/frontend
npm start


Frontend runs on:

http://localhost:5173  (or similar Vite port)

------API Endpoints (CRUD & Auth)------
Auth
Method	Endpoint	Description
POST	/api/auth/register	Register a user
POST	/api/auth/login	Login + token
GET	/api/auth/me	Get user
Posts (CRUD)
Method	Endpoint	Description
POST	/api/posts	Create a post
GET	/api/posts	Read all posts
PUT	/api/posts/:id	Update own post
DELETE	/api/posts/:id	Delete own post

A valid JWT must be included in:

Authorization: Bearer <token>

------CRUD Testing Summary (Postman)------
1. Create Post – POST
POST /api/posts
{
  "title": "My First Post",
  "description": "This is a post about wildlife.",
  "imageUrl": "http://example.com/my-image.jpg"
}

2. Read Posts – GET
GET /api/posts

3. Update Post – PUT
PUT /api/posts/:id
{
  "title": "Updated Wildlife Post",
  "description": "This is a post about wildlife.",
  "imageUrl": "http://example.com/new-image.jpg"
}

4. Delete Post – DELETE
DELETE /api/posts/:id

------Third-Party API (Cool Facts)------

The protected "Cool Facts" page fetches data from:

https://some-random-api.ml/facts/<animal>


Only accessible with valid login token.

------Stretch Goals------

User comments on posts
User profile page
Additional wildlife categories
Image uploads
Admin dashboard

------Conclusion------

Worldwide Wildlife demonstrates a complete full-stack workflow:

React frontend
Express backend
MongoDB database
Authentication
CRUD operations
External API integration

This project showcases modern web development best practices and reinforces full-stack principles taught in the course.