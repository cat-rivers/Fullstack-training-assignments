FROM node:18-alpine AS builder

RUN  apk add --update nodejs npm
COPY ./package*.json ./
COPY ./src ./src
COPY ./tsconfig.json ./tsconfig.json


RUN npm ci
RUN npm run build


FROM node:18-alpine AS final
RUN apk add --update nodejs npm 

COPY --from=builder ./dist ./dist
COPY ./package*.json ./
RUN npm ci --production

EXPOSE 3000
CMD ["npm", "start"]
