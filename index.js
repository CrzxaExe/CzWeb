const introP = document.getElementById("introP");
const paket = document.getElementById("package");
let packText = "";

window.addEventListener("scroll", () => {
  let scroll = this.scrollY.toFixed(2);
})
// Function
function Zxra() {
  const tooltip = document.getElementById("tooltip");
  tooltip.style.opacity = 1;
  setTimeout(() => {
    tooltip.style.opacity = 0;
  }, 2000)
  console.log("tes")
}
// Variabel
let time = new Date();
var text = {
  "color": {
    "yellow": "#e1da48",
    "red": "#f29e9e",
    "blue": "#779bff"
  },
  "intro": "// Hey, Zxators<br>// Welcome to <b><font color='#95effc'>Zxra Website</font></b><br>// Lets begin to 'Eazier yours live'<br> <br><font color='#f29e9e'>const</font> Zxra = require(<font color='#e1da48'>'Zxra'</font>);<br><font color='#f29e9e'>var</font> socialMedia = {<br>&nbsp;<font color='#779bff'>'Facebook'</font>: <font color='#e1da48'>'Crzx Zxra'</font>,<br>&nbsp;<font color='#779bff'>'Youtube'</font>: <font color='#e1da48'>'Crzx_3'</font><br>};<br> <br>// Lets get started<br>Zxra.setCreatorSocialMedia(socialMedia)<br><font color='#f29e9e'>let</font> calendar = %time;<br>Zxra.alat([<br>&nbsp;{<br>&nbsp;&nbsp;<font color='#779bff'>'pribumi'</font>: <font color='#779bff'>'Haris'</font><br>&nbsp;}<br>])"
}
var package = [
  {
    "name": "Discord Bot",
    "status": "Resting",
    "version": "2.8.0",
    "link": ""
  },
  {
    "name": "WhatsApp bot",
    "status": "Resting",
    "version": "1.8.3",
    "link": ""
  },
  {
    "name": "Zxra API",
    "status": "Available for Minecraft 1.19+",
    "version": "2.5.0",
    "link": "https://github.com/CrzxaExe/Zxra-Api"
  },
  {
    "name": "ZxraDustry",
    "status": "Outdated",
    "version": "1.0.0",
    "link": "https://github.com/CrzxaExe/ZxraDustry"
  }
]
// Docs
introP.innerHTML = text.intro.replace("%time",time.toLocaleDateString());
for(let index of package) {
  packText += `${index.name}<br>Status <font color='#f29e9e'>${index.status}</font><br>Version <font color='#e1da48'>${index.version}</font><br> <a href='${index.link}'>Link</a><br> <br>`
}
paket.innerHTML = packText;
