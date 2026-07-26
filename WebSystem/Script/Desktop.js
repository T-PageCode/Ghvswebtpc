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
        window9.style.width = "100%";
        window9.style.height = "100%";
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
function IfDownDivSH() {
    maxZIndex++;
    let PAndGDiv = document.getElementById("PAndGDiv");
    let visi = PAndGDiv.style.visibility || "hidden";
    let opac = PAndGDiv.style.opacity || "0";
    if (visi === "hidden" && opac === "0") {
        PAndGDiv.style.opacity = "1";
        PAndGDiv.style.visibility = "visible";
        PAndGDiv.style.transform = "translate(-50%,-50%) scale(1)";
        PAndGDiv.style.zIndex = maxZIndex;
    }
    else {
        PAndGDiv.style.opacity = "0";
        PAndGDiv.style.visibility = "hidden";
        PAndGDiv.style.transform = "translate(-50%,-50%) scale(0.9)";
    }
}
let UserText = localStorage.getItem("User") || "Administrator";
document.getElementById("UserName1").innerText = UserText;
function IfPAGDSHP() {
    let PAGDiv = document.getElementById("PAndGDiv");
    let LSPAGDivSH = localStorage.getItem("PAGDivSH") || "True";
    if (LSPAGDivSH === "True") {
        PAGDiv.style.visibility = "hidden";
        PAGDiv.style.opacity = "0";
        PAGDiv.style.transform = "translate(-50%,-50%) scale(0.9)";
    } else {
        PAGDiv.style.visibility = "visible";
        PAGDiv.style.opacity = "1";
        PAGDiv.style.transform = "translate(-50%,-50%) scale(1)";
    }
}
console.log("%c 这是一个开源的网页版系统。","color: white;background-color: black;padding: 10px;border-radius: 10px;");
console.log("%c 他通过HTML,CSS,JS开发。","color: black;font-size: 20px;");