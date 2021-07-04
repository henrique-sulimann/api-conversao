FROM node:14.16.1-alpine3.13
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./dist/ ./dist/
COPY ./swagger.yaml ./swagger.yaml
CMD [ "npm" , "start" ]