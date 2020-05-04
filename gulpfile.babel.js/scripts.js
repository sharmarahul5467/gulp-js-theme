import { src, dest } from 'gulp';
import { paths } from './index';

// Js packages
import babel from 'gulp-babel';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';
import sourcemaps from 'gulp-sourcemaps';

// FOR JAVASCRIPTS
export const scripts = () => {
    return src(paths.scripts.src)
        .pipe(sourcemaps.init())
        .pipe(babel({presets: ['@babel/env']}))
        .pipe(concat('app.min.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(dest(paths.scripts.dest))
};

export const scriptsProd = () => {
    return src(paths.scripts.src)
        .pipe(sourcemaps.init())
        .pipe(babel({presets: ['@babel/env']}))
        .pipe(concat('app.min.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(dest(paths.scripts.dest))
};



 // FOR JAVASCRIPTS
 export const custom = () => {
    return src([	
        "./js/text-rotate.js",
        "./js/progress-bar.min.js",
        "./js/jquery.magnific-popup.min.js",
        "./js/magnific-popup-options.js",
        "./js/app.js",
        ])
        .pipe(sourcemaps.init())
        .pipe(babel({presets: ['@babel/env']}))
        .pipe(concat('app.min.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(dest('js/output/'))
};
 