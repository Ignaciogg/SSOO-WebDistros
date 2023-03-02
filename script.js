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