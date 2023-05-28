 ### Holidaze
 ![Skjermbilde (72)](https://github.com/Allawi465/js-framewokrs-ca/assets/91701833/4c0be16b-f34a-41ff-a266-e657341f652f)
 
 ## Description

This is my final exam in Noroff Front-end Development. The project focuses on creating a front-end application for a booking site called Holidaze with Noroff API CRUD. The task involved developing a modern and user-friendly front-end application based on User Stories provided by the client. 

### Pages

 - Homepage: displays a list of all venues and includes a search bar to filter products by name, guest, dates and address. Clicking on a venues takes the user to the individual venues page.
 
 - Individual venues page: displays details of a single venues, including the title, description, images, rating, address, available dates and facilities. Clicking The "Rent" button takes the user to the booking page.

- Profile page: Displays the user's avatar, name, email address, and a list of their bookings and created venues. The user has the option to change their avatar image by clicking on the "+" button. Additionally, on each booking card, there is a "Cancel Booking" option to cancel the booking if needed. For the created venues, the user can choose to delete or update them as necessary.

- Profiles page: Displays the user's avatar, name, email address, and a list of their bookings and created venues.
 
 - Booking page: displays the selected venue along with a calendar showing the available dates for booking. Users can use the plus and minus buttons to add or reduce the number of guests for the booking. After selecting the dates and number of guests, the user can click the "Set" button. The form will then be set with the selected dates, number of guests, and the price for the booking. A "Book Now" button allows users to proceed with the booking.

- Create venue page: To create a new venue, users are required to either login or register as a venue manager using the provided registration form. The creation process involves filling out all the required fields, including uploading an image, providing a title and description, facilities, specifying the price, address, maximum number of guests,  and rating for the venue. Once all the required information is entered, users can submit the venue by clicking the "Host now" button. If there are no errors from the API, the user will be redirected to the newly created venue page, which can be accessed using the unique ID assigned to it.

- Update venue page: To update a venue, users are required to either login or register as a venue manager using the provided registration form. When updating a venue, the existing values of the venue will be pre-filled in the update form. Users can modify any fields, such as uploading a new image, changing the title, facilities, description, price, address, maximum number of guests, or rating for the venue. After making the necessary updates, users can submit the changes by clicking the "Update now" button. If there are no errors from the API, the venue will be successfully updated and the user will be redirected to the updated venue page, which can be accessed using the unique ID assigned to it.

- Login model: To use the Login model in this project, you must fill out the following inputs with specific requirements:
   ```
   Password: minimum of 8 characters and is required.
   Email: Email must be from stud.noroff.no or noroff.no domain and is required.

   Once you have filled out all required fields, click the "Login" button.
   ```
 
- Sign up model: To use the Sign up model in this project, you must fill out the following inputs with specific requirements:
   ```
   name: name should not contain punctuation except underscore (_).
   Password: minimum of 8 characters and is required.
   Email: Email must be from stud.noroff.no or noroff.no domain and is required.
   avatar: avatar must be a valid URL
   VenueManger: switch button default value is true

   Once you have filled out all the required fields, click the "Sign up" button. 
   If there are no errors from the API, the login modal will be displayed.
   ```
   
### User stories
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

The project is configured to run deployment on Github pages on push to branch "master" Deploy static content to Pages.

[![pages-build-deployment](https://github.com/Allawi465/holidaze/actions/workflows/pages/pages-build-deployment/badge.svg?branch=gh-pages)](https://github.com/Allawi465/holidaze/actions/workflows/pages/pages-build-deployment)

[live link](https://allawi465.github.io/holidaze/)

## Built With

The project was just built with
- React
- HTML 
- SASS
- Bootstrap
- JavaScript
- Noroff API

### API
- The API for this project can be found under Holidaze EndPoints in the Noroff API documentation.
- https://noroff-api-docs.netlify.app/

## Dependencies & configurations
  - react-icons": "^4.8.0"
  - react-calendar: "^4.2.1"
  - react-router-dom: "^6.10.0"
  - react-helmet-async: "^1.3.0"
  - styled-components: "^5.3.9"
  - @hookform/resolvers: "^3.1.0
  - react-hook-form: "^7.43.9"
  - yup: "^1.1.1"
  - bootstrap: "^5.2.3"
  - react-bootstrap: "^2.7.4"
  - sass: "^1.62.0"
  - jsdoc: "^4.0.2"
  - date-fns: "^2.30.0"
  - gh-pages: "^5.0.0"
  - husky: "^8.0.3"
  - lint-staged: "^13.2.2"
  - prettier: "^2.8.8"
  
  ### Files that are ignored inside .gitignored

  /out
  .vscode/settings.json
  .eslintcach
   
  ### Configurations
  
  The Project is configured to run lint-staged with eslint --fix as pre-commit hook.
  
  The Project is configured to run prettier on all files on save.
  
 The following configurations are set in the .prettierrc file:
   ```
    {
   "trailingComma": "es5",
   "semi": true,
   "singleQuote": true,
   "tabWidth": 2,
   "useTabs": false
   }
   ```
   
## Contact

If you have a suggestion that would make the site better, please contact me.

I am very grateful for the feedback and the support. 

Please contact me if you have any questions!

Don't forget to give the project a star! Thanks again!
