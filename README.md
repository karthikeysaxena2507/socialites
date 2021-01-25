# [Socialites](https://socialites-karthikey.herokuapp.com/)
I built a Social Networking Web Application from scratch using the MERN tech stack. The website is responsive and can be used in mobile browser as well. Find the [live version here](https://socialites-karthikey.herokuapp.com/)


## Website Features:
1. Users first have to register themselves to the site using their email and verify that email or they can quickly login using Google.
2. Users can create a post with/without an image related to chosen category. 
3. Users can also edit and delete their posts.
4. Users can comment and react on posts.
5. Users can see which users commented and reacted on which posts.
6. The posts can be filtered based on category or any content searched by the user.
7. Users can customize their profile page as they want by adding a profile picture and writing a suitable Bio.
8. Users can also chat with other users in real time, either personally or by creating a room and sharing that roomID.
9. Search option and many filters have been added to provide good user experience.
10. For a quick look, Users can also take a tour of the website by logging in as a guest. They can also check the "remember me" option to login once for 10 days.


## Technical Features:
1. The front end is built using Reactjs, HTML, CSS and Bootstrap.
2. The backend is built using Nodejs and Expressjs with MongoDB database.
3. Used JsonWebToken (JWT) and Bcryptjs for user authentication.
4. Used Socket.io library for adding real time chat feature.
5. Used Google OAuth2 API for authentication with google.
6. Used Cloudinary API for uploading and storing images uploaded by user.
7. Used Sendgrid API for sending emails from server for email verification or to reset the password.
8. Used Count API for maintaining the count of number of visits to the home page of the website.
9. Used Chartjs with React for creating Pie chart based on reactions and comments on posts of the user.
10. Used Fusejs for implementing fuzzy search, based on the Jaro-Winkler algorithm for searching in the site.
11. Used Howlerjs for adding various sound effects.
12. The Website is deployed on Heroku platform.

Some snapshots of the website:

Home Page
![Home](https://user-images.githubusercontent.com/66271249/105611159-ad32b500-5dd9-11eb-9689-29163e097d40.PNG)

Login Page
![Login](https://user-images.githubusercontent.com/66271249/105611161-adcb4b80-5dd9-11eb-8aff-7751aeb14e63.PNG)

Register Page
![Register](https://user-images.githubusercontent.com/66271249/105611162-aefc7880-5dd9-11eb-9c98-805d4199fa11.PNG)
