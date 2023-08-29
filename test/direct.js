const spiderDetector = require('../')
const test = require('tape')

test('direct call with:', function (t) {
  t.test('baiduspider', function (t) {
    t.plan(1)

    t.ok(spiderDetector.isSpider('baiduspider'), 'isSpider = true')
  })

  t.test('googlebot', function (t) {
    t.plan(1)

    t.ok(spiderDetector.isSpider('googlebot'), 'isSpider = true')
  })

  t.test('facebook', function (t) {
    t.plan(1)

    t.notOk(spiderDetector.isSpider('facebook'), 'isSpider = false')
  })

  t.test('facebookexternalhit', function (t) {
    t.plan(1)

    t.ok(spiderDetector.isSpider('facebookexternalhit'), 'isSpider = true')
  })

  t.test('gptbot', function (t) {
    t.plan(1)

    t.ok(spiderDetector.isSpider('gptbot'), 'isSpider = true')
  })

  t.test('no parameter', function (t) {
    t.plan(1)

    t.notOk(spiderDetector.isSpider(), 'isSpider = false')
  })
})
