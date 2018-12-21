/* Light YouTube Embeds by @labnol */
/* Web: http://labnol.org/?p=27941 */

document.addEventListener("DOMContentLoaded",
    function() {
        var div, n,
            v = document.getElementsByClassName("youtube-player");
        for (n = 0; n < v.length; n++) {
            div = document.createElement("div");
            div.setAttribute("data-id", v[n].dataset.id);
            if (v[n].dataset.src) {
                div.innerHTML = labnolThumbWithSrc(v[n].dataset.src);
            } else {
                /* Fallback to earlier methods */
                div.innerHTML = labnolThumb(v[n].dataset.id);
            }
            div.onclick = labnolIframe;
            v[n].appendChild(div);
        }
    });

function labnolThumb(id) {
    var thumb = '<img src="https://img.youtube.com/vi/ID/hqdefault.jpg">',
        play = '<div class="play"></div>';
    return thumb.replace("ID", id) + play;
}

function labnolThumbWithSrc(src) {
    var thumb = '<img src="SRC">',
        play = '<div class="play"></div>';
    return thumb.replace("SRC", src) + play;
}

function labnolIframe() {
    var iframe = document.createElement("iframe");
    var embed = "https://www.youtube.com/embed/ID?autoplay=1";
    iframe.setAttribute("src", embed.replace("ID", this.dataset.id));
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("allowfullscreen", "1");
    iframe.setAttribute("modestbranding", "1");
    iframe.setAttribute("rel", "0");
    this.parentNode.replaceChild(iframe, this);
}