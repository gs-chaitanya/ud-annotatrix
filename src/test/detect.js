'use strict';

// all tests need this stuff
const _ = require('underscore'),
  expect = require('chai').expect,
  sinon = require('sinon'),
  utils = require('./utils');
utils.setupLogger();

const detectFormat = require('../detect');

// export the test suite
module.exports = () => {
  describe('detect.js', () => {
    utils.forEachText((text, format, name) => {
      it(`should detect ${format}:${name}`, () => {

        const detectedFormat = detectFormat(text);
        expect(detectedFormat).to.equal(format);

      });
    });
  });
};
