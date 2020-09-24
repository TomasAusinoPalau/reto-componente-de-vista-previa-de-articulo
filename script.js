
var boton = document.getElementById('share-button')
var share = document.getElementById('card-footer-main')
var navShare = document.getElementById('card-footer-nav-share-container')
boton.addEventListener('click', compartir)


function compartir() {
  share.classList.add("hide")
  navShare.classList.add("active")
}

