const db = require('../config/db')
const squel = require('squel')

const TABLE_NAME = 'Clients'

db.query(`CREATE TABLE IF NOT EXISTS ${TABLE_NAME} (
  clientId INT NOT NULL AUTO_INCREMENT,
  firstName VARCHAR(80) DEFAULT 'NO FIRST NAME',
  lastName VARCHAR(80) DEFAULT 'NO LAST NAME',
  phone VARCHAR(80) DEFAULT 'NO PHONE',
  streetAddress VARCHAR(250) DEFAULT 'NO ADDRESS',
  city VARCHAR(50) DEFAULT 'NO CITY',
  email VARCHAR(50) DEFAULT 'NO EMAIL',
  state VARCHAR(30) DEFAULT 'NO STATE',
  zip VARCHAR(10) DEFAULT 'NO ZIP',
  note VARCHAR(1000) DEFAULT 'NO NOTE',
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

exports.findSingleClient = function(singleClient) {
  singleClient = decodeURIComponent(singleClient)
  return new Promise((resolve, reject) => {
    let sql = squel.select().from(TABLE_NAME).where(`email = '${singleClient}'`).toString()
    db.query(sql, (err, result) => {
      if(err) return reject(err)
        resolve(result)
    })
  }) 
}

exports.getClientById = function(id) {
  return new Promise((resolve, reject) => {
    let sql = squel.select().from(TABLE_NAME).where(`clientId = ${id}`).toString()
    db.query(sql, (err, result) => {
      if(err) return reject(err)
        resolve(result)
    })
  })
}

exports.deleteClient = function(id) {
  console.log('I am id', id)
  return new Promise((resolve, reject) => {
    let sql = squel.delete().from(TABLE_NAME).where(`clientId = ${id}`).toString()
    db.query(sql, (err, result) => {
      if(err) return reject(err)
        resolve(result)
    })
  })
} 


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