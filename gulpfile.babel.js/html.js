import { src, dest } from 'gulp';
import { paths } from './index'

// HTML packages
import fileinclude from 'gulp-file-include';

// const path = './src/*html';
// const pages = [path + 'index.html',
//     path + 'inner-page.html',
// ];

// FOR HTML PAGES
export const htmlInclude = () => {
    return src(paths.html.src)
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(dest(paths.dest))
}
