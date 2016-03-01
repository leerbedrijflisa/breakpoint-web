var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('serve', function() {
  browserSync({
		server: {
			baseDir: 'www'
		}
	});
	
	gulp.watch(['**/*.html', '**/*.js', '**/*.css'], { cwd: 'www' }, browserSync.reload);
});