FROM node
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
EXPOSE 443
EXPOSE 80
CMD [ "npm", "start" ]