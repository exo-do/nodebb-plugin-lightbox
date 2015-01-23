//Recogemos todas las imagenes del post
  var AllImages = $('img', .topic);
//Filtramos las imagenes más pequeñas de su tamaño natural
  var TinyImages = AllImages.filter(
    function() {
      return ($(this).width() < $(this).naturalWidth() || $(this).height() < $(this).naturalHeight() )
    }
  ).eq(0);
//Remplazamos todas las imagenes por su lightbox correspondiente
  var regExImg = '<img class="(.*)" src="?(.*)" alt="?(.+)">';
  var ReplaceCode ='<a class="lightboxlink" href="$1" data-lightbox="$2"><img class="lightboximage" src="$1" alt="$2"></a>';
  TinyImages.replace(regExImg , ReplaceCode);
