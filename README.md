This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
The project is consuming JSON off (https://www.westelm.com/services/catalog/v4/category/shop/new/all-new/index.json) poured in a local file due to Cross Origin Domain policies set by the westelm, thereby not allowing the apps to directly to fetch the JSON
and other resources. The App renders Product details including name, price and main image. Also carousal overlay is interfaced displaying rest of product images.

You can checkout this repo and start running locally. Go to the project root, make sure you have yarn install, if not follow directions [here](https://yarnpkg.com/lang/en/docs/install/).
Once you have yarn running on your machine, do a

### `yarn install`

to install all node_modules for the App to run, and then

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
I am utilizing jest framework to run all unit tests. Simply run the `yarn test` script from th eproject root to run all unit tests.
