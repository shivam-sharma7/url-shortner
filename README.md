## URL Shortner 
 This is a URL shortener web-based application tool designed to condense long website addresses into shorter, more manageable links. 

## Tech stack used
* [React.js](https://react.dev/)
* [Tailwind CSS](https://tailwindcss.com/)
* [Vitest](https://vitest.dev/)
* [Node.Js](https://nodejs.org/en/download)
* [Express.js](https://expressjs.com/)
* [MongoDB](https://www.mongodb.com/cloud/atlas/register)

## Local Development
>You need to cretae a .env file in server directory and set following string.
```
MONGO_DB=mongodb+srv://<username>:<password>@url-shortner.ijruark.mongodb.net/?retryWrites=true&w=majority&appName=url-shortner
PORT=5000
CORS_ORIGIN=http://localhost:3000
```
Clone the project 
```bash
git clone  https://github.com/your_username/url-shortner.git
````
Navigate to server directory
```bash
cd server
```
install dependencies
```bash
npm install
```
run start command
```bash
npm run dev
```
Navigate to client directory
```bash
cd client
```
Install dependencies
```bash
npm install
```
Run start command
```bash
npm run dev
```
Run test command
```bash
npm run test
```