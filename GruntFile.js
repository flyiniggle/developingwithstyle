module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		shell: {
			integrationtest: {
				command: 'python -m py.test -s test/integrationtest.py',
				options: {
					stdout: true,
					failOnError: true
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-shell');

	grunt.registerTask('integrationtest', ['shell:integrationtest']);


	// Load the plugin that provides the "uglify" task.
	// grunt.loadNpmTasks('grunt-contrib-uglify');

	// Default task(s).
	//grunt.registerTask('default', ['uglify']);
};