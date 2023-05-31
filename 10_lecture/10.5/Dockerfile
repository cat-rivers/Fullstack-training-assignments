FROM node:18-alpine
WORKDIR .
RUN apk add --update nodejs npm

COPY package*.json ./
RUN npm ci


COPY ./src ./src
COPY ./tsconfig.json ./tsconfig.json
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]

