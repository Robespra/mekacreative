module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-page-transitions/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-modal-routing/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby/dist/internal-plugins/partytown/gatsby-browser.js'),
      options: {"plugins":[]},
    }]
