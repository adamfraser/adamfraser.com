module.exports = function(grunt) {

    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),


      sass: {
        dist: {
          options: {
            style: 'expanded'
          },
          files: {
            'css/main.css': '_sass/main.scss',
          }
        }
      },

      shell: {
        jekyllBuild: {
          command: 'jekyll build'
        },
        jekyllServe: {
          command: 'jekyll serve -w'
        }

      },

      watch: {
        css: {
          files: ['_sass/*.scss',
                  '_includes/*.html',
                  '_layouts/*.html',
                  '_posts/*.html',
                  '_config.yml',
                  'index.html'],
          tasks: ['sass', 'shell:jekyllBuild'],
          options: {
          livereload: true,
          },
        },
      }
    });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-shell');

  // Default task(s).
  grunt.registerTask('default', ['watch']);

};
