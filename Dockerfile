# Build Stage for Frontend
FROM node:20-alpine AS build-stage
ENV NODE_ENV=development
WORKDIR /app/client
COPY client/package*.json ./
RUN npm install
COPY client/ ./
RUN npm run build

# Production Stage
FROM node:20-alpine
WORKDIR /app

# Copy Backend
COPY server/package*.json ./server/
RUN cd server && npm install --production

COPY server/ ./server/

# Copy built frontend from build-stage to where the server expects it
COPY --from=build-stage /app/client/dist ./client/dist

# Set environment variables
ENV NODE_ENV=production
ENV PORT=5000

# Expose the application port
EXPOSE 5000

# Start command
CMD ["node", "server/index.js"]
