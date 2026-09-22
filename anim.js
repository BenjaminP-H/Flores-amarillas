// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Él la estaba esperando", time: 18 },
  { text: "Con una flor amarilla", time: 20 },
  { text: "", time: 23 },
  { text: "Ella lo estaba soñando", time: 26 },
  { text: "Con la luz en su pupila", time: 28 },
  { text: "", time: 31 },
  { text: "Y el amarillo del sol", time: 33 },
  { text: "Iluminaba la esquina", time: 35 },
  { text: "", time: 39 },
  { text: "Lo sentía tan cercano", time: 41 },
  { text: "Lo sentía desde niña", time: 43 },
  { text: "", time: 47 },
  { text: "Ella sabía que él sabía", time: 48 },
  { text: "Que algún día pasaría", time: 50 },
  { text: "Que vendría él a buscarla", time: 52 },
  { text: "Con sus flores amarillas", time: 54 },
  { text: "", time: 59 },
  { text: "No te apures, no detengas", time: 60 },
  { text: "El instante del encuentro", time: 62 },
  { text: "Está dicho que es un hecho", time: 64 },
  { text: "No la pierdas, no hay derecho", time: 66 },
  { text: "No te olvides que la vida", time: 68 },
  { text: "Casi nunca está dormida", time: 72 },
  { text: "", time: 76 },
  { text: "En ese bar tan desierto", time: 94 },
  { text: "Nos esperaba el encuentro", time: 97 },
  { text: "", time: 100 },
  { text: "Ella llegó en limusina", time: 102 },
  { text: "Amarilla, por supuesto", time: 104 },
  { text: "", time: 108 },
  { text: "Él se acercó de repente", time: 110 },
  { text: "La miró tan de frente", time: 112 },
  { text: "", time: 116 },
  { text: "Toda una vida soñada", time: 118 },
  { text: "Y no pudo decir nada", time: 120 },
  { text: "Ella sabía que él sabía", time: 124 },
  { text: "Que algún día pasaría", time: 127 },
  { text: "Que vendría él a buscarla", time: 129 },
  { text: "Con sus flores amarillas", time: 131 },
  { text: "", time: 136 },
  { text: "No te apures, no detengas", time: 137 },
  { text: "El instante del encuentro", time: 139 },
  { text: "Está dicho que es un hecho", time: 141 },
  { text: "No la pierdas, no hay derecho", time: 143 },
  { text: "No te olvides que la vida", time: 145 },
  { text: "Casi nunca está dormida", time: 149 },
  { text: "", time: 153 },
  { text: "Flores amarillas", time: 161 },
  { text: "", time: 165 },
  { text: "Ella sabía que él sabía", time: 170 },
  { text: "Que algún día pasaría", time: 172 },
  { text: "Que vendría él a buscarla", time: 174 },
  { text: "Con sus flores amarillas", time: 176 },
  { text: "", time: 181 },
  { text: "No te apures, no detengas", time: 182 },
  { text: "El instante del encuentro", time: 184 },
  { text: "Está dicho que es un hecho", time: 186 },
  { text: "No la pierdas, no hay derecho", time: 188 },
  { text: "No te olvides que la vida", time: 190 },
  { text: "Casi nunca está dormida", time: 194 },
  { text: "", time: 198 },
  { text: "Ella sabía que él sabía", time: 199 },
  { text: "Él sabía, ella sabía", time: 202 },
  { text: "Que él sabía, ella sabía", time: 204 },
  { text: "Y se olvidaron de sus", time: 206 },
  { text: "Flores amarillas", time: 208 },
  { text: "", time: 214 }
];

// Animar las letras
function updateLyrics() {
  var currentTime = audio.currentTime;
  var currentLineIndex = -1;

  for (var index = 0; index < lyricsData.length; index++) {
    if (currentTime >= lyricsData[index].time) {
      currentLineIndex = index;
    } else {
      break;
    }
  }

  if (currentLineIndex !== -1 && lyricsData[currentLineIndex].text.trim() !== "") {
    lyrics.innerHTML = lyricsData[currentLineIndex].text;
    lyrics.style.opacity = 1;
  } else {
    lyrics.innerHTML = "";
    lyrics.style.opacity = 0;
  }
}

audio.addEventListener("timeupdate", updateLyrics);

//funcion titulo
// Función para ocultar el título después de 223 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 223 segundos (223,000 milisegundos), duración del audio actual
setTimeout(ocultarTitulo, 223000);