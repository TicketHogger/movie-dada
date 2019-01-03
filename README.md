# TicketHogger - Related Movies Module
> TicketHogger reegineers the backend of the Moovi app to support production-level traffic.
> A legacy app, Moovi recreates a popular web app to help movie fans discover movies and buy tickets.

# Setup
- npm install from root directory
- npm start to start localhost server
- npm run writeCSV to generate production-level data representing 10 million moives
- npm seed-database-postgreSQL to seed database with previously generated data

# API Endpoints

|Action   |Method |Enpoint                          |Purpose                                                        |
|---------|-------|--------------------------------------------------------|----------------------------------------|
|Create   |POST   |/api/movies                                             |Add one movie record                    |
|Read(all)|GET    |/api/movies/:actorFirstName+actorLastName/relatedmovies |Get all movie records for a given actor |
|Read(one)|GET    |/api/movies/:movieId                                    |Get one movie record                    |
|Update   |PUT    |/api/movies                                             |Update one movie record                 |
|Delete   |DELETE |/api/movies                                             |Delete one movie record                 |

![600_rps_after_load_balancing](https://user-images.githubusercontent.com/29344313/50661847-470c3880-0f59-11e9-9e93-2a893bb99718.png)

