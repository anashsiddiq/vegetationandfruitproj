document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("load", function() {
        setTimeout(function() {
            const spinner = document.getElementById('spinner');
            const content = document.getElementById('content');
            spinner.style.display = 'none';
            content.style.display = 'block';
        }, 2000); // 2000 milliseconds delay
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-button');
    const cards = document.querySelectorAll('.filter');

    filterButtons.forEach(button => {
      button.addEventListener('click', function() {
        const filterValue = this.getAttribute('data-filter');

        filterButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');

        if (filterValue === 'all') {
          cards.forEach(card => {
            card.style.display = 'block';
            setTimeout(() => card.style.opacity = '1', 10);
          });
        } else {
          cards.forEach(card => {
            if (card.classList.contains(filterValue)) {
              card.style.display = 'block';
              setTimeout(() => card.style.opacity = '1', 10);
            } else {
              card.style.opacity = '0';
              setTimeout(() => card.style.display = 'none', 1000);
            }
          });
        }
      });
    });
  });


  
  document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.count');
    const speed = 200; // Adjust the speed here

    const animateCount = (counter) => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / speed;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(() => animateCount(counter), 1);
        } else {
            counter.innerText = target;
        }
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                animateCount(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 1.0
    });

    counters.forEach((counter) => {
        observer.observe(counter);
    });
});

document.addEventListener("DOMContentLoaded", function() {
  var swiper = new Swiper('.swiper-container', {
    loop: true,
    spaceBetween: 30,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      0: {
        slidesPerView: 1
      },
      600: {
        slidesPerView: 3
      },
      1000: {
        slidesPerView: 5
      }
    }
  });
});

window.addEventListener('scroll', function() {
  const backToTopButton = document.querySelector('.back-to-top');
  if (window.scrollY > 300) { // Show the button after scrolling down 300px
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});

document.querySelector('.back-to-top').addEventListener('click', function(event) {
  event.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});





