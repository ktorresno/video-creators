# NicaSource FSD Assessment

## Getting Started

### Step 1: Prerequisites
To run this application you'll need `docker` and `docker compose` previously installed and running on your computer.

### Step 2: Get and configure the app
- To get the app, choose a folder in your computer an execute:

  ```bash 
  git clone https://github.com/ktorresno/video-creators.git
  cd video-creators
  ```

- Create a copy of the `docker.env.example` removing .example then edit the values for database name, username and password. This is information will be used to configure the Postgres database.

  ```bash
  mv docker.env.example docker.env
  ```

- Create a copy of the `dotenv.example` and rename it to `.env` then edit the values to match the database name, username and password defined in the previous step. Finally generate a secure random string to use in `JWT_SECRET` variable as salt for token generation.

  ```bash 
  mv dotenv.example .env
  ```
  
### Step 3: Build the Docker service
Once the code is ready, let's build the docker images and lunch the containers running the app. For that just run:

  ```bash
  docker compose up --build
  ```

After the build completes, the app is running on http://localhost:8000

## Solution Description

Backend project to expose some RESTful APIs to publish and Un-publish videos from  Students or Teachers creators.
