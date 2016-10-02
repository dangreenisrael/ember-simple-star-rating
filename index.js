/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-simple-star-rating',
  included: function(app) {
    this._super.included(app);
    // app.import('bower_components/font-awesome/css/font-awesome.min.css');
    app.import('bower_components/font-awesome/fonts/fontawesome-webfont.eot');
    app.import('bower_components/font-awesome/fonts/fontawesome-webfont.svg');
    app.import('bower_components/font-awesome/fonts/fontawesome-webfont.ttf');
    app.import('bower_components/font-awesome/fonts/fontawesome-webfont.woff');
    app.import('bower_components/font-awesome/fonts/fontawesome-webfont.woff2');
    app.import('bower_components/font-awesome/fonts/FontAwesome.otf');
    app.import('vendor/font-awesome.css');

    this.ui.writeLine('Dan\'s plugin is loaded!');
  },

  isDevelopingAddon: function() {
    return true;
  }
};
