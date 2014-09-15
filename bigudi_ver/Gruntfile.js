module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    targethtml: {
      dist: {
        files: [{
            expand: true,
            cwd: '',
            src: ['*.html'],
            dest: 'production'
        }]
      }
    },
    cssmin: {
      minify: {
        expand: false,
        cwd: 'production/build/',
        src: ['*.css', '!*.min.css'],
        dest: 'production/build/',
        ext: '.min.css'
      }
    }
  });
  
  grunt.loadNpmTasks('grunt-targethtml');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.registerTask('custom',function(){console.log('========== Всё хорошо! ==========')});
  grunt.registerTask('html', ['targethtml','custom']);
  grunt.registerTask('css', ['cssmin','custom']);
};