# Eatsy React UI

A React application to allow users to interact with the [Eatsy App Service](https://github.com/DM1st/eatsy) for finding, creating and sharing your favourite recipes.

[![Create and publish a Docker image](https://github.com/DM1st/eatsy-react-ui/actions/workflows/publish.yml/badge.svg)](https://github.com/DM1st/eatsy-react-ui/actions/workflows/publish.yml)

A live demo version of the Eatsy React UI is deployed on Render.com and can be found [here](https://eatsy-ui.onrender.com/). Please note, it uses free-tier services so will take a few minutes for the service to spin up.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and uses [Material UI](https://mui.com/).
The built Production Docker image of the Eatsy React UI can be found on DockerHub [here](https://hub.docker.com/r/dm1st/eatsy-react-ui-docker)

## Getting started

The easiest way to deploy your own instance of the application is by using the built Production Docker image of the Eatsy React UI found on Dockerhub. To utilise this:

- Transfer the `docker-compose.prod.dockerhub.yml` file (from the project root) to the machine where you will be deploying the service. Your machine will need Docker and Docker-Compose installed as the only pre-requisites.
- Run the following command in the directory where you have placed the docker-compose.prod.dockerhub.yml file to spin up the Docker Container and run the Image:

```
docker-compose -f docker-compose.prod.dockerhub.yml up -d
```

For future deployments, explicitly check the dockerhub repository to ensure you are building the image with the latest changes:

```
docker pull dm1st/eatsy-react-ui-docker && docker-compose -f docker-compose.prod.dockerhub.yml up -d
```

Once complete, navigate to *http://<your_machine_local_host>:1337* to view the service. 

However, if required, there are other Docker file options and further guidance in the 'Additional deployment options' section to deploy Eatsy React UI locally or with a development docker instance.

## Available Scripts for building the React App locally

*Pre-requisities: npm will need to be installed*

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## Additional Docker deployment options

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
Once complete, navigate to http://<your_machine_local_host>:3001 to view the service.

For the above command: 
- docker run creates and runs a new container instance from the image.
- `-it` starts the container in interactive mode. (react-scripts exits after start-up which will cause the container to exit, therefore interactive is needed).
- `-rm` removes the container and volumes after the container exits
- `-v ${PWD}:/app \` mounts the contaner at "/app"
- we need to use the container version of "node_modules" so configure a volume with `-v /app/node_modules`
- `-p 3001:3000` exposes port 3000 to other Docker containers on the same network (for inter-container communication) and port 3001 to the host.
- `-e CHOKIDAR_USEPOLLING=true` enables a polling mechanism via chokidar (which wraps fs.watch, fs.watchFile, and fsevents) so that hot-reloading will work.

### Option 2) Using docker-compose for a dev Docker image (app hot-reload)

Spin up: `docker-compose up -d --build`

Once complete, navigate to http://<your_machine_local_host>:3001 to view the service.

Spin down: `docker-compose stop`

### A separate dockerfile exists for use in production.

### Option 3) Using the production Dockerfile, 

Build and tag the Docker image: `docker build -f dockerfile.prod -t react-ui:prod .`

Spin up the container: `docker run -itd --rm -p 1337:80 react-ui:prod`

Once complete, navigate to http://<your_machine_local_host>:1337 to view the service.

Remove the d from the `-itd` flag if you wish to not run the container in detached mode.

- This (dockerfile.prod) is the dockerfile that is used to deploy the application on Render.com

### Option 4) Using docker-compose for the prod docker image

Spin up: `docker-compose -f docker-compose.prod.yml up -d --build`

Once complete, navigate to http://<your_machine_local_host>:1337 to view the service.

Spin down: `docker-compose down`