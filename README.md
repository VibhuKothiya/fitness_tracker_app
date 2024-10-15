# Fitness Tracker API

## Objective
Develop a secure and efficient backend to manage user data, workout logs, and goal tracking.

## Features
1. **User Authentication**: 
    - Implement JWT for user authentication.
    - Create two roles: 
        - **Admin**: Can manage all users, create fitness programs, and view user statistics.
        - **User**: Can log workouts, set goals, and view their own progress.
2. **Workout Management**: 
    - Create CRUD API endpoints for:
        - **Workout Logs**: Users can log activities, update existing logs, and delete entries.
        - **Goals**: Users can set, update, and track weekly/monthly goals.
3. **Statistics Generation**: 
    - Generate workout statistics by date range, activity type, and goal achievement status.
    - Provide endpoints for data visualization (e.g., calories burned over time, types of workouts).
4. **Admin-Specific Functions**: 
    - Endpoints for admins to view aggregate statistics and manage users.
    - Admins can create and manage fitness programs accessible to all users.

## Technologies Used
- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose**
- **JWT (Json Web Token)**
- **bcryptjs**
- **Helmet**
- **CORS**

## Getting Started

### Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/VibhuKothiya/fitness_tracker_app.git
    cd fitness-tracker
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add the following environment variables:
    ```plaintext
    PORT = 5050
    MONGO_URI = mongodb://localhost:27017/fitness_tracker
    JWT_SECRET = Vibhuti
    ```

### Running the Application
1. Start the server:
    ```bash
    npm start
    ```

2. The server should be running on `http://localhost:5050`

### Deployment on Rendor
1. Create a rendor app:
    ```bash
    render create fitness_tracker_app
    ```

2. Add environment variables:
    ```bash
    rendor config:set JWT_SECRET=Vibhuti
    rendor config:set MONGO_URI=mongodb://localhost:27017/fitness_tracker
    ```

3. Deploy:
    ```bash
    git add -A
    git commit -m "fitness_tracker_app"
    git push render master
    ```

### API Endpoints

#### User Endpoints
- **Register User**: `POST /api/users`
    ```json
    {
      "name": "John Doe",
      "email": "john.doe@example.com",
      "password": "yourPasswordHere",
      "role": "User" // or "Admin"
    }
    ```
- **Login User**: `POST /api/users/login`
    ```json
    {
      "email": "john.doe@example.com",
      "password": "yourPasswordHere"
    }
    ```
- **Get User Profile**: `GET /api/users/profile` (Protected)
    ```http
    Authorization: Bearer <JWT_TOKEN>
    ```

### Live Deployment
Check out the live app [here](https://fitness_tracker_app.renderapp.com).


