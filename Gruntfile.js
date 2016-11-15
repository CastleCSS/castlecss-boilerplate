/*	Grunt Task configuration */
module.exports = function(grunt) {

	/* using jit-grunt for automatically loading all required plugins */
	require('jit-grunt')(grunt);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		// Compile Sass to CSS and produce SoureMaps;
		sass: {
			options: {
				sourceMap: false,
				outputStyle: 'uncompressed'
			},
			files: {
				src: 'scss/main.scss',
				dest: 'dist/css/styles.min.css',
				ext: '.css'
			}
		},

		// PostCSS for adding prefixers and setting rem to pixels;
		postcss: {
			dist: {
				src: 'dist/css/styles.min.css'
			},
			options: { 
				// Rewrite and save sourcemap as seperate file
				map: {
					inline: false,
					annotation: 'styles/'
				},
				processors: [
					// add fallbacks for rem units
					require('pixrem')({
						atrules: true
					}),
					// add vendor prefixes
					require('autoprefixer')({ browsers: 'iOS >= 7, last 2 versions, ie > 7' }), 
					// minify the result
					require('cssnano')()
					]
				},
			},

			watch: {
				files: 'scss/**/*.scss',
				tasks: ['sass', 'postcss'],
				options: {
					spawn: false,
				},
			},

		});
/*
*	Grunt tasks	
*	Run with grunt or grunt <command> in terminal
*/
grunt.registerTask('default', 'run');
grunt.registerTask('run',
	[
	'sass', 
	'postcss', 
	'watch'

	]
	);
grunt.registerTask('create_css',
	[
	'sass',
	'postcss'
	]
	);
};