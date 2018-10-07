var gulp = require("gulp");
var htmlClean = require("gulp-htmlclean");
var imageMin = require("gulp-imagemin");
var jsUglify = require("gulp-uglify");
//gulp的四个方法
// gulp.src()读取文件地址 
// gulp.dest()写入文件， pipe 到多个文件夹，如果某文件夹不存在，将会自动创建它
// gulp.task()任务，做一些事情，内部带有function函数
// gulp.watch()监视文件，并且可以在文件发生改动时候做一些事情。

var folder = {
    src: "src/",//开发目录文件夹
    dist: "dist/" //压缩打包后的文件夹
}
//创建一个操作html的任务，该任务先读取src文件夹中的html文件，再进行压缩打包，再将处理后的html文件写入到dist文件夹中
gulp.task("html", function(){
    gulp.src(folder.src + "html/*")
        .pipe(htmlClean())
        .pipe(gulp.dest(folder.dist + "html/"))
})
//处理图片
gulp.task("images", function(){
    gulp.src(folder.src + "images/*")//src文件夹下的images文件夹下的所有文件
        .pipe(imageMin())
        .pipe(gulp.dest(folder.dist + "images/*"))
})
//处理js文件
gulp.task("js", function(){
    gulp.src(folder.src + "js/*")
        .pipe(jsUglify())
        .pipe(folder.dist + "js/*")
})
gulp.task("default", ["html","images","js"])//执行该任务