FROM node

WORKDIR /get-user

COPY package*.json ./

RUN npm install

COPY . /get-user

CMD [ "node", "src/index.js" ]

EXPOSE 3002