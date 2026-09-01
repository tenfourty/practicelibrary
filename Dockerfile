# Build+serve the practicelibrary gatsby site, mirroring the wahala
# home-services Dockerfile (node:20, gatsby build --prefix-paths,
# gatsby serve -H 0.0.0.0 :9000 under /practicelibrary) but building
# from THIS repo checkout instead of cloning GitHub.
FROM node:20.19.1
RUN npm install -g gatsby-cli
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
EXPOSE 9000
CMD ["npm", "run", "serve"]
