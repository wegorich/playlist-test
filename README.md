# Front End Task: My Music

demo
https://wegorelax-playlist-test.herokuapp.com/

## Technology
- Bootstrap 3.x and a recent version of Angular 1.3.x as frameworks
- Target HTML 5, modern browsers

## What ar in?
### Main page
A basic page that shows the users music collection.
- Page with some basic styling
- Light overall color scheme
  - CSS gradient for background
  - Some nice looking font from Google Web Fonts
  - The user can sort by any of the columns

### A detail section.
- Show name and title as header
- Show album cover on the left (random)
- Allow the user to write/edit a comment for the track.
  - The comment should auto save – so no save button
  - The back end development is behind schedule, so there is no server storage
for the comments. Instead create an Angular service that stores the
comments using web storage into the local browser.
  - Allow the user to send a tweet with their comment

### Animation
The static page is boring, so we want to make it more interesting.
- When the page is loaded, there should be some animation or effect to bring in the header and the table
- When switching songs, the details section shouldn’t just update, it should also have some effect like a fade in out when changing data (but quite fast less than 0.5 second to complete)

### Theme
White is boring.
- Add a second CSS theme and let the user pick which theme to use.
- Make the second theme dark in color, something similar to Spotify.
- Everything should be restyled including the grid

### Statistics
We want a simple statistics page that shows us what we have been listening to
- Add a button to access the statistics page
- It should load pretty much instantly, so using angular rout or an overlay instead of
loading as a new page would be best
- For the statistics show two pie charts, one of the types of music and the other of the
star ratings
- For the chart use the c3.js library

### Mobile
- Ensure the site works well on an Iphone 4 or similar style device
- Layout should collapse to be single column style with all text large enough to be
readable
