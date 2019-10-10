exports.config = {
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  directConnect: true,
  specs: ['simpleSearch.js'],

  capabilities: {
    'browserName': 'chrome'
  }
};
