## URL Shortner 
 This is a web-based URL shortener application tool designed to condense long website addresses into shorter, more manageable links. 

## Tech stack used
* [React.js](https://react.dev/)
* [Tailwind CSS](https://tailwindcss.com/)
* [Vitest](https://vitest.dev/)
* [Node.Js](https://nodejs.org/en/download)
* [Express.js](https://expressjs.com/)
* [MongoDB](https://www.mongodb.com/cloud/atlas/register)

## Local Development
Clone the project here [Fork](https://github.com/shivam-sharma7/url-shortner/fork)
```bash
git clone  https://github.com/your_username/url-shortner.git
````

Navigate to server directory
```bash
cd server
```
Create a `.env` file in server directory and set the following string for backend development.
```
MONGO_DB=mongodb+srv://<username>:<password>@url-shortner.ijruark.mongodb.net/?retryWrites=true&w=majority&appName=url-shortner
PORT=5000
CORS_ORIGIN=http://localhost:3000
```
Install dependencies
```bash
npm install
```
Start developement server
```bash
npm run dev
```
Navigate to client directory

```bash
cd client
```
Create a `.env` file in client directory and set the following string for Api fetching.
```
VITE_API_URL=http://localhost:5050
```
Install dependencies
```bash
npm install
```
Open developement server
```bash
npm run dev
```
After changes you can run the following test command
```bash
npm run test
```