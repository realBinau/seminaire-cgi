FROM node:22-alpine3.20

WORKDIR /usr/src/app

COPY package.json ./
COPY index.js ./

RUN npm install --omit=dev

CMD [ "npm", "start" ]
