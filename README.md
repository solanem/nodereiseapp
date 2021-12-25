# nodereiseapp
simple project based on https://github.com/k-nut/expenses-server
tries to build an backend with node, express, knex, redis and heroku

two user are in db
huehne1@htw-berlin.de | hunter1 
huehne2@htw-berlin.de | hunter2


cli commands for dev

knex for local migrations
knex migrate:make create-tables
knex migrate:latest
knex migrate:rollback


for heroku migrations
heroku run 'yarn db migrate:latest --knexfile build/knexfile.js' --app nodereiseapp
heroku run 'yarn db migrate:rollback --knexfile build/knexfile.js' --app nodereiseapp
for running scripts on heroku
heroku run node build/scripts/create-user.js --app nodereiseapp


// is there is an heroku operation which blocks new operations
heroku ps
heroku ps:stop run.5065

to add something to heroku repo and build app
git add .\something
git commit -m "information about commit"
git push heroku main