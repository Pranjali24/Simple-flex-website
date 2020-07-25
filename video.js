const videos=document.querySelectorAll('.player');
const bigVideo = document.querySelector('.bigplayer');

videos.forEach(video=>video.addEventListener("click",changeVideo));
// Swap the videos
function changeVideo(){
    let video1=bigVideo.src;
    bigVideo.setAttribute("src",this.src);
    this.setAttribute("src",video1);
}
