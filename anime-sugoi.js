// ==UserScript==
// @name         Miku-doujin Ads Remover
// @namespace    https://www.anime-sugoi.com/*
// @version      0.1
// @description  try to take over the world!
// @author       Varkaria sukinami
// @match        https://www.anime-sugoi.com/*
// @grant        none
// ==/UserScript==

(function() {
    document.getElementsByClassName('col-md-8')[0].remove();
    document.getElementsByTagName('center')[0].remove();
    document.getElementsByTagName('center')[2].remove();
})();