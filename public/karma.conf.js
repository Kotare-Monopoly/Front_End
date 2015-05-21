module.exports = function(config){
  config.set({

    basePath : './',

    files : [
      'http://code.jquery.com/jquery-2.1.4.js',
      'js/application.js',
      'js/Model.js',
    ],

    autoWatch : true,

    frameworks: [
      'jasmine-jquery',
      'jasmine'
    ],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-jasmine-jquery',
            'karma-jasmine',
            'karma-junit-reporter'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }
  });
};
