setInterval(() => {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  
  let times = `${hours}:${minutes}`;
  
  document.getElementById("clock").textContent = times;
})

const text = {
  description: "<a id='folder'>Folders Char</a>Rl Name: Bintang Nugraha Putra<br>Call  &nbsp;&nbsp;: Putra, Kyle<br>Birth  &nbsp;: 3 December<br>Age &nbsp; &nbsp;: %age old<br> <br>Just people who using his ideas for easier their life.<br>The student of SMAN 1 Rowokele with his dump face.<br>And the Leader of <font color='blue sky' font-weight='bold'>Zxra Creation</font><br> <br>I am just tried to get more knowledge for may programming skills, for now i am just create a simple bots and simple mod for some game.<br>Now i have advance my JavaScript lang, but another day i will learn more programming language<br> <br> <br> <br> <br> <br> <br>-Zxra"
}
const project = [
  {
    name: "Harzx",
    description: "Chat web",
    version: "-1.0.0",
    icon: "./img/project.png",
    link: "-"
  },
  {
    name: "KhyroBot",
    description: "Bot for any apps(Discord, Whatsapp)<br> <br>But now we have pause this update and the bots are not hosted",
    version: "2.6.0",
    icon: "./img/project.png",
    link: "-"
  },
  {
    name: "Mkx Bot",
    description: "Private Discord Bot",
    version: "1.0.0",
    icon: "./img/project.png",
    link: "-"
  },
  {
    name: "Zxra Api",
    description: "Addon for Minecraft Bedrock",
    version: "2.5.0",
    icon: "https://raw.githubusercontent.com/CrzxaExe/Zxra-Api/main/pack_icon.png",
    link: "https://github.com/CrzxaExe/ZxraApi/"
  },
  {
    name: "ZxraDustry",
    description: "Mod for Mindustry",
    version: "1.0.0",
    icon: "https://raw.githubusercontent.com/CrzxaExe/ZxraDustry/main/icon.png",
    link: "https://github.com/CrzxaExe/ZxraDustry"
  }
]

document.getElementById("description").innerHTML = text.description.replace("%age", `${ageCalc("2005-12-03")}`);

for(let apps of project) {
  document.getElementById("display").innerHTML += `<div class='app'><a>${apps.name}</a><img src='${apps.icon}'><p>${apps.description}</p><c>v${apps.version}</c></div>`;
}

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

function toggleSkill() {
  const skill = document.getElementById("skill");
  const nps = document.getElementById("nps");
  skill.classList.toggle("hidden")
  skill.classList.toggle("open")
  if(nps.textContent === "+ Skills") {
    nps.textContent = "- Skills"
  } else nps.textContent = "+ Skills"
}