![NPM banner](https://nodei.co/npm/generator-ink.png?downloads=true&stars=true)
![NPM downloads](https://nodei.co/npm-dl/generator-ink.png)

# generator-ink [![Build Status](https://secure.travis-ci.org/rogeriopvl/generator-ink.png?branch=master)](https://travis-ci.org/rogeriopvl/generator-ink)

[![Greenkeeper badge](https://badges.greenkeeper.io/rogeriopvl/generator-ink.svg)](https://greenkeeper.io/)

A generator for [Yeoman](http://yeoman.io) for projects using the awesome Ink framework [http://ink.sapo.pt](http://ink.sapo.pt).


## Getting Started

### Install

Note: Make sure you have installed [yeoman](http://yeoman.io) before installing this generator.

```
$ npm install -g generator-ink
```

### First Run

```
$ yo ink
```

After running this command, `generator-ink` will ask you to choose a layout. You can see available layouts (with screenshots) [here](http://rogeriopvl.github.io/generator-ink).

![generator-ink screenshot](https://raw.githubusercontent.com/rogeriopvl/generator-ink/master/screenshots/generator-ink.png)

### Subgenerator

```
$ yo ink:page <layout_name> [file_name]
```

With this subgenerator you can create pages inside your project folder. Just make sure to insert the correct layout name, and optionally a file name of your liking. If you don't specify a `file_name`, `generator-ink` will generate one for you with a timestamp in the name to avoid overwriting any file you have already in your project.

## Available Layouts

Go to [http://rogeriopvl.github.io/generator-ink](http://rogeriopvl.github.io/generator-ink) to see available layouts along with their screenshots.


## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
