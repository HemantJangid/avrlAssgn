const dot1 = document.querySelector(".dot-1");
const dot2 = document.querySelector(".dot-2");
const dot3 = document.querySelector(".dot-3");
const dot4 = document.querySelector(".dot-4");
const start = document.querySelector("#start");
const stop = document.querySelector("#stop");

function changeAnimationState(state) {
  let newState = state == "start" ? "running" : "paused";
  dot1.style.animationPlayState = newState;
  dot2.style.animationPlayState = newState;
  dot3.style.animationPlayState = newState;
  dot4.style.animationPlayState = newState;
}
