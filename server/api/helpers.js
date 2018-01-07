import { Router } from 'express'
import moment from 'moment'

const router = Router()

// Mock Helpers const helpers = [
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

const now = moment()
const today = now.format('YYYY-MM-DD')

const events = [
  [
    {
      title: 'アイザック=ネテロ',
      start: `${today}T10:30:00`,
      end: `${today}T12:30:00`,
    },
    {
      title: '亀仙人',
      start: `${today}T13:00:00`,
      end: `${today}T14:00:00`,
    },
    {
      title: 'ジョセフ・ジョースター',
      start: `${today}T15:00:00`,
      end: `${today}T17:00:00`,
    },
  ],
  [
    {
      title: '桜友蔵',
      start: `${today}T12:00:00`,
      end: `${today}T14:00:00`,
    },
  ],
  [
    {
      title: '玄海',
      start: `${today}T11:00:00`,
      end: `${today}T12:00:00`,
    },
    {
      title: '岩本虎眼',
      start: `${today}T15:00:00`,
      end: `${today}T16:00:00`,
    },
  ],
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

router.get('/helpers/:id/events', function(req, res, next) {
  const id = parseInt(req.params.id)
  if (id >= 1 && id <= helpers.length) {
    res.json(events[id - 1])
  } else {
    res.sendStatus(404)
  }
})

export default router
