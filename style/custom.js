// let tile = document.getElementById(tile);
// let modal = document.getElementById(modal);
// let close = document.getElementById(close_button);
let html = document.getElementById('html');
var myTileMapping = {
    tile1: 'modal1',
    close1: 'modal1',
    tile2: 'modal2',
    close2: 'modal2',
    tile3: 'modal3',
    close3: 'modal3',
    tile4: 'modal4',
    close4: 'modal4',
    tile5: 'modal5',
    close5: 'modal5',
    tile6: 'modal6',
    close6: 'modal6',
    tile7: 'modal7',
    close7: 'modal7',
    tile8: 'modal8',
    close8: 'modal8',
    tile9: 'modal9',
    close9: 'modal9',
    tile10: 'modal10',
    close10: 'modal10',
};

var myModalMapping = {
    tile1: 'bayStreetSlides',
    arrow1a: 'bayStreetSlides',
    arrow1b: 'bayStreetSlides',
    tile2: 'coleSlides',
    arrow2a: 'coleSlides',
    arrow2b: 'coleSlides',
    tile3: 'doloresSlides',
    arrow3a: 'doloresSlides',
    arrow3b: 'doloresSlides',
    tile4: 'eurekaSlides',
    arrow4a: 'eurekaSlides',
    arrow4b: 'eurekaSlides',
    tile5: 'noeSlides',
    arrow5a: 'noeSlides',
    arrow5b: 'noeSlides',
    tile6: 'texasSlides',
    arrow6a: 'texasSlides',
    arrow6b: 'texasSlides',
    tile7: 'greenwhichSlides',
    arrow7a: 'greenwhichSlides',
    arrow7b: 'greenwhichSlides',
    tile8: 'marketStreetSlides',
    arrow8a: 'marketStreetSlides',
    arrow8b: 'marketStreetSlides',
    tile9: 'willowGlenSlides',
    arrow9a: 'willowGlenSlides',
    arrow9b: 'willowGlenSlides',
    tile10: 'bayStreetSlides',
    arrow10a: 'bayStreetSlides',
    arrow10b: 'bayStreetSlides',
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
