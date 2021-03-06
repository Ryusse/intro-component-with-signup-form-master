const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('dart-sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const babel = require('gulp-babel')
const terser = require('gulp-terser');
const browsersync = require('browser-sync').create();
const gulp = require('gulp');
// const imagemin = require('gulp-imagemin');
// gulp.task('imagemin',() =>{
// 	gul.src('src/assets/images/*')
// 	 .pipe(imagemin())
// 	 .pipe(gulp.dest('dist/images'))
// })

// Sass Task
function scssTask() {
	return src('src/assets/scss/main.scss', { sourcemaps: true })
		.pipe(sass())
		.pipe(postcss([autoprefixer(), cssnano()]))
		.pipe(dest('dist/css', { sourcemaps: '.' }));
}

// JavaScript Task
function jsTask() {
	return src('src/js/script.js', { sourcemaps: true })
		.pipe(babel({ presets: ['@babel/preset-env'] }))
		.pipe(terser())
		.pipe(dest('dist/js', { sourcemaps: '.' }));
}

// Browsersync
function browserSyncServe(cb) {
	browsersync.init({
		server: {
			baseDir: '.',
			index: './index.html'
		},
		notify: {
			styles: {
				top: 'auto',
				bottom: '0',
			},
		},
	});
	cb();
}
function browserSyncReload(cb) {
	browsersync.reload();
	cb();
}

// Watch Task
function watchTask() {
	watch('*.index.html', browserSyncReload);
	watch(
		['src/assets/scss/**/*.scss', 'src/**/*.js'],
		series(scssTask, jsTask, browserSyncReload)
	);
}

// Default Gulp Task
exports.default = series(scssTask, jsTask, browserSyncServe, watchTask);