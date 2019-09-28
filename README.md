# taller_mern

MERN: MongoDB + Express + Reach + Node

This is a small project that I have studied in this url:

https://www.youtube.com/watch?v=6B93HxW7VAk&list=PLkr7dGY4D2sOFts538pghxWaabulH2kMU&index=2


## How to Start a Project 

```console
$ npm init
$ npm i express --save 
```

## Run the Server 

```console
$ cd intro-mern-backend
$ node server.js 
``` 

## Some Best Practices  

### Standard Code 
This is really helpful to have homogeneous code:
```console
npm i --save-dev standard
``` 

### Library to Update the Server automatically 
This is helpful in dev time when a change is applied in the code, this library update the server automatically.
```console 
npm i --save-dev nodemon 
```

### Port Environment Configuration
This is really helpful for deploying services in order to control the port after each implementation of the code, this consists in create a `.env` file inside the folder, this file needs to be ignored by git, and in the deployment process needs to be set.

In order to config this we require to install dotenv plugin:
```console
$ npm i dotenv --save 
```
