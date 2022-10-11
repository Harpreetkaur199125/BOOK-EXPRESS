# bookexpress

## Installation & Running locally

##### Backend

Navigate to the backend folder

```js
cd backend
```

Install the dependecies

```js
yarn install
```

start the backend using,

```js
yarn dev:backend
```

##### Frontend

Navigate to the frontend folder

```js
cd frontend
```

Install the dependencies

```js
yarn install
```

start the react app using

```js
yarn start
```

## Features

### Backend

- get books
- get a book
- create/publish a book
- update a book
- delete a book
- wishlist a book
- subscribe a book
- search a book
- get author of the book
- get wishlist of a user
- get subscription list of a user

### Frontend

- Authentication using Auth0
- Pages
  - Homepage
  - Wishlist
  - Subscription
  - Publish book

.get('/api/users/:id', getUser)
.get('/api/users/wishlist/:id', getUserWishList)
.get('/api/users/subscribed/:id', getUserSubscribedList)

### Endpoints

| endpoint                    | method   | Body            | Description                    |
| --------------------------- | -------- | --------------- | ------------------------------ |
| `/api/books`                | `GET`    |                 | Get all books                  |
| `/api/books`                | `POST`   | values obj      | Publish a book                 |
| `/api/books/:id`            | `GET`    |                 | Get a book                     |
| `/api/books/:id`            | `PATCH`  |                 | Update a book                  |
| `/api/books/:id`            | `DELETE` |                 | Delete a book                  |
| `/api/books/wishlist/:id`   | `PATCH`  | {userId: "..."} | Wishlist a book                |
| `/api/books/subscribe/:id`  | `PATCH`  | {userId: "..."} | Subscribe a book               |
| `/api/users/:id`            | `GET`    |                 | Get a user                     |
| `/api/users/wishlist/:id`   | `GET`    |                 | Get a user's wishlist          |
| `/api/users/subscribed/:id` | `GET`    |                 | Get a user's subscription list |
