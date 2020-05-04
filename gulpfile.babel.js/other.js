import { watch, src, dest } from 'gulp';
import { paths } from './index';


// live server 
import  browserSync from 'browser-sync';
// image minify
import imagemin from "gulp-imagemin";
import  cache from 'gulp-cache';


export const liveServer = () => {
    browserSync.init({
        server: {
          baseDir: paths.dest
        },
      });
      watch(paths.dest+"**/*").on('change', browserSync.reload);    
}


export const  images = () => {
  return src(paths.image.src)
    // Caching images that ran through imagemin
    .pipe(
      cache(
        imagemin({
          interlaced: true
        })
      )
    )
    .pipe(dest(paths.image.dest))
  ;
}