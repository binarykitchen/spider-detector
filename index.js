var spiders = [
    /bot/,
    /spider/,
    /facebookexternalhit/,
    /simplepie/,
    /yahooseeker/,
    /embedly/,
    /quora link preview/,
    /outbrain/,
    /vkshare/,
    /monit/,
    /Pingability/,
    /Monitoring/,
    /WinHttpRequest/,
    /Apache-HttpClient/,
    /getprismatic.com/,
    /curl/,
    /python-requests/,
    /Twurly/,
    /browserproxy/,
    /Monitoring/,
    /webmeup-crawler/,
    /Qwantify/,
    /Yahoo! Slurp/,
    /Domain Re-Animator Bot/,
    /pinterest/
]

function isSpider(ua) {
    return spiders.some(function(spider) {
        return spider.test(ua)
    })
}

module.exports = {

    isSpider: isSpider,

    middleware: function() {
        return function(req, res, next) {
            req.isSpider = isSpider.bind(undefined, req.get('user-agent'))
            next()
        }
    }
}
