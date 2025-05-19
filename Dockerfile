# Use an official Node.js runtime as a parent image
FROM node:18

# Set working directory
WORKDIR /app

# Copy backend files
COPY backend ./backend

# Install backend dependencies
WORKDIR /app/backend
RUN npm install && npm run build

# Copy frontend files
WORKDIR /app
COPY frontend ./frontend

# Install frontend dependencies and build
WORKDIR /app/frontend
RUN npm install && npm run build

# Expose backend port
EXPOSE 3001

# Start backend server
WORKDIR /app/backend
CMD ["npm", "start"]
