const gulp           = require('gulp');
const runseq         = require('run-sequence');

gulp.task('default', function() {
	runseq (
		'sass',
		'js',
		'browserSync',
		'sass:watch',
		'js:watch'
		);
});