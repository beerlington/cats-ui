import Ember from 'ember';

export default Ember.View.extend({
  tagName: 'input',
  name: 'file',
  attributeBindings: ['name', 'type'],
  type: 'file',

  didInsertElement: function() {
    var controller = this.get('controller');

    this.$().unsigned_cloudinary_upload(
      CatsUiENV.CLOUDINARY_UPLOAD_PRESET, {
        cloud_name: CatsUiENV.CLOUDINARY_NAME
      }, {
        disableImageResize: false,
        imageMaxWidth: 1000,
        imageMaxHeight: 1000,
        acceptFileTypes: /(\.|\/)(gif|jpe?g|png|bmp|ico)$/i,
        maxFileSize: 5000000 // 5MB
      }
    );

    this.$().bind('fileuploaddone', function (e, data) {
      controller.set('newCat.cloudinaryPublicId', data.result.public_id);
    });
  }
});
