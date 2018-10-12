FROM node:latest AS NODEJS

WORKDIR /usr/src/API

COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

EXPOSE 3000
CMD [ "npm", "start" ]
