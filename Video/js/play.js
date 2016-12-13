var video = document.getElementById("video");
var playvideo = document.getElementById("play");
var novoice = document.getElementById("voice");
var pro=document.getElementById("progress");

			function playorpause() {
				if(video.paused) {
					video.play();
					playvideo.value = "暂停";
				} else {
					video.pause();
					playvideo.value = "开始";
				}
			}
//遗留问题，待解决
			function slience() {
				if(novoice.muted) {
					novoice.value="静音"
					novoice.muted = false;
				} else {
					novoice.value="有声"
					novoice.muted = true;
				}
			}
			//全屏
			function videofullscreen(){
				video.webkitRequestFullScreen();
			}
			
			
			setInterval(updateProgress,1000);
			
			function updateProgress(){
				pro.max=video.duration;
				pro.value=video.currentTime;
			}t
			
