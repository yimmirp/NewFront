FROM node

WORKDIR /set-user

COPY package*.json ./

RUN npm install

COPY . /set-user

CMD [ "node", "src/index.js" ]

EXPOSE 3000