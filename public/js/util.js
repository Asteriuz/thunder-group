let tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var trailerPlayer;

function waitForYoutubeApi() {
  if (typeof YT !== "undefined") {
    try {
      trailerPlayer = new YT.Player("trailer-player", {
        height: "100%",
        width: "100%",
        videoId: "naMB8YJ5yps",
      });
    } catch (e) {
      console.log(e);
    }
  } else {
    setTimeout(waitForYoutubeApi, 100);
  }
}

waitForYoutubeApi();

trailerButton = document.getElementById("trailer-button");
trailerModal = document.getElementById("trailer-modal");

trailerButton.addEventListener("click", function () {
  document.getElementById("trailer-modal").showModal();
  try {
    trailerPlayer.playVideo();
  } catch (e) {
    console.log(e);
  }
});

document.addEventListener("click", function (e) {
  console.log(e);
  if (e.target.id !== "trailer-button") {
    trailerPlayer.pauseVideo();
    trailerModal.close();
  }
});

/* -------------------------------------------------------------------------- */
/*                                  ScrollBar                                 */
/* -------------------------------------------------------------------------- */

const body = document.querySelector("body");

window.addEventListener(
  "scroll",
  () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      body.classList.add("scroll-bottom");
    } else if (window.scrollY === 0) {
      body.classList.add("scroll-top");
    } else {
      body.classList.remove("scroll-top");
      body.classList.remove("scroll-bottom");
    }
  },
  { passive: true },
);
