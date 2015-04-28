/*
 * Copyright (c) 2015, Sarbborram Bandyopadhyay. All rights reserved.
 * Copyrights licensed under the MIT License.
 * See the accompanying LICENSE file for terms.
 */

'use strict';
var generators = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = generators.Base.extend({

  initializing: function () {
    this.pkg = require('../package.json');
    this.sheer = this.pkg.sheer;
  },

  prompting: function () {

    var done = this.async();

    // have yeoman greet the user.
    this.log(yosay(
      'Welcome to the splendid ' + chalk.red('Sheer') + ' generator!'
    ));

    var prompts = [{
      type: 'checkbox',
      name: 'taskRunners',
      message: 'Which task runner would you like to include?',
      choices: [{
        name: 'grunt',
        value: 'grunt',
        checked: true
      }, {
        name: 'gulp',
        value: 'gulp',
        checked: false
      }]
    }, {
      type: 'checkbox',
      name: 'sheerModules',
      message: 'Please choose the Sheer modules that you would like to include',
      choices: []
    }];

    this.sheer['optional-modules'].forEach( function(module) {
      prompts[1].choices.push({
        name: module,
        value: module,
        message: module + '?'
      });
    });

    this.prompt(prompts, function (answers) {
      this.grunt = answers.taskRunners.indexOf('grunt') !== -1 ? true : false;
      this.gulp = answers.taskRunners.indexOf('gulp') !== -1 ? true : false;
      this.sheerModules = answers.sheerModules;
      done();
    }.bind(this));
  },

  writing: function () {

    this.template('_package.json', 'package.json');

    this.copy('editorconfig', '.editorconfig');
    this.copy('gitattributes', '.gitattributes');
    this.copy('gitignore', '.gitignore');

    if (this.grunt) {
      this.copy('_Gruntfile.js', 'Gruntfile.js');
    }

    if (this.gulp) {
      this.copy('_gulpfile.js', 'gulpfile.js');
    }

    this.template('_src/css/main.css', 'src/css/main.css', {
      modules: this.sheerModules
    });

    this.template('_src/css/variables/variables.css', 'src/css/variables/variables.css');
    this.template('_src/css/modules/modules.css', 'src/css/modules/modules.css');

    this.fs.copy(
      this.templatePath('_test'),
      this.destinationPath('test')
    );

  },

  install: function () {
    this.installDependencies({
      skipInstall: this.options['skip-install']
    });
  }
});
