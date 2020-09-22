## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

This project is a simplified front end clone of Netflix. It was created with React and CSS (Grid and Flexbox). It uses The MovieDB Api to search for movies and display details. Feel free to contribute!

Tools used:
Webpack
Axios
Redux & React
Sass (grid & flexbox)
Media queries
Swiper JS
Runing Project Locally
Install dependencies: run npm install in root project
Get API key from here
Create .env file in root project and add: API_KEY=YOUR_API_KEY_HERE
Run project: npm run dev
User Stories:
User can search for movies and TV shows on TMDb
User can the see upcoming and trending movies. Data updates weekly
User can click on a movie and a modal should pop up. It should display the title, release date, overview, and runtime.
The webpage adapts to any screen size.