# MERN Stack Blog App

This is a full-featured blog application built using the MERN stack (MongoDB, Express.js, React.js, Node.js) with additional technologies like Redux Toolkit for state management and Tailwind CSS for styling. The app includes features such as user authentication and authorization, an admin panel, light/dark theme switching, and the ability to comment on blog posts, like comments, search and sort blogs, and paginate the blog list.

## Features

- **User Authentication**: Secure user login and registration with password hashing.
- **User Authorization**: Role-based access control (Admin/Regular User).
- **Admin Panel**: Full access to manage blogs, users, and comments.
- **Light/Dark Theme**: Switch between light and dark themes for an enhanced UI experience.
- **Comment System**: Users can comment on blog posts.
- **Like Comments**: Ability to like comments on blog posts.
- **Blog Search**: Search for blog posts based on titles or content.
- **Blog Sorting**: Sort blogs by date, likes, or relevance.
- **Pagination**: Pagination support for blog listing for better performance and user experience.

## Tech Stack

- **Frontend**: React.js, Redux Toolkit, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **State Management**: Redux Toolkit
- **Authentication**: JSON Web Tokens (JWT)


## Screenshots :

### Home page

![Home page](./client/src/assets/blogScreenshots/homepage.png)

### Signup

![Signup](./client/src/assets/blogScreenshots/signup.png)

### Signin

![Signin](./client/src/assets/blogScreenshots/signin.png)

### Admin panel 
![Admin panel - Blog List](./client/src/assets/blogScreenshots/adminPanelBlogList.png)
![Admin panel - Comments](./client/src/assets/blogScreenshots/allComments.png)
![Admin panel - User List](./client/src/assets/blogScreenshots/allUserList.png)

### Comment 
![Comment](./client/src/assets/blogScreenshots/comment.png)

### Profile update
![Profile update](./client/src/assets/blogScreenshots/updateProfile.png)



## Getting Started

Follow these instructions to set up the project locally.

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

### Installation

1. Clone the repository:

   ````bash
   git clone https://github.com/your-username/mern-blog-app.git ```

   ````

2. Navigate to the project directory:

3. # For the backend

```bash
cd server
npm install
```

# For the frontend

```bash
cd ../client
npm install
```

3. Set up your .env varibales :

```
MONGO_URI=your-mongodb-uri
JWT_SECRET=your-jwt-secret
```

4. Run the application :

# Start the backend server

```
cd server
npm run dev
```

# Start the frontend development server

```
cd ../client
npm run dev
```
