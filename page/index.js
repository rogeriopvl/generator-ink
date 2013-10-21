'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var PageGenerator = module.exports = function PageGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  this.fileName = args[1] || null;

};

util.inherits(PageGenerator, yeoman.generators.NamedBase);

PageGenerator.prototype.files = function files() {
  var prefix = Math.floor(new Date().getTime() / 1000),
      newName = this.fileName || prefix + '_' + this.name + '.html';

  this.copy('_layouts/' + this.name + '.html', 'app/' + newName);
};
