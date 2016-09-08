module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		shell: {
			integrationtest: {
				command: 'python -m py.test -s test/integrationtest.py',
				options: {
					stdout: true,
					failOnError: true
				}
			},
			unittest: {
				command: 'python -m unittest test.stylishunittest.StylishUnitTest',
				options: {
					stdout: true,
					failOnError: true
				}
			}
		},
		ngAnnotate: {
			options: {
				singleQuotes: false
			},
			app: {
				files: [{
					expand: true,
					src: ['app/stylish.js', 'app/**/*.js', '!app/libraries/*', '!app/*.min.js', '!app/*.map.js'],
					dest: 'annotated',
					ext: '.annotated.js',
					extDot: 'last'
				}]
			}
		},
		concat: {
			js: {
				src: ['./annotated/app/stylish.annotated.js', './annotated/app/directives/*.annotated.js', './annotated/app/services/*.annotated.js', './annotated/app/animations/*.annotated.js', './annotated/app/controllers/*.annotated.js'],
				dest: 'annotated/stylish.concat.js'
			}
		},
		uglify: {
			js: {
				src: ['./annotated/stylish.concat.js'],
				dest: './app/stylish.min.js'
			}
		}
	});

	grunt.loadNpmTasks('grunt-shell');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-ng-annotate');

	grunt.registerTask('default', ['test', 'mini']);

	grunt.registerTask('mini', ['ngAnnotate', 'concat', 'uglify']);

	grunt.registerTask('test', ['shell:integrationtest', 'shell:unittest']);
	grunt.registerTask('integrationtest', ['shell:integrationtest']);
	grunt.registerTask('unittest', ['shell:unittest']);

};