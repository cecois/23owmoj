!function(e){e.fn.simpleJekyllSearch=function(t){function n(){c.keyup(function(t){e(this).val().length?s(l(e(this).val())):a()})}function l(t){var n=[];return e.each(r,function(e,l){for(var e=0;e<i.length;e++)void 0!==l[i[e]]&&l[i[e]].toLowerCase().indexOf(t.toLowerCase())!==-1&&(n.push(l),e=i.length)}),n}function s(t){a(),h.append(e(o.searchResultsTitle)),t.length?e.each(t,function(t,n){if(t<o.limit){for(var l=o.template,t=0;t<i.length;t++){var s=new RegExp("{"+i[t]+"}","g");l=l.replace(s,n[i[t]])}h.append(e(l))}}):h.append(o.noResults)}function a(){h.children().remove()}var o=e.extend({jsonFile:"/search.json",jsonFormat:"title,category,desc,url,date,shortdate",template:'<li><article><a href="{url}">{title} <span class="entry-date"><time datetime="{date}">{date}</time></span></a></article></li>',searchResults:".search-results",searchResultsTitle:"<h4>Search Results:</h4>",limit:"5",noResults:"<p>Oh snap!<br/><small>Nothing found! :(</small></p>"},t),i=o.jsonFormat.split(","),r=[],c=this,h=e(o.searchResults);o.jsonFile.length&&h.length&&e.ajax({type:"GET",url:o.jsonFile,dataType:"json",success:function(e,t,l){r=e,n()},error:function(e,t,n){console.log("***ERROR in simpleJekyllSearch.js***"),console.log(e),console.log(t),console.log(n)}})}}(Zepto);