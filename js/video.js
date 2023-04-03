var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1")
	video.autoplay = false;
	console.log("Autoplay is set to " + video.autoplay)
	video.loop = false;
	console.log("Looping is set to " + video.loop)
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video")
	video.play()
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video")
	video.pause()
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow down video")
	video.playbackRate *= 0.90
	console.log("Playback rate is " + video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up video")
	video.playbackRate /= 0.90
	console.log("Playback rate is " + video.playbackRate)
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip ahead")
	video.currentTime += 10
	if (video.currentTime >= video.duration)
		video.currentTime = 0
	console.log("Current time is " + video.currentTime)
});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute video")
	// video.muted = false
	if (video.muted == false) {
		video.muted = true;
		console.log("Video muted")
		document.getElementById("mute").textContent = "Unmute";
	}
	else {
		video.muted = false;
		console.log("Video unmuted")
		document.getElementById("mute").textContent = "Mute";
	}
});

document.querySelector("#slider").addEventListener("change", function() {
	console.log("I am in slider")
	console.log(this)
	console.log(this.value)
	bd = document.querySelector("body")
	bd.style.fontSize = this.value + "%"
});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Old School")
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Original")
	video.classList.remove("oldSchool");
});