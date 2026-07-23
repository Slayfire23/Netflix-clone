Netflix Clone

Netflix Clone is a React web app that recreates the look and feel of the Netflix home page. I built this project to practice working with React, Vite, Firebase authentication, React Router, API data, and responsive UI styling.

What The App Does

This app lets users sign up, log in, browse movie rows, and open a trailer player page. The home page uses a Netflix-style layout with a large hero banner, navigation bar, movie categories, horizontal scrolling title cards, and a footer.

Main Features

Login And Sign Up -
Users can create an account or sign in with Firebase Authentication. The app checks the user's login status and sends logged-out users back to the login page.

Netflix-Style Home Page -
The home page includes a large hero banner, Netflix logo, navigation links, profile icon, and movie rows. I used CSS to make the page feel similar to the real Netflix layout.

Movie Rows -
The movie sections show different categories like popular movies, top rated movies, upcoming movies, and top picks. The cards are pulled from The Movie Database API.

Horizontal Scrolling Cards -
Users can scroll through movie cards horizontally. This helped me practice using refs, mouse wheel events, and component state in React.

Trailer Player -
When a user clicks a movie card, they are taken to a player page that loads a trailer video from YouTube using movie data from the API.

Firebase -
Firebase is used for user authentication and saving basic user information when someone signs up.

Testing -
This project uses Jest and React Testing Library for component testing.
Run the test suite:
```bash
npm test

Live Link
https://netflix-clone-alpha-sage-83.vercel.app/

<img width="1738" height="846" alt="image" src="https://github.com/user-attachments/assets/c5f2798e-7f3b-45ad-8b7b-292afaa1fe25" />
