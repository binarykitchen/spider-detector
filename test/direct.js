var spiderDetector = require('../'),
    test = require('tape')

test('direct call with:', function(t) {

    t.test('baiduspider', function(t) {
        t.plan(1)

        t.ok(spiderDetector.isSpider('baiduspider'), 'isSpider = true')
    })

    t.test('facebook', function(t) {
        t.plan(1)

        t.notOk(spiderDetector.isSpider('facebook'), 'isSpider = false')
    })

    t.test('facebookexternalhit', function(t) {
        t.plan(1)

        t.ok(spiderDetector.isSpider('facebookexternalhit'), 'isSpider = true')
    })

    t.test('a fantasy name', function(t) {
        t.plan(1)

        var ua = 'i am a very bad spider that does not exist'
        t.notOk(spiderDetector.isSpider(ua), 'isSpider = false')
    })

    t.test('no parameter', function(t) {
        t.plan(1)

        t.notOk(spiderDetector.isSpider(), 'isSpider = false')
    })
})
