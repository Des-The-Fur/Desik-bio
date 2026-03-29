const pfp = document.querySelector(".avatar img");



let ___pfpClicks = 0;
let ___easterEggVisible = false;

pfp.addEventListener("click", async () => {
  ___pfpClicks++;
  if (___pfpClicks === 10 && !___easterEggVisible) {
    ___easterEggVisible = true;
    let video = document.createElement("video");
    video.src = "/easteregg.mp4";
    video.autoplay = "true";
    video.volume = "0.5";

    document.body.appendChild(video);
    setTimeout(() => {
      video.remove();
      ___easterEggVisible = false;
      ___pfpClicks = 0;
    }, 19364);
  }
});
