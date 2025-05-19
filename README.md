# ROASanta 2025

This is a personal project for the Random Acts of Santa (ROASanta) service, hosted annually at my organisation. The goal is to expand the platform to allow additional organisations to participate in the future.

## Project Structure

- **frontend/**: React + TypeScript app (Vite)
  - User interface for participants and admins
  - Connects to backend API for data
- **backend/**: Node.js + Express + TypeScript API
  - Handles business logic and data
  - Provides REST API endpoints for the frontend

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm (comes with Node.js)

### Setup

1. **Clone the repository:**
   ```pwsh
   git clone https://github.com/RAOSanta/Site2025.git
   cd Site2025
   ```

2. **Install dependencies:**
   ```pwsh
   cd backend; npm install; cd ../frontend; npm install
   ```

3. **Run the backend:**
   ```pwsh
   cd ../backend
   npm run dev
   ```
   The backend server will start on http://localhost:3001

4. **Run the frontend:**
   ```pwsh
   cd ../frontend
   npm run dev
   ```
   The frontend will start on http://localhost:5173 and proxy API requests to the backend.

## Running with Docker

You can build and run the entire project (frontend and backend) in a single Docker container:

```pwsh
# Build the Docker image
docker build -t roasanta2025 .

# Run the container
docker run -p 3001:3001 roasanta2025
```

- The backend API and frontend will both be available at http://localhost:3001
- The backend serves API requests at `/api/*`
- All other routes serve the React app (client-side routing supported)

## Features
- Modern React + TypeScript frontend
- Node.js + Express + TypeScript backend
- API and frontend served from a single container
- Ready for expansion to support multiple organisations

## Future Plans
- User authentication and roles
- Organisation management
- Admin dashboard
- Email notifications
- More!

---

For questions or to get involved, please contact the project maintainer.
