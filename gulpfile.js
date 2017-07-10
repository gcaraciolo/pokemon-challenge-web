var fs = require('fs')
var gulp = require('gulp');
var gulpNgConfig = require('gulp-ng-config');
var constants = require('./constants')

gulp
	.task('config', () => {
		fs.writeFileSync('./config.json', JSON.stringify(constants))
		gulp
			.src('./config.json')
			.pipe(gulpNgConfig('pokemon-challenge', {
				createModule: false
			}))
			.pipe(gulp.dest('src/'))
	})

gulp
	.task('default', ['config'], () => {
		gulp
			.start('config');
});
