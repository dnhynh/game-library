# Game Library UI and Server

1. Only finished the server in the two hours allotted. Server is a basic GraphQL Sqlite implementation. Ran into trouble when I was setting up apollo/client and spent some time debugging unfortunately. In order to test the graphql schema run 'node server/src/index.js'.

2. With more time I would finish hooking up the UI obviously. Would have been a basic react apollo gql set up to ping the database and pull out game info into their visual components. 

3. I chose SQLite for simplicity because I could then do local storage for the DB however for production I would deploy a scalable database in the cloud.

3. My intention for ratings in the interest of time was to have a user simply write in their rating for the game and add it to the library. This of course would mean that each game would be limited to one rating. For the final product in the UI I would want the games to aggragate the ratings from all users and list them with a count. (eg. Favorite 5, Meh 2, Dislike 3) To do this I would set up a login system so that each rating is linked to a user. In the UI the user would be able to rate the game.

4. Server vulnerability: There is no authentication on the server calls right now. There are also no limits set up on how many calls can be made. Finished product should have JWT authentication on all server calls. Since the requests to the library are all very basic I would set a max depth on the GQL queries and throttle the amount of requests that can be made server side.

5. Assuming the game library would not be updated super frequently the app benefit from some kind of caching solution. Not sure what would be best here as I have not implemented any caching strategies before. Maybe a separate caching layer on the cloud since records would be in the millions.

6. I realized that a last minute change I did without testing had broken the server so I pushed a fix today to main. The relevant code for submission is at the initial commit. Also realized that server code was inaccessible from this repo. https://github.com/dnhynh/Game-Library-Server