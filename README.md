# Eatsy React UI

A React application to allow users to interact with the [Eatsy App Service](https://github.com/DM1st/eatsy) to for creating, viewing, editing and deleting your favourite recipes.

[![Create and publish a Docker image](https://github.com/DM1st/eatsy-react-ui/actions/workflows/publish.yml/badge.svg)](https://github.com/DM1st/eatsy-react-ui/actions/workflows/publish.yml)

A live demo version of the Eatsy React UI is deployed on Render.com and can be found [here](https://eatsy-ui.onrender.com/). Please note, it uses free-tier services so will take a few minutes for the service to spin up.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and the built Production Docker image of the Eatsy React UI can be found on DockerHub [here](https://hub.docker.com/r/dm1st/eatsy-react-ui-docker)

## Getting started

The easiest way to deploy your own instance of the application is by using the built Production Docker image of the Eatsy React UI found on Dockerhub. To utilise this:

- Transfer the `docker-compose.prod.dockerhub.yml` file (from the project root) to your machine where you will be running the service. Your machine will need Docker and Docker-Compose installed.
- Run the following command in the directory where you have placed the docker-compose.prod.dockerhub.yml file to run the application:

```
docker-compose -f docker-compose.prod.dockerhub.yml up -d
```

However, if required, there are other Docker file options to deploy your own instance via Docker:


### Option 1) Build and Tag a dev Docker image (app hot-reload)

`docker build -t react-ui:dev .`

Then, spin up the container once the build is done:

```
docker run \
    -it \
    --rm \
    -v ${PWD}:/app \
    -v /app/node_modules \
    -p 3001:3000 \
    -e CHOKIDAR_USEPOLLING=true \
    react-ui:dev
```
For the above command: 
- docker run creates and runs a new container instance from the image.
- `-it` starts the container in interactive mode. (react-scripts exits after start-up which will cause the container to exit, therefore interactive is needed).
- `-rm` removes the container and volumes after the container exits
- `-v ${PWD}:/app \` mounts the contaner at "/app"
- we need to use the container version of "node_modules" so configure a volume with `-v /app/node_modules`
- -p 3001:3000 exposes port 3000 to other Docker containers on the same network (for inter-container communication) and port 3001 to the host.
- `-e CHOKIDAR_USEPOLLING=true` enables a polling mechanism via chokidar (which wraps fs.watch, fs.watchFile, and fsevents) so that hot-reloading will work.

### Option 2) Using docker-compose for a dev Docker image (app hot-reload)

Spin up: `docker-compose up -d --build`

Spin down: `docker-compose stop`

### A separate dockerfile exists for use in production.

### Option 3) Using the production Dockerfile, 

Build and tag the Docker image: `docker build -f dockerfile.prod -t react-ui:prod .`

Spin up the container: `docker run -it --rm -p 1337:80 react-ui:prod`

- This is the dockerfile that is used to deploy the application on Render.com

### Option 4) Using docker-compose for the prod docker image

Spin up: `docker-compose -f docker-compose.prod.yml up -d --build`

Spin down: `docker-compose stop`

## Available Scripts for building the React App locally

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)