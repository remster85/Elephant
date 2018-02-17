const application = require('./application/application.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(application);
};