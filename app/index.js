'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var InkGenerator = module.exports = function InkGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
    this.config.save();
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(InkGenerator, yeoman.generators.Base);

InkGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  console.log(" _____       _");
  console.log("|_   _|     | |");
  console.log("  | |  _ __ | | __");
  console.log("  | | | '_ \\| |/ /");
  console.log(" _| |_| | | |   <");
  console.log("|_____|_| |_|_|\\_\\ ");
  console.log("");

  var prompts = [
    {
      type: 'list',
      name: 'pageLayout',
      message: 'What starting layout would you like for your page?',
      choices: [
        { name: 'Hero (default)', value: 'hero' },
        { name: '3 Boxes', value: '3-boxes' },
        { name: '4 Boxes', value: '4-boxes' },
        { name: 'Advanced Grid', value: 'advanced-grid' },
        { name: 'Article Page', value: 'article-page' },
        { name: 'Empty Page', value: 'empty-page' },
        { name: 'Fixed Sidebar', value: 'fixed-sidebar' },
        { name: 'Fixed Width Column', value: 'fixed-width-column' },
        { name: 'Forms', value: 'forms' },
        { name: 'My Page', value: 'my-page' },
        { name: 'Regular Grid', value: 'regular-grid' },
        { name: 'Sticky Footer', value: 'sticky-footer' }
      ],
      default: 'hero'
    }
  ];

  this.prompt(prompts, function (props) {
    this.pageLayout = props.pageLayout;

    cb();
  }.bind(this));
};

InkGenerator.prototype.app = function app() {
  this.mkdir('app');
  this.mkdir('app/img');
  this.mkdir('app/css');
  this.mkdir('app/js');

  this.copy('_layouts/' + this.pageLayout + '.html', 'app/index.html');
  this.copy('_package.json', 'package.json');
  this.copy('_bower.json', 'bower.json');
};

InkGenerator.prototype.projectfiles = function projectfiles() {
  this.copy('bowerrc', '.bowerrc');
  this.copy('editorconfig', '.editorconfig');
  this.copy('jshintrc', '.jshintrc');
};
