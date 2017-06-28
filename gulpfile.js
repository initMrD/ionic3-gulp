/**
 * Created by mrd on 2017/6/27.
 */

/**
 * note:针对ionic3的适配：
 * 只需要把gulpfile.js放进根目录，运行ionic cordova build {{platform}} --env {{mode}}
 * 例如：ionic cordova build android --env prod
 * 控制台会提示是否安装ionic-cli-plugin-gulp，选y即可
 */

/**
 * 相关文件
 * src/config/dev.json
 * src/config/prod.json
 */

var gulp = require('gulp');
var args    = require('yargs').argv;
var concat = require('gulp-concat');
var gulpTsConfig = require('gulp-ts-config');
var runSequence = require('run-sequence');
var del = require('del');
var Q = require('q');

defaultTask = ['set-api-config'];

gulp.task('ionic:build:before', function() {
  // var deferred = Q.defer();
  // runSequence('build').on('end',function(){
  //   deferred.resolve();
  // });
  // return deferred.promise;
  runSequence('build');
});

gulp.task('build',function () {
  runSequence('clear',eval('defaultTask'));
});

gulp.task('clear',function (cb) {
  return del('./src/app/Config.ts', cb);
});

gulp.task('set-api-config', function() {
  var deferred = Q.defer();
  gulp.src('./src/config/'+(args.env||'dev')+'.json')
    .pipe(gulpTsConfig('Config'))
    .pipe(concat('Config.ts'))
    .pipe(gulp.dest('./src/app')).on('end',function () {
    console.info('Configuration success!');
    deferred.resolve();
  });
  return deferred.promise;
});
