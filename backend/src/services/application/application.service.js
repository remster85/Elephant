// Initializes the `application` service on path `/applications`
const createService = require('feathers-mongoose');
const createModel = require('../../models/application.model');
const hooks = require('./application.hooks');
const filters = require('./application.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'application',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/applications', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('applications');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
