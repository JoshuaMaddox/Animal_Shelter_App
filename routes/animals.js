const express = require('express')
const router = express.Router()
const Animal = require('../models/Animal')

// router.route('/')
//   .get((req, res) => {
//     Animal.findAll()
//       .then(animals => {
//         res.send(animals)
//       })
//       .catch(err => {
//         res.status(400).send(err)
//       })
//   })
//   .post((req, res) => {
//     console.log('req.body in add animal',req.body)
//     Animal.create(req.body)
//     .then(Animal.findAll)
//     .then(animals => {
//       res.send(animals)
//     })
//     .catch(err => {
//       res.status(400).send(err)
//     })
//   })

// router.route('/:id')
//   .put((req, res) => {
//     Animal.update(req.params.id, req.body)
//       .then(Animal.findAll)
//       .then(animals => {
//         res.send(animals)
//       })
//       .catch(err => {
//         res.status(400).send(err)
//       })

//   })

  ///////////////////

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


router.route('/animal')
 .get((req, res) => {
    Animal.findSingleAnimal(req.query.email)
      .then(animals => {
        res.send(animals)
      })
      .catch(err => {
        res.status(400).send(err)
      })
  })
 .put((req, res) => {
    Animal.editAnimal(req.body)
      .then(Animal.findAll)
      .then(animals => {
        res.send(animals)
      })
      .catch(err => {
        res.status(400).send(err)
      })
 })

 router.route('/:id')
  .get((req, res) => {
    let id = req.params.id
    Animal.getAnimalById(id)
    .then(Animal => {
      res.send(Animal)
    })
    .catch(err => {
      res.status(400).send(err)
    })
  })
  .delete((req, res) => {
    let id = req.params.id
    Animal.deleteAnimal(id)
    .then(Animal.findAll)
    .then(animals => {
      res.send(animals)
    })
    .catch(err => {
      res.status(400).send(err)
    })
  })

module.exports = router