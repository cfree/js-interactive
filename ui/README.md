# JavaScript Framework Roulette UI

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app), then ejected.

In development mode, WebpackDevServer is used to serve the app and proxy API requests. In production mode, the app instead relies on a custom Express application.


## Available Scripts

In the project directory, you can run:

### `yarn dev`

Runs both the UI and server in development mode.<br>


### `yarn start:client`

Runs only the UI in development mode.<br>


### `yarn start:server`

Runs only the server in development mode.<br>


### `yarn start`

Runs the app in the production mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.


### `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

## Docker

To run in a local docker container, ensure Docker is installed. Clone this repository and run the following commands from the local directory:

```
docker build -t roulette-ui .
```

```
docker run -it -e API_URL="roulette-api" -e API_PORT="5001" --name roulette-ui --network roulette-net -p 5000:5000 roulette-ui
```

When prompted, visit `http://localhost:5000` in your browser.
