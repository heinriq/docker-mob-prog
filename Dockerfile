FROM node:12.18.1

WORKDIR /app
COPY app.js ./
COPY packag*.json ./

RUN npm install
RUN ["node", "app.js"]