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

You can build and run the entire project in a Docker container:

```pwsh
# Build the Docker image
docker build -t roasanta2025 .

# Run the container
# (Maps backend port 3001 to your host)
docker run -p 3001:3001 roasanta2025
```

- The backend API will be available at http://localhost:3001
- The frontend static files are built and can be served separately if needed (e.g., with nginx or a static file server).

## MongoDB Integration

This project uses MongoDB as its database, running as a service within Docker Compose. The backend connects to MongoDB using the `MONGO_URL` environment variable, and the API is only accessible within the Docker network for security.

### Running with Docker Compose

```pwsh
docker compose up --build
```

- The backend API will be available to other containers at `http://localhost:3001`
- The frontend will be available at [http://localhost](http://localhost).
- MongoDB will be available to containers at `mongodb://mongo:27017/roasanta`.

To access MongoDB from your host for development, you can use the mapped port `27017`.

## Features
- Modern React + TypeScript frontend
- Node.js + Express + TypeScript backend
- API proxying for local development
- Ready for expansion to support multiple organisations

## Future Plans
- User authentication and roles
- Organisation management
- Admin dashboard
- Email notifications
- More!

---

For questions or to get involved, please contact the project maintainer.
