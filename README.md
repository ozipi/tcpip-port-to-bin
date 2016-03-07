tcpip-port-to-bin [![npm version](https://img.shields.io/npm/v/tcpip-port-to-bin.svg?style=flat)](https://www.npmjs.com/package/tcpip-port-to-bin) [![Build Status](https://travis-ci.org/ozipi/tcpip-port-to-bin.svg?branch=master)](https://travis-ci.org/ozipi/tcpip-port-to-bin) [![Coverage Status](https://coveralls.io/repos/github/ozipi/tcpip-port-to-bin/badge.svg?branch=master)](https://coveralls.io/github/ozipi/tcpip-port-to-bin?branch=master)
=========

Converts tcp/ip ports numbers to binary (0 to 65536)

## Installation

  npm install tcpip-port-to-bin --save

## Usage

  var tcpipPortToBin = require('tcpip-port-to-bin');

  var binaryPort = tcpipPortToBin('22');

  console.log('binaryPort', binaryPort);

## Tests

  npm test

## Todo

## Contributing

Add unit tests for any new or changed functionality. Lint and test your code via the npm test.

## Release History

* 0.1.0 Initial release
