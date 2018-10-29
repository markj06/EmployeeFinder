// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
const path = require('path');


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // HTML GET Requests
  // Below code handles when users 'visit' a page.
  // ---------------------------------------------------------------------------

  // If no matching route is found default to home
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/home.html'));
  });
};

  app.get('/survey', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/survey.html'));
  });
