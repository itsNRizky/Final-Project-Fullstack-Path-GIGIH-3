# **Backend Tokopedia Play Clone**

# How to Run Locally

Clone the project

```bash
  git clone https://github.com/itsNRizky/Final-Project-Fullstack-Path-GIGIH-3
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

# Database Structure

This server connected with Mongo DB with collections schema:

- Users
```
{
  _id: ObjectID
  username: string
  password: string
}
```

- Products
```
{
  _id: ObjectID,
  name: string,
  img: string,
  price: number,
  user_id: {
      type: ObjectID,
      ref: 'Users'
  }
}
```

- Videos
```
{
  _id: ObjectID,
  title: string,
  url: string,
  img: string,
  products: array,
  user_id: {
      type: ObjectID,
      ref: 'Users'
  }
}
```

- Comments
```
{
  _id: ObjectID
  value: string,
  timestamp: {
      type: date,
      default: Date.now
  },
  user_id: {
      type: ObjectID,
      ref: 'Users'
  },
  video_id: {
      type: ObjectID,
      ref: 'Videos'
  }
}
```

As you can see above, some of the collections related with other collections stated by having 'ref' means referencing to other collections.

# API Structure

Folders in this project:


    .
    ├── configs               *Contains all configuration for the server
    │   ├── mongodb.js        *Database Mongo DB configuration
    ├── controllers           *Contains all logics that will be sent to routes
    ├── middleware            *Handle request before enter routes/controllers
    ├── models                *Storing all schema from database
    ├── routes                *Endpoint to enter the server
    ├── .env                  *To store variable from outside
    ├── app.js                *Main app to run the server
    ├── package-lock.json
    ├── package.json
    └── README.md


# API List

#User \
**GET /users/**
----
  Returns all users.
* **URL Params**  
  None
* **Body Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:** 
* **Code:** 200  
  **Content:**
  ```
  [
    {
      "_id": String,
      "username": String,
      "password": String,
    },
    ...
  ]
  ``` 
* **Error Response:**  
  * **Code:** 500  
    **Content:** `{msg: Error fetching data: ${error.message}}`  
\
**GET /users/:id**
----
  Returns the specified user based on the id.
* **URL Params**  
  **REQUIRED** : `id=[string]`
* **Body Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:** 
* **Code:** 200  
  **Content:**
  ```
  [
    {
      "_id": String,
      "username": String,
      "password": String,
    },
    ...
  ]
  ``` 
* **Error Response:**  
  * **Code:** 500  
    **Content:** `{msg: Error fetching data: ${error.message}}` 

**POST /users/signin**
----
  Create new user document in database
* **URL Params**  
  None
* **Body Params**  
  **REQUIRED** :
  ```
  {
    "_id": String,
    "username": String,
    "password": String,
  },
  ```
* **Headers**  
  Content-Type: application/json  
* **Success Response:** 
* **Code:** 200  
  **Content:** `{msg: 'User created!!!'}`
* **Error Response:**  
  * **Code:** 500  
    **Content:** `{msg: Error fetching data: ${error.message}}` 

#Products \
**GET /products/**
----
  Return all products
* **URL Params**  
  None
* **Body Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:** 
* **Code:** 200  
  **Content:**
  ```
  [
      {
          "_id": String,
          "name": String,
          "img": String,
          "price": Number,
          "user_id": String
      },
      ...
  ]
  ```
* **Error Response:**  
  * **Code:** 500  
    **Content:** `{msg: Error fetching data: ${error.message}}` 

**GET /products/:id**
----
  Return specified product based on id
* **URL Params**  
  **REQUIRED** : `id=[string]`
* **Body Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:** 
* **Code:** 200  
  **Content:**
  ```
    {
        "_id": String,
        "name": String,
        "img": String,
        "price": Number,
        "user_id": String,
    }
  ```
* **Error Response:**  
  * **Code:** 500  
    **Content:** `{msg: Error fetching data: ${error.message}}` 
    
**POST /products/**
----
  Create product document.
* **URL Params**  
  None
* **Body Params**  
  **REQUIRED** :
  ```
  {
    "name": String,
    "img": String,
    "price": Number,
    "user_id": String
  }
  ```
* **Headers**  
  Content-Type: application/json  
* **Success Response:** 
* **Code:** 200  
  **Content:** `{msg: 'Product addedd!!!'}`
* **Error Response:**  
  * **Code:** 500  
    **Content:** `{msg: Error fetching data: ${error.message}}` 

**PUT /products/**
----
  Create product document.
* **URL Params**  
  None
* **Body Params**  
  **REQUIRED** :
  ```
  {
    "_id": String
    "name": String,
    "img": String,
    "price": Number,
  }
  ```
* **Headers**  
  Content-Type: application/json  
* **Success Response:** 
* **Code:** 200  
  **Content:** `{msg: 'Product updated!!!'}`
* **Error Response:**  
  * **Code:** 500  
    **Content:** `{msg: Error fetching data: ${error.message}}` 

**DELETE /products/:id**
----
  Create product document.
* **URL Params**  
  **REQUIRED** : `id=[string]`
* **Body Params**  
  **REQUIRED** :
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:** 
* **Code:** 200  
  **Content:** `{msg: 'Product deleted!!!'}`
* **Error Response:**  
  * **Code:** 500  
    **Content:** `{msg: Error fetching data: ${error.message}}` 


#Videos \
**GET /videos/**
----
  Return all videos
* **URL Params**  
  None
* **Body Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:** 
* **Code:** 200  
  **Content:**
  ```
  [
      {
          "_id": "String",
          "title": "String",
          "url": "String",
          "img": "String",
          "products": Array,
          "user_id": "String"
      },
      ...
  ]
  ```
* **Error Response:**  
  * **Code:** 500  
    **Content:** `{msg: Error fetching data: ${error.message}}` 

**GET /videos/:id**
----
  Return specified video based on id
* **URL Params**  
  **REQUIRED** : `id=[string]`
* **Body Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:** 
* **Code:** 200  
  **Content:**
  ```
    {
        "_id": "String",
        "title": "String",
        "url": "String",
        "img": "String",
        "products": Array,
        "user_id": "String"
    }
  ```
* **Error Response:**  
  * **Code:** 500  
    **Content:** `{msg: Error fetching data: ${error.message}}` 

**POST /users/videos**
----
  Return specified video based user's id
* **URL Params**  
  None
* **Body Params**  
  **REQUIRED** :
  ```
  {
    "id": String,
  },
  ```
* **Headers**  
  Content-Type: application/json  
* **Success Response:** 
* **Code:** 200  
  **Content:**
  ```
  [
    {
        "_id": "String",
        "title": "String",
        "url": "String",
        "img": "String",
        "products": Array,
        "user_id": "String"
    },
    ...
  ]
  ```
* **Error Response:**  
  * **Code:** 500  
    **Content:** `{msg: Error fetching data: ${error.message}}` 

**POST /videos/**
----
  Create video document
* **URL Params**  
  None
* **Body Params**  
  **REQUIRED** :
  ```
  {
    "title": "String",
    "url": "String",
    "img": "Striing",
    "products": Array,
    "user_id" : "String"
  }
  ```
* **Headers**  
  Content-Type: application/json  
* **Success Response:** 
* **Code:** 200  
  **Content:** `{msg: 'Video added!!!'}`  
* **Error Response:**  
  * **Code:** 500  
    **Content:** `{msg: Error fetching data: ${error.message}}` 

**PUT /videos/**
----
  Update video document
* **URL Params**  
  None
* **Body Params**  
  **REQUIRED** :
  ```
  {
    "title": "String",
    "url": "String",
    "img": "Striing",
    "products": Array
    "user_id" : "String"
  }
  ```
* **Headers**  
  Content-Type: application/json  
* **Success Response:** 
* **Code:** 200  
  **Content:** `{msg: 'Video updated!!!'}`  
* **Error Response:**  
  * **Code:** 500  
    **Content:** `{msg: Error fetching data: ${error.message}}` 

**DELETE /videos/**
----
  Delete video document
* **URL Params**  
  **REQUIRED** : `id=[string]`
* **Body Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:** 
* **Code:** 200  
  **Content:** `{msg: 'Video deleted!!!'}`  
* **Error Response:**  
  * **Code:** 500  
    **Content:** `{msg: Error fetching data: ${error.message}}` 

#Comment \
**GET /comments/**
----
  Return all comments
* **URL Params**  
  None
* **Body Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:** 
* **Code:** 200  
  **Content:**
  ```
  [
      {
          "_id": String,
          "value": String,
          "user_id": String,
          "video_id": String,
          "timestamp": Date,
      },
      ...
  ]
  ```
* **Error Response:**  
  * **Code:** 500  
    **Content:** `{msg: Error fetching data: ${error.message}}` 

**GET /comments/:id**
----
  Return specified comments based on video's id
* **URL Params**  
  **REQUIRED** : `id=[string]`
* **Body Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:** 
* **Code:** 200  
  **Content:**
  ```
  [
      {
          "_id": String,
          "value": String,
          "user_id": String,
          "video_id": String,
          "timestamp": Date,
      },
      ...
  ]
  ```
* **Error Response:**  
  * **Code:** 500  
    **Content:** `{msg: Error fetching data: ${error.message}}` 

**POST /comments/**
----
  Return specified comments based on video's id
* **URL Params**  
  None
* **Body Params**  
  **REQUIRED** :
  ```
  {
    "value": String,
    "user_id": String,
    "video_id": String"
  }
  ```
* **Headers**  
  Content-Type: application/json  
* **Success Response:** 
* **Code:** 200  
  **Content:** `{msg: 'Comment added!!!'}` 
* **Error Response:**  
  * **Code:** 500  
    **Content:** `{msg: Error fetching data: ${error.message}}` 
