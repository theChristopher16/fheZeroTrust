FROM node

WORKDIR /app
COPY package*.json ./
RUN npm install --only=production
COPY . .
RUN npm run build
CMD [ "HOST=0.0.0.0", "npm", "start" ]
