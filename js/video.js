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
	video.playbackRate *= 0.95
	console.log("Playback rate is " + video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up video")
	video.playbackRate /= 0.95
	console.log("Playback rate is " + video.playbackRate)
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip ahead")
	video.currentTime += 15
	if (video.currentTime >= video.duration)
		video.currentTime = 0
	console.log("Current time is " + video.currentTime)
});

// document.querySelector("#mute").addEventListener("click", function() {
// 	console.log("Mute video")
// 	video.muted = false
// 	if (video.muted >= 0)
// 		video.currentVolume = 0
// });

// document.querySelector("#faster").addEventListener("click", function() {
// 	console.log("Speed up video")
// 	video.playbackRate /= 0.95
// 	console.log("Playback rate is " + video.playbackRate)
// });

// document.querySelector("#faster").addEventListener("click", function() {
// 	console.log("Speed up video")
// 	video.playbackRate /= 0.95
// 	console.log("Playback rate is " + video.playbackRate)
// });

// document.querySelector("#faster").addEventListener("click", function() {
// 	console.log("Speed up video")
// 	video.playbackRate /= 0.95
// 	console.log("Playback rate is " + video.playbackRate)
// });

// mute is another if statement