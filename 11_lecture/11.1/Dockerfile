FROM node:18-alpine AS builder
WORKDIR /11.1
COPY package*.json ./
RUN npm ci 
COPY ./src ./src



FROM node:18-alpine AS final

EXPOSE 3000
CMD ["npm", "start"]

