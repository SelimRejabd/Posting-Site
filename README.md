# Posting-Site

## Setup and Run Instructions

### 1. Clone the Repository

git clone https://github.com/SelimRejabd/Posting-Site.git
cd Posting-Site

### 2.Install Dependencies

npm install

### 3. connect mongodb database

### 4. Build and Run the Application

npm run start:dev

## 🚀 API Endpoints

### 🔹 Authentication
- **POST** `/api/auth/register` - Register a new user  
- **POST** `/api/auth/login` - Authenticate user & return JWT  

### 🔹 Users
- **GET** `/api/users/:id` - Get a single user  (Admins & specific user can see their own) 
- **GET** `/api/users` - Get all users  (Admins and users can see) 

### 🔹 Posts
- **GET** `/api/posts` - Fetch posts (Admins see all, users see their own)  
- **POST** `/api/posts` - Create a new post  (Admins or Users can create post)
- **GET** `/api/posts/:id` - Get a single post  (Admins & specific user can see their own)
- **PUT** `/api/posts/:id` - Update a post  (Admins & specific user can update their own post)
- **DELETE** `/api/posts/:id` - Delete a post  (Admins & specific user can delete their own post)

> 🔹 All **protected routes** require a valid `JWT Bearer` in the Authorization header.
> 🔹 Carefully set Authorization type as "JWT Bearer" in postman

## 📩 Postman Collection

You can use the Postman collection to test the API endpoints easily.

### 🔹 Import Postman Collection

1. Open **Postman**.
2. Click on **Import**.
3. Select **Raw Text** and paste the JSON collection below.
4. Click **Import** to add the API requests to your Postman workspace.

### 📌 Postman JSON Data

```json
{
  "info": {
    "name": "Posts",
    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
  },
  "item": [
    {
      "name": "User",
      "item": [
        {
          "name": "Get single user",
          "request": {
            "method": "GET",
            "url": "http://localhost:5000/api/users/{userId}"
          }
        },
        {
          "name": "Get All Users",
          "request": {
            "method": "GET",
            "url": "http://localhost:5000/api/users"
          }
        }
      ]
    },
    {
      "name": "Posts",
      "item": [
        {
          "name": "Create Post",
          "request": {
            "method": "POST",
            "url": "http://localhost:5000/api/posts",
            "header": [
              {
                "key": "Authorization",
                "value": "Bearer YOUR_JWT_TOKEN"
              }
            ],
            "body": {
              "mode": "raw",
              "raw": "{\n  \"title\": \"The Future of AI in Web Development\",\n  \"content\": \"Artificial Intelligence is transforming web development.\"\n}"
            }
          }
        },
        {
          "name": "Get Posts",
          "request": {
            "method": "GET",
            "url": "http://localhost:5000/api/posts",
            "header": [
              {
                "key": "Authorization",
                "value": "Bearer YOUR_JWT_TOKEN"
              }
            ]
          }
        },
        {
          "name": "Get Single Post",
          "request": {
            "method": "GET",
            "url": "http://localhost:5000/api/posts/{postId}",
            "header": [
              {
                "key": "Authorization",
                "value": "Bearer YOUR_JWT_TOKEN"
              }
            ]
          }
        }
      ]
    },
    {
      "name": "Auth",
      "item": [
        {
          "name": "Register User",
          "request": {
            "method": "POST",
            "url": "http://localhost:5000/api/auth/register",
            "body": {
              "mode": "raw",
              "raw": "{\n  \"name\": \"Selim\",\n  \"email\": \"admin@gmail.com\",\n  \"password\": \"123\",\n  \"role\": \"admin\"\n}"
            }
          }
        },
        {
          "name": "Login",
          "request": {
            "method": "POST",
            "url": "http://localhost:5000/api/auth/login",
            "body": {
              "mode": "raw",
              "raw": "{\n  \"email\": \"selim@gmail.com\",\n  \"password\": \"123\"\n}"
            }
          }
        }
      ]
    }
  ]
}

