"use strict";

exports.modifyBabelrc = function (_ref, options) {
  var babelrc = _ref.babelrc;

  return Object.assign(babelrc, options);
};