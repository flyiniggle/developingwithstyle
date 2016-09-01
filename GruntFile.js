module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		shell: {
			pytest: {
				command: 'python -m py.test -s test/apptest.py',
				options: {
					stdout: true,
					failOnError: true
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-shell');

	grunt.registerTask('pytest', ['shell:pytest']);


	// Load the plugin that provides the "uglify" task.
	// grunt.loadNpmTasks('grunt-contrib-uglify');

	// Default task(s).
	//grunt.registerTask('default', ['uglify']);
};