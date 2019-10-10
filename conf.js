exports.config = {
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  directConnect: true,
  specs: ['SimpleSearch.js'],

  capabilities: {
    'browserName': 'chrome'
  }
};