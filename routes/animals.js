const express = require('express')
const router = express.Router()
const Animal = require('../models/Animal')

router.route('/')
  .get((req, res) => {
    Animal.findAll()
      .then(animals => {
        res.send(animals)
      })
      .catch(err => {
        res.status(400).send(err)
      })
  })
  .post((req, res) => {
    Animal.create(req.body)
    .then(Animal.findAll)
    .then(animals => {
      res.send(animals)
    })
    .catch(err => {
      res.status(400).send(err)
    })
  })

router.route('/:id')
  .put((req, res) => {
    Animal.update(req.params.id, req.body)
      .then(Animal.findAll)
      .then(animals => {
        res.send(animals)
      })
      .catch(err => {
        res.status(400).send(err)
      })

  })

module.exports = router