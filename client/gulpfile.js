const fs = require('fs');
const path = require('path');
const { src, dest, series } = require("gulp");
const concat = require("gulp-concat");
const replace = require("gulp-replace");

function srcToBuild() {
  return src(['src/*/*', 'src/*'])
         .pipe(dest('build/src'))
}

function concatTemplates() {
	return src("src/*/*tpl.html")
         .pipe(concat("templates.html"))
         .pipe(dest("temp/"));
}

function addToHTML() {
  //concatTemplates();
  const templatesString = fs.readFileSync(path.join(__dirname, 'temp/templates.html'), {encoding: 'utf-8'});

  return src("index.html")
         .pipe(replace("<!-- TEMPLATES_PLACEHOLDER -->", templatesString))
         .pipe(dest("build/"))
}

// exports.default = addToHTML;
exports.default = series(srcToBuild, concatTemplates, addToHTML);
