// ==UserScript==
// @name         Cube Control Save
// @namespace    Cube
// @version      1.0
// @description  CTRL+S stopped working in cube because someone fucked with it, I made this to un-fuck it until the people who fucked it can un-fuck it once again.
// @author       Johan Samuelsson
// @match        https://cube.advania.se/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

// Nice Site
// https://www.toptal.com/developers/keycode/for/i

document.onkeydown = keydown;

function keydown (evt) {
    if (!evt) evt = event;
    if (evt.ctrlKey && evt.keyCode === 83) {
        evt.preventDefault();
        //Check if save button exists
        if (document.querySelector("#sysverb_update_and_stay")){
            //Press it
            document.querySelector("#sysverb_update_and_stay").click();
        }
        //Check if update button exists
        if (document.querySelector("#sysverb_insert")){
            //Press it
            document.querySelector("#sysverb_insert").click();
        }
        if (document.querySelector("#sysverb_update")){
            //Press it
            document.querySelector("#sysverb_update").click();
        }

        //Alert to let me know it worked, it did, no need for it to be active any more.
        //alert("CTRL+s presed");
    }
}