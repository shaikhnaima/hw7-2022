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
	video.muted = false
	if (video.muted == false) {
		video.muted = true;
	}
	else {
		video.muted == false
	}
});

document.querySelector("#slider").addEventListener("click", function() {
	console.log("Volume")
	video.volume += 1
	console.log("Current volume is " + video.volume)
});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Old School")
	if (video.classList.contains("Old-School")) {
		video.classList.remove("Old-School");
	  } else {
		video.classList.add("Old-School");
	  }
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Original")
	if (video.classList.contains("Original")) {
		video.classList.remove("Original");
	  } else {
		video.classList.add("Original");
	  }
});