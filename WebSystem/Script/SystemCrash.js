let LoadBar = document.getElementById("LoadBar");
let LoadBarText = document.getElementById("LoadBarText");
LoadBarText.innerText = LoadBar.style.width;
setTimeout(() => {
    location.href = "./Desktop.html";
},15000)
function updateLoadText() {
    const barWidth = LoadBar.offsetWidth;
    const boxWidth = document.getElementById("LoadBarBox").offsetWidth;
    const percent = Math.round((barWidth / boxWidth) * 100);
    LoadBarText.innerText = percent + "%";
    requestAnimationFrame(updateLoadText);
}
updateLoadText();
function CrashCode() {
    let CrashCode = document.getElementById("CrashCode");
    CrashCode.innerText = "崩溃代码:" + "SystemError_Crash.html Crash";
}
CrashCode();