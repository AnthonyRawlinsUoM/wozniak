FROM node:alpine
MAINTAINER Anthony Rawlins <anthony.rawlins@unimelb.edu.au>

# Make working dir
WORKDIR /usr/src/app

COPY package.json .
COPY package-lock.json .
RUN npm i -g npm
RUN npm install --no-optional
ADD VERSION .
COPY . .

# Deployment
EXPOSE 3000

ENV TZ Australia/Melbourne

# EXPOSE 4200
CMD ["node", "app.js"]