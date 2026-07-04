let LoadBar = document.getElementById("LoadBar");
let LoadBarText = document.getElementById("LoadBarText");
LoadBarText.innerText = LoadBar.style.width;
setTimeout(() => {
    location.href = "./Desktop.html";
},20000)
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
    let Ec = localStorage.getItem("ErrorCode") || "System Error";
    CrashCode.innerText = "错误信息:" + Ec
}
CrashCode();