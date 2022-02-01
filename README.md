# ReactJS Boilerplate

## 🚀 About Me

**Name:** Walid Hawari
**Email:** walidhawari95@gmail.com
**Github Username:** [whawari](https://github.com/whawari)
**Linkedin Username:** [walid hawari](https://www.linkedin.com/in/walid-hawari-ba35a820b)

## Tech Stack

**Client:** React, i18next

## Prerequisite

**To run this project in a non development environment:**

- Create a `.env` file in the project root directory.
- Copy the content of `.env.example` file, located in the project root directory, to the created `.env` file.

The `REACT_APP_TRANSLATION_URL` value must be the frontend base url that points to the public folder.

**To run this project in a development environment:**

- Create a `dev.js` file under the following directory `/src/config`.
- Copy the content of `dev.example` file located under the `/src/config` directory to the created `dev.js` file.

The `translationUrl` value must be an empty string.

## Run Locally

> **_Note:_** Make sure that you have followed the prerequisite to run the project in a development environment.

Install dependencies

```bash
  npm ci
```

Start the server

```bash
  npm start
```

## Deployment

> **_Note:_** Make sure that you have followed the prerequisite to run the project in a non development environment.

### Static server

Globally install `serve` library

```bash
  npm install -g serve
```

Install dependencies

```bash
  npm ci
```

Load environment variables using the Bash Source Command

```bash
  source .env
```

Create a build directory

```bash
  npm run build
```

Serve the project

```bash
  serve -s build
```

Check the link below for more deployment details

[Create react app deployment](https://create-react-app.dev/docs/deployment/)

### Remote server

Install dependencies

```bash
  npm ci
```

Load environment variables using the Bash Source Command

```bash
  source .env
```

Create a build folder

```bash
  npm run build
```
