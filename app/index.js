'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var InkGenerator = module.exports = function InkGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(InkGenerator, yeoman.generators.Base);

InkGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);

  var prompts = [
    // {
    //   type: 'confirm',
    //   name: 'includeX',
    //   message: 'Would you like to import X?',
    //   default: true
    // }
  ];

  this.prompt(prompts, function (props) {
    this.includeInkJS = props.includeInkJS;

    cb();
  }.bind(this));
};

InkGenerator.prototype.app = function app() {
  this.mkdir('app');
  // this.mkdir('app/templates');

  this.copy('_index.html', 'app/index.html');
  this.copy('_package.json', 'package.json');
  this.copy('_bower.json', 'bower.json');
};

InkGenerator.prototype.projectfiles = function projectfiles() {
  this.copy('editorconfig', '.editorconfig');
  this.copy('jshintrc', '.jshintrc');
};
