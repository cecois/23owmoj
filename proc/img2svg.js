var POTRACE = require('potrace')
,fs = require('fs')
,__ = require('underscore')
;

var fin = "/Users/ccmiller/git/23owmoj/img/duckprints.png"
// var fnn = 'logo-'+__.last(fin.split("/")).split(".")[0]+".svg"
var fnn = 'duckprints.svg'
var fout = '/tmp/'+fnn

 var params = {
  threshold: 220
};
POTRACE.trace(fin, params, function(err, svg) {
  if (err) throw err;
  fs.writeFileSync(fout, svg);
});