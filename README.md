# playlist-test
Front End Task: My Music

demo
https://wegorelax-playlist-test.herokuapp.com/

## Technology
 Use Bootstrap 3.x and a recent version of Angular 1.3.x as frameworks
 Target HTML 5, modern browsers

## What ar in?
### Main page
A basic page that shows the users music collection.
a. Page with some basic styling
i. Light overall color scheme
ii. CSS gradient for background
iii. Some nice looking font from Google Web Fonts
b. The user can sort by any of the columns

### A detail section.
a. Show name and title as header
b. Show album cover on the left (random)
c. Allow the user to write/edit a comment for the track.
i. The comment should auto save – so no save button
ii. The back end development is behind schedule, so there is no server storage
for the comments. Instead create an Angular service that stores the
comments using web storage into the local browser.
d. Allow the user to send a tweet with their comment

### Animation
The static page is boring, so we want to make it more interesting.
a. When the page is loaded, there should be some animation or effect to bring in the header and the table
b. When switching songs, the details section shouldn’t just update, it should also have some effect like a fade in out when changing data (but quite fast less than 0.5 second to complete)

### Theme
White is boring.
a. Add a second CSS theme and let the user pick which theme to use.
b. Make the second theme dark in color, something similar to Spotify.
c. Everything should be restyled including the grid

### Statistics
We want a simple statistics page that shows us what we have been listening to
a. Add a button to access the statistics page
b. It should load pretty much instantly, so using angular rout or an overlay instead of
loading as a new page would be best
c. For the statistics show two pie charts, one of the types of music and the other of the
star ratings
d. For the chart use the c3.js library

### Mobile
a. Ensure the site works well on an Iphone 4 or similar style device
b. Layout should collapse to be single column style with all text large enough to be
readable
