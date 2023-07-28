
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
    **Content:** `{msg: `Error fetching data: ${error.message}`  
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
    **Content:** `{msg: `Error fetching data: ${error.message}`  

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
    **Content:** `{msg: `Error fetching data: ${error.message}`  

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
    **Content:** `{msg: `Error fetching data: ${error.message}`  

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
    **Content:** `{msg: `Error fetching data: ${error.message}`  


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
    **Content:** `{msg: `Error fetching data: ${error.message}`  

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
    **Content:** `{msg: `Error fetching data: ${error.message}`  

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
    **Content:** `{msg: `Error fetching data: ${error.message}`  

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
    **Content:** `{msg: `Error fetching data: ${error.message}`

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
    **Content:** `{msg: `Error fetching data: ${error.message}`  

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
    **Content:** `{msg: `Error fetching data: ${error.message}`  
