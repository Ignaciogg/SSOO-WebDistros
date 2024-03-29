// Cambiar de idioma usando JSON
$.getJSON("./lang.json", function(json){
  //Lenguaje por defecto de la página
  localStorage.setItem("lang", "esc");

  if(!localStorage.getItem("lang")){
    localStorage.setItem("lang", "esc");
  }
  var lang = localStorage.getItem("lang");
  var doc = json;
  $('.lang').each(function(index, element){
    $(this).text(doc[lang][$(this).attr('key')]);
  });

  $('.translate').click(function(){
    localStorage.setItem("lang", $(this).attr('id'));
    var lang = $(this).attr('id');
    var doc = json;
      $('.lang').each(function(index, element){
        $(this).text(doc[lang][$(this).attr('key')]);
      });
  });
});

// Cambiar imágenes
var escritorio = document.getElementById("esc");
var servidor = document.getElementById("ser");
var movil = document.getElementById("mov");
var imagen1 = document.getElementById("img1");
var imagen2 = document.getElementById("img2");
var imagen3 = document.getElementById("img3");
var imagen4 = document.getElementById("img4");
var link1 = document.getElementById("link1");
var link2 = document.getElementById("link2");
var link3 = document.getElementById("link3");
var link4 = document.getElementById("link4");

escritorio.addEventListener("click", function() {
  imagen1.src = "./img/ubuntu.jpg";
  imagen2.src = "./img/mint.jpg";
  imagen3.src = "./img/fedora.jpg";
  imagen4.src = "./img/arch.png";
  link1.href = "https://wiki.ubuntu.com/SpanishDocumentation";
  link2.href = "https://www.linuxmint.com/documentation/user-guide/Cinnamon/spanish_mexico_17.0.pdf";
  link3.href = "https://docs.fedoraproject.org/es/docs/";
  link4.href = "https://wiki.archlinux.org/title/Main_page_(Espa%C3%B1ol)";
});

servidor.addEventListener("click", function() {
  imagen1.src = "./img/debian.jpeg";
  imagen2.src = "./img/centos.png";
  imagen3.src = "./img/suse.jpg";
  imagen4.src = "./img/raspb.png";
  link1.href = "https://www.debian.org/doc/index.es.html";
  link2.href = "https://docs.centos.org/en-US/docs/";
  link3.href = "https://documentation.suse.com/es-es/sles/15-SP1/html/SLES-all/index.html";
  link4.href = "https://www.raspberrypi.com/documentation/computers/getting-started.html";
});

movil.addEventListener("click", function() {
  imagen1.src = "./img/android.webp";
  imagen2.src = "./img/ubuntu-touch.webp";
  imagen3.src = "./img/sailfish.webp";
  imagen4.src = "./img/postmarket.webp";
  link1.href = "https://www.android.com/intl/es_es/";
  link2.href = "https://ubuntu-touch.io/es/";
  link3.href = "https://docs.sailfishos.org/";
  link4.href = "https://wiki.postmarketos.org/wiki/Contributing";
});