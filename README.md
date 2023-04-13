# video-creators
<p align="center">
  <a href="https://expressjs.com/" target="blank"><img src="http://wanago.io/express.png" width="320" alt="Express Logo" /></a>
</p>

## Description

Backend project to expose some RESTful APIs to publish and Un-publish videos from  Students or Teachers creators.

## Installation

```bash
npm install
```

## Running

```bash
npm run dev
```

## Testing

```bash
npm run test
```

## Using docker 

### Run the database container

```bash
docker compose up -d node_db
```
### Build the image based on our app
```bash
docker compose up --build
```