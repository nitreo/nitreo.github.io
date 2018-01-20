exports.config = {
  bundles: [
    { components: ['my-app', 'app-home'] },
    { components: ['app-profile'] }
  ],
  collections: [
    { name: '@stencil/router' }
  ],
  wwwDir : 'www'
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
