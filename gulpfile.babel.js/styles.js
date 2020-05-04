import { src, dest } from 'gulp';
import { paths } from './index';

// CSS packages
import sass from 'gulp-sass';
import rename from 'gulp-rename';
// import cleanCSS from 'gulp-clean-css';
import sourcemaps from 'gulp-sourcemaps';
import autoprefixer from 'gulp-autoprefixer';
import sassGlob  from 'gulp-sass-glob';

// FOR STYLESHEETS
export const styles = () => {
    return src(paths.styles.src)
    .pipe(sourcemaps.init())
    .pipe(sassGlob())
        .pipe(
            sass({
              outputStyle: "expand" //expand or compact or compressed
            }).on("error", sass.logError)
          )
          .pipe(
            autoprefixer({
              cascade: true
            })
          )
        .pipe(rename({
            basename: 'style',
            suffix: '.min'
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(dest(paths.styles.dest))
};

export const stylesProd = () => {
  return src(paths.styles.src)
  .pipe(sourcemaps.init())
  .pipe(sassGlob())
      .pipe(
          sass({
            outputStyle: "compressed" //expand or compact or compressed
          }).on("error", sass.logError)
        )
        .pipe(
          autoprefixer({
            cascade: true
          })
        )
      .pipe(rename({
          basename: 'app',
          suffix: '.min'
      }))
      .pipe(sourcemaps.write('.'))
      .pipe(dest(paths.styles.dest))
};;