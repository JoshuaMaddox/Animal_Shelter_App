const db = require('../config/db')
const squel = require('squel')

const TABLE_NAME = 'Animals'

db.query(`CREATE TABLE IF NOT EXISTS ${TABLE_NAME} (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(80),
  age INT,
  commonName VARCHAR(80),
  breed VARCHAR(80),
  description VARCHAR(200),
  arrived DATE,
  depart DATE,
  imgurl VARCHAR(200),
  clientId INT,
  PRIMARY KEY (id)
)`, err => {
  if(err) throw err
})

exports.findAll = () => new Promise((resolve, reject) => {
  db.query(`SELECT * FROM ${TABLE_NAME}`, (err, Animals) => {
    if(err) return reject(err)
      resolve(Animals)
  })
})

// exports.findAll = () => new Promise((resolve, reject) => {
//   let sql = squel.select()
//                  .field('Animals.id')
//                  .field('Animals.name')
//                  .field('Teams.name', 'teamName')
//                  .from(TABLE_NAME)
//                  .join('Teams', null, 'Animals.teamId = Teams.teamId')
//                  // .where('Animals.teamId = 2')
//                  .toString()
//   db.query(sql, (err, animals) => {
//     if(err) return reject(err)
//       resolve(animals)
//   })
// })

exports.create = function(animal) {
  return new Promise((resolve, reject) => {
    let sql = squel.insert().into(TABLE_NAME).setFields(animal).toString()

    db.query(sql, (err, result) => {
      if(err) return reject(err)
        resolve(result)
    })
  })
}

exports.update = (animalId, updateObj) => {
  return new Promise((resolve, reject) => {
    let sql = squel.update()
                   .table(TABLE_NAME)
                   .setFields(updateObj)
                   .where(`id = ${animalId}`)
                   .toString()
    db.query(sql, (err, result) => {
      if(err) return reject(err)
      resolve(result)
    })
  })
}