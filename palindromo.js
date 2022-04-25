let  keyP = document.getElementById('cadena');

keyP.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
       Palindromo();
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
}

const limpiar = () => {
  document.getElementById("resultado").innerHTML = "";
  document.getElementById("cadena").value = "";
  document.getElementById("cadena").focus();
};
// console.log(Palindromo("racecar"));
