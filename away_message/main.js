'use strict';
import AccessFile from '../access_file.js';

const fps_val = 20;
const back_symbol = "_\n";
var away_message = back_symbol;

var away_message_file;

function init(_canvas, _tempCanvas, _width, _height) {
	away_message_file = AccessFile("filename=away_message/away_message.txt");

	window.requestAnimationFrame(update);
}
window.init = init;

function update(timestamp) {
	var contents = away_message_file.read();
	if(contents != away_message)
	{
		document.getElementById("away_text").style.visibility = "visible";
		document.getElementById("away_text").innerHTML = contents;
	}
	if(contents == back_symbol)
		document.getElementById("away_text").style.visibility = "hidden";

	window.requestAnimationFrame(update);
}
