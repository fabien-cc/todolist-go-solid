# Use a node base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm

# Copy package.json and pnpm-lock.yaml to the container
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install

# Copy the rest of the project files
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Command to run the development server
CMD ["pnpm", "dev"]
