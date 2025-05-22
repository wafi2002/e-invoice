# 1. Use light node image
FROM node:24-alpine

# 2. Set working directory
WORKDIR /app

# 3. Copy package.json and package-lock.json
COPY . .

# 4. Install dependencies
RUN npm install

# 5. Open port 5000
EXPOSE 5001

# 6. Start the application
CMD ["npm", "run", "start:dev"]