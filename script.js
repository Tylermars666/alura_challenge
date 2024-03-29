
function encriptar(){
    let texto = document.getElementById("text_in").value.toLowerCase();

    const vocals = ['e','o','i','a','u'];
    const words = ['enter','ober','imes','ai','ufat'];

    if(es_Especial(texto)){

      for(let i=0;i<5;i++){
        texto = texto.replace(new RegExp(vocals[i], 'igm'), words[i]);
      }
   
      document.getElementById("visible_img").style.display = "none";
      document.getElementById("visible_title").style.display = "none";
      document.getElementById("visible_text").style.display = "none";

      document.getElementById("invisible_textarea").style.display = "show";
      document.getElementById("invisible_textarea").style.display = "initial";
      document.getElementById("copy").style.display = "show";
      document.getElementById("copy").style.display = "initial";

      document.getElementById("invisible_textarea").innerHTML = texto;
    }else{
      alert("No se permiten caracteres especiales")
    }

   

}

function desencriptar(){
    let texto = document.getElementById("text_in").value.toLowerCase();

    const vocals = ['e','o','i','a','u'];
    const words = ['enter','ober','imes','ai','ufat'];

    if(es_Especial(texto)){

      for(let i=0;i<5;i++){
          texto= texto.replace(new RegExp(words[i], 'igm'), vocals[i]);
      }

      document.getElementById("visible_img").style.display = "none";
      document.getElementById("visible_title").style.display = "none";
      document.getElementById("visible_text").style.display = "none";

      document.getElementById("invisible_textarea").style.display = "show";
      document.getElementById("invisible_textarea").style.display = "inherit";
      document.getElementById("copy").style.display = "show";
      document.getElementById("copy").style.display = "initial";

      document.getElementById("invisible_textarea").innerHTML = texto;
    }else{
      alert("No se permiten caracteres especiales");
    }
}

function copiar() {
  const textarea = document.querySelector("#invisible_textarea");
  navigator.clipboard.write([
    new ClipboardItem({
      'text/plain': new Blob([textarea.value], {type: 'text/plain'})
    })
  ]).then(() => {
    alert('Texto copiado');
  }).catch(err => {
    alert('Error al copiar texto: ' + err);
  });
}

function es_Especial(texto){

  const regExp = /[^a-z0-9ñ ]/gm;

  return (texto.match(regExp)==null);
}

window.addEventListener('load', function(){
    document.getElementById("text_in").focus();
});



