FROM node:alpine
WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
COPY ./ ./
RUN npm i
RUN npm run build
EXPOSE 4000
CMD ["npm", "run", "start"]