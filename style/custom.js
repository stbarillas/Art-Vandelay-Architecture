// let tile = document.getElementById(tile);
// let modal = document.getElementById(modal);
// let close = document.getElementById(close_button);
let html = document.getElementById('html');
var myTileMapping = {
    tile1: 'modal1',
    close1: 'modal1'
};

var myModalMapping = {
    tile1: 'bayStreetSlides',
    arrow1a: 'bayStreetSlides',
    arrow1b: 'bayStreetSlides'
}

var slideIndex = 1;

function tile_click (tileId) {
    let modal = document.getElementById(myTileMapping[tileId]);
    modal.classList.add('is-active');
    html.classList.add('is-clipped')
    showDivs(slideIndex, tileId)

};

function tile_close(tileId) {
    let modal = document.getElementById(myTileMapping[tileId]);
    modal.classList.remove('is-active');
    html.classList.remove('is-clipped')
}

// var slideIndex = 1;
// showDivs(slideIndex);

function plusDivs(n, tileId) {
  showDivs(slideIndex += n, tileId);
}

function showDivs(n, tileId) {
  var i;
  var x = document.getElementsByClassName(myModalMapping[tileId]);
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}
