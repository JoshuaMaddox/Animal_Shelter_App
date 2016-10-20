const express = require('express')
const router = express.Router()
const Client = require('../models/Client')


router.route('/')
  .get((req, res) => {
    Client.findAll()
      .then(clients => {
        res.send(clients)
      })
      .catch(err => {
        res.status(400).send(err)
      })
  })
  .post((req, res) => {
    Client.create(req.body)
    .then(Client.findAll)
    .then(clients => {
      res.send(clients)
    })
    .catch(err => {
      res.status(400).send(err)
    })
  })


router.route('/client')
 .get((req, res) => {
    Client.findSingleClient(req.query.email)
      .then(clients => {
        res.send(clients)
      })
      .catch(err => {
        res.status(400).send(err)
      })
  })

 router.route('/:id')
  .get((req, res) => {
    let id = req.params.id
    Client.getClientById(id)
    .then(client => {
      res.send(client)
    })
    .catch(err => {
      res.status(400).send(err)
    })
  })
  .delete((req, res) => {
    let id = req.params.id
    Client.deleteClient(id)
    .then(Client.findAll)
    .then(clients => {
      res.send(clients)
    })
    .catch(err => {
      res.status(400).send(err)
    })
  })

module.exports = router