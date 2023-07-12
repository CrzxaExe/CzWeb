setInterval(() => {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  
  let times = `${hours}:${minutes}`;
  
  document.getElementById("clock").textContent = times;
})

const text = {
  description: "<a id='folder'>Folders Char</a>Rl Name: Bintang Nugraha Putra<br>Call  &nbsp;&nbsp;: Putra, Kyle<br>Birth  &nbsp;: 3 December<br>Age &nbsp; &nbsp;: %age old<br> <br>Just people who using his ideas for easier their life.<br>The student of SMAN 1 Rowokele with his dump face.<br>And the Leader of <font color='blue sky' font-weight='bold'>Zxra Creation</font><br> <br>I am just tried to get more knowledge for may programming skills, for now i am just create a simple bots and simple mod for some game.<br>Now i have advance my JavaScript lang, but another day i will learn more programming language<br> <br> <br> <br> <br> <br> <br>-Zxra",
  youtube: "AIzaSyA1Eqqa-R6vOGeztVH664CcwolwuieU_QY"
}
const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"]
const months = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'];
const project = [
  {
    name: "Harzx",
    description: "Chat web",
    version: "0.0.1",
    icon: "./img/project.png",
    link: ""
  },
  {
    name: "KhyroBot",
    description: "Bot for any apps(Discord, Whatsapp)<br> <br>But now we have pause this update and the bots are not hosted",
    version: "2.6.0",
    icon: "https://cdn.discordapp.com/avatars/841197823378587658/d51ea86930490ffe3bb657e2893c2006.png?size=2048",
    link: ""
  },
  {
    name: "Mkx Bot",
    description: "Private Discord Bot",
    version: "1.0.0",
    icon: "./img/project.png",
    link: ""
  },
  {
    name: "Zxra Api",
    description: "Addon for Minecraft Bedrock",
    version: "2.5.0",
    icon: "https://raw.githubusercontent.com/CrzxaExe/Zxra-Api/main/pack_icon.png",
    link: "https://github.com/CrzxaExe/Zxra-Api/"
  },
  {
    name: "ZxraDustry",
    description: "Mod for Mindustry",
    version: "1.0.0",
    icon: "https://raw.githubusercontent.com/CrzxaExe/ZxraDustry/main/icon.png",
    link: "https://github.com/CrzxaExe/ZxraDustry"
  },
  {
    name: "ZxraRest",
    description: "Rest API for zxra production",
    version: "0.0.7",
    icon: "./img/project.png",
    link: ""
  }
]

document.getElementById("description").innerHTML = text.description.replace("%age", `${ageCalc("2005-12-03")}`);

for(let apps of project) {
  document.getElementById("display").innerHTML += `<div class='app'><a>${apps.name}</a><img src='${apps.icon}'><p>${apps.description}</p><c>v${apps.version}</c><button class='link' onClick='window.location.href="${apps.link}"'><i class='bx bx-link' ></i></div></div>`;
}
fetch('https://www.googleapis.com/youtube/v3/videos?part=snippet&id=DdqKQzemlkY&key=' + text.youtube)
.then(res => res.json())
.then(data => {
  let video = data.items[0]
  let publik = new Date(video.snippet.publishedAt)
  console.log(video)
  document.getElementById("video").innerHTML = `<iframe src='https://www.youtube.com/embed/${video.id}'></iframe><a>${video.snippet.title}</a><b>&nbsp;Diupload pada ${days[publik.getDay()]}, ${publik.getDate()} ${months[publik.getMonth()]} ${publik.getFullYear()}</b><p>${video.snippet.description}</p>`;
})

function ageCalc(date) {
  var today = new Date()
  var calc = new Date(date)
  
  var age = today.getFullYear() - calc.getFullYear();
  var month = today.getMonth() - calc.getMonth();
  var day = today.getDate() - calc.getDate();
  
  if(month < 0 || ( month === 0 && day < 0 )) age--;
  return age
}

function toggleMode() {
  document.body.classList.toggle('dark-mode');
  document.body.classList.toggle('light-mode');
}