# GraphQL Employee Company

WORK IN PROGRESS!\
Currently adding frontend functionality.\
First attempt using GraphQL unaided. Intended to show tables of employees and companies using GraphQL, Apollo and Express.\
<br/>
[View Demo](https://moms-spaghetti-graphqlemployeecompany.netlify.app/)\
<br/>
[Frontend Repo](https://github.com/moms-spaghetti/graphql_employee_company_frontend.git/)\
[Backend Repo](https://github.com/moms-spaghetti/graphql_employee_company_backend.git/)\
<br/>

## Details

I originally wrote this using json-server during testing to answer api calls for data from the backend using the GraphiQL interface. Once I implemented a sufficient schema with requests for all/single employees/companies and mutations to allow adding, updating and deleting of both, I refactored the app to utilise a remote mongo database with identical collections.\
<br/>

## Updates

(28.01.21)

- In the processs of implementing a react frontend utilising react hook available in Apollo.
- Added Apollo cache updates to optimistically update UI for employee deletions

(29.01.21)

- added employees and companies form
- added cache updates for users and companies

<br/>

## Built With

- HTML
- CSS
- Javascript
- React
- GraphQL
- Axios (deprecated during conversion to mongodb)
- Cors
- Dotenv
- Express
- Express-GraphQL
- Json-server (deprecated during conversion to mongodb)
- Mongoose
- Nodemon
  <br/><br/>

## Getting Started

Clone the repo as instructed below and download npm modules.
<br/><br/>

## Prerequisites

Download and install npm modules.\
A mongodb database\
A .env.local file in the root folder of the frontend\
A .env file in the root of the backend folder
<br/><br/>

## Installation

Frontend

1. Clone the repo
   ```sh
   git clone https://github.com/moms-spaghetti/graphql_employee_company_frontend.git
   ```
2. Download the required npm modules
   ```sh
   npm i
   ```
3. Create a .env file in the root of the frontend folder and add the string

   ```sh
   REACT_APP_BACKEND_URL=http://localhost:4000/graphql
   ```

4. Start the application

   ```sh
   npm start
   ```

Backend

1. Clone the repo
   ```sh
   git clone https://github.com/moms-spaghetti/graphql_employee_company_backend.git
   ```
2. Download the required npm modules
   ```sh
   npm i
   ```
3. You will need a mongodb database and connection string for the data base. I used the free account at https://www.mongodb.com. These instructions follow creating an account here and using the free service.
4. Once you have a service for mongodb you will need a user & password with access to your database and collection you plan to use for this. You can set this up via the data storage menu > database access > add new database user.
5. You will need to create a database via data storage menu > clusters > collections > create database. You'll need the name of this for your database URI. Set the name to gqlemployeecompany and the collection to employees. Add another collection under this database called companies by hovering over the gqlemployeecompany database and clicking the '+' symbol.
6. After you have your username + password + database name you will need to create the connection string to add to the .env file. You can get this from data storage menu > clusters > overview > connect > connect with your application > driver = node.js, version = 2.2.12 or later > copy the connection string. Exchange the highlighted details for the details from the last two steps.
7. Paste the connection string to a backend .env file in the root folder after the prefix:

   ```sh
   MONGOOSE_URL=
   PORT=4000
   ```

8. Start the application
   ```sh
   npm start
   ```
9. Once the application starts the console should display 'Connected to database'
   <br/><br/>

## Usage

As this is a work in progress only viewer and deleting of users is possible. More to follow.\
Data can be added to the mongo database by accessing http://localhost:4000/graphql and using mutations.
<br/><br/>

## Contact

[Email](mailto:williamedwards36@aol.com)
<br/><br/>
