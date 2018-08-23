# JavaScript Framework Roulette API

## Available Endpoints

`/random` - Returns a randomly-chosen framework from the `frameworks.json` list


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the API in the development mode.<br>
Open [http://localhost:5001](http://localhost:5001) to view it in the browser.


## Docker

To run in a local docker container, ensure Docker is installed. Clone this repository and run the following commands from the local directory:

```
docker build -t roulette-api .
```

```
docker run -it --name roulette-api --network roulette-net -p 5001:5001 roulette-api
```

When prompted, your API is available at `http://localhost:5001`.
