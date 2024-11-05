FROM node:23.0.0

WORKDIR /app-frontend

COPY package.json .

COPY package-lock.json .

RUN npm install

COPY  . .

EXPOSE 3000

CMD ["npm", "start"]


