FROM alpine:latest AS builder
RUN apk add --update nodejs npm 
WORKDIR /10.8

COPY ./package*.json ./
COPY ./src ./src
COPY ./tsconfig.json ./tsconfig.json


RUN npm ci
RUN npm run build


FROM alpine:latest AS final
RUN apk add --update nodejs npm 

WORKDIR /10.8
COPY --from=builder 10.8/dist ./dist
COPY ./package*.json ./
RUN npm ci --production

EXPOSE 3000
CMD ["npm", "start"]
