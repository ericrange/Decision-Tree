module.exports = function (grunt) {
	grunt.initConfig({
	
		coffee: {
			compile: {
				options: {
					bare: true
				},
				files: {
					"decision-tree.js": "decision-tree.coffee"
				}
			}
		}

	});

	grunt.loadNpmTasks("grunt-contrib-coffee");

	grunt.registerTask("default", ["coffee"]);
};
