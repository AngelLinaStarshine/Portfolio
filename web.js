gsap.from(".header", {y: 20, ease: "elastic", duration: 3})
gsap.from(".item", {opacity:0, duration: 3})
gsap.from(".dropdown", {opacity:0, duration: 3})

let text = "Web Development";
let i = 0;
let speed = 200;

function type() {
    if (i < text.length) {
        document.querySelector("#par").textContent += text.charAt(i); 
        i++;
        setTimeout(type, speed); 
    } else {
        setTimeout(function() {
            i = 0;
            document.querySelector("#par").textContent = ''; 
            type(); 
        }, 1000);
    }
}

type();

particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 380,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#DAA520"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#DAA520"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 80
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#DAA520",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });

  
function toggleMenu() {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('active');  
}

const dropdown = document.querySelector('.dropdown');
dropdown.addEventListener('click', () => {
    dropdown.classList.toggle('active');
});

function toggleMenu() {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('active');
}
