# VacTrack

> This is a full stack MERN PVR (Personal Vaccination Record) manager with React hooks, context & JWT authentication. It was modeled from the Udemy React-Front-To-Back course to review my final project at the University of Central Florida's Full Stack Web Developer Program.

- The the full MERN app can be found https://vactrac.herokuapp.com/
- The vactrack.org domain is currently pointing to https://vactrack.netlify.com/
- The API can be found https://github.com/doctoron/vactrack_api) with documented endpoints.

## Usage

The app utilizes a psuedo-separate backend and frontend configuration:

## Backend

- express: framework for handling web routing
- bcryptjs: handles hashing of passwords for authentication
- jsonwebtoken: authetication for protective routes on backend
- config: handles global variables
- express-validator: data validation
- mongoose: abstraction layer for CRUD and modeling
- nodemon: auto restarts server in development
- concurrently: runs multiple commands on command line

  Install dependencies

```bash
npm install
npm client-install
```

### Mongo connection setup

Edit your /config/default.json file to include the correct MongoDB URI

### Run Server

```bash
npm run dev     # Express & React :3000 & :5000
npm run server  # Express API Only :5000
npm run client  # React Client Only :3000
```
