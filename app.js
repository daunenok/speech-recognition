var container = document.querySelector(".container");
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
var recog = new SpeechRecognition();
recog.interimResults = true;
recog.start();

recog.addEventListener("result", showIt);
recog.addEventListener("end", recog.start);

function showIt(event) {
	var p, transcript;
	if (event.results[0].isFinal) {
		p = document.createElement("p");
		transcript = event.results[0][0].transcript;
		p.innerHTML = transcript;
		container.appendChild(p);
	}
}