window.onload = function() {
    let button = document.getElementById('button');
    let modal = document.getElementById('modal');
    let close = document.getElementById('close');

    button.onclick = function () {
        modal.style.display = 'block';
    }

    close.onclick = function () {
        modal.style.display = 'none';
    }
}