const gulp = require("gulp");
var sass = require("gulp-sass")(require("sass"));
const { series } = require("gulp");
const cleancss = require("gulp-clean-css");
// const purgecss = require("gulp-purgecss");
var concat = require("gulp-concat");
var sync = require("gulp-npm-script-sync");

var styleSheets = {
  name: {
    dev: "bulma.css",
    devMin: "bulma.min.css",
    prodMin: "bulma_production.min.css",
  },
};

var paths = {
  styles: {
    src: ["./app/assets/sass/bulma.sass"],
    cssDev: ["./app/assets/styles/css/" + styleSheets.name.dev],
    destPublic: "./public/static/styles/css/",
    destSrc: "./app/assets/styles/css/",
  },
};

function style() {
  return gulp
    .src(paths.styles.src)
    .pipe(sass())
    .pipe(concat(styleSheets.name.dev))
    // .pipe(gulp.dest(paths.styles.destPublic))
    .pipe(gulp.dest(paths.styles.destSrc));
}

function compressStyles() {
  return gulp
    .src(paths.styles.cssDev)
    .pipe(
      sass({
        outputStyle: "compressed",
      }).on("error", sass.logError)
    )
    .pipe(
      cleancss({
        level: {
          2: {
            mergeAdjacentRules: true, // controls adjacent rules merging; defaults to true
            mergeIntoShorthands: true, // controls merging properties into shorthands; defaults to true
            mergeMedia: true, // controls `@media` merging; defaults to true
            mergeNonAdjacentRules: true, // controls non-adjacent rule merging; defaults to true
            mergeSemantically: false, // controls semantic merging; defaults to false
            overrideProperties: true, // controls property overriding based on understandability; defaults to true
            removeEmpty: true, // controls removing empty rules and nested blocks; defaults to `true`
            reduceNonAdjacentRules: true, // controls non-adjacent rule reducing; defaults to true
            removeDuplicateFontRules: true, // controls duplicate `@font-face` removing; defaults to true
            removeDuplicateMediaBlocks: true, // controls duplicate `@media` removing; defaults to true
            removeDuplicateRules: true, // controls duplicate rules removing; defaults to true
            removeUnusedAtRules: false, // controls unused at rule removing; defaults to false (available since 4.1.0)
            restructureRules: false, // controls rule restructuring; defaults to false
            skipProperties: [] // controls which properties won't be optimized, defaults to `[]` which means all will be optimized (since 4.1.0)
          }
        }
      })
    )
    .pipe(concat(styleSheets.name.devMin))
    // .pipe(gulp.dest(paths.styles.destPublic))
    .pipe(gulp.dest(paths.styles.destSrc));
}

function purgeStyles() {
  return (
    gulp
      .src(paths.styles.cssDev)
      // .pipe(postcss([autoprefixer()]))
      // .pipe(
      //   sass({
      //     outputStyle: "compressed",
      //   }).on("error", sass.logError)
      // )
      // .pipe(
      //   purgecss({
      //     content: ["./src/**/*.jsx", "./src/**/*.js", "./src/**/*.html"], // content
      //     safelist: {
      //       standard: [
      //         /has-background-secondary-lighter/,
      //         /has-background-secondary-light/,
      //         /has-background-secondary/,
      //         /has-linear-gradient-primary/,
      //         /has-background-green/,
      //         /has-background-orange/,
      //         /has-background-yellow/,
      //         /has-background-blue-dark/,
      //         /has-background-cyan/,
      //         /has-background-yellow-darker/,
      //         /has-background-cyan/,
      //         /has-background-red-darker/,
      //         /has-background-white-ter/,
      //         /has-background-primary-lighter/,
      //         /has-background-white-ter-opacity-9/,
      //         /has-background-tertiary-opacity-3/,
      //         /has-background-primary-opacity-3/,
      //         /has-background-secondary-opacity-3/,
      //         /has-background-primary-darker-opacity-3/,
      //         /has-background-primary-dark-opacity-3/,
      //         /has-linear-gradient$/,
      //         /opacity-3$/,
      //         /has-text-dark/,
      //         /mix-exclusion/,
      //         /mix-colour-burn/,
      //         /mix-color/,
      //         /mix-hue/,
      //         /is-2by1/,
      //         /is-1by1-desktop/,
      //         /is-3by1-tablet/,
      //         /is-3by1-mobile/,
      //         /slick-slider/,
      //         /slick-list/,
      //         /slick-slide/,
      //         /columns/,
      //         /column/,
      //         /is-4-desktop/,
      //         /is-6-tablet/,
      //         /is-12-mobile/,
      //         /p-6/,
      //         /pb-3/,
      //         /is-rounded-3/,
      //         /m-$/,
      //         /is-small/,
      //         /is-medium/,
      //         /is-large/,
      //         /icon$/,
      //         /svg$/,
      //         /column-mb-7/,
      //         /m-a/,
      //       ],
      //       deep: [/icon$/, /svg$/, /is-size$/, /has-linear-gradient$/],
      //       greedy: [
      //         /icon$/,
      //         /svg$/,
      //         /has-linear-gradient$/,
      //         /columns/,
      //         /column/,
      //       ],
      //       keyframes: [],
      //       variables: [],
      //     },
      //   })
      // )
      .pipe(concat(styleSheets.name.devMin))
      // .pipe(gulp.dest(paths.styles.destPublic))
      .pipe(gulp.dest(paths.styles.destSrc))
  );
}

exports.style = series(style, compressStyles);
exports.build = series(style, purgeStyles);
exports.watch = function () {
  gulp.watch(
    "./app/assets/sass/**/*.sass",
    series(style, compressStyles)
  );
};
// exports.watch = function () {
//   gulp.watch(
//     "./src/sass/**/*.sass",
//     gulp.series(style, compressStyles, purgeStyles)
//   );
// };
exports.purgeStyles = purgeStyles;
exports.compressStyles = compressStyles;
sync(gulp);
