import { watch, series, parallel } from 'gulp';
import del from 'del';

//  import other js files
import { styles, stylesProd } from './styles';
import { scripts, scriptsProd, custom } from './scripts';
import { htmlInclude } from './html';
import { liveServer, images } from './other';


//  Not all tasks need to use streams, a gulpfile is just another node program
//  and you can use all packages available on npm, but it must return either a
//  Promise, a Stream or take a callback and call it

// Paths

export const lib = {
    booststarp : {
        style   :  ['src/vendor/bootstrap/dist/css/bootstrap.min.css'],
        script  :  ['src/vendor/bootstrap/dist/js/bootstrap.min.js'],
    },
    slick : {
        style :  ['src/vendor/slick/slick.css','src/vendor/slick/slick-theme.css' ],
        script :['src/vendor/slick/slick.min.js']
    }
}
export const paths = {
    src : 'src/',
    dest : 'build/',
    styles: {
        src: 'src/scss/style.scss',
        dest: 'build/assets/css/',
        watch : 'src/scss/**/*scss'
    },
    scripts: {
        src: ['src/js/**/*.js'],
        dest: 'build/assets/js/',
        watch: 'src/js/**/*.js',
    },
    image : {
      src : "src/images/**/*.+(png|jpg|jpeg|gif|svg)",
      dest : "build/assets/images/",
      watch : "src/images/**/*"
    },
    html: {
        src: 'src/*.html',
        dest: 'build/',
        watch: 'src/**/*.html',
    }
};

// You can use multiple globbing patterns as you would with `gulp.src`,
// for example if you are using del 2.0 or above, return its promise
export const clean = () => del([paths.dest]);

// FOR WATCHING FILES
const watching = () => {
    watch(paths.styles.watch, styles);
    watch(paths.scripts.watch, scripts);
    watch(paths.html.watch, htmlInclude);
    watch(paths.image.watch, images);
}
const watchFiles = series(parallel(htmlInclude, styles, scripts, images),parallel(watching, liveServer));
export { watchFiles as watch };
export { htmlInclude as html };
export {styles as css};
export {images as images};
export { liveServer as server}
export { custom as jss}

/*
 * Specify if tasks run in series or parallel using `gulp.series` and `gulp.parallel`
 */
export const build = series(clean, parallel(htmlInclude, stylesProd, scriptsProd, images));
// export const build = series(htmlInclude, styles, scripts);

/*
 * Define default task that can be called by just running `gulp` from cli
 */
export default series(clean, parallel(htmlInclude, styles, scripts, images));
