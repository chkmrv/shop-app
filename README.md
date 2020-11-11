#  My Books shop


## How to start

To run locally as developer please start two separated bash instances.

First instance (Server)
 - `cd server && npm install && npm run start`
 - this will start server on port 9000 which will power the API
   - if you have `process.env.PORT` set to something else, it will use that port but then you need to update
     manually `proxy` field in `frontend/package.json`.


Second instance (Frontend)
 - `cd frontend && npm install && npm run start`
 - this will start React frontend port `3000`
   - page access by url `/books`
   - main is AppView component as layout in `/src/routes/App/components/AppView`
   - data reducer `store/global-reducers/data-reducer`
 
 Test of modal component 
  - `cd frontend && npm install && npm run test`
  
## Information
I choose React Redux, since i have much more experties in this area.
Typescript will be better then propTypes. I didn't use it for a wile. So it's simple js.

To buy a Book and checkout handled by routes and book id.
It can be done another way for local or session storage, or event store it in context or redux store.
But I thought it's just the simplest way for a challenge.

I was focusing more on the functionality, so it's a lot to improve.
To add more tests, split code more for tools and methods. For the same reason of not enough time, I took material-UI.

For the server I took simple endpoints-example from `https://github.com/endpoints/endpoints-example`
In the end I realise url to the photos is broken, so i created one more `mock/photos.json`

