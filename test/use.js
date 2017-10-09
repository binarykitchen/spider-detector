const spiderDetector = require('../')
const test = require('tape')
const express = require('express')
const request = require('superagent')

const app = express()

app.use(spiderDetector.middleware())

app.use(function (req, res, next) {
  if (req.isSpider()) {
    res.status(403).send('Piss off!')
  } else {
    res.status(200).send()
  }
})

const server = app.listen(3220)

function doRequest (ua, t, cb) {
  request
    .get('http://localhost:3220/blahblah')
    .set('User-Agent', ua)
    .end(cb)
}

test('app.use and middleware with:', function (t) {
  t.test('baiduspider', function (t) {
    doRequest('baiduspider', t, function (err, res) {
      t.equal(err.toString(), 'Error: Forbidden')
      t.equal(res.status, 403)
      t.end()
    })
  })

  t.test('no spider', function (t) {
    doRequest('i am nice', t, function (err, res) {
      t.notOk(err)
      t.equal(res.status, 200)
      t.end()
    })
  })
})

test('teardown', function (t) {
  server.close()
  t.end()
})
