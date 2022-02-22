document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

        // Add a click event on each of them
        $navbarBurgers.forEach(el => {
            el.addEventListener('click', () => {

                // Get the target from the "data-target" attribute
                const target = el.dataset.target;
                const $target = document.getElementById(target);

                // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');

            });
        });
    }

});

const validateEmail = (email) => {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const validate = () => {
    const result = document.getElementById('email');
    const email = document.getElementById('email').value;
    const er_m = document.getElementById('help');

    if (validateEmail(email)) {
        result.classList.remove('is-danger');
        er_m.style.visibility = 'hidden';
    } else {
       result.classList.add('is-danger');
       er_m.style.visibility = 'visible';
    }
    return false;
}


const email_input = document.getElementById('email');
email_input.addEventListener('input', validate);

function move(card, index) {
  setTimeout(function () {
      card.classList.toggle('loaded');
  }, 100 * index);
};

function fade(card, index) {
  setTimeout(function () {
      card.querySelector('.content').classList.toggle('loaded');
  }, 100 * index);
}

function load() {
  // converting nodelist to array for some browsers
  const cards = [].slice.call(document.querySelectorAll('.card'));
  cards.forEach(move);
  setTimeout(function () {
      cards.forEach(fade);
  }, 100 * cards.length);
}

