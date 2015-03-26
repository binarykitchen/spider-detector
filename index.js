var spiders = [
    /baiduspider/,
    /twitterbot/,
    /facebookexternalhit/,
    /googlebot/,
    /bingbot/,
    /simplepie/,
    /yahooseeker/,
    /rogerbot/,
    /linkedinbot/,
    /embedly/,
    /quora link preview/,
    /showyoubot/,
    /outbrain/,
    /slackbot/,
    /vkshare/,
    /monit/,
    /Pingability/,
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
