# FleetY2K

to run server with dev settings use `npm run dev`

build server with `npm run build`

start server with `npm start`

start test with `npm run test`

<!-- # Notes: -->

## Tips to setup environment

1. Create DB
   > docker run --name mongodb-server -d -p 27017:27017 -e MONGO_INITDB_DATABASE=<DB name> -e MONGO_INITDB_ROOT_USERNAME=<DB user> -e MONGO_INITDB_ROOT_PASSWORD=<DB user password> mongo