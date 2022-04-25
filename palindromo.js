var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 3);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
        Palindromo();
      } else {
         width++;
        elem.style.width = width + "%";
        elem.innerHTML = width  + "%";
      }   
    }
  }
 
}

let keyP = document.getElementById("cadena");

keyP.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    move(); 
  }
});

const Palindromo = () => {
  let cadenaOriginal = document.getElementById("cadena").value;

  if (cadenaOriginal === "") {
    alert("Por favor introduzca una cadena valida");
  } else {
    str = cadenaOriginal.toLowerCase().replace(/[\W_]/g, "");
    console.log(str);
    let len = str.length - 1;
    console.log(len);
    for (var i = 0; i < len / 2; i++) {
      console.log(str[i] + "!==" + str[len - i]);
      if (str[i] !== str[len - i]) {
        document.getElementById("resultado").innerText =
          " La cadena: [" + cadenaOriginal + "] no es un palindromo";
        return false;
      }
    }
    document.getElementById("resultado").innerText =
      "La cadena: [" + cadenaOriginal + "] si es un palindromo";
    return true;
  }
};

const limpiar = () => {
  var elem = document.getElementById("myBar");
  document.getElementById("resultado").innerHTML = "";
  document.getElementById("cadena").value = "";
  document.getElementById("cadena").focus();
  elem.style.width =0;
  elem.innerHTML =  "";
};
// console.log(Palindromo("racecar"));
