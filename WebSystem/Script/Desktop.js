function TpcShow() {
    maxZIndex++;
    let window9 = document.getElementById("window9");
    window9.style.zIndex = maxZIndex;
    window9.classList.add("Tpcshow");
}
function NoShowTpc() {
    let window9 = document.getElementById("window9");
    window9.classList.remove("Tpcshow");
}
function windowMax7() {
    let window9 = document.getElementById("window9");
    let style = getComputedStyle(window9);
    let width9 = style.width;
    let height9 = style.height;
    if (width9 === "600px" && height9 === "400px") {
        window9.style.width = "100vw";
        window9.style.height = "100vh";
    }
    else {
        window9.style.width = "600px";
        window9.style.height = "400px";
    }
}
function IfWindowBorderRadius() {
    let BorderRadius = localStorage.getItem("WindowBorderRadius") || "True";
    let Window = document.querySelectorAll(".window");
    if (BorderRadius === "True") {
        Window.forEach(Win => {
            Win.style.borderRadius = "10px";
        })
    }
    else {
        Window.forEach(Win => {
            Win.style.borderRadius = "0px";
        })
    }
}
IfWindowBorderRadius();