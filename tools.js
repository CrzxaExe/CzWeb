let tools = document.getElementById("tools");

// Stress tools
tools.innerHTML += `<div class="stress"><div><b>Stress Generator</b><input type="text" placeholder="Waifu Name" id="waifu"><button onClick='stressGenerate()' id="generate">Create</button><a id="stressOutput">Output:</a><button id="copy" onClick="copyTextFromId('stressOutput')">Copy</button></div></div>`

// UUID Generator
let genId = generateUUID();
tools.innerHTML += `<div class="uuid"><div><b>UUID Generator</b><a id="genId">${genId}</a><button id="refresh" onClick="buttonUUID()"><i class='bx bx-refresh'></i></button><button id="copy" onClick="copyTextFromId('genId')"><i class='bx bx-clipboard'></i></button></div></div>`

function stressGenerate() {
  let output = document.getElementById("stressOutput");
  let waifu = document.getElementById("waifu").value;
  let cap = waifu.split("")[0].toUpperCase() + waifu.slice(1);
  let upper = waifu.toUpperCase();
  
  let stress =  "%upper %upper %upper ♥️ ♥️ ♥️ WANGI WANGI WANGI HU HA HU HA HU HA HU HA, aaaah bau rambutnya %cap wangi aku mau nyium aroma wanginya %upper AAAHH ~ Rambutnya...aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH %cap pertama kali keluar di anime juga manis ♥️ ♥️ ♥️ banget AAAAAAH %upper AA LUCCUUUUUU...%upper AAAAAGGGHH ♥️ ♥️ ♥️ Apa? %cap itu tidak nyata? Cuman halu katamu? Nggak, nggak nggak nggak nggak NNGGGAAAAKKK GUA GAK PERCAYA DIA ITU NYATA";
  if(waifu == '') {
    output.textContent = "There is no name of waifu"
  } else output.textContent = stress.replace(/%cap/gi, cap).replace(/%upper/gi, upper)
}
function copyTextFromId (name) {
  let copyElement = document.getElementById(name);
  let copyText = copyElement.innerText;
  console.log(copyText)
  
  var tempInput = document.createElement('input');
  tempInput.value = copyText;
  document.body.appendChild(tempInput);

  tempInput.select();
  document.execCommand('copy');
  document.body.removeChild(tempInput);
}

function generateUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0,
        v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}
function buttonUUID() {
  let uid = document.getElementById("genId");
  uid.innerText = generateUUID();
}
