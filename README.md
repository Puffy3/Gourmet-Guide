


# Gourmet Guide

**Gourmet Guide** is a recipe management application built using the MERN stack (MongoDB, Express, React, Node.js). The app allows users to register, log in, browse through recipes, search for specific recipes, create their own recipes, and save their favorites.



## Features
- **User Authentication**: Users can register and log in securely.
- **Recipe Management**: Logged-in users can:
  - View listed recipes.
  - Search for specific recipes by name.
  - Create new recipes.
  - Save favorite recipes to their saved list.
- **Search Functionality**: Easily search recipes by keywords or ingredients.

## Tech Stack
- **Frontend**: React, React Router, Axios
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens) for user authentication
- **Additional Libraries**:
  - bcryptjs: For password hashing
  - mongoose: For MongoDB object modeling
  - dotenv: For environment variable management

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Puffy3/Gourmet-Guide.git
   ```

2. Navigate to the project directory:
   ```bash
   cd gourmet-guide
   ```

3. Install backend dependencies:
   ```bash
   cd backend
   npm install
   ```

4. Install frontend dependencies:
   ```bash
   cd ../frontend
   npm install
   ```

## Environment Variables

To run this project, you will need to add the following environment variables to your `.env` file in the `backend` directory:

```
MONGODB_URL=your-mongodb-url
PORT=your_port
```

Make sure your `.env` file is excluded from version control by adding it to `.gitignore`.

## Usage

### Running the Backend:
1. In the `backend` directory, start the server:
   ```bash
   npm run start
   ```



### Running the Frontend:
1. In the `frontend` directory, start the React development server:
   ```bash
   npm run start
   ```



### Fullstack Run:
Ensure both the frontend and backend servers are running simultaneously for the application to work correctly.



## Contributing

Contributions are welcome! To contribute:
1. Fork the project.
2. Create a new branch for your feature or bugfix.
3. Commit your changes.
4. Open a pull request.

