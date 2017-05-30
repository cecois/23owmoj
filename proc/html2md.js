const UPNDOWN = require('upndown'),UND = new UPNDOWN(),FS=require('fs'),__=require('underscore')
;

var fi = 

['addicts.html'
,'age.html'
,'angermanagement.html'
,'bluebird.html'
,'blues.html'
,'cardiovascular.html'
,'choosing.html'
,'cycle.html'
,'doctortrip.html'
,'energy.html'
,'exhaustion.html'
,'fifteen.html'
,'firstaid.html'
,'gottime.html'
,'healthinsurance.html'
,'helpyou.html'
,'history.html'
,'loneliness.html'
,'marathon.html'
,'medium.html'
,'meno.html'
,'midlife.html'
,'naturalaging.html'
,'neworleans.html'
,'nontraditional.html'
,'poweroftouch.html'
,'sandwich.html'
,'sheep.html'
,'shopping.html'
,'silence.html'
,'skeptic.html'
,'stopworld.html'
,'supplements.html'
,'surgery.html'
,'taboo.html'
,'tikunolum.html'
,'touch.html'
,'voyage.html'
,'whatisa.html'
,'why.html']

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