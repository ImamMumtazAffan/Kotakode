var nav = document.querySelector('nav');
var whitemode = new Image(225, 45);
	whitemode.src = 'assets/img/whitemode.png';
	white = document.getElementById("gambarsatu");
	
var gambarsatu = document.getElementById('gambarsatu');
var gambardua = document.getElementById('gambardua');

var darkmode = new Image(225, 45);
	darkmode.src = 'assets/img/darkmode.png';
	dark = document.getElementById("gambardua");
	

	
      window.addEventListener('scroll', function () {
        if (window.pageYOffset > 125) {
          nav.classList.add('ubah', 'shadow', 'navbar-light');
          nav.classList.remove('navbar-dark');
          judul.classList.add('change');
          profil.classList.add('black');
          kotakode.classList.add('black');
          fitur.classList.add('black');
          evet.classList.add('black');
        } else {
          nav.classList.remove('ubah', 'shadow');
          nav.classList.add('navbar-dark', 'waktu');
          judul.classList.remove('change');
          profil.classList.remove('black');
          kotakode.classList.remove('black');
          fitur.classList.remove('black');
          evet.classList.remove('black');
        }
      });
 
