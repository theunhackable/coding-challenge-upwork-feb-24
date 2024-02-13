# Challenge-2

Created a basic HTTP server using Node.js that handles web requests using express.js.

## Dependencies

- express.js - framework to create http requests
- morgan - for logging
- nodemon - for hot reloading during development

## Assumptions

I assumed that:

- I need to send in the json response for the requests from `/` and `/about` routes.
- I only need to handle the `GET` method request.

## How to run server ?

- Assuming that you are on the `/challenge-2` directory:

Install the dependencies:

> npm ci

To Start the server:

> npm start

Output: 
```bash


> challenge-2@1.0.0 start
> node index.js

Running on http://localhost:4000

```
To run in dev mode which will start a nodemon session:

> npm run dev

Output: 

``` bash

> challenge-2@1.0.0 dev
> nodemon

[nodemon] 3.0.3
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting `node index.js`
Running on http://localhost:4000
```

> Note: If you got into any error because of the port change the port assigned to the PORT variable in [index.js](/challenge-2/index.js). I could have used .env file but it will be an overkill for this project.


## Testing 

- Open your browser and copy paste the url that looks like `http://localhost:[PORT]` and try to visit `/` and `/about` pages.
- You can also use `postman` like tools to make a get request.