# Optional Dockerfile for Express backend
FROM node:18-alpine
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci || npm install
COPY . .
EXPOSE 5000
CMD ["npm", "start"]

