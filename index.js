//codes to change hero images manually
var sildeIndex = 1;
showDiv(sildeIndex);
function changeDiv(n){
    showDiv(sildeIndex += n);
}
function showDiv(n){
    var i;
    var x = document.getElementsByClassName("mySlides");
    if( n > x.length){sildeIndex = 1}
    if( n < 1){sildeIndex = x.length}
    for( i = 0; i < x.length; i++){
        x[i].style.display = 'none';
    }
    x[sildeIndex-1].style.display = 'block';
}


