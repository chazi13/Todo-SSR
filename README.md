# Todo App

An app use Server Side Rendering with NextJS and React. Using prisma and graphQL as API provider and also use Docker for Container.

## Screenshots

![Screenshot_2019-09-10 Screenshot](https://user-images.githubusercontent.com/48378351/64611581-f8724080-d3fb-11e9-90ab-43651a3bca8f.png)



## Features

- Add new todo
- Toggle todo
- Edit todo
- Delete todo

## Tech Stack

- GraphQL and Prisma for API provider
- Apollo for communicate with API using GraphQL
- NextJS and React for server side rendering

## Prerequisites

- Make sure You had been install NodeJs in your system https://nodejs.org/
- You need Docker as container for this, you can read more [here](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-18-04)
- Dont forget Prisma for API provider https://www.prisma.io/docs

## Installation

follow these steps to install

### 1. Clone the repository 

```bash
git clone https://github.com/chazi13/Todo-SSR.git
cd Todo-SSR
```

### 2. Deploy to docker

```bash
$ docker-compose up -d
```

### 3. Deploy the prisma datamodel

```bash
$ prisma deploy
```

### 4. Install node package

```bash
// you can use yarn
$ yarn install
// or npm
$ npm install
```

### 5. Run the app

```bash
// you can use yarn
$ yarn run dev
// or npm
$ npm run dev
```

### 6. After all open the browser and copy the url form the command

## Support Me :)

  * Star this repository
  * Hire me [Muhamad Chairul Aziz](https://www.linkedin.com/in/muhamad-chairul-aziz/)

## Contact

  * WA/Telegram: +62 857 7423 7634
  * E-Mail: m.chairul669@gmail.com

