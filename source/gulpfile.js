const gulp     = require('gulp');
const useref   = require('gulp-useref');
const uglify   = require('gulp-uglify');
const gulpIf   = require('gulp-if');
const sass     = require('gulp-sass');
const cssnano  = require('gulp-cssnano');
const imagemin = require('gulp-imagemin');
const cache    = require('gulp-cache');

const browserSync = require('browser-sync');
const del = require('del');


// Site paths
// -----------------

const path = {
  
  src: 'site',
  srcSCSS: 'site/scss/**/*.scss',
  srcHTML: 'site/*.html',
  srcJS: 'site/js/**/*.js',
  srcIMG: 'site/images/**/*.+(png|jpg|jpeg|gif|svg)',

  srcCSS: 'site/css', // CSS is built on-the-fly from sass
  dist: '../docs',
  distIMG: '../docs/images'

};


// Development Tasks 
// -----------------

// Start browserSync server
gulp.task('browser-sync', () => {
  browserSync({
    server: {
      baseDir: path.src
    }
  });
});

gulp.task('scss', function() {
  return gulp.src(path.srcSCSS)
    .pipe(sass())
    .pipe(gulp.dest(path.srcCSS))
    .pipe(browserSync.reload({ stream: true }));
});

// Watchers
gulp.task('watch', () => {
  gulp.watch(path.srcSCSS, gulp.series('scss'));
  gulp.watch(path.srcHTML, browserSync.reload);
  gulp.watch(path.srcJS, browserSync.reload);
});

// Optimization Tasks 
// ------------------

// Optimizing CSS and JavaScript 
gulp.task('useref', () => {

  return gulp.src(path.srcHTML)
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest(path.dist));
});

// Optimizing Images
gulp.task('images', () =>  {
  return gulp.src(path.srcIMG)
    // Caching images that ran through imagemin
    .pipe(cache(imagemin({
      interlaced: true,
    })))
    .pipe(gulp.dest(path.distIMG))
});

// Cleaning 
gulp.task('clean', () =>  {
  return del(path.dist).then(cb => {
    return cache.clearAll(cb);
  });
});

gulp.task('clean:dist', () =>  {
  return del(['dist/**/*', '!dist/images', '!dist/images/**/*']);
});

// Build Sequences
// ---------------

gulp.task('default', gulp.parallel('browser-sync', 'watch'));

gulp.task('build', gulp.series('clean:dist', gulp.parallel('useref', 'images')));
