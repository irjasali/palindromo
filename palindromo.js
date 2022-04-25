const Palindromo=(str)=> {
      str = str.toLowerCase().replace(/[\W_]/g, '');
    console.log(str)
    let len = str.length - 1
    console.log(len)
    for(var i = 0; i < len/2; i++) {
      console.log(str[i] + "!==" + str[len-i]);
      if(str[i] !== str[len-i]) {
        return false + "No es un palindromo";
      }
    }
    return true;   
  }
  
  console.log(Palindromo("racedcar"));