import { Router } from 'express'

const router = Router()

// Mock Users
const users = [
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
router.get('/users', function(req, res, next) {
  res.json(users)
})

/* GET user by ID. */
router.get('/users/:id', function(req, res, next) {
  const id = parseInt(req.params.id)
  if (id >= 1 && id <= users.length) {
    res.json(users[id - 1])
  } else {
    res.sendStatus(404)
  }
})

export default router
