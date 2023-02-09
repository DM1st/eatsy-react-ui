# Eatsy React UI

A React application to allow users to interact with the [Eatsy API](https://github.com/DM1st/eatsy) for finding, creating and sharing your favourite recipes.

[![Create and publish a Docker image](https://github.com/DM1st/eatsy-react-ui/actions/workflows/publish.yml/badge.svg)](https://github.com/DM1st/eatsy-react-ui/actions/workflows/publish.yml)

A live demo version of the Eatsy React UI is deployed on Render.com and can be found [here](https://eatsy.onrender.com/). Please note, it uses free-tier services so will take a few minutes for the [Eatsy API](https://github.com/DM1st/eatsy) to spin up.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) for simplicity and uses [Material UI](https://mui.com/).
The built Production Docker image of the Eatsy React UI can be found on DockerHub [here](https://hub.docker.com/r/dm1st/eatsy-react-ui-docker)

## Getting started

### Available Scripts for building the React App locally

_Pre-requisities: npm will need to be installed_

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## Project Configuration

As mentioned above, This application has been bootstrapped using Create React App for simplicity reasons. However, it also uses [CRACO](https://github.com/dilanx/craco) (**C**reate **R**eact **A**pp **C**onfiguration **O**verride) as a configuration layer for create-react-app so that customisations can be made such as Absolute imports (mentioned below).

### ESLint

ESLint has been used to ensure the application adheres to the specific configuration defined in the `.eslintrc.js` file, to reduce mistakes and enforce consistency in the codebase.

### Prettier

Prettier has been used for formatting code and enforcing a consistent code style across the entire codebase with "format on save". Configuration is provided in the `.prettierrc` file.

### Absolute imports

Absolute imports have been configured and used for importing features within other components because it makes it easier to move files around and avoids messy import paths such as `../../../Component`. Wherever you move the file, all the imports will remain intact. This has been configured by `jsconfig.json`. Please note, two additional config files are also required to stop Create-React-App overriding it, `jsconfig.paths.json` and `craco.config.js`.

An example of how absolute imports is used to provide better codebase organisation can be seen with Features in the below `Project Structure` section.

## Project Structure

Most of the code lives in the `src` folder and looks like this:

```sh
src
|
+-- api               # exported API request declarations for this UI
|
+-- assets            # assets folder contains all the static files such as images etc.
|
+-- components        # shared components used across the entire application
|
+-- config            # all the global configuration, env variables etc. get exported from here and used in the app
|
+-- features          # feature based modules
|
+-- hooks             # shared hooks used across the entire application
|
+-- themes            # shared gloabl themes/styles
```

In order to scale the application in an easy and maintainable way, most of the code is kept inside the `features` folder, which contains domain specific code for a given feature. This allows functionalities to be scoped to a feature and not mix its declarations with shared things (rather than maintaining a flat folder structure with many files).

A feature in this codebase typically has the the following structure:

```sh
src/features/typical-feature
|
+-- themes      # contains all the themes and styling files for a specific feature
|
+-- components  # components scoped to a specific feature
|
+-- hooks       # hooks scoped to a specific feature
|
+-- contexts    # Provides the contexts for a specific feature
|
+-- index.js    # entry point for the feature, it serves as the public API of the given feature and exports anything that needs to be used outside of the feature
```

Everything from a feature can only be exported from its respective `index.js` file which behaves as the public API of the feature.

You import stuff from other features only by using:

`import {SomeComponent} from "@/features/some-feature"`

and not

`import {SomeComponent} from "@/features/some-feature/components/SomeComponent`

This has been configured in the ESLint configuration to disallow the later import by the following rule:

```js
{
    rules: {
        'no-restricted-imports': [
            'error',
            {
                patterns: ['@/features/*/*'],
            },
        ],

    // ...rest of the configuration
}
```

## Deployment (via Docker)

### Utilise Dockerhub image

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

Once complete, navigate to _http://<your_machine_local_host>:1337_ to view the service.

To spin down the service: `docker-compose -f docker-compose.prod.dockerhub.yml down`

However, if required, there are other Docker file options and further guidance in the 'Additional deployment options' section to deploy Eatsy React UI locally or with a development docker instance.

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

Spin down: `docker-compose -f docker-compose.prod.yml down`

## TODO

- Integrate with the Eatsy API
- AddMethod feature
- Share feature
- Edit feature
- Add Image feature
- Full unit test coverage
- Add Google shopping list integration
- Add the concept of users
- Add component test pack
