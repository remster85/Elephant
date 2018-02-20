// application-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

require('mongoose-type-email');

module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const application = new mongooseClient.Schema({
    name : {
      name: {
        type: String,
        required: [true, 'Application Name is required']
      },
    },
    sourcecontrol : {
      type: String,
      required: [true, 'Source control is required']
    },
    documentation : {
      type: String,
    },
    tags : {
      type: String,
    },
    
    createdAt: { type: Date, 'default': Date.now },
    updatedAt: { type: Date, 'default': Date.now }
  });

  return mongooseClient.model('application', application);
};
