/* Light YouTube Embeds by @labnol */
/* Web: http://labnol.org/?p=27941 */
/* YouTube embeds were accounting for ~10s of load time */


document.addEventListener("DOMContentLoaded",
    function() {
        var div, n,
        v = document.getElementsByClassName("youtube-player");
        var w = $(v).parent().width()
        for (n = 0; n < v.length; n++) {
            div = document.createElement("div");
            div.setAttribute("data-id", v[n].dataset.id);
            div.innerHTML = labnolThumb(v[n].dataset.id,w);
            div.onclick = labnolIframe;
            v[n].appendChild(div);
        }
    });

function labnolThumb(id,w) {
    var z = 315;
    var thumb = '<img width="'+z+'" src="https://i.ytimg.com/vi/ID/hqdefault.jpg">',
    play = '<div class="play"></div>';
    return thumb.replace("ID", id) + play;
}

function labnolIframe() {
    var iframe = document.createElement("iframe");
    var embed = "https://www.youtube.com/embed/ID?rel=0&autoplay=1";
    iframe.setAttribute("src", embed.replace("ID", this.dataset.id));
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("allowfullscreen", "1");
    this.parentNode.replaceChild(iframe, this);
}

/* SoundCloud on-demand */
/* http://stackoverflow.com/questions/21515743/will-several-soundcloud-players-on-same-page-slow-down-my-website */

// $(window).load(function() {

//     $(".soundcloud-wrapper").each(function() {
//         // var URL = $(this).attr('data-id');
//         var scid = (typeof $(this).attr('data-id') !== 'undefined')?$(this).attr('data-id'):null;
//         console.log("scid:"); console.log(scid);
//         // var htm = '<iframe width="100%" height="200px" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/' + scid + '&amp;auto_play=false&amp;hide_related=false&amp;show_comments=false&amp;show_user=false&amp;show_reposts=false&amp;visual=true" frameborder="0"></iframe>';
//         var htm = '<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/'+scid+'&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>'
//         $(this).html(htm)
//         // .fitVids()
//         .removeClass('.loading');
//     });

// });