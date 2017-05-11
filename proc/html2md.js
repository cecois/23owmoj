const UPNDOWN = require('upndown'),UND = new UPNDOWN(),FS=require('fs')
;



// First I want to read the file
FS.readFile('./raws/index.html', function read(err, data) {
    if (err) {
        throw err;
    }
    content = data;


UND.convert(content, function(err, markdown) {
    if(err){ console.err(err);}
    else { console.log(markdown); }
});

});