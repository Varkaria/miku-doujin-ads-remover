// ==UserScript==
// @name         Doujinth Ads Remover
// @namespace    https://doujin-th.com/*
// @version      1.0
// @description  try to take over the world!
// @author       Varkaria sukinami
// @match        https://doujin-th.com/*
// @grant        none
// ==/UserScript==

(function () {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    if (window.location.pathname == "/forum/index.php") {
        if (urlParams.has('topic')) {
            if (document.getElementsByClassName('container')[2]) {
                document.getElementsByClassName('container')[2].remove()
            }
            if (document.getElementsByClassName('row')[1]) {
                document.getElementsByClassName('row')[1].remove()
            }
            if (document.getElementsByClassName('col-xs-12 col-md-4')[0]) {
                document.getElementsByClassName('col-xs-12 col-md-4')[0].remove()
            }
        }
    } else {
        if (document.getElementsByClassName('container')[2]) {
            document.getElementsByClassName('container')[2].remove()
        }
        if (document.getElementsByClassName('iframe-width')[0]) {
            document.getElementsByClassName('iframe-width')[0].remove()
        }
    }

})();