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

After the build is completed, the app is running on http://localhost:8000

## Solution Description

Backend project to expose some RESTful APIs to publish and Un-publish videos from  Students or Teachers creators.

### How it works

This solution uses an MVC architecture pattern style. I've created two main directories into src: `api` and `db`.

Into db directory there are 3 subdirectories: 
  1. Data access layer(dal): defines CRUD methods interacting with the database
  2. Models: defines the database entities.
  3. Services: communication layer between API controllers and DAL

Into api directory there are two main subdirectories:
  1. Controllers: it gets the payload from the route and maps the response from the services 
  2. Routes: defines the end point routes using express

#### APIs Usage

- List all published videos.

```bash
➜  ~ curl --request GET \
  --url http://localhost:8000/api/v1/videos/
```
```json
[{
  "id":1,
  "title":"Video 12",
  "url":"https://www.tiktok.com/@misodope/video/71882699",
  "description":"Funny video 12",
  "published":true,
  "createdAt":"2023-04-16T03:34:10.537Z",
  "updatedAt":"2023-04-16T04:09:21.295Z",
  "deletedAt":null
 },
 {
  "id":3,
  "title":"Video 21",
  "url":"https://www.tiktok.com/@misodope/video/34562456",
  "description":"Funny video 21",
  "published":true,
  "createdAt":"2023-04-16T04:09:55.833Z",
  "updatedAt":"2023-04-16T04:10:53.673Z",
  "deletedAt":null
 }]
```
- Edit a video
```bash
➜  ~ curl --request PUT \
  --url http://ip172-18-0-27-cgtmncae69v000ac7hrg-8000.direct.labs.play-with-docker.com/api/v1/videos/1 \
  --header 'Content-Type: application/json' \
  --data '{
  "url": "https://www.tiktok.com/@misodope/video/71882699"
}'
```
```json 
{
  "id":1,
  "title":"Video 12",
  "url":"https://www.tiktok.com/@misodope/video/71882699",
  "description":"Funny video 12",
  "published":false,
  "createdAt":"2023-04-16T03:34:10.537Z",
  "updatedAt":"2023-04-16T04:02:53.155Z",
  "deletedAt":null
}
```

- Publish / Unpublish a Video
```bash
curl --request PATCH \
  --url http://localhost:8000/api/v1/videos/1 \
  --header 'Content-Type: application/json' \
  --data '{
 "published": false
}'
```
```json 
{
  "id":1,
  "title":"Video 12",
  "url":"https://www.tiktok.com/@misodope/video/716990012",
  "description":"Funny video 12",
  "published":false,
  "createdAt":"2023-04-16T03:34:10.537Z",
  "updatedAt":"2023-04-16T04:01:11.727Z",
  "deletedAt":null
}
```

- Register a user, by default is Student set in the creatorType variable (1- Student, 2-Teacher). The password is clean up in the response and in the database is store a hased password. An access token is generated and it’s returmed in the variable cookie:

``` bash
➜  ~ curl --request POST \
  --url http://localhost:8000/api/v1/signup \
  --header 'Content-Type: application/json' \
  --data '{
 "name": "Tamara Sumita",
 "email": "tamisumiss@gmail.com",
 "password": "12345",
 "photoUrl": "photo_url_sumica",
 "creatorType": 2
}'
```
```json
{
  "id":1,
  "name":"Tamara Sumita",
  "email":"tamisumiss@gmail.com",
  "password":"",
  "photoUrl":"photo_url_sumica",  
  "cookie":"Authorization=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIxIiwiaWF0IjoxNjgxNjE3MDg4LCJleHAiOjE2ODE2MjA2ODh9.qpnnAIGHLuNEBVos1FPuey_xg21CEo404NrBEvL1GJQ; HttpOnly;
  Max-Age=3600",
  "creatorType":2,
  "createdAt":"2023-04-16T03:51:28.716Z",
  "updatedAt":"2023-04-16T03:51:28.716Z",
  "deletedAt":null
}
```
