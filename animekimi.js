// ==UserScript==
// @name         Animekimi Ads Remover
// @namespace    https://animekimi.com/*
// @version      0.1
// @description  try to take over the world!
// @author       Varkaria sukinami
// @match        https://animekimi.com/*
// @grant        none
// ==/UserScript==

(function () {
    document.getElementsByClassName("module_home_x")[0].remove();
    // sorry i'm lazy to use for loop lmao
    document.getElementsByClassName("animekimi-banner lazy")[0].remove();
    document.getElementsByClassName("animekimi-banner lazy")[0].remove();
    document.getElementsByClassName("animekimi-banner lazy")[0].remove();
    document.getElementsByClassName("animekimi-banner lazy")[0].remove();
    document.getElementsByClassName("animekimi-banner lazy")[0].remove();
})();