const shareButton = document.querySelectorAll('button');
const sharePanel = document.querySelector(".share");

shareButton.forEach(function (e) {
    e.addEventListener("click", function () {
        sharePanel.classList.toggle("display");
    });
});