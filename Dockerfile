# Dockerfile for Design Quest backend (server.js)
FROM node:20-alpine

# Create app directory
WORKDIR /usr/src/app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm ci --production

# Copy app source
COPY . .

# Expose port and default env
ENV PORT=3001
EXPOSE 3001

# Run the server
CMD ["node", "server.js"]
