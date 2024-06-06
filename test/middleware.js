const spiderDetector = require('../')
const test = require('tape')
const express = require('express')
const request = require('superagent')

const app = express()

app.use(spiderDetector.middleware())

app.get('/test', function (req, res) {
  res.json({spider: req.isSpider()})
})

const server = app.listen(3210)

function doRequest (ua, t, cb) {
  request
    .get('http://localhost:3210/test')
    .set('User-Agent', ua)
    .end(function (err, res) {
      t.error(err, 'no error is thrown')
      t.equal(res.status, 200, 'status is 200')

      cb(res.body)
      t.end()
    })
}

test('middleware with:', function (t) {
  t.test('baiduspider', function (t) {
    doRequest('baiduspider', t, function (body) {
      t.ok(body.spider, 'body.spider is true')
    })
  })

  t.test('null agent', function (t) {
    doRequest(null, t, function (body) {
      t.notOk(body.spider, 'body.spider is false')
    })
  })

  t.test('linkedin', function (t) {
    doRequest('linkedin', t, function (body) {
      t.notOk(body.spider, 'body.spider is false')
    })
  })

  t.test('linkedinbot', function (t) {
    doRequest('linkedinbot', t, function (body) {
      t.ok(body.spider, 'body.spider is true')
    })
  })

  t.test('Monitoring', function (t) {
    doRequest('Monitoring', t, function (body) {
      t.ok(body.spider, 'body.spider is true')
    })
  })

  t.test('Pingability.com', function (t) {
    doRequest('Pingability.com', t, function (body) {
      t.ok(body.spider, 'body.spider is true')
    })
  })

  t.test('GPTBot', function (t) {
    doRequest('GPTBot', t, function (body) {
      t.ok(body.spider, 'body.spider is true')
    })
  })
})

test('teardown', function (t) {
  server.close()
  t.end()
})
