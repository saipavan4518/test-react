FROM node:latest

WORKDIR /app

COPY package*.json ./

COPY yarn*.lock ./

RUN npm install

COPY . .

CMD ["yarn", "start"]

