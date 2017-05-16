const UPNDOWN = require('upndown'),UND = new UPNDOWN(),FS=require('fs'),__=require('underscore')
;

var fi = ["whatisa.html"]
// ["articles.html"
// ,"crystals.html"
// ,"faq.html"
// ,"fees.html"
// ,"index.html"
// ,"partnership.html"
// ,"philosophy.html"
// ,"resources.html"
// ,"services.html"
// ,"souls-companion.html"
// ,"speaker.html"
// ,"testimonials.html"
// ]

__.each(fi,(f)=>{
	var ff = "./raws/"+f
	var fo = "./raws/"+f.split(".html")[0]+".md"


	FS.readFile(ff,function read(err,data){if (err) {throw err;}content = data;


		UND.convert(content, function(err, markdown) {
			if(err){ console.err(err);}
			else {


    	// console.log(markdown);
    	FS.writeFile(fo, markdown, function(err) {
    		if(err) {
    			return console.log(err);
    		}

    	});


    } //else.err
}); //convert

}); //readfile.err

}) //each