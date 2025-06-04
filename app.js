const shareContainer = document.getElementById("share-container");
const shareTriangle = document.getElementById("share-triangle");
const shareButton = document.getElementById("share-button");

let timeoutId = null;
let isVisible = false;

shareButton.addEventListener("click", (event) => {
  event.stopPropagation();

  if (!isVisible) {
    showElements();
  } else {
    hideElements();
  }
});

function showElements() {
  shareContainer.classList.remove("hide");
  shareTriangle.classList.remove("hide");
  shareButton.classList.add("active__background");
  isVisible = true;

  timeoutId = setTimeout(() => {
    shareContainer.classList.add("hide");
    shareTriangle.classList.add("hide");
    shareButton.classList.remove("active__background");
    isVisible = false;
    timeoutId = null;
  }, 10000);
}

function hideElements() {
  clearTimeout(timeoutId);
  shareContainer.classList.add("hide");
  shareTriangle.classList.add("hide");
  shareButton.classList.remove("active__background");
  isVisible = false;
  timeoutId = null;
}

document.addEventListener("click", (event) => {
  if (
    isVisible &&
    !shareButton.contains(event.target) &&
    !shareContainer.contains(event.target) &&
    !shareTriangle.contains(event.target)
  ) {
    clearTimeout(timeoutId);
    hideElements();
  }
});
