FROM node:latest

WORKDIR /src
COPY package*.json ./
RUN npm install --only=production
COPY . .
CMD [ "npm", "run" ]
