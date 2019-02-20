let tile = document.getElementById('tile1');
let modal = document.getElementById('modal');
let close = document.getElementById('close');
let html = document.getElementById('html');

tile.onclick = function () {
    modal.classList.add('is-active');
    html.classList.add('is-clipped')

};

close.onclick = function () {
    modal.classList.remove('is-active');
    html.classList.remove('is-clipped')
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("bayStreetSlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}
