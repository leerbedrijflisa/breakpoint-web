var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('serve', function() {
 browserSync({
     open: false,
        server: {
            baseDir: 'www'
        }
    });
    
    gulp.watch(
           //{interval: 100}, 
           ['**/*.html', '**/*.js', '**/*.css'], 
           { cwd: 'www' }, 
           browserSync.reload
       );
});