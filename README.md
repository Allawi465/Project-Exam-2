 ### Holidaze
 ![Skjermbilde (72)](https://github.com/Allawi465/js-framewokrs-ca/assets/91701833/4c0be16b-f34a-41ff-a266-e657341f652f)
 
 ## Description

This is my final exam in Noroff Front-end Development. The project focuses on creating a front-end application for booking site called Holidaze with Noroff API CRUD. The task involved developing a modern and user-friendly front end application based on User Stories provided by the client. 

### Pages

 - Homepage: displays a list of all venues and includes a search bar to filter products by name, guest, dates and address. Clicking on a venues takes the user to the individual venues page.
 
 - Individual venues page: displays details of a single venues, including the title, description, images, rating, address, available dates and facilities. Clicking The "Rent" button takes the user to the booking page.

- Profile page: Displays the user's avatar, name, email address, and a list of their bookings and created venues. The user has the option to change their avatar image by clicking on the "+" button. Additionally, on each booking card, there is a "Cancel Booking" option to cancel the booking if needed. For the created venues, the user can choose to delete or update them as necessary.

- Profiles page: Displays the user's avatar, name, email address, and a list of their bookings and created venues.
 
 - Booking page: displays the selected venue along with a calendar showing the available dates for booking. Users can use the plus and minus buttons to add or reduce the number of guests for the booking. After selecting the dates and number of guests, the user can click the "Set" button. The form will then be set with the selected dates, number of guests, and the price for the booking. A "Book Now" button allows users to proceed with the booking.

- Create venue page: To create a new venue, users are required to either log in or register as a venue manager using the provided registration form. The creation process involves filling out all the required fields, including uploading an image, providing a title and description, facilities, specifying the price, address, maximum number of guests,  and rating for the venue. Once all the required information is entered, users can submit the venue by clicking the "Host now" button. If there are no errors from the API, the user will be redirected to the newly created venue page, which can be accessed using the unique ID assigned to it.

- Update venue page: To update a venue, users are required to either log in or register as a venue manager using the provided registration form. When updating a venue, the existing values of the venue will be pre-filled in the update form. Users can modify any fields, such as uploading a new image, changing the title, facilities, description, price, address, maximum number of guests, or rating for the venue. After making the necessary updates, users can submit the changes by clicking the "Update now" button. If there are no errors from the API, the venue will be successfully updated and the user will be redirected to the updated venue page, which can be accessed using the unique ID assigned to it.

- Login model: To use the ContactPage in this project, you must fill out the following inputs with specific requirements:
   ```
   Password: minimum of 8 characters and is required.
   Email: Email must be from stud.noroff.no or noroff.no domain and is required.

   Once you have filled out all required fields, click the "Login" button.
   ```
 
- Sign up model: To use the ContactPage in this project, you must fill out the following inputs with specific requirements:
   ```
   name: name should not contain punctuation except underscore (_).
   Password: minimum of 8 characters and is required.
   Email: Email must be from stud.noroff.no or noroff.no domain and is required.
   avatar: avatar must be a valid URL
   VenueManger: switch button default value is true

   Once you have filled out all the required fields, click the "Sign up" button. 
   If there are no errors from the API, the login modal will be displayed.
   ```
   
## User stories
- [x] A user may view a list of Venues
- [x] A user may search for a specific Venue
- [x] A user may view a specific Venue page by id
- [x] A user may view a calendar with available dates for a Venue
- [x] A user with a stud.noroff.no email may register as a customer
- [x] A registered customer may create a booking at a Venue
- [x] A registered customer may view their upcoming bookings
- [x] A user with a stud.noroff.no email may register as a Venue manager
- [x] A registered Venue manager may create a Venue
- [x] A registered Venue manager may update a Venue they manage
- [x] A registered Venue manager may delete a Venue they manage
- [x] A registered Venue manager may view bookings for a Venue they manage
- [x] A registered user may login
- [x] A registered user may update their avatar
- [x] A registered user may logout
   
## Installation

Clone the project and initialize git in your code editor.
Initialize git
```
 git clone https://github.com/Allawi465/holidaze.git
```
Install dependencies
```
npm i
```
start server
```
npm run start
```

## Deployment

Project is configured to run deployment on Github pages on push to branch "master" Deploy static content to Pages.

[![pages-build-deployment](https://github.com/Allawi465/holidaze/actions/workflows/pages/pages-build-deployment/badge.svg?branch=main)](https://github.com/Allawi465/holidaze/actions/workflows/pages/pages-build-deployment)

[live link](https://allawi465.github.io/holidaze/)

## Built With

The project was just build with
- React
- HTML 
- SASS
- Bootstrap
- JavaScript
- Noroff API

## API
- The API for this project can be found under Holidaze EndPoints in the Noroff API documentation.
- https://noroff-api-docs.netlify.app/
  
## Contact

If you have a suggestion that would make the site better, please contact me.

I am very grateful for the feedbacks and the support. 

Please contact me if you have any questions!

Don't forget to give the project a star! Thanks again!
  
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
