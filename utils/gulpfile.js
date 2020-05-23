const gulp = require('gulp');
const imageResize = require('gulp-image-resize');
const webp = require('gulp-webp');
const rename = require('gulp-rename');

gulp.task('default', () => {
  gulp
    .src('*.png')
    // .src('src/img/src/pomodor-min.png')
    .pipe(
      imageResize()
      //   {
      //   width: 100,
      //   height: 100,
      //   crop: false,
      //   upscale: false
      // }
    )
    .pipe(gulp.dest('./dist/'));
  // .pipe(gulp.dest('src/img/dist'));
});

gulp.task('imgs', () =>
  gulp
    .src('src/img/src/**/*.{jpg,png}')
    .pipe(webp())
    .pipe(gulp.dest('src/img/dist/'))
);

gulp.task('suffix', () => {
  gulp
    .src('src/**/*.{jpg,png}')
    .pipe(imageResize({ width: 100 }))
    .pipe(
      rename(path => {
        path.basename += '-thumbnail';
      })
    )
    .pipe(gulp.dest('dist'));
});
