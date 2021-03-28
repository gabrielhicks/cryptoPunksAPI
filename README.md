# CryptoPunks API Please leave a ⭐️ if found useful!

## Install

    yarn install

## Run the app

    yarn run dev

# Punks API

The REST API to the cryptopunks API is described below.

## Get list of Punks

### Request

`GET /punks/`

    http://localhost:1337/api/punks/

## Find punk by number (000-9999)

### Request

`GET /punks/:id`

    http://localhost:1337/api/punks/:id

## Data

The cryptoPunkData.json contains a complete 10,000 entry object including every CryptoPunk.

### Thanks to

Github User: [cryptopunksnotdead](https://github.com/cryptopunksnotdead/punks) for the csv data

Larva Labs: [Where](https://www.larvalabs.com/cryptopunks) it all started!
