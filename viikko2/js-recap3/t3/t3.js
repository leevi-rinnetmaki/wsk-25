const target = document.querySelector("#target");

const browserName = document.createElement("p");
const os = document.createElement("p");
const width = document.createElement("p");
const height = document.createElement("p");
const availabeSpace = document.createElement("p");
const currentTime= document.createElement("p");
const currentDate= document.createElement("p");

browserName.append(document.createTextNode(navigator.userAgent));
os.append(document.createTextNode(navigator.userAgent));
width.append(document.createTextNode(window.innerWidth));
height.append(document.createTextNode(window.innerHeight));
availabeSpace.append(document.createTextNode(window.outerHeight*window.outerWidth));
currentTime.append(document.createTextNode(new Date().toLocaleTimeString("fi-FI")));
currentDate.append(document.createTextNode(new Date().toLocaleTimeString("fi-FI", {year: "numeric", month: "long", day: "numeric"})));


target.append(browserName, os, width, height, availabeSpace, currentTime, currentDate);