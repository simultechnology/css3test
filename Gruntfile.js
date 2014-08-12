module.exports = function (grunt) {
    "use strict";

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        csslint: {
            check: {
                src: 'public/css/*.css'
            }
        },

        cssmin: {
            minimize: {
                options: {
                    banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */'
                },
                files: {
                    'public/build/styles.min.css': 'public/css/*.css'
                }
            }
        },

        watch: {
            options: {
                livereload: true
            },
            css: {
                files: 'public/css/*.css',
                tasks: ['csslint', 'cssmin']
            },
            html: {
                files: 'public/*.html'
            }
        },

        connect: {
            server: {
                options: {
                    port: 7070,
                    hostname: 'simusimu'
                }
            }
        }
    });

    // plugin
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');

    // tasks
    //grunt.registerTask('default', 'less');
    grunt.registerTask('default', ['csslint', 'cssmin', 'connect', 'watch']);

};
