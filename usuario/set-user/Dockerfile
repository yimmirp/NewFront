FROM node

WORKDIR /set-album

COPY package*.json ./

RUN npm install

COPY . /set-album

CMD [ "node", "src/index.js" ]

EXPOSE 3000