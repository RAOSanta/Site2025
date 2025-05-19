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
