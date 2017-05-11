var POTRACE = require('potrace')
,fs = require('fs')
,__ = require('underscore')
;

var fin = "/Users/ccmiller/git/23owmoj/img/wolf3.png"
// var fnn = 'logo-'+__.last(fin.split("/")).split(".")[0]+".svg"
var fnn = 'logo-wolf-prowl.svg'
var fout = '/Users/ccmiller/git/marks2/assets/img/svg/'+fnn

// console.log("fout",fout);
 
POTRACE.trace(fin, function(err, svg) {
  if (err) throw err;
  fs.writeFileSync(fout, svg);
});
