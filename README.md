# nodereiseapp
simple project based on https://github.com/k-nut/expenses-server
tries to build an backend with node, express, knex, redis and heroku

cli commands for dev

knex
knex migrate:make create-tables
knex migrate:rollback


heroku run 'yarn db migrate:latest --knexfile build/knexfile.js' --app nodereiseapp
heroku run 'yarn db migrate:rollback --knexfile build/knexfile.js' --app nodereiseapp

// is there is an heroku operation which blocks new operations
heroku ps
heroku ps:stop run.5065

git add .\something
git commit -m "information about commit"
git push heroku main