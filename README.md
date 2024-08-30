## To init Sequelize config please run this 
`npx sequelize-cli init`


## To create a new model
`npx sequelize-cli model:generate --name <model name> --attributes <attribute Name>:<attribute type>`


## And then update the DB with this command 
`npx sequelize-cli db:migrate`

## To undo the last migration of the data base  
`npx sequelize-cli db:migrate:undo`

and then run again

`npx sequelize-cli db:migrate`


## Run the server

`node ./app.js`