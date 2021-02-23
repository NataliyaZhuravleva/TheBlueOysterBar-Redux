# <p style="color:#0ec2b8" align="center">_The Blue Oyster Bar app_</p>

<p align="center">
    <!-- Project Avatar -->
    <br>
    <a href="https://github.com/NataliyaZhuravleva">
        <img src="https://avatars.githubusercontent.com/u/26223609?s=400&u=eba3685b0fa16a0c66c8dec64c2cd7886929b509&v=4">
    </a>
    <!-- GitHub Link -->
   <p align="center">
        <a href="https://github.com/NataliyaZhuravleva" style="color: #0ec2b8;">Nataliya Zhuravleva</a>
    </p>
    <!-- LinkedIn -->
    <p align="center">
        <a href="mailto:natalindria@gmail.com">
            <img src="https://img.shields.io/badge/Email-00AAAB??style=social&logo=gmail&labelColor=00AAAB">
        </a>  
        <a href="https://www.linkedin.com/in/nataliya-zhuravleva/">
            <img src="https://img.shields.io/badge/LinkedIn-00AAAB??style=social&logo=linkedin&labelColor=00AAAB">
        </a>      
    </p>    
</p>
<p align="center">
  <small>Initiated February 12th, 2021</small>
</p>

## <span style="color:#0ec2b8">Table of Contents</span>
* <a href="#about">About the project</a>
  * <a href="#description">Description</a>
  * <a href="#used">Technologies Used</a>
  * <a href="#diagram">Component Diagram</a>
  * <a href="#bugs">Known Bugs</a>
* <a href="#setup">Setup and Use</a>
  * <a href="#cloning">Cloning the project</a>
  * <a href="#running">Running Application</a> 
* <a href="#contact">Support and contact details</a>
* <a href="#license">License</a>
* <a href="#additional">Additional Info</a>

## <span style="color:#0ec2b8" id="about">About the Project</span>
### <span style="color:#0ec2b8" id="description">Description</span>

_`The Blue Oester Bar app` is the app where a bar stuff can track their kegs. This application is built utilizing JavaScript, React and Redux.
The application has following functionality:_

* A user may see a list of all available keg beers. For each keg, they can see its `name`, `brand`, `price` and `alcoholContent`.
* A user can submit a form to `add` a new keg beer to a list.
* A user is able to click on a keg to see its `detail` page.
* A user may see how many pints are left in a keg. A full keg has roughly `124` pints.
* A user should be able to click a button `Sell a pint` in beer details when they sell a pint of it. This should decrease the number of pints left by 1.
* Pints is not be able to go below `0`. Once keg is empty, user have a message `Out of Stock` 
* A user have a message that says `Almost Empty`(color-coded in red color) if keg is with less than 10 pints. (temporarily not working)
* Prices are color-coded based on their price:
  1. If the price less or equal `$3`, user have a message `Beer on Sale!` in red color.
  2. If the price more or equal `$15`, user have a message `Craft Beer!` in red color.
* Alcohol Content is color-coded based on percentage of alcohol content. If alcohol content more or equal `7%`, user have a message `Strong beer! Don't sell more than 3 pints per person!` in red color.
* A user has the option to `edit` a keg's properties after entering them in case they made a mistake.
* A user is able to `delete` a keg beer. 

### <span style="color:#0ec2b8" id="used">Technologies Used</span>

* _JavaScript_
* _React/JSX_
* _Redux_
* _jQuery_
* _VisualStudio Code_
* _Git_
* _GitHub_

### <span style="color:#0ec2b8" id="diagram">Component Diagram</span>
![Preview](src/img/bar-diagram.png)
### <span style="color:#0ec2b8" id="bugs">Known Bugs</span>

_After selling a pint, kegBeerList doesn't update properly_

## <span style="color:#0ec2b8" id="setup">Setup and Use</span>
### <span style="color:#0ec2b8" id="cloning">Cloning the project</span>
1. _Navigate to my [TheBlueOysterBar-Redux repo](https://github.com/NataliyaZhuravleva/TheBlueOysterBar-Redux) at https://github.com/NataliyaZhuravleva/TheBlueOysterBar-Redux_ to view the project files and commits.
2. _Click on the green button labeled `Code`_ to copy repository URL.
3. _Clone the repository to your local machine_ by opening your machine terminal and using the command `git clone https://github.com/NataliyaZhuravleva/TheBlueOysterBar-Redux`.

### <span style="color:#0ec2b8" id="running">Running Application</span> 

1. _Navigate to the project folder in the command line._
2. _Run the following command: $ `npm install`_
3. _Run the following command: $ `npm start`_

## <span style="color:#0ec2b8" id="contact">Support and contact details</span>

_If you have any questions, ideas or concerns, please, contact me at [natalindria@gmail.com](mailto:natalindria@gmail.com)_

## <span style="color:#0ec2b8" id="license">License</span> 

*This software is licensed under the [MIT](https://choosealicense.com/licenses/mit/) license*

Copyright (c) 2020 **_Nataliya Zhuravleva_**


## <span style="color:#0ec2b8" id="additional">Additional Info</span>
## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

#### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

#### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

#### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

#### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

#### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

#### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
