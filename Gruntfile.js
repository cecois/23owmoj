  /*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: '<json:bitmap.json>',
    uglify: {
    jses: {
      files: {
        'dist/js/theme.min.js': 'js/theme.js'
        ,'dist/js/contact-form.min.js': 'js/contact-form.js'
        ,'dist/js/navigation.min.js': 'js/navigation.js'
        // 'dist/js/js.min.js': ['js/jquery-1.11.2.min.js','js/jquery-ui.min.js','js/boostrap.min.js','js/theme.js','js/contact-form.js','js/navigation.js']
      }
    }
  }
    // concat: {
    //   css: {
    //     src: ['css/*'],
    //     dest: 'dist/css/css.css'
    //   }
    // }
    // ,
    // jses: {
    //   files: {
    //     'dist/js/js.min.js': 'src/js/*'
    //   }
    // }
  // }
  ,cssmin: {
  options: {
    mergeIntoShorthands: false,
    roundingPrecision: -1
  },
  target: {
    files: {
      'dist/css/style.min.css': ['css/style.css']
      ,'dist/css/bootstrap.min.css': 'css/bootstrap.css'
      ,'dist/css/font-awesome.min.css': 'css/font-awesome.css'
      ,'dist/css/ionicons.min.css': 'css/ionicons.css'
      ,'dist/css/custom.min.css': 'css/custom.css'
    }
  }
}
    ,copy: {
      dist: {
        files: [
        {expand: true, cwd: 'articles',src: ['**'], dest: 'dist/articles'}
        ,{expand: true, cwd: 'crystals',src: ['**'], dest: 'dist/crystals'}
        ,{expand: true, cwd: 'fonts',src: ['**'], dest: 'dist/fonts'}
        ,{expand: true, cwd: 'img',src: ['**'], dest: 'dist/img'}
          ,{src: 'js/jquery-1.11.2.min.js',dest: 'dist/js/jquery.min.js'}
          ,{src: 'js/jquery-ui.min.js',dest: 'dist/js/jquery-ui.min.js'}
          ,{src: 'js/bootstrap.min.js',dest: 'dist/js/bootstrap.min.js'}
          // ,{src: 'js/contact-form.js',dest: 'dist/js/contact-form.js'}
          // ,{src: 'js/navigation.js',dest: 'dist/js/navigation.js'}
          // ,{src: 'js/theme.js',dest: 'dist/js/theme.js'}
    // ,{src: "css/style.css",dest:'dist/css/style.css'}
    // ,{src: "css/bootstrap.css",dest:'dist/css/bootstrap.css'}
    // ,{src: "css/font-awesome.css",dest:'dist/css/font-awesome.css'}
    // ,{src: "css/ionicons.css",dest:'dist/css/ionicons.css'}
    // ,{src: "css/custom.css",dest:'dist/css/custom.css'}

        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  // grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  // grunt.loadNpmTasks('grunt-recess');
  // grunt.loadNpmTasks('grunt-groundskeeper');
  // Default task.
  grunt.registerTask(
    'default'
    ,
    [
    // 'concat'
    // ,'recess'
    'cssmin'
    ,'uglify'
    ,'copy'
    ]);

};