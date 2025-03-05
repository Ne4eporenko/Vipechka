
const header = document.querySelector('header');
    const logo_img = document.querySelector('.logo img');
    const menu = document.querySelectorAll('.menu li a');


    const addColor = (new_color) => {
      for (let i = 0; i < menu.length; i++) {
        if (new_color) {
          menu[i].className = 'collor_broun';
        } else {
          menu[i].className = '';
        }

      }
    }

    window.addEventListener('scroll', _ => {
      if (window.scrollY >= 54) {
        header.classList.add('header_scroll');
        logo_img.src = "./img/logo_white.webp";
        addColor(1)

      } else {
        header.classList.remove('header_scroll');
        logo_img.src = "./img/logo_black.webp";
        addColor(0);

      };

    });