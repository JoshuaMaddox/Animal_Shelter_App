

//insert some sample data
require('dotenv').config()
const db = require('./config/db')
const squel = require('squel')

// drop the tables
db.query('drop table Clients')
db.query('drop table Animals', err => {
  if(err) throw err
  //recreate the tables with the new schema
  require('./models/Client')
  require('./models/Animal')

  let animalSql = squel.insert().into('Animals').setFieldsRows([
    // { id: '336788392' },
    { name: 'Spots' },
    { name: 'Rascal' }
    // { kind: 'canine' },
    // { description: 'A nice little dog with spots. Like why the fuck do you think we named it spots?' },
    // { arrived: 2016-10-18 },
    // { depart: 2017-01-10 },
    // { imgurl: 'http://farm9.staticflickr.com/8436/7826079350_5c430b357b_b.jpg' },
    // { clientId: 0 }
  ]).toString()

  db.query(animalSql, err => {
    if(err) throw err
  })

  let clientSql = squel.insert().into('Clients').setFieldsRows([
    { firstName: 'Joshua' }
  ]).toString()

  db.query(clientSql, err => {
    if(err) throw err
  })

  db.end(() => console.log('Done!'))
})