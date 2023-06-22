## Building Netflix from Scratch Using React

I followed a tutorial on developing a Netflix clone using React, Firebase, and Styled Components. Throughout this project, I created several pages, including sign in, sign up, browse, and the homepage. These pages serve different purposes, with some requiring authentication through protected routes and auth listeners. Data management is handled by Firebase Firestore, and a custom hook is implemented to retrieve the necessary data. Firebase is also responsible for handling authentication across all pages.

To enhance the structure of my components, I employed the compound components design pattern, which resulted in more than 10 examples showcasing its usage. Styling was seamlessly achieved using styled components. The implementation of compound components greatly simplified the testing process for my components, allowing me to focus on their core functionality.

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!
