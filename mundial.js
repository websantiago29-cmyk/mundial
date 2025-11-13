
const titulos = [
  "Alemania", "España", "Francia", "Inglaterra", "Países Bajos", "Portugal",
  "Croacia", "Serbia", "Suiza", "Dinamarca", "Polonia", "Bélgica", "Gales",
  "Argentina", "Brasil", "Uruguay", "Ecuador", "Colombia", "Senegal", "Marruecos", "Túnez"
];

const imagenes = [
  "https://i.postimg.cc/Z5VmT8yS/kroos-alemania-ep.jpg",
  "https://i.postimg.cc/yNmVq2hM/Getty-Images-2161377234-jpg.webp",
  "https://i.postimg.cc/DZ15PPTq/seleccion-francia-celebra-gol-pasado-mundial-69.jpg",
  "https://i.postimg.cc/KjvL3PvS/FSKJXNFAEZAWFI2WIZCSRMNDTA.jpg",
  "https://i.postimg.cc/KvCkmSTQ/paises-bajos-integra-grupo-mundial.jpg",
  "https://i.postimg.cc/0yx6zGtS/Z2I27VGON5BWBAHZVGSWVIRCRM.jpg",
  "https://i.postimg.cc/m2WknNWp/16712690824286.jpg",
  "https://i.postimg.cc/bwNyXmC5/serbia-seleccion-eurocopa-1200x675.jpg",
  "https://i.postimg.cc/DwZTp8mV/diseno-sin-titulo-9-7.jpg",
  "https://i.postimg.cc/QCXPByWy/dinamarca.webp",
  "https://i.postimg.cc/x8xsXTQW/OCR5H4DJU7MZMWUPZVHDQBJ6XE.jpg",
  "https://i.postimg.cc/vTkrR1bF/e7e902de5bd6c44c02b01275908c4f81.jpg",
  "https://i.postimg.cc/7LtN4P3C/i-img-photo-2022-0626-r1029251-1296x729-16-9.jpg",
  "https://i.postimg.cc/brckYZsm/16711251267763.jpg",
  "https://i.postimg.cc/T3wL6VtR/raphinahabravenjpg.jpg",
  "https://i.postimg.cc/jSm5YGWR/7XOWIBFHR7N5E7HYACGRZBAFIA.jpg",
  "https://i.postimg.cc/vZJQNfj5/16693763251780.jpg",
  "https://i.postimg.cc/0N0L0SqJ/Seleccion-Colombia-podria-tener-bajas-importantes.jpg",
  "https://i.postimg.cc/TPfs1PWG/qatar-2022-sadio-mane-encabeza-la-convocatoria-de-senegal-bayern-munich.webp",
  "https://i.postimg.cc/tCGwwDRw/DEPORTES-1079.jpg",
  "https://i.postimg.cc/v8fSr9LG/wahbi-khazri-seleccion-tunez-mundial-qatar-2022-1200x675.jpg"
];

const comentarios = [
  "Alemania vuelve a la cima con su estilo implacable.",
  "España conquista el mundo con su juego elegante.",
  "Francia repite su dominio mundial con una nueva generación dorada.",
  "Inglaterra levanta la copa por primera vez desde 1966.",
  "Países Bajos conquista su primer Mundial tras décadas de fútbol hermoso.",
  "Portugal gana su primera copa del mundo liderado por una nueva generación.",
  "Croacia se corona campeona y cumple el sueño que rozó en 2018.",
  "Serbia sorprende al mundo y obtiene su primer título como nación independiente.",
  "Suiza conquista su primer Mundial con precisión y constancia.",
  "Dinamarca logra una hazaña histórica al ganar su primera copa.",
  "Polonia revive su gloria de los 70 y gana su primer campeonato mundial.",
  "Bélgica confirma el valor de su generación dorada con el título mundial.",
  "Gales celebra su primer Mundial tras una campaña heroica.",
  "Argentina suma su cuarta estrella y consolida su leyenda.",
  "Brasil gana su sexta copa y amplía su supremacía en el fútbol.",
  "Uruguay revive su mística y alcanza su tercera corona.",
  "Ecuador conquista su primera copa del mundo.",
  "Colombia sorprende al planeta con su talento y gana el Mundial.",
  "Senegal logra el primer título mundial para África.",
  "Marruecos se convierte en el primer campeón africano de la historia.",
  "Túnez sorprende al mundo y gana su primera copa."
];


const imagen = document.getElementById("foto");
const titulo = document.getElementById("titulo1");
const prediccion = document.getElementById("prediccion1");
const boton = document.getElementById("botonAbajo");


function numeroRandom(min, max) {
  return Math.floor(Math.random() * (max - min));
}


function generarPrediccion() {
  const indice = numeroRandom(0, titulos.length);

  titulo.innerText = titulos[indice];
  imagen.src = imagenes[indice];
  prediccion.innerText = comentarios[indice];
}
boton.addEventListener("click", generarPrediccion);
