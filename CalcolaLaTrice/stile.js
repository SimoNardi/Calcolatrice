var stringa = '';

function risoluzione(n) {
  if (n == '=') {
    var risultato = eval(stringa);
    document.getElementById('schermo').innerHTML = risultato;
    stringa = '';
  } else if (n == 'canc') {
    stringa = '';
    document.getElementById('schermo').innerHTML = '';
  } else {
    stringa += n;
    document.getElementById('schermo').innerHTML = document.getElementById('schermo').innerHTML + n;
  }
}
