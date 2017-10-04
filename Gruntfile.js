/*	Grunt Task configuration */
module.exports = function(grunt) {

	/* Using jit-grunt for automatically loading all required plugins */
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

		// PostCSS for adding prefixers and setting rem to pixel
		postcss: {
			dist: {
				src: 'dist/css/styles.min.css'
			},
			options: {
				// Rewrite and save sourcemap as seperate file
				map: {
					inline: false,
					annotation: 'dist/css/'
				},
				processors: [
					// Add fallbacks for rem units
					require('pixrem')({
						atrules: true
					}),
					// Add vendor prefixes
					require('autoprefixer')({
						browsers: 'iOS >= 7, last 2 versions, ie > 7'
					}),
					// Minify the result
					require('cssnano')()
				]
			}
		},
		browserSync: {
			dev: {
				bsFiles: {
					src: [
						'./**/*.html',
						'./dist/**/*.css',
					]
				},
				options: {
					watchTask: true,
					server: './'
				}
			}

		},

		// Watches for changes in your .scss-files and triggers the tasks sass and postcss.
		watch: {
			files: 'scss/**/*.scss',
			tasks: ['sass', 'postcss'],
			options: {
				spawn: false,
			}
		}
	})

	// Grunt Tasks
	// Run these by typing 'grunt' or 'grunt <command>' in your terminal.
	grunt.registerTask('default', 'run');
	grunt.registerTask('run',
		[
			'sass',
			'postcss',
			'browserSync',
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
