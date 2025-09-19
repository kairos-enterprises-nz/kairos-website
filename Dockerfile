# Multi-stage build
# Stage 1: Build the React application
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Stage 2: Serve with Caddy
FROM caddy:2-alpine

# Copy the built React app to Caddy's web root
COPY --from=builder /app/build /usr/share/caddy

# Copy Caddyfile
COPY Caddyfile /etc/caddy/Caddyfile

# Expose port 80
EXPOSE 80

# Caddy will automatically start with the Caddyfile 