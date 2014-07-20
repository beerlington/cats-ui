/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    ENV.APP.LOG_RESOLVER = false;
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_MODULE_RESOLVER = false;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = false;
    ENV.API_NAMESPACE = 'v1';
    ENV.ROOT_NAMESPACE = '';
    ENV.CLOUDINARY_NAME = '';
    ENV.CLOUDINARY_UPLOAD_PRESET = '';
  }

  if (environment === 'production') {
    ENV.API_NAMESPACE = 'api/v1';
    ENV.ROOT_NAMESPACE = '/api';
    ENV.CLOUDINARY_NAME = '';
    ENV.CLOUDINARY_UPLOAD_PRESET = '';
  }

  return ENV;
};
