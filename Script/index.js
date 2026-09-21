document.addEventListener("contextmenu",(e) => {
    e.preventDefault();
})
const closeButton = document.getElementById("close");
const tCodeSystem = document.getElementById("t-codesystem")
closeButton.onclick = () => {
    tCodeSystem.style.transform = "perspective(1000px) rotateY(180deg) rotateX(180deg)";
    setTimeout(() => {
        tCodeSystem.style.transform = "translateY(130px) perspective(1000px) rotateY(180deg) rotateX(180deg)";
    },500)
}