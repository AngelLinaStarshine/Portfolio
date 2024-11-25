gsap.from(".imgmyself", {
    duration: 3,
    x: window.innerWidth - 400, 
    opacity: 0,  
    ease: "power2.inOut"
});

gsap.from(".content", {
    delay: 1,
    duration: 2,
    x: -600, 
    opacity: 0,      
    ease: "power1.inOut"
});

gsap.from(".header", {y: 20, ease: "elastic", duration: 3})
gsap.from(".item", {opacity:0, duration: 3})
gsap.from(".dropdown", {opacity:0, duration: 3})

gsap.from(".one", {
    duration: 2,
    x:  window.innerWidth -600, 
    opacity: 0,      
    ease: "power1.inOut",
    //repeat: -1,
    //delay: 5
});
gsap.from(".two", {
    delay: 1,
    duration: 2,
    x: -300, 
    opacity: 0,      
    ease: "power1.inOut"
});
gsap.from(".three", {
    delay: 1,
    duration: 2,
    x:  window.innerWidth -600, 
    opacity: 0,      
    ease: "power1.inOut"
});
gsap.from(".four", {
    delay: 1,
    duration: 2,
    x: -300, 
    opacity: 0,      
    ease: "power1.inOut"
});
gsap.from(".five", {
    delay: 1,
    duration: 2,
    x:  window.innerWidth -600, 
    opacity: 0,      
    ease: "power1.inOut"
});
gsap.from(".six", {
    delay: 1,
    duration: 2,
    x: -300, 
    opacity: 0,      
    ease: "power1.inOut"
});
gsap.from(".seven", {
    delay: 1,
    duration: 2,
    x:  window.innerWidth -600, 
    opacity: 0,      
    ease: "power1.inOut"
});

document.addEventListener("DOMContentLoaded", () => {
    const quote = document.querySelector(".quote");
    const container = document.querySelector(".quote-container");

    const quoteWidth = quote.offsetWidth;
    const containerWidth = container.offsetWidth;

    gsap.set(quote, { x: containerWidth });

    gsap.to(quote, {
        duration: (containerWidth + quoteWidth) / 100,
        x: -quoteWidth,
        ease: "none",
        repeat: -1,
        onRepeat: () => {
            gsap.set(quote, { x: containerWidth });
        }
    });
});

const words = ["data analyst", "web developer", "security analyst"];
let wordIndex = 0;
let typingElement = document.querySelector(".typing");

function typeWord() {
    let word = words[wordIndex];
    typingElement.textContent = "";
    let letterIndex = 0;

    let typingEffect = setInterval(() => {
        if (letterIndex < word.length) {
            typingElement.textContent += word[letterIndex];
            letterIndex++;
        } else {
            clearInterval(typingEffect); 
            setTimeout(deleteWord, 1500);
        }
    }, 100);
}

function deleteWord() {
    let word = words[wordIndex];
    let letterIndex = word.length;

    let deletingEffect = setInterval(() => {
        if (letterIndex > 0) {
            typingElement.textContent = word.substring(0, letterIndex - 1);
            letterIndex--;
        } else {
            clearInterval(deletingEffect);
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(typeWord, 500);
        }
    }, 50);
}

typeWord();

const aboutParagraphs = document.querySelectorAll('.about');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
}, {
    threshold: 0.1
});

aboutParagraphs.forEach(paragraph => {
    observer.observe(paragraph);
});

const scrollButton = document.querySelector('.scroll-btn');

let timeout;
window.addEventListener('scroll', () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        const contentSection = document.querySelector('.content'); 
        const contentPosition = contentSection.getBoundingClientRect().top + window.scrollY;
        const scrollPosition = window.scrollY + window.innerHeight;

        if (scrollPosition > contentPosition + 300) { 
            scrollButton.classList.add('visible');
        } else {
            scrollButton.classList.remove('visible');
        }
    }, 100);
});

gsap.to(".about-heading", {
    text: "About",
    duration: 3,
    repeat: -1,
    repeatDelay: 0.3,
    ease: "power1.in",
});

gsap.to(".skills-heading", {
    text: "Skills",
    duration: 3,
    repeat: -1,
    repeatDelay: 0.3,
    ease: "power1.in",
});

gsap.to(".contact-heading", {
    text: "Contact me",
    duration: 3,
    repeat: -1,
    repeatDelay: 0.3,
    ease: "power1.in",
});

gsap.from(".forma", {
    duration: 2,
    x: window.innerWidth - 400, 
    opacity: 0,  
    ease: "power2.inOut"
});

gsap.from(".image", {
    duration: 2,
    x: -600, 
    opacity: 0,      
    ease: "power1.inOut"
});


