export default {
  name: 'cloudinary',

  initialize: function(/* container, app */) {
    $.cloudinary.config({
      cloud_name: CatsUiENV.CLOUDINARY_NAME,
      api_key:    CatsUiENV.CLOUDINARY_KEY
    });
  }
};
