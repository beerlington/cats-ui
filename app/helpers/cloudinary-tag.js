import Ember from 'ember';

export default Ember.Handlebars.makeBoundHelper(function(publicId, options) {
 if (Em.isBlank(publicId)) { return ''; }

  var height = options.hash.height || 535,
    width = options.hash.width || 535,
    crop = options.hash.crop || 'fill',
    cssClass = options.hash.class || 'cloudinary-image';

  return new Ember.Handlebars.SafeString($.cloudinary.image(publicId, {
    width: width,
    height: height,
    crop: crop,
    class: cssClass
  }).prop('outerHTML'));
});
