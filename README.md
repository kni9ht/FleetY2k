# FleetY2K

to run server with dev settings use `yarn dev`

build server with `yarn build`

start server with `yarn start`

start test with `yarn test`

<!-- # Notes: -->

## Tips to setup environment

1. Create DB
   > docker run --name mongodb-server -d -p 27017:27017 -e MONGO_INITDB_DATABASE=<DB name> -e MONGO_INITDB_ROOT_USERNAME=<DB user> -e MONGO_INITDB_ROOT_PASSWORD=<DB user password> mongo
