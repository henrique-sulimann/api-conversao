FROM node:14.16.1-alpine3.13
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./dist/ ./dist/
CMD [ "npm" , "start"]