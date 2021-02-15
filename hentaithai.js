// ==UserScript==
// @name         Hentaithai Ads Remover
// @namespace    https://hentaithai.com/*
// @version      1.0
// @description  try to take over the world!
// @author       Varkaria sukinami
// @match        https://hentaithai.com/*
// @grant        none
// ==/UserScript==

(function() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    
    if (window.location.pathname == "/forum/index.php") {
        if (urlParams.has('topic')) {
            document.getElementsByClassName('row')[1].remove()
            document.getElementsByClassName('row')[3].remove()
            document.getElementsByClassName('col-12')[3].remove()
        }
        if (urlParams.has('board')) {
            document.getElementsByClassName('row')[1].remove()
            document.getElementsByClassName('col-12')[3].remove()
        }
    } else {
        if (document.getElementsByClassName('row')[1]) {
            document.getElementsByClassName('row')[1].remove()
        }
        if (document.getElementsByClassName('row')[3]) {
            document.getElementsByClassName('row')[3].remove()
        }
        if (document.getElementsByClassName('col-12 col-sm-8 col-md-6 col-lg-4')[0]) {
            document.getElementsByClassName('col-12 col-sm-8 col-md-6 col-lg-4')[0].remove()
        }
    }

})();