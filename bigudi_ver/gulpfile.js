var gulp = require('gulp'),
		concatCss = require('gulp-concat-css'),
		minifyCSS = require('gulp-minify-css'),
		concat = require('gulp-concat'),
		uglify = require('gulp-uglify'),
		imagemin = require('gulp-imagemin'),
		autoprefixer = require('autoprefixer-core'),
		postcss = require('gulp-postcss'),
		less = require('gulp-less'),
		rename = require('gulp-rename'),
		grunt = require('gulp-grunt')(gulp);

var opacity = function(css) {
  css.eachDecl(function(decl, i) {
    if (decl.prop === 'opacity') {
      decl.parent.insertAfter(i, {
        prop: '-ms-filter',
        value: '"progid:DXImageTransform.Microsoft.Alpha(Opacity=' + (parseFloat(decl.value) * 100) + ')"'
      });
    }
  });
};

gulp.task('default', function() {
	gulp.run('less');
	gulp.run('css');
	gulp.run('css_dev');
	gulp.run('js');
	gulp.run('js_dev');
	gulp.run('html');
	gulp.run('img');
	gulp.run('copy');
	gulp.run('w');
});

gulp.task('build', function() {
	gulp.run('less');
	gulp.run('css');
	gulp.run('js');
	gulp.run('html');
	// gulp.run('img');
	gulp.run('copy');
});

gulp.task('w', function(){
	gulp.watch('css/build/*.css', ['css_dev']);
	gulp.watch('css/*.less', ['less']);
	gulp.watch(['js/*.js','!js/all.js'], ['js_dev']);
});

gulp.task('css', function() {
	gulp.src(['css/build/*.css', '!css/all.css'])
 	.pipe(concatCss("style.css"))
 	.pipe(postcss([
    autoprefixer({browsers: ['last 7 versions']}),
    opacity
  ]))
  // .pipe(minifyCSS())
  .pipe(rename("style.min.css"))
  .pipe(gulp.dest('production/build/'))
});

gulp.task('css_min', function() {
	gulp.src('css/all.css')
  .pipe(minifyCSS())
  .pipe(rename("style.min.css"))
  .pipe(gulp.dest('production/build/'))
});

gulp.task('css_dev', function() {
	gulp.src(['css/build/*.css', '!css/all.css'])
 	.pipe(concatCss("all.css"))
 	.pipe(postcss([
    autoprefixer({browsers: ['last 7 versions']}),
    opacity
  ]))
  .pipe(gulp.dest('css/'))
});

gulp.task('less', function() {
	gulp.src('css/*.less')
  .pipe(less())
  .pipe(gulp.dest('css/build/'))
});

gulp.task('js', function() {
	gulp.src(['js/*.js', '!js/all.js', '!js/html5shiv.min.js'])
 	.pipe(concat("all.js"))
  .pipe(uglify())
  .pipe(rename("all.min.js"))
  .pipe(gulp.dest('production/build/'))
});

gulp.task('js_dev', function() {
	gulp.src(['js/*.js', '!js/all.js', '!js/html5shiv.min.js'])
 	.pipe(concat("all.js"))
  .pipe(gulp.dest('js/'))
});

gulp.task('html', function() {
	gulp.src(['*.html'])
 	gulp.run('grunt-html')
});

gulp.task('img', function () {
	gulp.run("img_min");
	gulp.run("pic_min");
});
gulp.task('img_min', function () {
	gulp.src(['img/*'])
	.pipe(imagemin({progressive: true}))
	.pipe(gulp.dest('production/img/'))
});
gulp.task('pic_min', function () {
	gulp.src(['pic/*'])
	.pipe(imagemin({progressive: true}))
	.pipe(gulp.dest('production/pic/'))
});

gulp.task('copy',function(){
	gulp.run('copy_img');
	gulp.run('copy_pic');
	gulp.run('copy_fonts');
	gulp.run('copy_files');
});

gulp.task('copy_img',function(){
	gulp.src(['img/*.{png,jpg,gif}'])
	.pipe(gulp.dest("production/img/"));
});

gulp.task('copy_pic',function(){
	gulp.src(['pic/*.{png,jpg,gif}'])
	.pipe(gulp.dest("production/pic/"));
});

gulp.task('copy_fonts',function(){
	gulp.src(['fonts/*'])
	.pipe(gulp.dest("production/build/fonts/"));
});

gulp.task('copy_files',function(){
	gulp.src(['./*.{ico,php,.htaccess}'])
	.pipe(gulp.dest("production/"));
});