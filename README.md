# WP Sensible

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

WP Sensible is a suite of needed utilities for professional WordPress development. They are being tracked in separate repositories so that you can use only what you need.

## Alignment Options

Adds wrappers for `.alignfull` and `.alignwide` blocks that provide additional hypertext surface area for easier frontend development. These hooks run when saving a post.

Production build size: 1.39KiB.

## Install

### via Github

This repository can be used for installation. It includes the `/dist` folder.

`git clone git@github.com:pixelcollective/wp-sensible-alignments`

### via Composer

You can also install using composer:

`composer require tiny-pixel/wp-sensible-alignments`

### via other Package Managers

If you only want the javascript src assets you can use @bit, npm or yarn:

`bit import tinypixel.wp-sensible/alignments`

`npm i @bit/tinypixel.wp-sensible.alignments`

`yarn add @bit/tinypixel.wp-sensible.alignments`

## Development

Configured using Laravel Mix.

- Set your development URL in `resources/build/app.js`.
- Run `yarn start` to start a BrowserSync session
- Run `yarn build:production` to build for production.