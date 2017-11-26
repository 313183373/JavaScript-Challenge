let volume = document.querySelector('input[name=volume]');
let playbackRate = document.querySelector('input[name=playbackRate]');
let [playButton, backward, forward] = document.querySelectorAll('button');
let video = document.querySelector('video');
let fullProgress = document.querySelector('.progress');
let filledProgress = document.querySelector('.progress__filled');
let progress = 0;

filledProgress.style.flexBasis = '0%';

playButton.onclick = function (e) {
    if (video.paused) {
        video.play();
        setInterval(updateProgress, 100);
        playButton.innerText = "||";
    } else {
        video.pause();
        clearInterval(updateProgress);
        playButton.innerText = "►";
    }
}

playbackRate.oninput = function (e) {
    video.playbackRate = playbackRate.value;
}

volume.oninput = function (e) {
    video.volume = volume.value;
}

function updateProgress() {
    progress = video.currentTime / video.duration;
    filledProgress.style.flexBasis = `${progress * 100}%`;
    if (progress === 1) {
        initPlayer();
    }
}

fullProgress.onclick = function (e) {
    let target = e.offsetX;
    progress = target / fullProgress.offsetWidth;
    video.currentTime = progress * video.duration;
}

function initPlayer(){
    video.pause();
    video.currentTime = 0;
    playButton.innerText = "►";
    filledProgress.style.flexBasis = "0%";
}

backward.onclick = changeProgress;
forward.onclick = changeProgress;

function changeProgress(e){
    let time = +this.dataset.skip;
    if(video.currentTime +time > video.duration){
        video.currentTime = video.duration;
    }else if(video.currentTime + time < 0){
        video.currentTime = 0;
    }else{
        video.currentTime += time;
    }
}