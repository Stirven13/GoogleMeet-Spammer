// ==UserScript==
// @name         GoogleMeet Spammer
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Spam to meet.google.com
// @author       Stirven13, GSRHackZ
// @match        https://meet.google.com/*
// @grant        none
// @license                  MIT
// @compatible               chrome
// @compatible               firefox
// @compatible               opera
// @compatible               safari
// ==/UserScript==

// This script is an upgraded version of the GSRHackZ script
// Original: https://github.com/aaronrampy/Google-Meet-Bot/blob/main/bot.js

if(location.href.includes("https://meet.google.com/")){
    if(!location.href.includes("#BOT")){
        document.body.addEventListener("keyup",function(evt){
            if(evt.keyCode==192){
                let botCount=prompt("How many spam pages do you want to open? (I don't recommend more than 20.)");
                let link=prompt("Enter the link to connect to Meet.\nIf you want to specify an account, then add authuser=, example: https://meet.google.com/abc-abcd-abc?authuser=1");
                let phrase=prompt("What message will the bot spam in chat?");
                if(botCount.trim().length==0||link.trim().length==0||phrase.trim().length==0){
                    alert("You must enter each parameter")
                }
                else{
                    let ask=confirm(`Enable pop-ups to allow the script to open pages.\n\Parameters:\nNumber of bots: ${botCount}\nLink: ${link}\nSpam message: ${phrase}`);
                    if(ask){
                        localStorage.setItem("spamMsg",phrase);
                        for(let i=0;i<botCount;i++){
                            window.open(link+"#BOT"+Number(i+1));
                        }
                    }
                    else{
                        alert("Try it again...")
                    }
                }
            }

        })
    }
    else{
        setInterval(function(){
            // Try to connect
            if(document.getElementsByClassName("VfPpkd-LgbsSe VfPpkd-LgbsSe-OWXEXe-k8QpJ VfPpkd-LgbsSe-OWXEXe-dgl2Hf nCP5yc AjY5Oe DuMIQc LQeN7 jEvJdc QJgqC")[0]!==undefined){
                document.getElementsByClassName("VfPpkd-LgbsSe VfPpkd-LgbsSe-OWXEXe-k8QpJ VfPpkd-LgbsSe-OWXEXe-dgl2Hf nCP5yc AjY5Oe DuMIQc LQeN7 jEvJdc QJgqC")[0].click()
            }

            // If kick or no answer refresh page
            if(document.getElementsByClassName("VfPpkd-JGcpL-IdXvz-LkdAo-Bd00G")[0]==undefined &&document.getElementsByClassName("VfPpkd-LgbsSe VfPpkd-LgbsSe-OWXEXe-k8QpJ VfPpkd-LgbsSe-OWXEXe-dgl2Hf nCP5yc AjY5Oe DuMIQc LQeN7 jEvJdc QJgqC")[0].disabled){
                window.location.reload();
            }
            let phrase=localStorage.getItem("spamMsg");
            botSay(phrase)
        },2000)

        setInterval(function(){
            botRaiseHand()
        },500)
    }
}

function botRaiseHand() {
    if(document.getElementsByClassName("VfPpkd-Bz112c-LgbsSe fzRBVc tmJved xHd4Cb rmHNDe nRJCJ")[0]!==undefined){  // Raise hand
        document.getElementsByClassName("VfPpkd-Bz112c-LgbsSe fzRBVc tmJved xHd4Cb rmHNDe nRJCJ")[0].click()
    }
}

function botSay(phrase){
    if(!(document.getElementsByClassName("VfPpkd-fmcmS-wGMbrd rfurme")[0]!==undefined)){
        return
    }
    document.getElementsByClassName("VfPpkd-Bz112c-LgbsSe yHy1rc eT1oJ JsuyRc boDUxc")[2].click() // Icon to open chat
    document.getElementsByClassName("VfPpkd-fmcmS-wGMbrd rfurme")[0].value = phrase;  // Set text in msg
    let button = document.getElementsByClassName("VfPpkd-Bz112c-LgbsSe yHy1rc eT1oJ QDwDD tWDL4c Cs0vCd")[0] // Button for send msg
    button.disabled = false
    button.click()
}