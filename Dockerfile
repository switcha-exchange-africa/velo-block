FROM node:alpine
WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
COPY ./ ./
RUN yarn install
RUN npm run build
EXPOSE 4000
CMD ["npm", "run", "start"]