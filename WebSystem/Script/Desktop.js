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
const menuDom = document.getElementById("CRM");
document.addEventListener("contextmenu", event => {
    event.preventDefault();
    const x = event.clientX;
    const y = event.clientY;
    const maxW = window.innerWidth - menuDom.offsetWidth;
    const maxH = window.innerHeight - menuDom.offsetHeight;
    menuDom.style.left = `${Math.min(x, maxW)}px`;
    menuDom.style.top = `${Math.min(y, maxH)}px`;
    menuDom.style.visibility = "visible";
    menuDom.style.opacity = "1";
});
document.addEventListener("click", () => {
    menuDom.style.visibility = "hidden";
    menuDom.style.opacity = "0";
});
let longPressTimer = null;
let touchX = 0;
let touchY = 0;
let showMenuFlag = false;
document.addEventListener("touchstart", (event) => {
    if (event.touches.length > 1) {
        clearTimeout(longPressTimer);
        return;
    }
    const touch = event.touches[0];
    touchX = touch.clientX;
    touchY = touch.clientY;
    showMenuFlag = false;
    clearTimeout(longPressTimer);
    longPressTimer = setTimeout(() => {
        event.preventDefault();
        const maxW = window.innerWidth - menuDom.offsetWidth;
        const maxH = window.innerHeight - menuDom.offsetHeight;
        menuDom.style.left = `${Math.min(touchX, maxW)}px`;
        menuDom.style.top = `${Math.min(touchY, maxH)}px`;
        menuDom.style.visibility = "visible";
        menuDom.style.opacity = "1";
        showMenuFlag = true;
    }, 500);
});
document.addEventListener("touchmove", () => {
    clearTimeout(longPressTimer);
});
document.addEventListener("touchend", (e) => {
    clearTimeout(longPressTimer);
    if (showMenuFlag) {
        e.stopPropagation();
    }
});
const pad = n => n < 10 ? "0" + n : n
function updateTime() {
    const date = new Date();
    const year = date.getFullYear();
    const month = pad(date.getMonth() + 1);
    const day = pad(date.getDate());
    const hour = pad(date.getHours());
    const minute = pad(date.getMinutes());
    const second = pad(date.getSeconds());
    const timeText_text2 = `${year}/${month}/${day}`;
    const timeText_text3 = `${hour}:${minute}:${second}`;
    document.getElementById("text2").innerText = timeText_text2;
    document.getElementById("text3").innerText = timeText_text3;
}
let maxZIndex = 1;
updateTime();
setInterval(updateTime, 200);
function GxhShow() {
    maxZIndex++;
    let window1 = document.getElementById("window1");
    window1.style.zIndex = maxZIndex;
    window1.classList.add("Gxhshow");
}
function NoShowGxh() {
    let window1 = document.getElementById("window1");
    window1.classList.remove("Gxhshow");
}
function BrowserShow() {
    maxZIndex++;
    let window2 = document.getElementById("window2");
    window2.style.zIndex = maxZIndex;
    window2.classList.add("Browsershow");
}
function NoShowBrowser() {
    let window2 = document.getElementById("window2");
    window2.classList.remove("Browsershow");
}
function TextEditorShow() {
    maxZIndex++;
    let window3 = document.getElementById("window3");
    window3.style.zIndex = maxZIndex;
    window3.classList.add("TextEditorshow");
}
function NoShowTextEditor() {
    let window3 = document.getElementById("window3");
    window3.classList.remove("TextEditorshow");
}
function TextEditorHelpShow() {
    maxZIndex++;
    let window4 = document.getElementById("window4");
    window4.style.zIndex = maxZIndex;
    window4.classList.add("TextEditorHelpshow");
}
function NoShowTextEditorHelp() {
    let window4 = document.getElementById("window4");
    window4.classList.remove("TextEditorHelpshow");
}
function GhvswebtpcShow() {
    maxZIndex++;
    let window5 = document.getElementById("window5");
    window5.style.zIndex = maxZIndex;
    window5.classList.add("Ghvswebtpcshow");
}
function NoShowGhvswebtpc() {
    let window5 = document.getElementById("window5");
    window5.classList.remove("Ghvswebtpcshow");
}
function TerminalShow() {
    maxZIndex++;
    let window6 = document.getElementById("window6");
    window6.style.zIndex = maxZIndex;
    window6.classList.add("Terminalshow");
}
function NoShowTerminal() {
    let window6 = document.getElementById("window6");
    window6.classList.remove("Terminalshow");
}
function TerminalHelpShow() {
    maxZIndex++;
    let window7 = document.getElementById("window7");
    window7.style.zIndex = maxZIndex;
    window7.classList.add("TerminalHelpshow");
}
function NoShowTerminalHelp() {
    let window7 = document.getElementById("window7");
    window7.classList.remove("TerminalHelpshow");
}
function SettingsShow() {
    maxZIndex++;
    let window8 = document.getElementById("window8");
    window8.style.zIndex = maxZIndex;
    window8.classList.add("Settingsshow");
}
function NoShowSettings() {
    let window8 = document.getElementById("window8");
    window8.classList.remove("Settingsshow");
}
function windowMax1() {
    let window1 = document.getElementById("window1");
    let style = getComputedStyle(window1);
    let width1 = style.width;
    let height1 = style.height;
    if (width1 === "500px" && height1 === "300px") {
        window1.style.width = "100%";
        window1.style.height = "100%";
    }
    else {
        window1.style.width = "500px";
        window1.style.height = "300px";
    }
}
function windowMax2() {
    let window2 = document.getElementById("window2");
    let style = getComputedStyle(window2)
    let width2 = style.width;
    let height2 = style.height;
    if (width2 === "600px" && height2 === "400px") {
        window2.style.width = "100%";
        window2.style.height = "100%";
    }
    else {
        window2.style.width = "600px";
        window2.style.height = "400px";
    }
}
function windowMax3() {
    let window3 = document.getElementById("window3");
    let style = getComputedStyle(window3);
    let width3 = style.width;
    let height3 = style.height;
    if (width3 === "700px" && height3 === "500px") {
        window3.style.width = "100%";
        window3.style.height = "100%";
    }
    else {
        window3.style.width = "700px";
        window3.style.height = "500px";
    }
}
function windowMax4() {
    let window5 = document.getElementById("window5");
    let style = getComputedStyle(window5);
    let width5 = parseFloat(style.width);
    let height5 = parseFloat(style.height);
    if (Math.abs(width5 - 500) < 1 && Math.abs(height5 - 307) < 1) {
        window5.style.width = "100%";
        window5.style.height = "100%";
    } else {
        window5.style.width = "500px";
        window5.style.height = "307px";
    }
}
function windowMax5() {
    let window6 = document.getElementById("window6");
    let style = getComputedStyle(window6);
    let width6 = style.width;
    let height6 = style.height;
    if (width6 === "600px" && height6 === "400px") {
        window6.style.width = "100%";
        window6.style.height = "100%";
    }
    else {
        window6.style.width = "600px";
        window6.style.height = "400px";
    }
}
function windowMax6() {
    let window8 = document.getElementById("window8");
    let style = getComputedStyle(window8);
    let width8 = style.width;
    let height8 = style.height;
    if (width8 === "700px" && height8 === "500px") {
        window8.style.width = "100%";
        window8.style.height = "100%";
    }
    else {
        window8.style.width = "700px";
        window8.style.height = "500px";
    }
}
function QHImage() {
    let body = document.body;
    let GBgGetItem = localStorage.getItem("GBg") || "";
    if (GBgGetItem === "black") {
        body.style.backgroundImage = 'url(../BackgroundBlackImage.PNG)';
    }
    else if (GBgGetItem === "default") {
        localStorage.removeItem("GCsColor");
        body.style.backgroundImage = 'url(../BackGroundImage.png)';
    }
    else {
        body.style.backgroundImage = 'url(../BackGroundImage.png)';
        localStorage.setItem("GBImage", "default");
    }
}
QHImage();
function IfDBRWLWhiteDivShow() {
    let DBLWhiteDivLocalStorage = localStorage.getItem("ShowDBLWhiteDiv") || "True";
    let DBL = document.getElementById("div_id1");
    let DivClass1 = document.querySelectorAll(".div_class1")
    if (DBLWhiteDivLocalStorage === "True") {
        DBL.style.backgroundColor = "white";
        DivClass1.backgroundColor = "white";
    }
    else if (DBLWhiteDivLocalStorage === "False") {
        DBL.style.backgroundColor = "rgba(255,255,255,0.0)";
        DivClass1.forEach(DivClass1Item => {
            DivClass1Item.style.backgroundColor = "rgba(255,255,255,0.0)";
        })
    }
}
IfDBRWLWhiteDivShow();
function ErrorCode(Code) {
    localStorage.setItem("ErrorCode", Code);
}
console.log("%c 这是一个开源的网页版系统。", "color: white;background-color: black;padding: 10px;border-radius: 10px;");
console.log("%c 他通过HTML,CSS,JS开发。", "color: black;font-size: 20px;");