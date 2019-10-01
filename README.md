# spider-detector

[![Build Status](https://travis-ci.org/binarykitchen/spider-detector.svg?branch=master)](https://travis-ci.org/binarykitchen/spider-detector) [![npm version](https://badge.fury.io/js/spider-detector.svg)](https://badge.fury.io/js/spider-detector)

A tiny node module to detect spiders/crawlers quickly and comes with optional middleware for ExpressJS

It might be useful when you have a single page app but want to deliver static pages for spiders.

## Install

```
npm install spider-detector // or `yarn install spider-detector`
```

## Direct Example

```js
const detector = require('spider-detector')
detector.isSpider('baiduspider') // return true
```

## ExpressJS example

```js
const detector = require('spider-detector')
const express = require('express')
const app = express()

app.use(detector.middleware())

app.get('/*', function(req, res) {
  if (req.isSpider()) {
    // do something else, i.E. send a static page
  } else {
    // send single page app
  }
})
```

## Why? There are already modules out there

Well, I wanted one which does not use `readFileSync` and comes with optional middleware. Furthermore some hackers do not classify Googlebot as a spider anymore which poses a problem sometimes, see next question.

## What about Googlebot?

Yep, Googlebot is able to deal with single page apps but this feature is pretty unstable. Especially under AngularJS when hash fragments are disabled with `$locationProvider.html5Mode(true)`. That's why - against all odds - I have classified `googlebot` as a spider in this module.
