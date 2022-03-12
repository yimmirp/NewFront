FROM node

WORKDIR /update-user

COPY package*.json ./

RUN npm install

COPY . /update-user

CMD [ "node", "src/index.js" ]

EXPOSE 3001