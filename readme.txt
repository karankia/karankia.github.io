Your Movie Stop(R) Version 1.0 beta 28/04/2017

General Usage Notes
----------------------
- Compatible with all current OS versions like Windows 7/8/9/10,Linux and Mac.
- Web application using Angular JS runs on all current browsers Chrome/Edge/Firefox/Opera, does not support IE 9 or below.
- Connection to the internet is required all the times for the application to run.
- Web Server like XAMPP/WAMPP is requieed to host and run the application.
- Differnt screen sizes may produce differnt views of the application.
-----------------------------------------------------------------------------------

Installing and running the application
-------------------------------------------------
- Extract the zip folder (My_proj.tar.gz) into the public directory of the server of your choice like public_html in XAMPP.
- To run the project open the index.html file using the address of your server in your webpage for example (localhost/My_proj/index.html in XAMPP)
- Once loaded the webapp includes a logo named "Your Movie Stop" on the top which also serves as redirect button to the index page, below the logo   is a panel with a title "My Movies" which contains the   search bar and search button on the top. Below the   search bar are the movie posters with   their corresponding names written below.
- Click on the movie poster or the name of the movie of below it's poster to get its details, this will open a new webpage where you can see the details of your movie like release   date and even go to their    IMDB and Metacritic page   by just clicking the corresponding logo.
- To go back the main index page click on the "Your Movie Stop" logo.
- Once back on main page a user can search the movie of his choice, if the movie exists the appropriate results would be presented on the same page,   if the movie does not exist no action would take   place and the same view would be displayed.
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Bugs and issues
---------------------
- The some places(div) on panel might be skipped or not populated by the data from the API.
- No error message is displayed if the text does not match with the name of any movie in the database.
- Search bar might seem to long in large screens.

Copyright 2017. All rights reserved by the developer