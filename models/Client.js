const db = require('../config/db')
const squel = require('squel')

const TABLE_NAME = 'Clients'

db.query(`CREATE TABLE IF NOT EXISTS ${TABLE_NAME} (
  clientId INT NOT NULL AUTO_INCREMENT,
  firstName VARCHAR(80),
  lastName VARCHAR(80),
  phone VARCHAR(80),
  streetAddress VARCHAR(250),
  city VARCHAR(50),
  state VARCHAR(30),
  zip VARCHAR(10),
  stageOfIntrest VARCHAR(30),
  note VARCHAR(1000),
  firstContact DATE,
  lastContact DATE,
  PRIMARY KEY (clientId)
)`, err => {
  if(err) throw err
})

exports.findAll = () => new Promise((resolve, reject) => {
  db.query(`SELECT * FROM ${TABLE_NAME}`, (err, clients) => {
    if(err) return reject(err)
    resolve(clients)
  })
})


exports.create = function(client) {
  return new Promise((resolve, reject) => {
    let sql = squel.insert().into(TABLE_NAME).setFields(client).toString()

    db.query(sql, (err, result) => {
      if(err) return reject(err)
        resolve(result)
    })
  })
}
// exports.create = () => new Promise((resolve, reject) => {
//   let sql = squel.insert().into(TABLE_NAME).setFields(client).toString()
//   db.query(sql, (err, result) => {
//     if(err) return reject(err)
//     resolve(result)
//   })
// })