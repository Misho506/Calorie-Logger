To init Sequelize config please run this `npx sequelize-cli init`


To create a new model:
`npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string`


And then update the DB with this command 
`npx sequelize-cli db:migrate`