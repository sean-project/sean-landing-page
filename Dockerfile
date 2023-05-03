FROM node:lts-alpine
WORKDIR /app
COPY . /app
EXPOSE 3000
RUN npm i
RUN npm run build
CMD npm run start
