# Main Project Guidance
By: Zachary Sterling

### Description
This project is a professional portfolio website for me. It walks through my background, my work experience, and some of the project I worked on.

I am very proud that I did this entire website without following a strict tutorial. I came up with everything on my own and then went out to find the relevant portions I needed; most of which were burried in documentation rather than a nice, easy Stackoverflow post or Youtube video.

### Features
- Basic Site Navigation
- Links to projects and my LinkedIn Profile
- Cool animations throughout the website (GSAP, ScrollTrigger, PIXI.js)
- One Page Application (No routing)

### Software Architecture
#### Website Main Render Tree
index.html
    |- index.js
        |- App.js
            |- Header_Nav.js
            |- HomePage_Main_Info.js
                |- Main_Building_Blocks.js
                    |- HomePage.js
            |- ExperiencePage_Main_Info.js
                |- Main_Building_Blocks.js
                    |- Experience_Page.js
            |- ProjectsPage_Main_Info.js
                |- Main_Building_Blocks.js
                    |- Projects_Page.js
            |- Footer.js
        |- App.css
        |- index.css

#### Significant Points to Know
- The entire application runs in one page by changing the state of the app that then rerenders the contents of the page
- The Navigation bar's main functionality is just telling the app what to change the state of the entire app to
- The application is dependent on GSAP, ScrollTrigger, and PIXI.js to provide its scrolling and warp speed animations.
- Most of the scrolling slides come from the same components as the other scrolling slides for that given state of the app
- The scrolling animation has to be rerendered upon every change in global state, thus the useEffect code in the App.js
- The warp speed animation has to be rendered with the HomePage.js file. Its code is located where the HomePage's title component is rendered

### Next Steps
- I would like to fix the scrolling animation a bit more on the Experience and Projects pages. For some reason, the animation likes to play itself when the user decided to stop scrolling. I think this is because of the snapping feature I have. I like it, but maybe in the future I will decide to take it out if I can't find a workaround. After 20+ hours of work on this project, I decided that I can live with the shortcoming for now.
- Provide better projects to display
- Set up a link on the projects section on the Homepage that changes the state to the projects tab, even jumping the user to the selected project.
- Make the project display slide on the homepage change dynamically based on what the top 3 projects on my projects page are. Eventually, I'd hope to have a bunch of projects to show, but only the 3 most recent ones would be featured.
















# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
