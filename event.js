var ekran = document.querySelector('.ekran');

document.querySelectorAll('td').forEach(function(raqam) {
  raqam.addEventListener('click', function(e) {
    var belgi = e.target.innerText;
    
    if (belgi == "C") {
      ekran.value = "";
    } else if (belgi == "=") {
      ekran.value = eval(ekran.value);
    } else {
      ekran.value += belgi;
    }
  });
});