import { Router } from 'express'

const router = Router()

// Mock Helpers
const helpers = [
  {
    id: 1,
    name: 'ゆうだい',
  },
  {
    id: 2,
    name: 'たまき',
  },
  {
    id: 3,
    name: 'もり',
  },
]

/* GET users listing. */
router.get('/helpers', function(req, res, next) {
  res.json(helpers)
})

/* GET user by ID. */
router.get('/helpers/:id', function(req, res, next) {
  const id = parseInt(req.params.id)
  if (id >= 1 && id <= helpers.length) {
    res.json(helpers[id - 1])
  } else {
    res.sendStatus(404)
  }
})

export default router
