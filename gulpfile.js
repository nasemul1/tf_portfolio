const gulp = require("gulp");
const postcss = require("gulp-postcss");
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");

// Paths
const paths = {
  styles: {
    src: "src/styles.css",
    dest: "dist",
  },
  html: "src/**/*.html",
};

// CSS Task
function css() {
  return gulp
    .src(paths.styles.src)
    .pipe(postcss([tailwindcss, autoprefixer]))
    .pipe(gulp.dest(paths.styles.dest));
}

// Watch Task
function watchFiles() {
  gulp.watch(paths.styles.src, css);
  gulp.watch(paths.html, css);
}

// Default Task
exports.default = gulp.series(css, watchFiles);