const gulp = require('gulp')
const { series, parallel } = gulp
const ts = require('gulp-typescript')
const tsProject = ts.createProject('tsconfig.json')

const LoadTypescript = (cb) => {
    tsProject.src()
        .pipe(tsProject())
        .js
        .pipe(gulp.dest('build'))
    return cb()
}

module.exports.default = series(
    LoadTypescript
)