module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            css: {
                src: [
                    'css/*'
                ],
                dest: 'css/main.css'
            },
            js: {
                src: [
                    'js/*'
                ],
                dest: 'js/main.js'
            }
        },
        cssmin: {
            css: {
                src: 'css/main.css',
                dest: 'css/main.min.css'
            }
        },
        uglify: {
            js: {
                files: {
                    'js/main.js': ['js/main.js']
                }
            }
        },
        watch: {
            files: ['css/*', 'js/*'],
            tasks: ['concat', 'cssmin', 'uglify']
        }
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('default', ['concat:css', 'cssmin:css', 'concat:js', 'uglify:js']);
};
