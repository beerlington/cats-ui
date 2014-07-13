/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp();

app.import('vendor/ember-data/ember-data.js');
app.import('vendor/jquery-ui/ui/jquery.ui.widget.js');
app.import('vendor/cloudinary_js/js/load-image.min.js');
app.import('vendor/cloudinary_js/js/canvas-to-blob.min.js');
app.import('vendor/jquery-file-upload/js/jquery.iframe-transport.js');
app.import('vendor/jquery-file-upload/js/jquery.fileupload.js');
app.import('vendor/cloudinary_js/js/jquery.cloudinary.js');
app.import('vendor/jquery-file-upload/js/jquery.fileupload-process.js');
app.import('vendor/jquery-file-upload/js/jquery.fileupload-image.js');
app.import('vendor/jquery-file-upload/js/jquery.fileupload-validate.js');

app.import('vendor/bootstrap/dist/css/bootstrap.css');

module.exports = app.toTree();
