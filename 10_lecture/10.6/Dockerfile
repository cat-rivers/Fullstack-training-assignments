FROM node:18-alpine
WORKDIR .
RUN apk add --update nodejs npm

COPY package*.json ./
COPY ./src ./src
COPY ./tsconfig.json ./tsconfig.json

RUN npm ci \
&& npm run build \
&& rm -rf ./node_modules \
&& npm ci --production



EXPOSE 3000
CMD ["npm", "start"]

